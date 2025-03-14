/*class Automobile {
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
console.log(Automobile);/*

/*aggiungi un metodo saluta alla classe automobile utilizzando il metodo prototype chain.*/
function Automobile (marca, modello, anno){
this.marca=marca;
this.modello=modello;
this.anno=anno
}
Automobile.prototype.marca = "Mercedes"
let marca = new Automobile ("mercedes")
Automobile.prototype.modello = "Benz"
Automobile.prototype.anno= 2010
Automobile.prototype.saluta = "MercedesBenz"
let saluto = new Automobile ("mercedes","benz",2010,)
 console.log(saluto.saluta);
 console.log(Automobile);
/*questo metodo dovrebbe restituire una stringa con un saluto che include la marca e il modello dell'automobile.
verifica tutte le istanze della classe automobile (e le sue sottoclassi) possano accedere a questo metodo.*/
