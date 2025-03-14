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

    get description() {
        return this.descrizione();
    }
    descrizione() {
        return (this.marca) + (this.modello) + (this.anno);
    }
}
const Audi = new Automobile("Audi", "A4", 2007,);
console.log(Audi.descrizione());