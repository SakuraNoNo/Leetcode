/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  let map = {}
  let max = 0
  let length = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char in map && map[char] >= length) {
      length = map[char] + 1
    }
    map[char] = i
    max = Math.max(max, i - length + 1)
  }
  return max
};
