function mergeAlternately(word1: string, word2: string): string {
    let i: number = 0

    let mergedString: string = ""
    while (i < word1.length && i < word2.length){
        mergedString += word1[i]
        mergedString += word2[i]
        i++
    }

    let shortestLength: number = (word1.length < word2.length) ? word1.length : word2.length
    let remainingString : string = (shortestLength == word1.length) ? word2 : word1

    while ( i < remainingString.length) {
        mergedString += remainingString[i]
        i++
    }
    return mergedString
};