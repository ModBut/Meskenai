console.log("Pirmas uzdavinys");

class Kibiras1 {
  constructor() {
    this.akmenuKiekis = 0;
  }

  prideti1Akmeni() {
    this.akmenuKiekis += 1;
  }

  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
  }

  kiekPririnktaAkmenu() {
    console.log(`Akmenu kiekis kibire: ${this.akmenuKiekis}`);
  }
}

const kibiras = new Kibiras1();

kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(3);
kibiras.kiekPririnktaAkmenu();

console.log("Antra ir sestas uzdaviniai");

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
    this.monetos = 0;
    this.banknotai = 0;
  }
  ideti(kiekis) {
    if (kiekis <= 2) {
      this.metaliniaiPinigai += kiekis;
      this.monetos++;
    } else this.popieriniaiPinigai += kiekis;
    this.banknotai++;
  }
  skaiciuoti() {
    console.log(
      `Pinigu suma pinigineje: ${
        this.metaliniaiPinigai + this.popieriniaiPinigai
      }`,
      "Monetos :",
      this.monetos,
      "Banknotai: ",
      this.banknotai
    );
  }
}

const naujaPinigine = new Pinigine();

naujaPinigine.ideti(3);
naujaPinigine.ideti(2);
naujaPinigine.ideti(8);
naujaPinigine.skaiciuoti();

console.log("Trecia uzduotis");

class Troleibusas {
  constructor() {
    this.keleiviuSkaicius = 0;
  }
  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
  }
  islipa(keleiviuSkaicius) {
    if (keleiviuSkaicius > 0) this.keleiviuSkaicius--;
  }
  vaziuoja() {
    console.log(
      `Troleibusu vaziuojanciu keleiviu skaicius: ${this.keleiviuSkaicius}`
    );
  }
}

const naujasTroleibusas = new Troleibusas();

naujasTroleibusas.ilipa(5);
naujasTroleibusas.islipa();
naujasTroleibusas.vaziuoja();

console.log("Ketvirtas uzdavinys");

console.log("Penktas uzdavinys");

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
  }

  idetiSureli(kiekis) {
    if (this.turinys.has("sureliai")) {
      this.turinys.set("sureliai", this.turinys.get("sureliai") + kiekis);
    } else {
      this.turinys.set("sureliai", kiekis);
    }
  }

  idetiPieno(kiekis) {
    if (this.turinys.has("pienas")) {
      this.turinys.set("pienas", this.turinys.get("pienas") + kiekis);
    } else {
      this.turinys.set("pienas", kiekis);
    }
  }

  idetiDuonos(kiekis) {
    if (this.turinys.has("duonos")) {
      this.turinys.set("duonos", this.turinys.get("duonos") + kiekis);
    } else {
      this.turinys.set("duonos", kiekis);
    }
  }

  krepselioTurinys() {
    console.log("Krepselio turinys");
    for (const produktas of this.turinys) {
      console.log(`${produktas[0]}: ${produktas[1]}`);
    }
  }
}

const krepselis = new PirkiniuKrepselis();

krepselis.idetiSureli(2);
krepselis.idetiPieno(1);
krepselis.idetiDuonos();
krepselis.idetiPieno(2);

console.log(krepselioTurinys);

console.log("Astuntas uzdavinys");

class Stikline {
  constructor(turis, kiekis) {
    this.turis = turis;
    this.kiekis = 0;
  }

  ipilti(kiekis) {
    if (kiekis + this.kiekis > this.turis) {
      this.kiekis == this.turis;
    } else {
      this.kiekis += kiekis;
    }
  }
  ispilti() {
    console.log(this.kiekis);
    this.kiekis = 0;
  }

  stiklinejeYra() {
    console.log(this.kiekis);
  }
}

const pilam = new Stikline(750);
const dusimtai = new Stikline(200);
const simtasPenk = new Stikline(150);
const simtas = new Stikline(100);

pilam.ipilti(500);
console.log(pilam);

console.log("Devintas uzdavinys");

class Grybas {
  constructor() {
    this.svoris = this.rand(5, 45);
    this.valgomas = !this.rand(0, 1);
    this.sukurmijes = !this.rand(0, 1);
  }

  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

class Krepsys {
  constructor() {
    this.dydis = 500;
    this.prikrauta = 0;
  }

  ideti(grybas) {
    if (grybas.valgomas && !grybas.sukurmijes) {
      grybas.prikrauta += grybas.svoris;
    }
    return this.dydis > this.prikrauta;
  }
}

const krepsys = new Krepsys();

// let s = 0;

while (krepsys.ideti(new Grybas())) {
  // s++;
  // if (s === 10) {
  //   break;
  // }
}

console.log(krepsys);
