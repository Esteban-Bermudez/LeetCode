/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i : number = 0
    let position : number = 0
    while (i < nums.length) {
        if (nums[i] != 0){
            let buf: number = nums[position]
            nums[position] = nums[i]
            nums[i] = buf
            position++
        }
        i++
    }
};