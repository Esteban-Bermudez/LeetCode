/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let i = 0
    let j = s.length - 1

    while (i < s.length / 2){
        let buf = s[i]
        s[i] = s[j]
        s[j] = buf
        i++
        j--
    }
};