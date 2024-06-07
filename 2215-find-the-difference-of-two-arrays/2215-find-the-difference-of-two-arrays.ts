function findDifference(nums1: number[], nums2: number[]): number[][] {
    let n1 = new Set(nums1)
    let n2 = new Set(nums2)

    let longestLength = nums1.length > nums2.length ? nums1.length : nums2.length

    for (let i = 0; i < longestLength; i++) {
        if ( i < nums2.length) {
            n1.delete(nums2[i])
        }

        if (i < nums1.length) {
            n2.delete(nums1[i])
        }
    }
    return [Array.from(n1), Array.from(n2)]
};