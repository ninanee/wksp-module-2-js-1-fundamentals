// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q9
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.
//
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#

for (let i = 0; i < 8; i++) {
  let v = " ";

  if (i % 2 === 0) {
    v += "#";

    for (let j = 1; j < 8; j++) {
      if (j % 2 === 0) {
        v += "#";
      } else {
        v += "_";
      }
    }
  } else {
    v += "_";

    for (let x = 1; x < 8; x++) {
      if (x % 2 === 0) {
        v += "_";
      } else {
        v += "#";
      }
    }
  }

  console.log(v);
}
