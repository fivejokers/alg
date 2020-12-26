// 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;

    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let a = nums[i],
      bIndex = i + 1,
      cIndex = nums.length - 1;

    while (bIndex < cIndex) {
      let s = nums[i] + nums[bIndex] + nums[cIndex];
      if (s === 0) {
        res.push([nums[i], nums[bIndex], nums[cIndex]]);
        while (bIndex < cIndex && nums[bIndex] == nums[bIndex + 1]) bIndex++;
        while (bIndex < cIndex && nums[cIndex] == nums[cIndex - 1]) cIndex--;
        cIndex--;
        bIndex++;
      } else if (s > 0) {
        cIndex--;
      } else if (s < 0) {
        bIndex++;
      }
    }
  }

  return res;
};

/***
 * 双指针
 * for循环选中一个值后 定义两个指针进行比较
 * */
