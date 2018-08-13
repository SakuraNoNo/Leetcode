/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var str = s.split(' ').filter(function(n){ return n }).pop()
  if (!str){
    return 0
  }
  return str.length
};