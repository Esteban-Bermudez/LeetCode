function findMaxAverage(nums: number[], k: number): number {

    let sum: number = 0
    let max: number = -Infinity

    for (let i: number = 0; i < nums.length; i++) {

        // add the current value
        sum += nums[i]

        // we have created a sliding window of k size
        if (i+1 >= k) {
            // remove the last trailing value if we are over size k
            if (i >= k) {
                sum -= nums[i - k]
            }
            max = Math.max(sum / k, max)
        }
    }
    return max
};