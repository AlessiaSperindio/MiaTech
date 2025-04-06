class Automobile {


    constructor(marca, modello, anno, km, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
        this._chilometraggio = chilometraggio;
    }

    
    get chilometraggio() {
        return this._chilometraggio;
    }

    
    set chilometraggio(nuovoChilometraggio) {
        if (nuovoChilometraggio >= this._chilometraggio) {
            this._chilometraggio = nuovoChilometraggio;
            console.log(`Chilometraggio aggiornato a: ${this._chilometraggio}`);
        } else {
            console.log("Errore: Il nuovo chilometraggio deve essere maggiore o uguale al chilometraggio attuale.");
        }
    }
}





const setkm = new Automobile("fiat", "panda", 2000, 99);

const setKmTRoc = new Automobile("volkwagen", "troc", 2020, 100000);
setkm.Chilometraggio2 = 900000;

console.log(`Chilometraggio attuale: ${setkm.chilometraggio}`);


setkm.chilometraggio = 12000;


setKmTRoc.chilometraggio = 9000;
