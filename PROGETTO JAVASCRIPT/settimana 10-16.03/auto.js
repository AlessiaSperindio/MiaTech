/*automobile:
crea una classe chiamata Automobile con le seguenti proprietà:
marca, modello, anno.
crea un costruttore per inizializzare queste proprietà.
aggiungiun metodo descrizione() che restituisce una ba con una descrizione dell'automobile.
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

    get description() {
        return this.descrizione();
    }
    descrizione() {
        return (this.marca) + (this.modello) + (this.anno);
    }
    
}
const Audi = new Automobile("Audi", "A4", 2007,);
console.log(Audi.descrizione());
const audikm= new Automobile ("Audi","A4",2007,"100000km")
console.log(audikm.descrizione());
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
let km = new Automobile ("Audi","A4",2010,"100000km")
 console.log(km.chilometraggio);
  
 function Aggiungikm(chilometraggio){
    this.chilometraggio=chilometraggio
 return "100500km";
}
const audiA4 = new Automobile("Audi","A4",2007,"100000km","100500km")
console.log(audiA4,Aggiungikm(km));

function MostraChilometraggio(addkm){
    this.addkm=addkm
 return "200000km"
}
const audiTotalkm= new Automobile("Audi","A4",2007,"100000km","200000km")
console.log(audiTotalkm,MostraChilometraggio());


/*sottoclasse Elettrica
crea una sottoclasse chiamata Elettrica che entende la classe Automobile.
class Elettrica extends Automobile{
this}
aggiungi una nuova proprietà autonomia per rappresentare l'autonomia della batteria in km.
sovrascrivi il metodo descrizione()per includere anche l'autonomia.
aggiungi un metodo ricarica(km) che aumenta l'autonomia della batteria.*/

class Elettrica extends Automobile {
    autonomia = ""
    constructor(marca, modello, anno, autonomia) {
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }
    descrizione(){
        return super.descrizione()+` ${this.autonomia}`
    }
}
let alimentazione = new Elettrica("mercedes", "benz", 2010, "500 km");
console.log(alimentazione.descrizione());

function ricarica(){
    this.ricarica=ricarica
    return this.ricarica+` ${this.autonomia}`
}
const totalkm= new Elettrica ("mercedes","benz", 2010,"10000km")
console.log(totalkm.descrizione());