const phoneReg = /^1[35789]\d{9}$/;// 匹配规则定义=>正则表达式
// \d 代表[0-9]的数字  ^正则表达式中第一个字符开始校验 $校验最后一位字符
// console.log(phoneReg.test('13999999999'));
// console.log(typeof phoneReg);
console.log(/\d{3}-\d{5,8}/,test('010-123456'));