# @param {String} s
# @param {Integer} k
# @return {Integer}
def max_vowels(s, k)

    vowels = "aeiou"
    string = s.chars
    sum = string[0...k].count { |c| vowels.include?(c) }
    max = sum

    (k...string.length).each do |i|
        sum += 1 if vowels.include?(string[i])
        sum -= 1 if vowels.include?(string[i - k])
        max = [max, sum].max
    end
    max
end