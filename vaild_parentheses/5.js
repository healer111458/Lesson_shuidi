function longestValidParentheses(s) {
  if(!s || s.length < 1 ) return 0; //为空或为1
  var left = right = max = 0; //使用两个变量代替模拟栈的定义
  //left 是当前还在匹配的左括号的数量，right是当前右括号还在匹配的数量
  for (var i = 0; i < s.length; i++) {   //时间复杂度O(n)
    if(s[i] == '(') {
      left++; //入栈  有多少个入栈
    }else{ 
      right++;  //右边出栈
    }
    //()
    if(left == right) {
      max = Math.max(max,2*right);  //2*right == max
    }else if (left > right) { //后面括号无效
      left = right = 0; //重新开始

    }
  }
  left = right = 0;
  for (var i = s.length-1;i>= 0; i--) { //逆序遍历
    //stack来概念化匹配
    if(s[i] == '(') {
      left++;
    }else {
      right++;
    }
    if(left == right) {
      max = Math.max(max,2*left);
    }else if(left > right) {
      left = right = 0;    
    }
  }
  return max;
}
// console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses('((())(())'));