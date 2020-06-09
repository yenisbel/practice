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

// License Key Formatting

var licenseKeyFormatting = function(S, K) {
  let expression = RegExp('/-/g');
  let arrClean = S.toUpperCase().replace(/-/g, '').split('');
  for(let i = arrClean.length - 1 - K; i >= 0; i-=K ){
      arrClean[i] = `${arrClean[i]}-`
  }

  return arrClean.join('')
  
};

//You are given a string that represents time in the format hh:mm. Some of the digits are blank (represented by ?). Fill in ? such that the time represented by this string is the maximum possible. 
//Maximum time: 23:59, minimum time: 00:00. You can assume that input string is always valid.

function maxTime(str){
  let[hours, minutes] = str.split(':');
  if(hours[0] === '?'){
    if (hours[1] <= '3' || hours[1] === '?'){
      hours[0] = '2'
    }else{
      hours[0] ='1'
    }
  };
  if(hours[1] === '?'){
    if (hours[0] == '2'){
      result[1] = '3'
    }else{
      '9'
    }
  };

  result[2] = (minutes[0] === '?')? '9': minutes[0];
  result[3] = (minutes[1] === '?')? '5': minutes[1];
  // console.log(`${hours}:${minutes}`)
  // return `${hours}:${minutes}`
  return `${hours}:${minutes}`
}