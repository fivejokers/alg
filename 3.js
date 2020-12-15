// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：
// 给定的 n 保证是有效的。
// 进阶：
// 你能尝试使用一趟扫描实现吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  //先处理边界情况
  if (!head) {
    return head;
  }
  if (!head.next && n === 1) {
    return null;
  }

  //双指针，两个指针间隔n
  let rightPointer = head; //右侧的指针
  let leftPointer = null; //左侧的指针，左侧指针的下一个就是要删除的元素
  let index = 0; //记住rightPointer走的次数，以便赋值左侧指针

  while (rightPointer) {
    //右侧指针走到了末尾
    if (!rightPointer.next) {
      //哎呀，左侧指针再循环一次就是要删除的元素了，因此要删除的元素是head节点
      if (n - index === 1) {
        if (!leftPointer) {
          return head.next;
        }
      } else {
        //左侧指针的下一个就是要删除的元素，并删除
        leftPointer.next = leftPointer.next.next;
      }
    }
    //右侧指针不断向右移动
    rightPointer = rightPointer.next;
    //记住移动次数
    index++;
    //移动n次后左侧指针开始指向头指针
    if (index === n) {
      leftPointer = head;
    } else {
      //随着右侧指针移动，左侧指针也不断移动
      if (leftPointer) {
        leftPointer = leftPointer.next;
      }
    }
  }
  //如果循环中没有返回，那么头指针就没有变，就返回原来的头指针
  return head;
};

var removeNthFromEnd = function (head, n) {
  let rightPointer = head;
  let leftPointer = null;
  let length = 0;

  while (rightPointer) {
    length++;
    rightPointer = rightPointer.next;

    if (!rightPointer) {
      if (leftPointer) {
        leftPointer.next = leftPointer.next.next;
      } else {
        return head.next;
      }
    }

    if (length == n) {
      leftPointer = head;
    } else {
      if (leftPointer) {
        leftPointer = leftPointer.next;
      }
    }
  }

  return head;
};
