/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n == 1) {
    return '1'
  }

  var prev = countAndSay(n - 1)
  var strArr = prev.split('')
  var count = 1
  var newStr = ''

  for(var i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      count++
    }
    else {
      newStr = newStr + count + strArr[i]
      count = 1
    }
  }
  return newStr
}