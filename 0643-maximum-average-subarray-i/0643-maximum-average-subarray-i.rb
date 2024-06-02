# @param {Integer[]} nums
# @param {Integer} k
# @return {Float}
def find_max_average(nums, k)
    sum = 0
    max = -Float::INFINITY

    nums.each_with_index do |num, i|
        sum += num
        if i+1 >= k
            if i >= k
                sum -= nums[i - k]
            end
            max = [max, (sum.to_f/k).to_f].max
        end
    end
    max
end