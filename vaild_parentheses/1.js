/**
 *
 * @param {string} s
 * @return {boolean} 
 */
var isValid = function(s) {
  if(!s || s.length <1 ) return true;  //字符串为空
  var n = s.length;  //字符串长度
  const stack = []; //数组栈只在数组的尾部插入或删除元素
  //数组的尾部进行插入push  数组的头部移除  shift() FIFO(先进先出)
  for(var i = 0; i< n;i++){ //时间复杂度O(n)
    var c = s[i];
    // console.log(c);
    //()
    if(c == '(') {  //如果是左括号  需要判定右括号是否存在
      stack.push(c);  //入栈  数组的最后一个元素成为栈顶元素
    }else{
      // ) 将栈里的元素抵消一个
      if(stack.length < 1) {  //第一个就是右括号
        return false  //无效括号
      }
      stack.pop(); //出栈 
    }
  }
  return stack.length >0? false:true;
}
console.log(isValid('()')); //true