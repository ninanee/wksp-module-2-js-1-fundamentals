// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q7
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// e.g.
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// ...

for (let num = 1; num <= 100; num++) {
  let act = " ";
  if (num % 3 === 0) {
    act = "Fizz";
    console.log(act);
  } else if (num % 5 === 0) {
    act = "Buzz";
    console.log(act);
  } else {
    console.log(num);
  }
}
