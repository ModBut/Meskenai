console.log("Hello!");

// function factorial(n) {
//   let answer = 1;
//   if (n == 0 || n == 1) {
//     return answer;
//   } else if (n > 1) {
//     for (let i = n; i >= 1; i--) {
//     }
//   }
// }

function funkcijaVienas(stringas) {
  let stringas2 = "";
  for (let i = stringas.length - 1; i >= 0; i--) {
    // console.log(stringas[i]);
    stringas2 += stringas[i];
  }
  console.log(stringas2);
}

funkcijaVienas("Sedek uz kedes");
