function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1.

for (let ratas = 10; ratas >= 1; ratas--) {
  console.log(ratas);
}

//2.

let bendrasgreitis = 0;

for (let ratas = 1; ratas <= 10; ratas++) {
  greitis = rand(120, 220);
  console.log("ratas", ratas, greitis);
  bendrasgreitis += greitis;
}

let vidgreitis = bendrasgreitis / 10;
console.log("Bendras vidutinis greitis: ", vidgreitis);

//3.

let kurolikutis = 44;

for (let ratas = 1; ratas <= 10; ratas++) {
  ratesunaudotaskuras = rand(3, 6);
  console.log("ratas", ratas, ratesunaudotaskuras);
  bendraslikutis = kurolikutis -= ratesunaudotaskuras;
}

console.log(bendraslikutis);

if (kurolikutis <= 0) {
  console.log("Automobiliui pasibaige kuras");
}

//4.

let ratai = 10;
let maziausiasgreitis = 21;

for (ratai = 1; ratai <= 10; ratai++) {
  console.log(ratai);
}

for (posukiai = 1; posukiai <= 5; posukiai++) {
  let posukiai = rand(20, 120);
  console.log("Posukio greitis:", posukiai);
}

if (posukiai < maziausiasgreitis) {
  posukiai = maziausiasgreitis;
}

console.log("Maziausias greitis:", maziausiasgreitis);

// Vyksta automobilių žiedinės lenktynės.
// Automobiliui Nr. 55 liko nuvažiuoti 10 ratų (žiedų).
// Kiekviename žiede yra 5 posūkiai,
// kuriuose automobilio greitis yra atsitiktinis dydis nuo 20 iki 120 km/h.
// Imituokite tokią situaciją dviem for ciklais
// (vienas 10 ratų, kitas 5 posūkiai) ir ciklams pasibaigus atspausdinkite
// mažiausią automobilio greitį kažkuriame iš posūkių.
