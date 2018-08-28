/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {}
    for (var i = 0; i < nums.length; i++) {
      var key = target - nums[i]
      
      if (hash[key] !== undefined) {
        return [hash[key], i]
      }
      else {
        hash[nums[i]] = i
      }
    }
};