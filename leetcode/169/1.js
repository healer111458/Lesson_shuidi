// 169 多数元素
// 大小为n的数组,找出其中的多数元素（重复出现的数据）
// 出现次数大于n/2 majority  非空并存在多数元素

// [3,2,3] 3 一半数据时majority
// 选举，投票  多过半数通过
// 不为空  总存在多数元素
// [1,2,3]  []
// [1,2,2,3,3,4]  []
// n/2
// (1) for josn+max
// 某个数的出现的次数，算出来它的最大的次数是哪个，O(n)空间复杂度和时间复杂度

// 选举法
// n/2
// [2,2,1,1,1,2,2]
var majorityElenment = function(nums) {
    let count = 0, //次数的计数
      majority = nums[0]; //假设第一个数是majoritty
    //算法回归运算
    for(let i = 0; i <nums.length; i++) {
        //majority -> count
        // 如果再次出现majoirty -> count++
        // 不是majority -> count--
        // count < 0时 这个数不是我们要的
        // 如果是majoirty一定有一半来够count--
        //majority只存在一个
        //投票 少数派投出去 
        if(count == 0){  //少数派
            majority = nums[i];  //更换被选举者
        }
        if(nums[i] === majority) {
            count++;
        } else {
            count--;
        }

    } 
    return majority;
}
console.log(majorityElenment([6,2,2]))