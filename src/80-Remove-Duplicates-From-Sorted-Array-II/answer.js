/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var j = 0
  var tmp = 0
  for (var i = 1; i < nums.length; i++) {
    if (nums[j] === nums[i]) {
      tmp++
      if (tmp < 2) {
        nums[++j] = nums[i]
      }
    }
    else {
      tmp = 0
      nums[++j] = nums[i]
    }
  }
  return j + 1
};