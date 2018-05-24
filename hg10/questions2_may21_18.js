// Question 2: Container With Most Water
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.



/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxVol=0;
    var head=0;
    var tail = height.length-1;
    while(tail-head>0){      
        if(height[head]>height[tail]){
            var vol = (tail-head)*height[tail];
            tail--;
        }
        else{
            var vol = (tail-head)*height[head];
            head++;
        }
        if(vol>maxVol){
                maxVol=vol;
            }
    }
    return maxVol;
};