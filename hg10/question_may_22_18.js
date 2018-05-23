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