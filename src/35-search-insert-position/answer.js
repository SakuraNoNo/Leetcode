/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var start = 0
  var end = nums.length

  while (start <= end) {
    var flag = parseInt((start + end) / 2)
    if (target == nums[flag]) {
      return flag
    }
    else if (target > nums[flag]) {
      start = flag + 1
    }
    else {
      end = flag - 1
    }
  }
  return start
}
 