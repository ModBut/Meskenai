console.log("Welcome to buttons!");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("You clicked me!");
});

button.addEventListener("click", () => {
  console.log("No, you clicked me!");
});

button.addEventListener("mouseover", () => {
  console.log("Stop touching me!");
});

button.addEventListener("mouseout", () => {
  console.log("I said stop touching me!");
});

document.querySelectorAll(".container button").forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.innerText;
    console.log(`You clicked ${text}!`);
  });
});

// const buttons = document.querySelectorAll('.container button');
// for (const button of buttons) {
//     button.addEventListener('click', _ => {
//         const text = button.innerText;
//         console.log(`You clicked ${text}!`);
//     });
// }

const h1 = document.querySelector("h1");
const what = document.querySelector(".click-me");

what.addEventListener("click", () => {
  console.log(h1.innerText);
});

const input = document.querySelector("input");
const submit = document.querySelector("button.submit");

submit.addEventListener("click", () => {
  console.log(input.value);
  value = "";
});

const google = document.querySelector("a");

google.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout((_) => {
    location.href = e.target.href;
  }, 2000);
  console.log("You clicked the link!");
});

document.querySelector(".parent").addEventListener("click", () => {
  console.log("parent clicked");
});

document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("child clicked");
});
