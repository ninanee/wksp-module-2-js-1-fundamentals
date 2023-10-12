// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.3
// Write a loop that will print to the console all of the EVEN integers from 1 to 100.
str1 = " ";
for (let x = 5; x <= 100; x++) {
  if (x % 2 === 0) {
    str1 += x + " ";
  }
}

console.log(str1);
