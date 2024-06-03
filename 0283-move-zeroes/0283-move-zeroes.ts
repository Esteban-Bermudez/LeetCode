/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let pointer: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 0; j < nums.length; j++) {
            if (nums[i] == 0 &&  j > i && nums[j] != 0) {
                let value : number = nums[j]
                nums[j] = nums[i]
                nums[i] = value
            }
        }
    }

};