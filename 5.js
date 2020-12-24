// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:
// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (!head || !head.next) return head;
  let curr = head,
    n = 0;
  while (++n && curr.next) curr = curr.next;
  k = k % n;
  while (k--) {
    curr = head;
    while (curr.next.next) curr = curr.next;
    curr.next.next = head;
    head = curr.next;
    curr.next = null;
  }
  return head;
};

/***
 *
 * 先计算链表长度n，旋转长度大于n取于。
 * 循环移动位数，链表右移。
 * 
 ***/