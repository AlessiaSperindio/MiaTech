/*automobile:
crea una classe chiamata Automobile con le seguenti proprietà:
marca, modello, anno.
crea un costruttore per inizializzare queste proprietà.
aggiungiun metodo descrizione() che restituisce una stringa con una descrizione dell'automobile.
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]);
source:MDN*/

class Automobile {
  constructor(marca, modello, anno) {
    this.marca = marca
    this.modello = modello
    this.anno = anno

  };


  descrizione() 
    {
    return this.description()=(this.marca) + (this.modello) + (this.anno);
  }
  
 saluta() {

    return this.hello()="ciao! la mia macchina è " + ` ${this.marca}` + ` ${this.modello}`;
  
 
}
}
const audi = new Automobile("Audi", "A4", 2007,);
console.log(audi.descrizione());
console.log(audi.saluta());
/*aggiungi metodi e proprietà:
aggiungi una proprietà chilometraggio alla classe Automobile.*/
/*function Addkm (marca,modello,anno,chilometraggio) {
    this.marca= marca
    this.modello = modello
    this.anno = anno
  this.chilometraggio = chilometraggio;
}
  const aggiungiChilometri= new Automobile("Audi","A4",2007,"100'000 km");
    /*
aggiungi un metodo aggiungiChilometri(km) che aumenta il chilometraggio dell'automobile.
Aggiungi un metodo mostraChilometraggio() che restituisce il chilometraggio attuale dell'automobile.*/


/*function addkm (){
    return this.chilometraggio()+$

}
let addkm= new Automobile ("100'000 km");*/
/*console.log(this.Addkm());*/


Automobile.prototype.chilometraggio = "100000km"
let km = new Automobile("Audi", "A4", 2010, "100000km")
console.log(km.chilometraggio);


function aggiungiChilometraggio(chilometraggio){
   {
  this.chilometraggio= chilometraggio
  return this.chilometraggio ("km");
}
aggiungiChilometraggio() {
  return this.chilometraggio()=` ${this.marca}` + ` ${this.modello}`+` ${this.anno}` + ` ${this.chilometraggio}`;
}

console.log(Automobile, aggiungiChilometraggio());

/*get MostraChilometraggio() {
  this.addkm = addkm
  return "200000km"
}
const audiTotalkm = new Automobile("Audi", "A4", 2007, "100000km", "200000km")
console.log(audiTotalkm, MostraChilometraggio());


/*sottoclasse Elettrica
crea una sottoclasse chiamata Elettrica che entende la classe Automobile.
class Elettrica extends Automobile{
this}
aggiungi una nuova proprietà autonomia per rappresentare l'autonomia della batteria in km.
sovrascrivi il metodo descrizione()per includere anche l'autonomia.
aggiungi un metodo ricarica(km) che aumenta l'autonomia della batteria.*/

/*class Elettrica extends Automobile {
  autonomia = ""
  constructor(marca, modello, anno, autonomia) {
    super(marca, modello, anno);
    this.autonomia = autonomia;
  }
  descrizione() {
    return super.descrizione() + ` ${this.autonomia}`
  }
  function() {

    return this.saluta() = "ciao! la mia macchina è " + ` ${this.marca}` + ` ${this.modello}`;
  }
} saluta()
let alimentazione = new Elettrica("mercedes", "benz", 2010, "500 km");
console.log(alimentazione.descrizione());

function Ricarica(ricarica) {
  this.ricarica = ricarica
  return this.ricarica + ` ${this.autonomia}`

} descrizione()
const totalkm = new Elettrica("mercedes", "benz", 2010, "10000km")
console.log(totalkm.descrizione());
/*saluta()
aggoiungi un metodo saluta() alla classe Automobile utilizzando la prototype chain.
questo metodo dovrebbe restituire una stringa con un saluto che include la marca e il modello dell'automobile.
verifica che tutte le istanze della classe Automobile (e le sue sottoclassi)possano accedere a questo metodo.*/
/*const jeep = {
  marca: "",
  modello: "",

  function(marca, modello) {
    this.marca = marca
    this.modello = modello
    return this.saluta() = "ciao! la mia macchina è " + ` ${this.marca}` + ` ${this.modello}`;
  },
}; saluta()
const newjeep = new Automobile("jeep", "renegade", 2005)
console.log(newjeep.saluta());
/* A constructor function
function Box(value) {
  this.value = value;
}/*

// Properties all boxes created from the Box() constructor
// will have
/*
  Automobile.prototype.saluta = function () {
    return "Ciao! Sono una"+` ${this.marca} +${this.modello}`;
};
 saluta()

function Volkswagen(marca, modello) {
  this.marca = marca;
  this.modello = modello;
};



console.log(Automobile.saluta());*/