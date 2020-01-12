var removeDuplicates = function (nums) {
  const size = nums.length;  //原数组的长度
  let slowP = 0;  //慢指针
  for (let fastP = 0; fastP < size; fastP++) {  //快指针
    //  console.log(nums[fastP]);
    if (nums[fastP] !== nums[slowP]) {  //从同一个位置0开始 
      slowP++; //开始不一样
      //slowP移动后，新的位置要赋予新的数， cur 指向的数
      nums[slowP] = nums[fastP];  //设置每个位置，不重复的数 新的位置
    }
  }
  return slowP + 1;  //slowP停下来的地方
}
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));