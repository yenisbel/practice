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
