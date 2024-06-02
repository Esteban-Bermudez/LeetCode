function mergeAlternately(word1: string, word2: string): string {

    let w1Length = word1.length
    let w2Length = word2.length
    let largestLength: number = Math.max(w1Length,w2Length)

    let i: number = 0

    let mergedString: string = ""
    while (i < largestLength ){
        if(i < w1Length) {
            mergedString += word1[i]
        }
        if(i < w2Length) {
            mergedString += word2[i]
        }
        i++
    }
    return mergedString
};