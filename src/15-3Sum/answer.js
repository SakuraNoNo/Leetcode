/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var result = []
  nums = nums.sort(function(a, b) {return a - b})
  for (var i = 0; i < nums.length; i++) {
    var target = nums[i]
    var start = i + 1
    var end = nums.length - 1
    if (target === nums[i - 1]) {
      continue
    }
    
    while (start < end) {
      var temp = nums[start] + nums[end]
      console.log(start, end, target, temp)
      if (-target > temp) {
        start += 1
      }
      else if (-target < temp) {
        end -= 1
      }
      else {
        result.push([target, nums[start], nums[end]])
        start += 1
        while (nums[start] === nums[start - 1]) {
          start += 1
        }
      }
    }
  }
  return result
};

console.log(threeSum([0,-4,-1,-4,-2,-3,2]))