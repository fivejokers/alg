// 字符串相乘
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 示例 1:
// 输入: num1 = "2", num2 = "3"
// 输出: "6"

// 示例 2:
// 输入: num1 = "123", num2 = "456"
// // 输出: "56088"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let len1 = num1.length,
    len2 = num2.length,
    pos = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    n1 = num1[i];
    for (let j = len2 - 1; j >= 0; j--) {
      n2 = num2[j];
      let sum = n1 * n2 + pos[i + j + 1];
      pos[i + j + 1] = sum % 10;
      pos[i + j] += (sum / 10) | 0;
    }
  }
  while (pos[0] == 0) {
    pos.shift();
  }
  return pos.length ? pos.join('') : '0';
};

/**
 * 定义两数字长度和的数组储存结果
 *
 * 遍历两数字获取每位乘积储存数组中
 *
 * 重点： 进位操作  竖式运算
 *
 * */
