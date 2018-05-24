
// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3.

// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var sArr = s.split('');
    var res = new Array(sArr.length);
    if(sArr.length){
        var len = 1;
    }
    else{
       var len = 0; 
    }
    
    res[0]=sArr[0];
    for(var i=1;i<sArr.length;i++){
        if(res[i-1].indexOf(sArr[i])==-1){
            res[i]=res[i-1]+sArr[i];
            if(res[i].length>len){
                len=res[i].length;
            }
        }
        else{
            var index = res[i-1].indexOf(sArr[i]);
            res[i]=res[i-1].substr(index+1)+sArr[i];
            if(res[i].length>len){
                len=res[i].length;
            }
        }
    }
    console.log(res);
    return len;
};