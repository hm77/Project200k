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

