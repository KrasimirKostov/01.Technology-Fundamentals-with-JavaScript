function solve(nums) {
    
    let condensed = [];
    let sum = 0;
    while (nums.length > 1) {
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = nums[i] + nums[i + 1];
            nums[i] = condensed[i];
        }
        nums.length--;
    }
    console.log(nums[0]);
}
solve([5,0,4,1,2]);