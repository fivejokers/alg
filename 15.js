// 长度最小的子数组
// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

// 示例：

// 输入：s = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let i = 0,
      j = 0,
      res = 0;
    while (j < nums.length && i < nums.length) {
      let k = j - i + 1,
        sum = 0;
      while (k) {
        sum += nums[i + k - 1];
        k--;
      }
      if (sum >= s) {
          if(i == j) return 1
          res = res? Math.min(j - i + 1, res): j - i + 1;
        i++;
      } else {
        j++;
      }
    }
    return res;
  };
  

var minSubArrayLen = function (s, nums) {
  let minLen = Infinity;
  let i = 0;
  let j = 0;
  let sum = 0;
  while (j < nums.length) {
    sum += nums[j];
    while (sum >= s) {
      minLen = Math.min(minLen, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;
  }
  return minLen === Infinity ? 0 : minLen; // 从未找到可行解，返回0
};



/**
 * 定义i,j
 * 计算数组前 j 个和 sum
 *      如果 sum >= s
 *          移动 i ，sum 减前 i 个 找到最小长度
 *      不符合 移动 j
 * */ 