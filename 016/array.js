console.log("All about arrays--------");

const animals = [
  "Lion",
  "Racoon",
  "Monkey",
  "Cat",
  "Dog",
  "Bird",
  "Fish",
  "Turtle",
  "Snake",
];
//naujas narys i masyva

animals[4] = "Frog";
animals.push("Elephant");
animals.push("Horse", "Cow", "Pig"); //isideda i gala
animals.unshift("Tiger", "Bear"); //isideda i prieki // reindex

animals.pop(); //ismeta elementus is galo
animals.pop();
animals.pop();

animals.shift(); //reindex
animals.shift();

let animalsLine = "Animals: ";
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
//   animalsLine += animals[i] + " + ";
// }

const animalsLine2 = "Animals: " + animals.join(" + ");

console.log(animalsLine);
console.log(animalsLine2);

// for (let animal of animals) {
//   console.log(animal);
// }

const printRed = (animal) => {
  console.log(`%c ${animal}`, `color:crimson`);
};

// animals.forEach((animal) => console.log(animal));
animals.forEach(printRed);

// animals.forEach(function (animal)) {
//     console.log(animal);
// }

const arr123 = [1, 2, -3, 1, -1];

let sum = 0;

arr123.forEach((num) => (sum += num));

let positiveSum = 0;

//arr123.forEach(num => {
//     if (num > 0) {
//         positiveSum += num;
//     }
// });

arr123.forEach((num) => (num > 0 ? (positiveSum += num) : null));

console.log(sum, positiveSum);

const farm = ["Cow", "Chicken", "Pig", "Cow", "Chicken", "Cow"];

// let sum1 = 0;

// farm.forEach((num1) => {
//   if (num1 == "Cow") {
//     sum1 += num1;
//   }
// });

// console.log(sum1);

let A = 5;
let B = 6;

A += B; //padidina antruoju skaiciu, padidina tokiu skaiciu koks yra po ligybes

console.log(A);

let cowCount = 0;

farm.forEach((animal) => (animal === "Cow" ? cowCount++ : false));
console.log(cowCount);

const superfarm = [
  { animal: "Cow", weight: 500 },
  { animal: "Chicken", weight: 3 },
  { animal: "Pig", weight: 100 },
  { animal: "Cow", weight: 400 },
  { animal: "Chicken", weight: 2 },
  { animal: "Cow", weight: 600 },
];

const allAnimalsWeight = {};

superfarm.forEach((a) => {
  if (allAnimalsWeight[A.animal] === undefined) {
    allAnimalsWeight[A.animal] = 0;
  }
  allAnimalsWeight[A.animal] += A.weight;
});

console.log("Gyvunu svoris: ", allAnimalsWeight);

let totalWeight = 0;

superfarm.forEach((animal) => {
  totalWeight += animal.weight;
});

console.log("Visu gyvunu svoris: ", totalWeight);

let cowTotalWeight = 0;

superfarm.forEach((a) =>
  a.animal === "Cow" ? (cowTotalWeight += a.weight) : false
);

console.log("Karviu svoris: ", cowTotalWeight);

let chickenTotalWeight = 0;

superfarm.forEach((a) =>
  a.animal === "Chicken" ? (chickenTotalWeight += a.weight) : false
);

console.log("Visciuku svoris: ", chickenTotalWeight);

console.log(animals, animals.length);

const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];

let isBlack = false;

colors.forEach((color) => (color === "black" ? (isBlack = true) : false));

console.log(isBlack);

let isPink = "NO";
colors.forEach((color) => color === "pink" && (isPink = "YES"));

let isPink2 = "NO";

colors.forEach(color => {
    if (color === 'pink') {
        isPink2 = 
    }
}
    
)

console.log(isPink);
