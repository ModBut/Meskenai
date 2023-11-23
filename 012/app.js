console.log("Welcome to Task SEVEN!");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seven;
let sum = 0;
let sum2 = 0;

for (let i = 0; i < 5; i++) {
  let random = rand(10, 20);
  //   seven = random; //A.

  //   seven = seven || 0; //B.
  //   seven = seven + random; //B.

  //   seven = seven || ""; // C.
  //   seven = seven + " " + random; //C.

  //   sum = sum + random; //D.
  //   seven = seven || "";//D.
  //   seven = seven + "  " + random;//D.

  sum2 = sum2 + random; //E.
  seven = seven || ""; //E.
  seven = seven + (i ? " + " : "") + random; //E.
}

// seven = seven + "  " + sum;//D.

seven = seven + " = " + sum2; //E.

console.log(seven);
