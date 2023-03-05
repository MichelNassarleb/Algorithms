var twoSum = function(nums, target) {
    let numsLength = nums.length
    let arrOfValues = [0]
    //Constraints
    if(numsLength < 2 || numsLength >Math.pow(10,4)){
        return [0]
    }
    if(target < - Math.pow(10,9) || target > Math.pow(10,9)){
                return [0]
            }
    //We loop over the nums array
    for (let i = 0;i<numsLength;i++){
                //Constraints
        if(nums[i] < - Math.pow(10,9) || nums[i] > Math.pow(10,9)){
                return [0]
            }
        //We loop over the nums array since it's second item
        for(let j = i+1; j < numsLength;j++){

            //If the sum of the two items is equal to target, return the value immediately
            if((nums[i] + nums[j]) == target){
                arrOfValues.pop()
                arrOfValues.push(i,j)
                return arrOfValues
            }
        }
    }
};