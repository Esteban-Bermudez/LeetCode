function pivotIndex(nums: number[]): number {
    let pivot = -1

    let right = nums.reduce(function (acc, cv) { return acc + cv; }, 0);
    let left = 0

    right -= nums[0]
    if (right == 0) {
        return 0
    }

    for (let i = 1; i < nums.length; i++) {
        left += nums[i-1]
        right -= nums[i]
        if (right == left) {
            return i
        }
    }
    return pivot
};