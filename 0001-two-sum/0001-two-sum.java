class Solution {
    public int[] twoSum(int[] nums, int target) {
    if (nums == null || nums.length < 2) {
      return new int[] { 0, 0 };
    }

    HashMap<Integer, Integer> hMap = new HashMap<Integer, Integer>(nums.length);

    for (int i = 0; i < nums.length; i++) {
      hMap.put(nums[i], i);
    }

    for (int i = 0; i < nums.length; i++) {
      int find = target - nums[i];
      Integer value = hMap.get(find);
      if (value != null && i != value) {
        return new int[] { i, value };
      }
    }

    return new int[] { 0, 0 };

    }
}
