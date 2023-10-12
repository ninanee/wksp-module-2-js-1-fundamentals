// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.4
// Write a loop that will print to the console all of the EVEN integers from 100 to 0.
str1 = " ";
for (let x = 100; x >= 0; x--) {
  if (x % 2 === 0) {
    str1 += x + " ";
  }
}

console.log(str1);
