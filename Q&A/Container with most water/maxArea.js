// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.




const maxArea = (height) =>{
    let i = 0
    let j = height.length - 1
    let max = 0
    let area
 
    while(i < j){
        area = (j-i) * Math.min(height[i],height[j])
        max = Math.max(area,max)
        height[i] < height[j] ? i++ : j--
    }
    return max
     }