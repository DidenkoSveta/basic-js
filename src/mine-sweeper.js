const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const newMatrix = matrix.map(item => item.map(_ => 0));
  const wMatrix = matrix[0].length;
  const hMatrix = matrix.length;

  for (let i = 0; i < hMatrix; i++) {
    for (let j = 0; j < wMatrix; j++) {

      let sumN = 0;
      const minN = i - 1 < 1 ? 0 : i - 1;
      const maxN = i + 1 >= hMatrix ? hMatrix - 1 : i + 1;
      const minM = j - 1 < 1 ? 0 : j - 1;
      const maxM = j + 1 >= wMatrix ? wMatrix - 1 : j + 1;

      for (let n = minN; n <= maxN; n++) {
        let sumM = 0;
        for (let m = minM; m <= maxM; m++) {
          !(n === i && m === j) ? sumM += matrix[n][m] : null;
        }
        sumN += sumM;
      }

      newMatrix[i][j] = sumN;
    }
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};
