console.log("Hello");

// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant.
//In his country, it's usual to tip 15% if the bill value is between 50 and 300.
//If the value is different, the tip is 20%.

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

//ARRAYS

const friends = ["Michael", "Steven", "Peter"];

console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];

console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

console.log(calcAge);
