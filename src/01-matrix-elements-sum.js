/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = matrix.reduce((acc, element) => {
    element.forEach((item, index) => {
      if (item === 0) acc.zeroIndex.push(index);
      if (!acc.zeroIndex.includes(index)) acc.sum += item;
    });
    return acc;
  }, { zeroIndex: [], sum: 0 });
  return result.sum;
}

module.exports = getMatrixElementsSum;
