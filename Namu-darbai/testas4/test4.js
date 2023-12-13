//1.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const h2Pirmas = document.querySelector(".h2-1");
const h2Antras = document.querySelector(".h2-2");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  h2Pirmas.innerText = rand(1, 6);
  h2Antras.innerText = rand(1, 6);
  if (h2Pirmas.innerText === h2Antras.innerText) {
    h2Pirmas.classList.add("red");
    h2Antras.classList.add("red");
  } else {
    h2Pirmas.classList.remove("red");
    h2Antras.classList.remove("red");
  }
});

//2.

const masyvas = [];

const button1 = document.querySelector(".but");
const h3Pirmas = document.querySelector(".h3-1");

button1.addEventListener("click", () => {
  let atsitiktiniaiSkaiciai = rand(1, 10);
  masyvas.push(atsitiktiniaiSkaiciai);
  console.log(masyvas);

  let sum = masyvas.reduce((total, num) => total + num, 0);
  h3Pirmas.innerText = "Sum: " + sum;
});

//3.

const africa = [
  "Zebras",
  "Liūtas",
  "",
  "Raganosis",
  "",
  "Raganosis",
  "Begemotas",
];

const ul = document.querySelector("ul");

for (let i = 0; i < africa.length; i++) {
  console.log(africa);

  const liElementas = document.createElement("li");
  const tekstas = document.createTextNode(africa[i]);

  liElementas.appendChild(tekstas);
  ul.appendChild(liElementas);
}
