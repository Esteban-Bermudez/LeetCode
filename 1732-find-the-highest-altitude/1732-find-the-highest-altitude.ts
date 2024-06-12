function largestAltitude(gain: number[]): number {
    let alt = 0
    let peak = alt

    for(let i = 0; i < gain.length; i++){
        alt += gain[i] 
        peak = Math.max(alt,peak) 
    }

    return peak
};