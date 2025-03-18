

class Automobile {
  autonomia;
  constructor(marca, modello, anno, initialnumber = 1000,) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = initialnumber
  }
  descrizione = (marca, modello, autonomia) => {
    this.marca = marca;
    this.modello = modello;
    this.autonomia = autonomia;


    return (`questa ${this.marca} è del modello ${this.modello} e ha ${this.autonomia}km di autonomia`);

  }


  aggiungiChilometri = (initialnumber = 1000) => {
    this.chilometraggio += initialnumber;

    return (`questa ${this.marca} ha ${this.chilometraggio} km`);
  }

  mostraChilometraggio = (initialnumber = 100000) => {
    this.chilometraggio += initialnumber;
    return (`${this.marca} runs with km ${this.chilometraggio}.`);
  }
  
}


class Elettrica extends Automobile {

  constructor (autonomia = 0,add = 0) {
    super (autonomia,add );
    this.autonomia = autonomia;
    this.add = add;

  }
  ricarica = (add = 300) => {
    this.autonomia += add;
    return (`${this.marca} aumenta di  ${this.autonomia} km la sua autonomia grazie alla ricarica .`)
      }

}
const ford = new Automobile("ford");
const km = new Automobile("ford", 20000);
const showKm = new Automobile("ford", 20000 + 1000);
const recharge = new Elettrica ("ford", 0)
console.log(ford.descrizione("ford", "fusion",500));
console.log(km.aggiungiChilometri(20000));
console.log(showKm.mostraChilometraggio());
console.log(recharge.ricarica());




















