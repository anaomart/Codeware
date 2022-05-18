function incrementer(nums) {
    for (let i = 0; i < nums.length; i++) {
        let result = nums[i] + i + 1;
        result;
        if (result.toString().length >= 2) {
            nums[i] = +result.toString()[result.toString().length - 1];
        } else {
            nums[i] = result;
        }
    }
    return nums;
}

let test = [4, 6, 7, 1, 3];
console.log(incrementer(test));