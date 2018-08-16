/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var strArr = s.split('')
  var stack = []
  var map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  
  for (var i = 0; i < strArr.length; i++) {
    var value = strArr[i]
    if ('([{'.indexOf(value) !== -1) {
      stack.push(value)
    }
    else if (map[value] !== stack.pop()) {
      return false
    }
  }
  return stack.length ? false : true
};