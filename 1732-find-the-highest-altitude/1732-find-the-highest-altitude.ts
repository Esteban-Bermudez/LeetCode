function largestAltitude(gain: number[]): number {
    let alt = 0
    let peak = 0

    for(let i = 0; i < gain.length; i++){
        alt += gain[i] 
        peak = Math.max(alt,peak) 
    }
    return peak
};