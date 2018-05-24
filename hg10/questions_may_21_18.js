// Question 1: Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)

// Output: 7 -> 0 -> 8

// Explanation: 342 + 465 = 807.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l1temp = l1;
    var l2temp = l2;
    var sum =0;
    var result= [];
    
    while(l1temp !=null || l2temp!=null){
        if(l1temp!=null){
            sum +=l1temp.val;
            l1temp = l1temp.next;
        }
        if(l2temp!=null){
            sum +=l2temp.val;
            l2temp = l2temp.next;
        }
        if(sum>=10){
            sum = sum-10;
            result.push(sum);
            sum = 1;
        }
        else{
            result.push(sum);
            sum=0;
        }
        
    }
    if(sum==1){
        result.push(1);
    }
    return result;
    
};

