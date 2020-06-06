//Add Binary strings

// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

function addBinary(str1, str2){
  return (parseInt(num1, 2) + parseInt(num2, 2)).toString(2)
}

var addBinary = function(a, b) {
  // (parseInt(a,2)+parseInt(b,2)).toString(2)
let i = a.length - 1;
let j = b.length - 1;
let carry = 0;
let result = "";
while(i >= 0 || j >= 0) {
  let m = i < 0 ? 0 : a[i] | 0;
  let n = j < 0 ? 0 : b[j] | 0;
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
  
};