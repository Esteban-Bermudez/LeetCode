# @param {Integer[]} nums
# @param {Integer} k
# @return {Float}
def find_max_average(nums, k)
    sum = nums[0..k-1].sum
    max = sum.to_f / k

    (k...nums.length).each do |i|
        sum += nums[i]
            if i >= k
                sum -= nums[i - k]
            end
        max = [max, (sum.to_f/k)].max
        end
    max
end