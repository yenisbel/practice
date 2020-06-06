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

//Longest Substring with sliding window

function longestSubstr(s){
  let i = 0;
  let j = 0;
  let set = new Set();
  let countMax = 0;

  while(i < s.length && j < s.length){
    let letter = s[j];
    if(set.has(letter)){
      set.delete(s[i]);
      i ++;
    }else{
      set.add(letter);
      j++;
      countMax = Math.max(countMax, j - i)
    } 
  };
  return countMax
}
//Less eficiency, cause find each substrs and compare lengths
function longestSubstr(s) {
  let set = new Set();
  let countMax = 0;
  for(let i = 0; i < s.length; i++){
    let letter = s[i];
    if(set.has(letter)){
      break
    }else{
      set.add(letter)
    };
    countMax = Math.max(countMax, set.size)
  };
  return countMax
}

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

//  Unique Email Addresses

var numUniqueEmails = function(emails) {
  const set = new Set();
  for(let idx = 0; idx < emails.length; idx ++){
      let[local, domain] = emails[idx].split('@');
      // let email = emails[idx];
      // let parts = email.split('@');
      // let local = parts[0];
      // let domain = parts[1];
      let expression = RegExp('/(\.)|(\+.*)/g'); 
      local = local.replace(expression, '');
      // if(local.includes('+')){
      //     local = local.substring(0, local.indexOf('+'));
          
      // };
      // local = local.replace('.', '');
      set.add(`${local}@${domain}`);
  }
  console.log(set)
  return set.size
};

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

var isPalindrome = function(s) {
  const alphanum = s.toLowerCase().replace(/[\W]/g, "");
  
  let front = 0;
  let back = alphanum.length - 1;
  
  while (front < back) {
      if (alphanum[front] != alphanum[back]) {
        return false;
      }
      front++;
      back--;
  }
  
  return true;
};

// Buy and sell stocks

var maxProfit = function(prices) {
  let min = prices[0];
  let profit = 0;
  
  for(let i = 0; i < prices.length; i++){
      let stock = prices[i];
      if(stock < min){
          min = stock
      }else if((stock - min ) > profit){
          profit = stock - min
      };
  }
  return profit
};


var maxProfit = function(prices) {
  let min = prices[0];
  let profit = 0;
  // if(prices.length === 0) return 0;
  
  for(let i = 0; i < prices.length; i++){
      let stock = prices[i];
      min = Math.min(stock, min);
      profit = Math.max(profit, stock - min);
  }
  return profit
};

// Best Time to Buy and Sell Stock II
//Peak Valley algoritm
//Say you have an array prices for which the ith element is the price of a given stock on day i.
//Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
var maxProfit = function(prices) {
  let profit = 0;
  for(let i = 0; i < prices.length; i++){
    let stockToday = prices[i];
    let stockNext = prices[i + 1];
    if(stockNext > stockToday ){
      profit += stockNext - stockToday
    };      
  }
  return profit
};
