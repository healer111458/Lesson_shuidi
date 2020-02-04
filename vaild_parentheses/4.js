function longestValidParentheses(s) {
  // 时间复杂度O(n)
  var max = 0; //最大长度
  if(s.length == 0 || s.length == 1 ) return max;
  //下标减法就是长度
  var stack = [-1]; //栈来服务于有效括号的匹配  刚开始的栈的放入-1
  for(var i = 0; i < s.length; i++) { //下标法  只需要一次遍历  时间复杂度O(n)
    if(s[i] == '(') {  //左括号  下标入栈
      stack.push(i);  //i为元素下标
    }else {
      stack.pop();  //右括号  下标出栈
      if(stack.length < 1) {
        stack.push(i); //栈顶元素取消  前面的有效匹配结束  重新开始
        //需要减去当前下标（-1） 所以push当前的下标 
      }else {
        max = Math.max(max,i - stack[stack.length - 1])  //有效的括号匹配

      }
    }
  }
  return max;
}
console.log(longestValidParentheses(')()())'));