// 划分字母区间
// 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

// 示例：

// 输入：S = "ababcbacadefegdehijhklij"
// 输出：[9,7,8]
// 解释：
// 划分结果为 "ababcbaca", "defegde", "hijhklij"。
// 每个字母最多出现在一个片段中。
// 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。

/**
 * @param {string} S
 * @return {number[]}
 */
const partitionLabels = (S) => {
  const maxPos = {};
  for (let i = 0; i < S.length; i++) {
    // 存放字母与它的最远位置
    maxPos[S[i]] = i;
  }

  const res = [];
  let start = 0; // 待切割的起始位置
  let scannedCharMaxPos = 0; // 已扫描的字符中最远的位置

  for (let i = 0; i < S.length; i++) {
    const curCharMaxPos = maxPos[S[i]]; // 当前扫描的字符的最远位置
    scannedCharMaxPos = Math.max(scannedCharMaxPos, curCharMaxPos); // 更新「已扫描的字符中最远的位置」
    if (i == scannedCharMaxPos) {
      // 正好扫描到「已扫描的字符的最远位置」，到达切割点
      res.push(i - start + 1);
      start = i + 1; // 更新，下一个待切割的字符串的起始位置
    }
  }
  return res;
};

const partitionLabels = (S) => {
  let obj = {};
  for (let i = 0; i < S.length; i++) {
    obj[S[i]] = i;
  }

  let maxIndex = 0,
    start = 0,
    res = [];

  for (let i = 0; i < S.length; i++) {
    maxIndex = Math.max(maxIndex, obj[S[i]]);
    if (maxIndex == i) {
      res.push(i - start + 1);
      start = i + 1;
    }
  }
  return res;
};


/**
 * 记录每个字符出现的最远位置
 * 定义最远出现位置
 * 遍历字符串判断判断当前字符下标是否是最远的位置
 * 是，输出结果
 * 否，下次循环
 * */ 