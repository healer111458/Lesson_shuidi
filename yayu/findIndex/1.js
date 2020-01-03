//es6支持
//能否手写findIndex
function isBigEnough(element) {
    console.log(element);
    return element >=15;
}
console.log([12,5,8,130,44].findIndex(isBigEnough));   //找到符合条件的下标
