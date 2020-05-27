// Given a 2D matrix matrix, find the sum of the elements inside the 
//rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
var NumMatrix = function(matrix) {
    this.matrix = matrix
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0;
  let row = row1

  while (row <= row2) {
    let column = col1;
    while (column <= col2) {
      sum += this.matrix[row][column]
      column ++
    }
    row ++
  }
  return sum
    
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */