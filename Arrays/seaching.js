// Here we will do doing questions related to searching in arrays
// 1: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
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


// 2: Given the array nums after the possible rotation and an integer target, return the 
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

// 3: You are given an array prices where prices[i] is the price of a given stock on the ith day.

function calculateStocksProfit(stockesArr) {
    let buyingPrice = stocksArr[0];
    let maxProfit = 0
    let profit = 0;
    for(let i = 1; i < stocksArr.length; i++) {
        if(stockesArr[i] < buyingPrice) {
            buyingPrice = stockesArr[i];
        } else {
            profit = stockesArr[i] - buyingPrice
        }

        if(profit > maxProfit) {
            maxProfit = profit;
         }
    }
     return maxProfit;

}

let stocksArr = [7, 1, 5, 3, 6, 4] ;
//console.log(calculateStocksProfit(stocksArr));

// 4: The above elevation map (black section) is represented by array are being trapped. n
// [0,1,0,2,1,0,1,3,2,1,2,1]

function calculateTrappedWater(elevationHeight) {
    let leftMax = [elevationHeight.length];
    let rightMax = [elevationHeight.length];
    let waterTrapped = 0;
   // for left max array calculation
   leftMax[0] = elevationHeight[0];
   for (let i = 1; i < elevationHeight.length; i++) {
        leftMax[i] = Math.max(leftMax[i-1], elevationHeight[i])
   }

   // for right max array Calculation 
   rightMax[elevationHeight.length-1] = elevationHeight[elevationHeight.length-1]
   for(let i = elevationHeight.length - 2; i >= 0; i--) {
     rightMax[i] = Math.max(rightMax[i+1], elevationHeight[i]);
   }

   // water trapped calculation
   for(let i = 0; i < elevationHeight.length; i++) {
        waterTrapped += Math.min(leftMax[i], rightMax[i]) - elevationHeight[i];
   }
   return waterTrapped;
}

let elevationHeight =[4, 2, 0, 3, 2, 5] ;
console.log(calculateTrappedWater(elevationHeight))
