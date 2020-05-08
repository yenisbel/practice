// What is the Challenge?
// This challenge will be a fun one where you can do it at your own pace and c
// an complete as many of the 11 questions as you would like. Below you will find JavaScript interview questions that you will have to try and solve and "answer" as what you think the output should be. At the bottom you will find the answer sheet. It's a fun one that will challenge your understanding of JavaScript so try and solve them all yourself before looking at the answers! Additionally, keep track of your answers and explanations in your github repo and submit them (see the The Rules Are section on how to do this).
// What is the output in the console for the below questions:

// 0
var result = (function(a) {
  return a*a;
}(5.5));
console.log(result); //=>30.25
// 1
const b = [1, 2, 3];
const f = (a, ...b) => a + b;

console.log(f(1));//=> 11
// 2
let f = (...f) => f;
console.log(f(10)); //=> [10]

f = (...f) => f.reduce(f => f);
console.log(f(10)); //=> 10 and typeof is number

function ff() {
  return arguments;
}
console.log(ff(10)); //{'0': 10}

f = f => f;
console.log(f(10)); //=> 10
// 3
var foo = 10;
bar = 3;
(function () {
  var foo = 2;
  bar = 1;
}())
bar = bar + foo;
console.log(bar); //=> 11
// 4
var x = 5;   
(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})()
    //=> 10
//5
(function(){
  var a = b = 3;
})();

console.log(typeof a); //=> object
console.log(typeof b); //=> object
// 6
function foo1() {
  return {
    bar: 'bar',
  };
}

function foo2() {
  return
  {
    'bar';
  }
}

console.log(foo1());
console.log(foo2());
// 7
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(9007199254740993 === 9007199254740992);
// 8
const a = {},
    b = {c:'b'},
    c = {b:'c'};

a[b] = 111;
a[c] = 333;

console.log(a[b]); //=> 333
// 9
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 ); //=> print nums from 0 to 5 without include the 5 (0,1,2,3,4) spacetime printing milisecond apart
}

for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 ); //=> missing the } at the end 
}// 10
console.log(1 < 2 < 2); //=> true

console.log(3 > 2 > 1); //=> false