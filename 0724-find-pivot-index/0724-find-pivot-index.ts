function pivotIndex(nums: number[]): number {
    let right = nums.reduce(function (acc, cv) { return acc + cv; }, 0);
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        right -= nums[i]
        if (right == left) {
            return i
        }
        left += nums[i]
    }
    return -1
};