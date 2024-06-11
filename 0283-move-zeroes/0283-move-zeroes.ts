/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

    let position = 0
    let i = 0

    while (i < nums.length) {
        if (nums[i] != 0 && nums[position] == 0) {
            let buf = nums[i]
            nums[i] = nums[position]
            nums[position] = buf
            position++
        } else if (nums[position] != 0) {
            position++
        }
        i++
    }
}