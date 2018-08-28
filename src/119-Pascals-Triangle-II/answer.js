/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var result = new Array(rowIndex + 1).fill(0)
  result[0] = 1
  for (var i = 1; i <= rowIndex; i++) {
    for (var j = i; j > 0; j--) {
      result[j] += result[j - 1]
    }
  }
  return result
};