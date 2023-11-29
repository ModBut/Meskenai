//1

console.log("Pirmas uzdavinys");

//Parašykite funkciją, kurios argumentas būtų tekstas,
//kuris yra atspausdinamas su console.log;

let fun1 = function () {
  console.log("Pirma funkcija");
};

fun1();

//2.

console.log("Antras uzdavinys");

//Parašykite funkciją su dviem argumentais,
//pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log,
//o antrasis kiek kartų spausdinimas atliekamas.
//Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

let fun2 = function (tekstas, kartai) {
  for (let i = 0; i < kartai; i++) {
    console.log(tekstas, "Hello wordl");
  }
};

fun2("Hello world");

//3.

console.log("Trecias uzdavinys");

function fun3(skaicius) {
  let dalikliaiBeLiekanos = 0;

  for (let i = 2; i < skaicius; i++) {
    if (skaicius % i === 0) {
      dalikliaiBeLiekanos++;
    }
  }

  return dalikliaiBeLiekanos;
}

const skaicius = 12;
const rezultatas = fun3(skaicius);

console.log(`Skaičius ${skaicius} dalijasi be liekanos iš ${rezultatas}.`);
