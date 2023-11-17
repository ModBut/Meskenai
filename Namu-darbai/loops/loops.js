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


//6.

console.log('Sestas uzdavinys');

//7. 

console.log('Septintas uzdavinys');

//8.

let x 
do {
    x = rand(10, 25);
    console.log(x);
}   while (x < 12);

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