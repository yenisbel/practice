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