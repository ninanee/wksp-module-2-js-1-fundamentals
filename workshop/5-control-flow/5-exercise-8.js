// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let x = 1; x <= 8; x++) {
  let v = " ";

  for (let y = 1; y <= x; y++) {
    v += "*";
  }
  console.log(v);
}
