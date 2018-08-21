/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  return str.split('').map(function(value) {
    var charCode = value.charCodeAt(0)
    if (charCode > 64 && charCode < 91) {
      return String.fromCharCode(charCode + 32)
    }
    return value
  }).join('')
};