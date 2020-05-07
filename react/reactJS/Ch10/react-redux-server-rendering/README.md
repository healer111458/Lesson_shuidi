# Redux Server 端 Rendering

要把資料從伺服器端傳遞到客戶端，我們需要：

1. 對每個請求建立一個全新的 Redux store 實體
2. 選擇性的 dispatch 一些 action
3. 把 state 從 store 取出來
4. 把 state 一起傳到客戶端

# 延伸閱讀
1. [Immutable.js usage - Reducers & Server Side Rendering](https://github.com/reactjs/redux/issues/1555)
2. [Redux Server Rendering](http://redux.js.org/docs/recipes/ServerRendering.html)
3. [React Router Tutorial](https://github.com/reactjs/react-router-tutorial)