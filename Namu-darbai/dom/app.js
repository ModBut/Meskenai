//Pirma uzduotis

const h1 = document.querySelector("h1");

h1.style.color = "darkgreen"; //A DALIS

const i = document.querySelector("i");

i.classList.add("small"); //B DALIS

h1.classList.remove("main"); //C DALIS

const h2Pirmas = document.querySelector("h2"); //D DALIS

h2Pirmas.classList.add("first");
h2Pirmas.classList.remove("main");

const span = document.querySelector("h2 span"); //E DALIS

span.style.fontSize = "10px";
span.style.color = "grey";

console.log("Antra uzduotis");

const allh2 = document.querySelectorAll("h2"); //A DALIS
console.log(allh2.length);

const allh2NotClass = document.querySelectorAll("h2:not(.first)"); //B DALIS
console.log(allh2NotClass.length);

allh2.forEach((item) => {
  item.style.color = "skyblue"; //C DALIS
});

const divPrices = document.querySelectorAll(".prices h2");

divPrices.forEach((item) => {
  item.classList.add("price-tag"); //D DALIS
});

console.log(divPrices);

const classNew = document.querySelectorAll(".new");

classNew.forEach((item) => {
  item.style.textDecoration = "underline"; //E DALIS
});
console.log(classNew);

const gyvunuKategorija = document.querySelectorAll("ul:not(#zirafos)");

console.log("Gyvunu kategorijos: ", gyvunuKategorija.length); //F DALIS

const zirafos = document.querySelectorAll("#zirafos li:not(.like-button)");

console.log("Zirafos: ", zirafos.length);

const ulTagai = document.querySelectorAll("ul"); //G DALIS

ulTagai.forEach((item) => {
  item.style.border = "1px solid black";
  item.style.padding = "15px 50px";
});

const naujiGyvunai = document.querySelectorAll(".new"); //H DALIS

console.log("Nauji gyvunai su klase new: ", naujiGyvunai.length);

const liNew = document.querySelectorAll("#zirafos .new");

console.log("Zirafu kategorijoje nauju gyvunu yra: ", liNew.length);

const liNew1 = document.querySelectorAll("#plesrunai .new");

console.log("Plesrunu kategorijoje nauju gyvunu yra: ", liNew1.length);

const liNew2 = document.querySelectorAll("#gyvates .new");

console.log("Gyvaciu kategorijoje nauju gyvunu yra: ", liNew2.length);

const liNew3 = document.querySelectorAll("#zoliaedziai .new");

console.log("Zoliaedziu kategorijoje nauju gyvunu yra: ", liNew3.length);

console.log("Trecia uzduotis");

const button1 = document.querySelector("#h1-color"); //A DALIS
button1.addEventListener("click", () => {
  h1.style.color = "greenyellow";
});

const button2 = document.querySelector("#h1-font");
button2.addEventListener("click", () => {
  h1.style.fontSize = "10px";
});

const button3 = document.querySelector("#h1-color-back");
button3.addEventListener("click", () => {
  h1.style.color = "darkgreen";
});

const button4 = document.querySelector("#h1-font-back");
button4.addEventListener("click", () => {
  h1.style.fontSize = "32px";
});

i.addEventListener("click", () => {
  i.style.fontWeight = "bold";
}); //B DALIS

const pricesTag = document.querySelector(".prices");
pricesTag.addEventListener("click", () => {
  pricesTag.classList.toggle("prices-active");
}); // C DALIS

const contacts = document.querySelector("#contacts");

contacts.addEventListener("click", () => {
  contacts.classList.add("orange");
}); // D DALIS

const padidinti = document.querySelector("#contacts u");

padidinti.addEventListener("click", () => {
  contacts.style.fontSize = "20px";
});

const iksas = document.querySelector("#contacts b");

iksas.addEventListener("click", () => {
  contacts.style.color = "black";
});

iksas.addEventListener("click", () => {
  contacts.style.fontSize = "16px";
});

//Ketvirta uzduotis

// naujiGyvunai.addEventListener("dblclick", () => {
//   naujiGyvunai.classList.toggle("red");
// });

const doubleClick = document.querySelectorAll(".new")[0];

doubleClick.addEventListener("dblclick", () => {
  doubleClick.classList.toggle("red");
});

const doubleClick1 = document.querySelectorAll(".new")[1];

doubleClick1.addEventListener("dblclick", () => {
  doubleClick1.classList.toggle("red");
});

const doubleClick2 = document.querySelectorAll(".new")[2];

doubleClick2.addEventListener("dblclick", () => {
  doubleClick2.classList.toggle("red");
});

const doubleClick3 = document.querySelectorAll(".new")[3];

doubleClick3.addEventListener("dblclick", () => {
  doubleClick3.classList.toggle("red");
});

const didesniGyvunai = document.querySelectorAll("li:not(.like-button)")[0];

console.log(didesniGyvunai);

didesniGyvunai.addEventListener("dblclick", () => {
  didesniGyvunai.classList.toggle("animal");
});

const didesniGyvunai1 = document.querySelectorAll("li:not(.like-button)")[1];

didesniGyvunai1.addEventListener("dblclick", () => {
  didesniGyvunai1.classList.toggle("animal");
});

const didesniGyvunai2 = document.querySelectorAll("li:not(.like-button)")[2];

didesniGyvunai2.addEventListener("dblclick", () => {
  didesniGyvunai2.classList.toggle("animal");
});

const didesniGyvunai3 = document.querySelectorAll("li:not(.like-button)")[3];

didesniGyvunai3.addEventListener("dblclick", () => {
  didesniGyvunai3.classList.toggle("animal");
});

const didesniGyvunai4 = document.querySelectorAll("li:not(.like-button)")[4];

didesniGyvunai4.addEventListener("dblclick", () => {
  didesniGyvunai4.classList.toggle("animal");
});

const naujaKaina = document.querySelector(".prices");
const newElement = document.createElement("h2");
const newText = document.createTextNode("Senjorai tik: 1.99 eu");
newElement.appendChild(newText);
naujaKaina.appendChild(newElement);

const naujaKaina1 = document.querySelector(".prices");
const newElement1 = document.createElement("h2");
const newText1 = document.createTextNode("Senjorų grupė iki 10: tik 5.99 eur");
newElement1.appendChild(newText1);
naujaKaina1.appendChild(newElement1);

newElement1.classList.add("new");

newElement1.addEventListener("click", () => {
  newElement1.style.color = "green";
});
