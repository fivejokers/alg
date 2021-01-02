// 合并区间
// 给出一个区间的集合，请合并所有重叠的区间。

// 示例 1:

// 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2:

// 输入: intervals = [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]);
  
    let prev = intervals[0];
  
    for (let i = 1; i < intervals.length; i++) {
      let cur = intervals[i];
      if (prev[1] >= cur[0]) { 
        prev[1] = Math.max(cur[1], prev[1]); 
      } else {       
        res.push(prev);
        prev = cur;
      }
    }
  
    res.push(prev);
    return res;
  };

/**
 * 定义一个新数组存储合并后或不合并的区间
 * 定义一待处理区间进行比对
 *  要合并修改进入下次循环
 *  不需要合并添加到res
 * */ 