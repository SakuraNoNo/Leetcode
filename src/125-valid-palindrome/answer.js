/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var str = s.replace(/[^a-zA-Z0-9]/g, '')
    .replace(/[A-Z]/g, function (match) {
      return match.toLowerCase()
    })
  return str === str.split('').reverse().join('')
};