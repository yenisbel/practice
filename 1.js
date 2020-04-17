//Description
// Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

function longestSubstringNoRepeating(input) {
  let chars = input.split('');
  let currChar;
  let str = "";
  let longestString = "";
  let hash = {};
  for (let i = 0; i < chars.length; i++) {
    currChar = chars[i];
    // check for unique char
    if (!hash[chars[i]]) 
    { 
      str += currChar; 
      hash[chars[i]] = {index:i};
    }else {
      if(longestString.length <= str.length){
        longestString = str;
      }
      let prev_dupeIndex = hash[currChar].index;
      let str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
      str = str_FromPrevDupe + currChar;
      hash = {};
      for (var j = prev_dupeIndex + 1; j <= i; j++) {
        hash[input.charAt(j)] = {index:j};
      }
    }
  }
  return longestString.length > str.length ? longestString : str;
}
console.log(longest_substring_without_repeating_characters("google.com")); 
  
console.log(longest_substring_without_repeating_characters("example.com")); 

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.
// The solution set must not contain duplicate triplets.
// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

function threeSum(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          return [nums[i], nums[j], nums[k]]
        };
      };
    };  
  };
  return "None"
}

console.log([-1, 0, 2, 3, 4, 1])

// Complexity (O(n^3))

function threeSum(nums){
  let target = 0;
  nums.sort((a,b) => a - b);
  let resultTriplets = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let partialTarget = target - nums[i];
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let partialSuma = nums[j] + nums[k];
      if (partialSuma === partialTarget) {
        resultTriplets.push([nums[i], nums[j], nums[k]]);  
      }else if( partialSuma < target){
        j= j + 1
      }else {
        k= k - 1
      }
    };
  };
  return resultTriplets
}


billie523's avatar
billie523
57
Last Edit: October 8, 2018 11:51 AM

9.7K VIEWS

/**
 
 */
function threeSum(nums) {
	let rtn = [];
	if (nums.length < 3) {
		return rtn;
	}
	nums = nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) {
			return rtn;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		for (let j = i + 1, k = nums.length - 1; j < k;) {
			if (nums[i] + nums[j] + nums[k] === 0) {
				rtn.push([nums[i], nums[j], nums[k]]);
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
	return rtn;
};