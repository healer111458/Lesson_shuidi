# ImmutableJS 入門教學

![ImmutableJS](./images/immutable.png "ImmutableJS")

## 前言
一般來說在 JavaScript 中有兩種資料類型：Primitive（String、Number、Boolean、null、undefinded）和 Object（Reference）。在 JavaScript 中物件的操作比起 Java 容易很多，但也因為相對彈性不嚴謹，所以產生了一些問題。在 JavaScript 中的 Object（物件）資料是 Mutable（可以變的），由於是使用 Reference 的方式，所以當修改到複製的值也會修改到原始值。例如下面的 `map2` 值是指到 `map1`，所以當 `map1` 值一改，`map2` 的值也會受影響。 

```javascript
var map1 = { a: 1 }; 
var map2 = map1; 
map2.a = 2
```

通常一般作法是使用 `deepCopy` 來避免修改，但這樣作法會產生較多的資源浪費。為了很好的解決這個問題，我們可以使用 `Immutable Data`，所謂的 Immutable Data 就是一旦建立，就不能再被修改的數據資料。

為了解決這個問題，在 2013 年時 Facebook 工程師 Lee Byron 打造了 [ImmutableJS](https://facebook.github.io/immutable-js/)，但並沒有被預設放到 React 工具包中（雖然有提供簡化的 Helper），但 `ImmutableJS` 的出現確實解決了 `React` 甚至 `Redux` 所遇到的一些問題。

以下範例即是引入了 `ImmutableJS` 的效果，讀者可以發現，雖然我們操作了 `map1` 的值，但會發現原本的 `map1` 並未受到影響（因為任何修改都不會影響到原始資料），雖然使用 `deepCopy` 也可以模擬類似的效果但會浪費過多的計算資源和記憶體，`ImmutableJS` 則可以容易地共享沒有被修該到的資料（例如下面的資料 `b` 即為 `map1` 所 `map2` 共享），因而有更好的效能表現。 

```javascript
import Immutable from 'immutable';

var map1 = Immutable.Map({ a: 1, b: 3 });
var map2 = map1.set('a', 2);

map1.get('a'); // 1
map2.get('a'); // 2
```

## ImmutableJS 特性介紹
ImmutableJS 提供了 7 種不可修改的資料類型：`List`、`Map`、`Stack`、`OrderedMap`、`Set`、`OrderedSet`、`Record`。若是對 Immutable 物件操作都會回傳一個新值。其中比較常用的有 `List`、`Map` 和 `Set`：

1. Map：類似於 key/value 的 object，在 ES6 也有原生 `Map` 對應

  ```javascript
  const Map= Immutable.Map;
  
  // 1. Map 大小
  const map1 = Map({ a: 1 });
  map1.size
  // => 1

  // 2. 新增或取代 Map 元素
  // set(key: K, value: V)
  const map2 = map1.set('a', 7);
  // => Map { "a": 7 }

  // 3. 刪除元素
  // delete(key: K)
  const map3 = map1.delete('a');
  // => Map {}

  // 4. 清除 Map 內容
  const map4 = map1.clear();
  // => Map {}

  // 5. 更新 Map 元素
  // update(updater: (value: Map<K, V>) => Map<K, V>)
  // update(key: K, updater: (value: V) => V)
  // update(key: K, notSetValue: V, updater: (value: V) => V)
  const map5 = map1.update('a', () => (7))
  // => Map { "a": 7 }

  // 6. 合併 Map 
  const map6 = Map({ b: 3 });
  map1.merge(map6);
  // => Map { "a": 1, "b": 3 }
  ```

2. List：有序且可以重複值，對應於一般的 Array

  ```javascript
  const List= Immutable.List;
  
  // 1. 取得 List 長度
  const arr1 = List([1, 2, 3]);
  arr1.size
  // => 3

  // 2. 新增或取代 List 元素內容
  // set(index: number, value: T)
  // 將 index 位置的元素替換
  const arr2 = arr1.set(-1, 7);
  // => [1, 2, 7]
  const arr3 = arr1.set(4, 0);
  // => [1, 2, 3, undefined, 0]

  // 3. 刪除 List 元素
  // delete(index: number)
  // 刪除 index 位置的元素
  const arr4 = arr1.delete(1);
  // => [1, 3]

  // 4. 插入元素到 List
  // insert(index: number, value: T)
  // 在 index 位置插入 value
  const arr5 = arr1.insert(1, 2);
  // => [1, 2, 2, 3]

  // 5. 清空 List
  // clear()
  const arr6 = arr1.clear();
  // => []
  ```

3. Set：沒有順序且不能重複的列表

  ```javascript
  const Set= Immutable.Set;
  
  // 1. 建立 Set
  const set1 = Set([1, 2, 3]);
  // => Set { 1, 2, 3 }

  // 2. 新增元素
  const set2 = set1.add(1).add(5);
  // => Set { 1, 2, 3, 5 } 
  // 由於 Set 為不能重複集合，故 1 只能出現一次

  // 3. 刪除元素
  const set3 = set1.delete(3);
  // => Set { 1, 2 }

  // 4. 取聯集
  const set4 = Set([2, 3, 4, 5, 6]);
  set1.union(set4);
  // => Set { 1, 2, 3, 4, 5, 6 }

  // 5. 取交集
  set1.intersect(set4);
  // => Set { 2, 3 }

  // 6. 取差集
  set1.subtract(set4);
  // => Set { 1 }
  ```

## ImmutableJS 的特性整理
1. Persistent Data Structure
  在 `ImmutableJS` 的世界裡，只要資料一被創建，就不能修改，維持 `Immutable`。就不會發生下列的狀況：

  ```javascript
  var obj = {
   a: 1
  };

  funcationA(obj);
  console.log(obj.a) // 不確定结果為多少？
  ```

  使用 `ImmutableJS` 就沒有這個問題：

  ```javascript
  // 有些開發者在使用時會在 ``Immutable` 變數前加 `$` 以示區隔。

  const $obj = fromJS({
   a: 1
  });

  funcationA($obj);
  console.log($obj.get('a')) // 1
  ```

2. Structural Sharing
  為了維持資料的不可變，又要避免像 `deepCopy` 一樣複製所有的節點資料而造成的資源損耗，在 `ImmutableJS` 使用的是 Structural Sharing 特性，亦即如果物件樹中一個節點發生變化的話，只會修改這個節點和和受它影響的父節點，其他節點則共享。

  ```javascript
  const obj = {
    count: 1,
    list: [1, 2, 3, 4, 5]
  }
  var map1 = Immutable.fromJS(obj);
  var map2 = map1.set('count', 4);

  console.log(map1.list === map2.list); // true
  ```

3. Support Lazy Operation

  ```javascript
  Immutable.Range(1, Infinity)
  .map(n => -n)
  // Error: Cannot perform this action with an infinite size.

  Immutable.Range(1, Infinity)
  .map(n => -n)
  .take(2)
  .reduce((r, n) => r + n, 0); 
  // -3
  ```

4. 豐富的 API 並提供快速轉換原生 JavaScript 的方式
  在 ImmutableJS 中可以使用 `fromJS()`、`toJS()` 進行 JavaScript 和 ImmutableJS 之間的轉換。但由於在轉換之間會非常耗費資源，所以若是你決定引入 `ImmutableJS` 的話請盡量維持資料處在 `Immutable` 的狀態。

5. 支持 Functional Programming
  `Immutable` 本身就是 Functional Programming（函數式程式設計）的概念，所以在 `ImmutableJS` 中可以使用許多 Functional Programming 的方法，例如：`map`、`filter`、`groupBy`、`reduce`、`find`、`findIndex` 等。

6. 容易實現 Redo/Undo 歷史回顧

## React 效能優化
`ImmutableJS` 除了可以和 `Flux/Redux` 整合外，也可以用於基本 react 效能優化。以下是一般使用效能優化的簡單方式：

傳統 JavaScript 比較方式，若資料型態為 Primitive 就不會有問題：

```javascript
// 在 shouldComponentUpdate 比較接下來的 props 是否一致，若相同則不重新渲染，提昇效能
shouldComponentUpdate (nextProps) {
    return this.props.value !== nextProps.value;
}
```

但當比較的是物件的話就會出現問題：

```javascript
// 假設 this.props.value 為 { foo: 'app' }
// 假設 nextProps.value 為 { foo: 'app' },
// 雖然兩者值是一樣，但由於 reference 位置不同，所以視為不同。但由於值一樣應該要避免重複渲染
this.props.value !== nextProps.value; // true
```

使用 `ImmutableJS`：

```javascript
var SomeRecord = Immutable.Record({ foo: null });
var x = new SomeRecord({ foo: 'app'  });
var y = x.set('foo', 'azz');
x === y; // false
```

在 ES6 中可以使用官方文件上的 `PureRenderMixin` 進行比較，可以讓程式碼更簡潔：

```javascript
import PureRenderMixin from 'react-addons-pure-render-mixin';
class FooComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <div className={this.props.className}>foo</div>;
  }
}
```

## 總結
雖然 `ImmutableJS` 的引入可以帶來許多好處和效能的提升但由於引入整體檔案較大且較具侵入性，在引入之前可以自行評估看看是否合適於目前的專案。接下來我們將在後面的章節講解如何將 `ImmutableJS` 和 `Redux` 整合應用到實務上的範例。 

## 延伸閱讀
1. [官方網站](https://facebook.github.io/immutable-js/)
2. [Immutable.js初识](http://www.w3cplus.com/javascript/immutable-js.html)
3. [Immutable 详解及 React 中实践](https://github.com/camsong/blog/issues/3)
4. [为什么需要Immutable.js](http://zhenhua-lee.github.io/react/Immutable.html)
5. [facebook immutable.js 意义何在，使用场景？](https://www.zhihu.com/question/28016223)
6. [React 巢狀 Component 效能優化](https://blog.wuct.me/react-%E5%B7%A2%E7%8B%80-component-%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96-b01d8a0d3eff#.3kf4h1xq1)
7. [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html)
8. [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)
9. [Immutable Data Structures and JavaScript](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)

（image via [risingstack](https://risingstack-blog.s3.amazonaws.com/2016/Jan/immutable_logo_for_react_js_best_practices-1453211749818.png)）

## :door: 任意門
| [回首頁](https://github.com/kdchang/reactjs101) | [上一章：React Router 入門實戰教學](https://github.com/kdchang/reactjs101/blob/master/Ch05/react-router-introduction.md) | [下一章：Flux 基礎概念與實戰入門](https://github.com/kdchang/reactjs101/blob/master/Ch07/react-flux-introduction.md) |

| [勘誤、提問或許願](https://github.com/kdchang/reactjs101/issues) |
