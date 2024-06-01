# @param {String} s
# @param {Integer} k
# @return {Integer}
def max_vowels(s, k)

    vowels = "aeiou"
    string = s.chars
    sum = 0
    max = -Float::INFINITY

    string.each_with_index do |c, i|
        sum+= 1 if vowels.match?(c)
        if i + 1 >= k 
            if i >= k
                sum -= 1 if vowels.match?(string[i - k])
            end
            max = [sum,max].max
            return max if max == k
        end     
    end
    max
end