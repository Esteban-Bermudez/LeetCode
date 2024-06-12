function maxVowels(s: string, k: number): number {
    let vowels = "aeiou"
    let count = 0
    let max = -Infinity

    for (let i = 0; i < s.length; i++){
        if (i >= k){
            //subtract previous
            if (vowels.includes(s[i - k])){
                count--
            }
        }
        if (vowels.includes(s[i])){
            count++
        }

        max = Math.max(count,max)
    }

    return max 
};