// Here we will do doing questions related to searching in arrays
// 1:Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Input: nums = [1, 2, 3, 1] ,Output: true 

function checkDuplicates(numsArr) {
    for (let i = 0; i < numsArr.length; i++) {
        for (let j = i + 1; j < numsArr.length; j++) {  // fixed here
            if (numsArr[i] === numsArr[j]) {
                return true;
            }
        }
    }
    return false;
}

let nums = [1, 2, 3, 1];
console.log(checkDuplicates(nums)); // true


// Given the array nums after the possible rotation and an integer target, return the 
// index of target if it is in nums, or -1 if it is not in nums. 
 
// nums = [4, 5, 6, 7, 0, 1, 2], target = 0

function searchTargetInArray(target_nums, target) {
    for(let i=0; i < target_nums.length; i++) {
        if(target_nums[i] === target) {
            return i;
        }
    }
    return -1;
}

let target_nums = [4, 5, 6, 7, 0, 1, 2];
let targetValue = 3;
//console.log(searchTargetInArray(target_nums,targetValue ));



