function mergeAlternately(word1: string, word2: string): string {
    let w1length: number = word1.length
    let w2length: number = word2.length

    let shortestLength: number = (w1length < w2length) ? w1length : w2length

    let i: number = 0

    let mergedString: string = ""
    while (i < shortestLength ){
        mergedString += word1[i]
        mergedString += word2[i]
        i++
    }

    let remainingString : string = (shortestLength == w1length) ? word2 : word1

    while ( i < remainingString.length) {
        mergedString += remainingString[i]
        i++
    }
    return mergedString
};