// Here we will do doing questions related to searching in arrays
// 1:Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Input: nums = [1, 2, 3, 1] ,Output: true 

function checkDuplicates(numsArr) {
    for(let i=0; i<numsArr.length; i++) {
        for(let j = 1+1; i<numsArr.length; j++) {
            if(numsArr[i] === numsArr[j]) {
                return true
            }
        }
    }
    return false;
}

let nums = [1, 2, 3, 4];
console.log(checkDuplicates(nums))

