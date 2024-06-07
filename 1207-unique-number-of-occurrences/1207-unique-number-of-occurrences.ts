function uniqueOccurrences(arr: number[]): boolean {
    let tally = {}

    arr.forEach(key => {
        tally[key] = tally[key] ? tally[key] + 1 : 1
    })

    let occurences = Object.values(tally)
    let uniqueOccurences = new Set(occurences)

    return uniqueOccurences.size == occurences.length
};