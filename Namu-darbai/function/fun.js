function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1.

console.log("Pirmas uzdavinys");

function fun1() {
  console.log("Pirma funkcija");
}

fun1();

//2.

console.log("Antras uzdavinys");

function fun2(tekstas, kartai) {
  for (let i = 0; i < kartai; i++) {
    console.log(tekstas);
  }
}

fun2("Sveiki", 5);

//3.

console.log("Trecias uzdavinys");

function fun3(a) {
  let n = 0;
  let n1 = 0;
  for (let i = 2; i <= a; i++) {
    if (a % i == 0) {
      n++;
    } else n1++;
  }
  console.log(n, n1);
}

fun3(20);

//4.

console.log("Ketvirtas uzdavinys");

let masyvas = [];

for (let i = 0; i < 100; i++) {
  let atsitiktinesReiksmes = rand(33, 77);
  masyvas.push(atsitiktinesReiksmes);
}

console.log(masyvas);

masyvas.forEach((element) => {
  let n = 0;
  for (let i = 2; i <= element; i++) {
    if (element % i == 0) {
      n++;
    }
  }
  console.log(n);
});

//let max = index[0];
//loop
//if
