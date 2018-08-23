/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = []
  for (var i = 0; i < numRows; i++) {
    var row = []
    row[0] = 1
    for (var j = 1; j <= i; j++) {
      var tmp = result[i - 1][j] ? result[i - 1][j] : 0
      row[j] = result[i - 1][j - 1] + tmp
    }
    result.push(row)
  }
  return result
};