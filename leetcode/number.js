//Find the GCD between this numbers using Euclid' algorithm

function gcdNumbers(num1, num2){
  let temp ;
  while (num2 !== 0) {
    temp = num1;
    num1 = num2;
    num2 = temp % num2;
  };
  return num1
}

console.log(gcdNumbers(60, 96));

console.log(gcdNumbers(20, 8));

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let i = 1;
  while(i <= n){
      if(guess(i) !== 0){
        i++
      }else{
        return i
      }
  }
 
};
//More efficiency
var guessNumber = function(n) {
  let i = 1;
  let j = n;
  let pivot = 0;
  while(i <= j){
      pivot = Math.floor((i + j)/2);
      if(guess(pivot) === 0){
          return pivot           
      }else if(guess(pivot) === -1){
          j = pivot - 1 
      }else{
          i = pivot + 1
      }
  }
  return pivot
 
};