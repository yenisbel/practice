
// Sum All Numbers in a Range
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
// sumAll([1, 4]) should return 10
// sumAll([10, 5]) should return 45

function sumAll(params) {
  let maxParams = Math.max(...params);
  let minParams = Math.min(...params);
  let suma = 0;
  for (let i = minParams; i <= maxParams; i++){
    suma += i;  
  }
  return suma
}
console.log(sumAll([1, 4]))
// complexity O(n)

// Diff Two Arrays
// Compare two arrays and return a new array 
// with any items only found in one of the two given arrays,
// but not both. In other words, return the symmetric difference of the two arrays.
// Edge Case: What if one Array includes an element twice i.e. [1, 2, 1], [3,2,4] 
// the 1 values are only in the first Array but would we include it twice or just 
// once in the returned Array? For now, we’ll just assume there are no Arrays with duplicates.
function diffArray(arr1, arr2) {
  // new Array to hold unique values
  const newArr = [...arr1, ...arr2];
  let result;
  result = newArr.filter(val => !arr1.includes(val) || !arr2.includes(val))

  // return the newly built Array
  return result
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
// Complexity O(1)

// Wherefore art thou

// Make a function that looks through an array of objects (first argument) 
// and returns an array of all objects that have matching name and value pairs
// (second argument). Each name and value pair of the source object has to be
// present in the object from the collection if it is to be included in the returned array.

// function lookThrough(collection, source) {
//   let keysSource = Object.entries(source);
//   return collection
//     .filter(ele => keysSource
//       .every(([key, val]) => ele[key] === val)
//     )

// }
// Complexity O(n^2)

function lookThrough(collection, source) {
  let found = [];
  for (let i = 0; i < collection.length; i++) {
    let toFound = collection[i];
    let match = true;
    for (let key in source) {
      if (toFound[key] !== source[key]) {
        match = false;
        continue  
      }
    }
    if(match){
      found.push(toFound)
    } 
  }
  return found
}
// Complexity O(n^2)

console.log(lookThrough([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

// Spinal Tap Case
// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"
// All non-letter characters are replaced with a dash
// If an uppercase letter comes after a lowercase letter then this is the start of a word 
// and we need to add a dash between them.
function spinalCase(params) {
  return params.toLowerCase().split(" ").join("-")
}

console.log(spinalCase("This Is Spinal Tap"))

function waitingTime(tickets, p) {
    // Write your code here
    let ticketsTotal = tickets[p];
    let peopleBefore = tickets.slice(0,p);
    console.log(peopleBefore);

    let peopleAfter = tickets.slice(p+1, tickets.length);
    console.log(peopleAfter);
    for (let num in peopleBefore){
        if (num < tickets[p]){
          ticketsTotal += num;
        }else{
          ticketsTotal += tickets[p];
        }
    };
    for(let num in peopleAfter){
        if (num < tickets[p]){
          ticketsTotal += num
        }else {
          ticketsTotal += tickets[p]-1
        }
    }
    return ticketsTotal
    

}

console.log(waitingTime([2,6,3,4,5], 2))