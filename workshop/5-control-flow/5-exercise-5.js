// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q5
// Write a loop that will output every hour of the day (0 to 23) and
// determine whether it is time to sleep, eat or train.
// Life in the army is regimented! These are the hours alloted to each activity.
// Sleep between 22h and 5h
// Eat at 7h, 13h and 18h
// The rest of the time is spent training.

// The output should look something like
// It's 11h. Time to train!
// It's 12h. Time to train!
// It's 13h. Time to eat!
for (let x = 0; x <= 23; x++) {
  if (x === 7 || x === 13 || x === 18) {
    console.log("It's ", x, " h", "Time to eat!");
  } else if (x >= 22 || x < 5) {
    console.log("It's ", x, " h", "Time to sleep!");
  } else {
    console.log("It's ", x, " h", "Time to train!");
  }
}
