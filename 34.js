// 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

const { indigo } = require('color-name');

// 示例 1：
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// 示例 2：
// 输入：l1 = [], l2 = []
// 输出：[]

// 示例 3：
// 输入：l1 = [], l2 = [0]
// 输出：[0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  递归
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2
  } else {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1
  }
};


// 双指针法
var mergeTwoLists = function(l1, l2) {
    var prevHead = new ListNode(-1);
    var prevNode = prevHead;
    while (l1 != null && l2 != null) {
        if(l1.val <= l2.val){
            prevNode.next = l1; 
            l1 = l1.next
        }else{
            prevNode.next = l2;
            l2 = l2.next;
        }
        prevNode = prevNode.next;
    }
    prevNode.next = l1 ? l1 :l2;
    return prevHead.next;
};
