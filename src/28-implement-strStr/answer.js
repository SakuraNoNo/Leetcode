/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * TODO: optimize slice boundary
 */
var strStr = function(haystack, needle) {
  for (var i = 0; i <= haystack.length; i++) {
    if (needle === haystack.slice(i, i + needle.length)) {
      return i
    }
  }
  return -1
};
