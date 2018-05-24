// Question 1: ZigZag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P A H N A P L S I I G Y I R And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3

// Output: "PAHNAPLSIIGYIR"



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var arr = new Array(numRows).fill('');
     var charArr = s.split('');
     
     while(charArr.length){
         for(var i=0;i<numRows;i++){
             var temp=charArr.shift();
             arr[i]+=(temp!=undefined?temp:'');
         }
         for(var j=numRows-2;j>0;j--){
             var temp=charArr.shift();
             arr[j]+=(temp!=undefined?temp:'');
         }
         
     }
     var result=[];
     
     for(var k=0;k<numRows;k++){
         result=result.concat(arr[k]);
     }
     return result.join('');
 };