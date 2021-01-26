// 矩阵置零
// 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

// 示例 1:
// 输入:
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// 输出:
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

// 示例 2:
// 输入:
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// 输出:
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let ls = [],
    m = matrix.length,
    n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        ls.push({ m: i, n: j });
      }
    }
  }

  for (let i = 0; i < ls; i++) {
    let m = ls[0].m,
      n = ls[0].n;

    matrix[m] = new Array(matrix[0].length).fill(0);
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][n] = 0;
    }
  }
};
