// 合并K个升序链表
// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// 示例 1：
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6

// 示例 2：
// 输入：lists = []
// 输出：[]
// 示例 3：

// 输入：lists = [[]]
// 输出：[]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null;
  if (lists.length <= 1) return lists[0] || null;
  let merge = (l1, l2) => {
    if (!l1) {
      return l2;
    } else if (!l2) {
      return l1;
    } else if (l1.val > l2.val) {
      l2.next = merge(l1, l2.next);
      return l2;
    } else {
      l1.next = merge(l1.next, l2);
      return l1;
    }
  };

  let res = [];
  for (let i = 0; i < lists.length; i += 2) {
    res.push(merge(lists[i], lists[i + 1]));
  }

  return mergeKLists(res);
};

/**
 *
 * 分治法
 * 先考虑两个链表合并
 * 添加到数组进行递归直至数组长度为1
 * 返回结果
 *
 * 两个有序链表合并 34.js
 *
 * */
