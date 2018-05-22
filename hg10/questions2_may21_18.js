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