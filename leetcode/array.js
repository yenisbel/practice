import { Hash } from "crypto";

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
const twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
    for(let j = i+ 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target) return [i, j]
    }
  }
  
};


// Other way


const twoSumL = function(nums, target) {
  let hasArr = {};
  for(let i = 0; nums.length; i++) {
    let keyArr = target - nums[i];
    if (hasArr.hasOwnProperty(keyArr)) {
      return [i, hasArr[keyArr]];
    } else {
      hasArr[nums[i]] = i
    };
      
  };
};

// Given an array nums, write a function to move all 0's to the end 
// of it while maintaining the relative order of the non-zero elements.
var moveZeroes = function(arr) {
  let nonZero = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      arr[nonZero] = arr[i];
      nonZero ++;
    }
    while(nonZero < arr.length){
      arr[nonZero]= 0;
      nonZero ++
    }
  };
};

// SIngle element Given a non-empty array of integers, every element appears twice except for one. Find that single one.
const singleNumber = function(nums){
  let hasUniq = 0;
  for(let i= 0; i < nums.length; i++){
    hasUniq ^= nums[i]
  }
  return hasUniq
};

// With hashes

const singleNumber = function(nums){
  let hasUniq = 0;
  for(let i= 0; i < nums.length; i++){
    hasUniq ^= nums[i]
  }
  return hasUniq
};

//Given an array of integers, find if the array contains any duplicates.

const containsDuplicate = function(nums) {
    if (nums === [...new Set(nums)]){
      return false
    }else return true
};

//Given a 32-bit signed integer, reverse digits of an integer.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. F
// or the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
const reverse = function(x){
  let minOverflow = Math.pow(-2, 31);
  let maxOverflow = Math.pow(2, 31) - 1;
  let sign = Math.sign(x);
  let digNum = Math.abs(x).toString().split('').reverse().join('');
  let result = digNum * sign;
  return (minOverflow < result && maxOverflow < result) ? result : 0
}

// Longest substr
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1;
  let hashTable = {};
  let maxResult = 0;
  let start = 0;
  
  const strings = s.split('');
  
  for(let i = 0; i < s.length; i++){
      if(hashTable[strings[i]] !== undefined && hashTable[strings[i]] >= start){
          start = hashTable[strings[i]] + 1;
          console.log(start);
      }
      hashTable[strings[i]] = i;
      // for(let j = 0; j < s.length; j ++){
      //     if(j > i){
      //         let subStr = str.slice(i, j);
      //         if (subStr.length  > maxResult.length){
      //             maxResult = subStr;
      //         }
      //     }
      // }
      maxResult = Math.max(maxResult, (i - start + 1));
      console.log(maxResult)
  }
  return maxResult
};

//Implement atoi which converts a string to an integer.
//The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting 
//from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value

var myAtoi = function(str) {
  let minOverFlow = Math.pow(-2,31);
  let maxOverFlow = Math.pow(2,31)-1;
  let number = parseInt(str);
  if(number > minOverFlow && number < maxOverFlow){
      return number
  }else if(number >= maxOverFlow){
      return maxOverFlow
  }else if(number <= minOverFlow){
      return minOverFlow
  }else {
      return 0
  }
  
};