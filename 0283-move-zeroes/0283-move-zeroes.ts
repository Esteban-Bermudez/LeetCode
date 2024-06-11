/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

    let position = 0
    let i = 0

    while (i < nums.length) {
        if (nums[i] != 0 && nums[position] == 0) {
            //swap
            let buf = nums[i]
            nums[i] = nums[position]
            nums[position] = buf
            position++
        }
        i++
        console.log(nums)
    }
}