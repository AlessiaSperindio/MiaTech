//esercizio1:

class Automobile {

  constructor(marca, modello, anno, chilometraggio) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
  }
  descrizione(marca, modello, autonomia) {
    this.marca = marca;
    this.modello = modello;
    this.autonomia = autonomia;

    return (`questa ${this.marca} ha ${this.modello} e ${this.autonomia}`);

  }

aggiungiChilometri(chilometraggio = 0) {
  this.chilometraggio += chilometraggio;

  return (`questa ${this.marca} ha ${this.chilometraggio}km`);
}

 mostraChilometraggio(chilometraggio = 100000) {
  this.chilometraggio += chilometraggio;
  return (`${this.marca} runs with km ${this.chilometraggio}.`);
}

}
const ford = {
  marca: "Ford",
  modello: "focus",
  autonomia: "300km",
}

console.log(ford.descrizione());
const ford2 = {
  __proto__: ford,
}
console.log(ford2.descrizione());



let chilometraggio = ("100000 km");

chilometraggio.__proto__ = audi;
console.log(audi.chilometraggio);


let audi = [
  new Automobile("Audi2", "TT", 2008, "1000000km", "500km"),
  new Automobile("Audi1", "A4", 2007, "200000km", "400km"),
];


console.log(audi.aggiungiChilometri());
console.log(audi.mostraChilometraggio());
console.log(audi.descrizione());



class Elettrica extends Automobile {


  constructor(marca, autonomia) {
    super(marca);
    this.autonomia = autonomia;
  }
  let volkswagen = {
    marca:"volkswagen",
    autonomia:"500km",
      km: "300km"
  }
        ricarica(marca,autonomia,km) {

  this.km = km;
  return ricarica = (`con la ricarica massimizzata, il motore della macchina ${this.marca} arriva a ${this.autonomia}+ ${this.km} km di autonomia`);
}

saluta()
{
  return (`ciao!Questa ${this.marca} è di questo ${this.modello}`);
}
};

const saab = {
  marca: "Saab",
  modello: "900turbo"
}
console.log(saab.saluta());
const novemilaTurbo = {
  __proto__: saab,
};
console.log(novemilaTurbo.method());


saab.marca = "Saab";
saab.modello = "900turbo"
console.log(saab.saluta()); 
      
        
      








console.log(volkswagen.ricarica());

let fiat = {
  marca: "Fiat",
  modello: "panda"
};
let jeep = {
  marca: "jeep",
  modello: "renegade"
};

fiat.__proto__ = Automobile;
jeep.__proto__ = Automobile;




















