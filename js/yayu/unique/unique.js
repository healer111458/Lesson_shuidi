// // 数组去重
// /**
//  * @param {Array} arr
//  * @return {Array}
//  */
// //function unique(arr){  es5的版本
// //function 关键字没有，
// // es6的键头函数()=> 右边是函数体{参数部分}
// let fn;

// console.log(typeof fn);//undefined 未定义
// fn = null;
// console.log(typeof fn);//null
// fn = () => { };
// console.log(typeof fn);//function
// const unique = (arr) => {
//     let res = [];//数组
//    // let isIn;
//     for(var i=0;i<arr.length; i++)
//     //如果在res数组中就不添加
//     //否则 push res 
//     for(var j=0;j< res.length;j++){
//       if(arr[i] === res[j] ){
//          break; 
//        //  isIn = true; 
//       }
       
      
//     }
//     //没有出现
//     if(j === res.length){
//         res.push(arr[i]);

//     }
// }
//         //提前终止掉
        

//     return res;

// }
// var arr = ['1', 2, 3, 2, 4, 1];
// console.log(unique(arr));
// console.log(typeof unique == 'function' && unique(arr))//做变量名 
// 数组去重
/**
 * 
 * @param {Array} arr
 * @return {Array} 
 */
// function unique(arr) {  es5
// function 关键字没有, 
// es6 键头函数 () => { }
let fn;
console.log(typeof fn); // undefined 未定义
fn = null;
console.log(typeof fn); // null
fn = () => {};
console.log(typeof fn); // function
const unique = (arr) => {

//   for(var i = 0; i < arr.length; i++) {
//     // 如果在res 数组中 就不加入
//     // arr[i] 
//     // let isIn = false;
//     for (var j = 0; j < res.length; j++) {
//       if (arr[i] === res[j] ) {
//         // isIn = true;
//         break;
//       }
//     }
//     //没有出现？ 
  let res = []; //数组
  for(var i = 0;arrLen = arr.length; i < arrLen){
      var current = arr[i];// 基地 局部变量 缓存值
      if(res.indexOf(arr[i]) == -1 ){
          
        res.push(current);



}
}
//     if (j === res.length) {
//       res.push(arr[i]);
//     }
//     // 否则push res
//   }
  return res;
}

var arr = ['1', 2, 3, 2, 4, 1];
console.log(unique(arr));
console.log(typeof unique == 'function' && unique(arr))