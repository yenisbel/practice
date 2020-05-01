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
