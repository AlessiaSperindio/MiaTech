/*crea una classe chiamata Automobile con le seguenti proprietà:
marca, modello, anno.
crea un costruttore per inizializzare queste proprietà.
aggiungi un metodo descrizione() che restituisce una stringa con una descrizione dell'automobile.*/

class Automobile {
    marca = ""
    modello = ""
    anno = 0

    constructor(marca, modello, anno) {
        this.marca = marca
        this.modello = modello
        this.anno = anno
    }
}
let mercedes = new Automobile("mercedes", " benz", 2010);

class Cavalli extends Automobile {
    descrizione = ""
    constructor(marca, modello, anno, descrizione) {
        super(marca, modello, anno);
        this.descrizione = descrizione;
    }
}
let velocità = new Cavalli("Mercedes", "benz", 2010, "190cv");
console.log(velocità);
console.log(Automobile);