//1.

console.log("Pirmas uzdavinys");
//tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = (5, 25);
let b = (5, 25);
let c = (5, 25);

// Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;

let suma = a + b + c;

console.log(suma);

//Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;

 let string = (a '5' + b '25' + c);

 console.log('Sudetas stringas: ', stringas);

 //Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;

 let string1 = (a+'5' +b+'25' +c);

 console.log('Sudetas stringas su tarpais: ', string1);

//  Sudėkite skaičius į stringo tipo kintamąją padarant 
//  tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. 
//  Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;

let string2 = ((a+'5' +b+'25' +c) + suma);

console.log('Sudetas stringas su tarpas + suma: ', string2);

//2.

console.log('Antras uzdavinys');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), 
//kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;

let kint = rand(5, 10);

console.log('Sugeneruotas skaicius: ', kint);

//3.

console.log('Trecias uzdavinys');

//Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. 

let kint1 = 'Labas';

//Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;

for (let i = 0; i < 5; i++) {
    console.log(kint1);
}


//4.

console.log('Ketvirtas uzdavinys');

//Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;

for (let i = 0; i < 7; i++) {
    console.log(kint);
}

//5.

console.log('Penktas uzdavinys');

//Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 
//tiek kartų, koks skaičius yra sugeneruotas;

for (let i = 0; i < rand(5, 10); i++) {
  console.log(kint);
}


//6.

console.log('Sestas uzdavinys');



//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, 
//koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;

for (let i = 0; i < rand(5, 10); i++) {
  if (rand(5, 10) > 7)
  console.log(kint);
}




//7. 

console.log('Septintas uzdavinys');


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

//Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

console.log('Sugeneruota reiksme: ', atsitiktiniaiskaiciai)

//Skaičiuokite ciklo viduje generuojamų reikšmių sumą, 
//ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
//Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;




//8.

console.log('Astuntas uzdavinys')
//Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. 
//Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
//kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje 
//bus sugeneruotas skaičius mažesnis nei 12;

let astuntas;
let atsitiktinisskaicius;
let iteracijuSkaicius = 0;
let reiksmiusuma;

do {
  atsitiktinisskaicius = rand(10, 25);
  console.log('Sugeneruotas atsitiktinis skaicius: ', atsitiktinisskaicius)
} while (atsitiktinisskaicius < 12);

// A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, 
//kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

atsitiktinisskaicius = astuntas;
console.log('Priskirtas kintamasis: ', astuntas);

// B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį 
//atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;

console.log(`Iteracijų skaičius: ${iteracijuSkaicius}`);

// C. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, 
//atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, 
//ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
//Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;



//9.

console.log('Devintas uzdavinys');

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let random;
let small = 0;
let big = 0;
let fives = 0;

do {
  random = rand(5, 10);
  for (let i = 0; i < random; i++) {
    small++;
    console.log('-',);
  }
  big++;
  console.log('----',);

  fives = random == 5 ? fives : 0;  //reset

  fives = random == 5 ? fives + 1 : fives; //count

} while (random != 5 || fives < 3);

console.log('big', big, 'small', small, 'fives', fives);




//10.

//Kazys ir Petras žaidžiai bingo. 
//Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
//Kazys - surenka taškų kiekį nuo 5 iki 25. 

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

let kazys = rand(10, 20);
let petras = rand(5, 25);

console.log('')



//Console.log išvesti žaidėjų vardus su taškų kiekiu ir 
//“Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. 
//Žaidimą laimi tas, kas greičiau surenka 222 taškus.
//Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.