/*aggiungi una proprietà chilometraggio alla classe Automobile.
aggiungi un metodo aggiungiChilometri(km)che aumenta il chilometraggio
dell'automobile .
Aggiungi un metodo mostraChilometraggio() che restituisce il chilometraggio attuale dell'automobile.*/




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

class mostraChilometraggio extends Automobile {
    aggiungiChilometri = ""
    constructor(marca, modello, anno, aggiungiChilometri) {
        super(marca, modello, anno);
        this.aggiungiChilometri = aggiungiChilometri;
    }
}
let aggiungi = new mostraChilometraggio("Mercedes", "benz", 2010, "190cv", "100000 km");
console.log(aggiungi);


