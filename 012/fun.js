console.log("Have fun with functions!");

console.log("Funcions declaration");

//funkcijos deklaracija
let fun1 = function () {
  return "This is really fun1";
  console.log("This is fun1");
};

// let fun1 = function() {
//   console.log("This is fun1 clone");
// }

let fun2 = fun1(); //jei priskirsim skliaustelius, gausim funcijos rezultata

console.log("fun2:", fun2, typeof fun2);

let cl = console.log;

cl("BEVERLY HILLS");

console.log("cl:", cl, typeof cl);

// console.log("fun2:", fun2, typeof fun2);

console.log("End of function declaration");

// function rand(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

console.log("Start of the program");

//calling the function
fun1();
fun1();
fun1();

console.log("-----End of the program--------");

let fun3 = function () {
  console.log("This is fun3");
};

// arrow function

let fun4 = () => {
  console.log("This is fun4");
};

//one-liner arrow function
let fun5 = () => console.log("This is fun5");

let fun6 = () => {
  return "This is really fun6";
};

let fun7 = () => "This is really fun7";

fun3();
fun4();
fun5();

console.log(fun6());
console.log(fun7());

//skliausteliuose-parametrai (kintamasis)

let fun8 = (day = "Sunday") => {
  return "Today is " + day;
};

let today = "Friday";

console.log(fun8(today)); //argumentas

today = "Saturday";

console.log(fun8(today)); //argumentas

console.log(fun8());

let fun9 = (a, b = 10) => {
  return a - b;
};

let a = 2;
let b = 3;
let c = 4;

console.log(fun9(b, a, c));

console.log(fun9(b));

let fun10 = (x) => 3 * x;

console.log(fun10(8));

let fun11 = () => console.log("This is dash");

fun11();
