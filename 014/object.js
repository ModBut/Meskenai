console.log("Welcome to the World of Objects!");

//kintamojo tipas - objektai

//primityvus ir objektiniai kintamieji

//objektas kompelsinis, gali tureti kelias reiksmes

const animal = {
  name: "Leo",
  age: 3, // savybe, properties
};

animal.age++;

animal.tail = true; //add new property

animal.name = "Leo the Lion"; //overwrite property

delete animal.tail; //delete property

let five = 5; //primityvas
let fivePlus = five; //copy value

fivePlus++;

console.log("Five: ", five);
console.log("Five Plus: ", fivePlus);

const animalPlus = animal; // copy reference

const realAnimal = { ...animal }; //copy object spread operator

realAnimal.age = 10;

animalPlus.age++;

console.log("Animal: ", animal);
console.log("Animal Plus: ", animalPlus);
console.log("Real Animal: ", realAnimal);

console.log(animal == animalPlus);

const person1 = {
  name: "John",
  age: 20,
};

const person2 = {
  name: "John",
  age: 20,
};

console.log(person1 == person2);

console.log(person1);

// console.log(animal, typeof animal);
// console.log("Name: ", animal.name);
