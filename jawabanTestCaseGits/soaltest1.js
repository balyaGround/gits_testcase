function findMaxConsecutiveOnes(nums) {
  let maxConsecutive = 0;
  let currentConsecutive = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentConsecutive++;
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
    } else {
      currentConsecutive = 0;
    }
  }

  return maxConsecutive;
}
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 0, 1, 0, 1, 1]));
