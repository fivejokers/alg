// 最接近的三数之和
// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[nums.length - 1];

  for (let i = 0; i < nums.length - 2; i++) {
    const n1 = nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const n2 = nums[l];
      const n3 = nums[r];
      const sum = n1 + n2 + n3;
      if (sum > target) {
        r--;
      } else {
        l++;
      }
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
    }
  }
  return res;
};
