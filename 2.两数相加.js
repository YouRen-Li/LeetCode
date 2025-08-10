/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//构造链表
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 这题不是数组的做法，而是考察链表。js并没有列表这个属性，所以上面构造了一个链表的结构
var addTwoNumbers = function (l1, l2) {
  let linked = new ListNode(); //构造链表
  let linked2 = linked; //用于保存每一层的链表
  let carry = 0; //如果链表值大于10,就让下一位加1

  while (l1 != null || l2 != null) {
    //如果l1和l2都存在就执行
    let x = l1 ? l1.val : 0; //保存每一层输入l1链表的值 2,4,3
    let y = l2 ? l2.val : 0; //同理

    let sum = (x + y + carry) % 10; //这里需要把大于10的值取余掉,然后下一位进1. 链表值的相加取余 7 0 7+1
    carry = Math.floor((x + y + carry) / 10); //大于10,除10求整数,然后向下取整,拿到1

    linked2.next = new ListNode(sum); //构造新链表,值使用sum的值 7 0 8
    linked2 = linked2.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if(carry>0){
    linked2.next = new ListNode(carry);
    linked2 = linked2.next;
  }

  return linked.next;
};


let l3 = { val: 0, next: null };
let l4 = { val: 0, next: null };

console.log(addTwoNumbers(l3, l4));

// 这个算法题写了很久，没想到第二道题就卡住了。
// 数据结构这边基础很差,没有接触过链表,对链表很陌生
// js里本身没有链表,第一次接触到这个概念,还是很有意思的
