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

//Roman to Int
function toInt(s) {
  let result = 0;
  let hasRoman = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  const strArr = s.split('');
  for(let i = 0; i < strArr.length; i++){
    let current = strArr[i];
    let valueCur = hasRoman[current];
    let next = strArr[i + 1];
    let nextCur = hasRoman[next];

    if(valueCur < nextCur){
      result -= valueCur;
    }else {
      result += valueCur
    }
  }
  return result
};

// 3Sum
//Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
//Find all unique triplets in the array which gives the sum of zero.


function threeSums(nums, target){
  let result = [];
  if (nums.length < 3) return 0;
  nums = nums.sort((a,b)=> a - b);
  for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) {
			return result;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		for (let j = i + 1, k = nums.length - 1; j < k;) {
			if (nums[i] + nums[j] + nums[k] === target) {
				result.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (j < k && nums[j] == nums[j - 1]) {
					j++;
				}
				while (j < k && nums[k] == nums[k + 1]) {
					k--;
				}
			} else if (nums[i] + nums[j] + nums[k] > 0) {
				k--;
			} else {
				j++;
			}
		}
  }
  return result
}

//Remove Duplicates in Place without extra space in memory

//First approach no good
function removeDuplicates(nums) {
  for(let i = 0; i< nums.length; i ++){
    if(nums[i] === nums[i + 1]){
      nums.splice(i+1, 1)
    }
  }
  return nums
}
// Two pointer one for unique and other for current
function removeDuplicatesinPlace(nums) {
  let pointer = 0;
  for(let i = 0; i< nums.length; i ++){
    if(nums[pointer] !== nums[i]){
      pointer ++;
      nums[pointer] = nums[i]
    }
  }
  console.log(nums);
  return pointer + 1
}


// CountDuplicates
function countDuplicates(params) {
  params.sort();
  let counter = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i] !== params[i+ 1]) {
      counter += 1
    }
  };
  return counter
}

//Multiply Strings

function multiplyStrings(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  let resultProd = new Array(num1.length + num2.length);
  resultProd.fill(0);
  let position = resultProd.length-1;
  for (let i = num1.length-1; i >= 0; i--) {
    let tempPos = position;
    for (let j = num2.length -1; j >=0; j--) {
      resultProd[tempPos] += parseInt(num1.charAt(i)) * parseInt(num2.charAt(j));
      resultProd[tempPos-1] += Math.floor(resultProd[tempPos] / 10); // carry
      resultProd[tempPos] %= 10;
      tempPos -= 1;
    }
   position -=1; 
  }
  return resultProd.join("").replace(/^0+/, "")
}

//Group Anagrams
function anaGrams(arrStr){
  let result = [];
  let hasReversed = {};
  for(let i = 0; i < arrStr.length; i++){
    let word = arrStr[i];
    if(hasReversed.key(reverse(word))){
      hasReversed[word].push(word)
    }else{
      hasReversed[word] = []
    }
  }
}

function reverse(word){
  if (word === word.split('').reverse().join(''))
  return word
}


function anagrmas(params) {
  let hasAnagr = {}
  params.forEach(word => {
    let key = [...word].sort().join('');
    if(hasAnagr[key]){
      hasAnagr[key].push(word)
    }else{
      hasAnagr[key] = [word]
    }
  });
  return hasAnagr.values()
}
// ["eat", "tea", "tan", "ate", "nat", "bat"]

// Add sum Binary

function addBinary(num1, num2){
  (parseInt(num1)+parseInt(num2)).toString(2)
}

//another way
function addBina(a, b) {
  var i = a.length - 1;
  var j = b.length - 1;
  var carry = 0;
  var result = "";
  while(i >= 0 || j >= 0) {
    var m = i < 0 ? 0 : a[i] | 0;
    var n = j < 0 ? 0 : b[j] | 0;
    carry += m + n; // sum of two digits
    result = carry % 2 + result; // string concat
    carry = carry / 2 | 0; // remove decimals,  1 / 2 = 0.5, only get 0
    i--;
    j--;
  }
  if(carry !== 0) {
      result = carry + result;
  }
  return result;


}

