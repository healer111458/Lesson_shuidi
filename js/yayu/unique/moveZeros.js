var moveZeros = function(nums){
    var index = 0;
    for(var i =0 ; i<nums.length;i++){
        var num = nums[i];
        if(nums != 0){
            nums[index++] = num;
        }
    }
    for(var i = index ;i <nums.length;i++){
        nums[index++]=0;
    }
    return nums;
}
var num = [0,2,3,4,0];
console.log(moveZeros(nums));
