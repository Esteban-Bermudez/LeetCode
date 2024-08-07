class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        """
        :type candies: List[int]
        :type extraCandies: int
        :rtype: List[bool]
        """
        result = []
        max_candies = max(candies)        

        for i in candies:
            result.append(i + extraCandies >= max_candies)
            
        return result
