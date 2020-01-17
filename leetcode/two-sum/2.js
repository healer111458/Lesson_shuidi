//是否能减少一层内层循环
//只用一层循环
// for x
//   y : x+y = target
//  target - x = y  并获得y的下标
const twoSum = (nums,target) => {
  // let map = {};  //对象字面量
  let map = new Map();
  let res = []; //存下标的数组
  // nums.forEach((e,i) => map[e] = i);  //获得map
  nums.forEach((e,i) => map.set(e,i));
   console.log(map);
  for(let i = 0;i<nums.length;i++){
    // letj  = map[target-nums[i]];  //hash
    let j = map.get(target-nums[i]);
    //  console.log(target-nums[i]);
    //  console.log(target-nums[j]);
    if(j &&j !== i){
      res = [i, j];
      break;
    }
  }
  return res;
}
console.log(twoSum([2,7,11,15],9))