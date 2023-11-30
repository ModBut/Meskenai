console.log("Welcome to Magic world of array");

const arr1 = [
  [1, 7, 3],
  [4, 22, 6],
  [0, 8],
];

let sum = 0;

arr1.forEach((item) => {
  item.forEach((item1) => {
    sum += item1;
  });
});

console.log(sum);

/// isikelti is github!!!!!!

const arr3 = [-5, 8, -3, 0, 4, 2, -1, 0, 1, -9, 6];

console.log(arr3);

const arr31 = arr3.map((item) => {
  if (item < 0) {
    return 0;
  }
  return item;
});

console.log(arr31);

const arr32 = arr3.map((item) => {
  if (item < 0) {
    return 1;
  }
  return item;
});

console.log(arr32);

// const arr31 = [...arr3];

// arr31.forEach((item, index) => {
//   if (item < 0) {
//     arr31[index] = 0;
//   }
// });

// console.log(arr31);

// arr3.forEach((item, index) => {
//   if (item < 0) {
//     arr3[index] = 1;
//   }
// });

// console.log(arr3);

const colors = ["pink", "green", "blue", "yellow", "pink", "black", "pink"];

console.log(colors);

const colors1 = colors.map((item) => {
  if (item == "pink") {
    return "black";
  }
  return item;
});

//with ternary
//const colors1 = colors.map(item => item == 'pink' ? 'black' : item);

console.log(colors1);

const colors2 = [
  { color: "pink" },
  { color: "green" },
  { color: "blue" },
  { color: "yellow" },
  { color: "pink" },
  { color: "black" },
  { color: "pink" },
];

console.log(colors2);

const pinkIsBlack = colors2.map((item) => {
  if (item.color == "pink") {
    return "black";
  }
  return item.color;
});

console.log(pinkIsBlack);

const colors3 = [
  { color: "pink", id: 1, sky: "blue" },
  { color: "green", id: 2, sky: "blue" },
  { color: "blue", id: 3, tractor: "green" },
  { color: "yellow", id: 4, sky: "blue" },
  { color: "pink", id: 5, forest: "green" },
  { color: "black", id: 6, sky: "blue" },
  { color: "pink", id: 7, sky: "blue" },
];

const noPinkIsBlack = colors3.map((item) =>
  item.color == "pink" ? { ...item, color: "black" } : { ...item }
);

colors3[0].color = "red";
colors3[1].color = "red";

console.log(colors3);
console.log(noPinkIsBlack);

const allBlack = colors3.map((item) => ({
  ...item,
  color: "black",
}));

console.log(allBlack);

const colors4 = [
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
  ["pink", "green", "blue"],
  ["yellow", "pink", "black"],
];

const secondElementBlack = colors4.map((item) => {
  item[1] = "black";
  return item;
});

console.log(secondElementBlack);
