class Automobile {


    constructor(marca, modello, anno, km, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
        this._chilometraggio = chilometraggio;
    }

    getChilometraggio() {
        return this._chilometraggio;
    }
    setChilometraggio(Chilometraggio2 = 0) {
        if (Chilometraggio2 >= this._chilometraggio) {
            this._chilometraggio = Chilometraggio2;
        } else {
            console.log("Errore: il chilometraggio non può essere diminuito.");
        }
    }
};


const setkm = new Automobile("fiat", "panda", 2000, 99);
console.log(setkm.setChilometraggio());
const setKmTRoc = new Automobile("volkwagen", "troc", 2020, 100000);
setkm.Chilometraggio2 = 900000;
console.log(setKmTRoc.setChilometraggio());


setkm.chilometraggio = 12000;
console.log(setkm.chilometraggio);

setKmTRoc.chilometraggio = 9000;
console.log(setKmTRoc.chilometraggio); 