var s1 = 'get-element-by-id';

//编写一个函数  将字符串'get-element-by-id'变成'getElementById'  codewars
var f = function(s) {
  //replace     /-[a-w]/ ''
  //正则：匹配的规则
  return s.replace(/-\w/g,function(x) {
    // console.log(x);
    // '-' 删除 把第二个字符变大写
    // return x.charAt(1).toUpperCase();
    // return x[1].toUpperCase();
    return x.slice(1).toUpperCase();
  });
}
console.log(f(s1));