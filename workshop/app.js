// const x = 100;

// function funkcijosVardas(iksas) {
//   console.log("pirma funkcija", iksas);
// }
// // funkcijosVardas(x);

// const naujaFunkcija = function (kaipnors) {
//   console.log("antra funkcija", kaipnors);
// };
// naujaFunkcija(x);

//arow function
// const arrowFunkcija = nezinau => console.log{'trecia funkcija',nezinau}

// arrowFunkcija{x}

const lyginiaiNelyginiai = function (skaicius) {
  if (skaicius % 2 == 0) console.log(skaicius, "Skaicius yra lyginis");
  else console.log(skaicius, "Skaicius yra nelyginis");
};

lyginiaiNelyginiai(43);

const FizzBuzz = function () {
  const a = "Fizz";
  const b = "Buzz";
  for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 15 == 0) console.log(a + b);
    else if (i % 3 == 0) console.log(a);
    else if (i % 5 == 0) console.log(b);
    else console.log(i);
  }
};

FizzBuzz();

//faktorialai (factory)
6! = 1 * 2 * 3 * 4 * 5 * 6

//3.
