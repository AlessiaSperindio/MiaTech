class Automobile {
    _chilometraggio = 0;

    constructor(marca, modello, anno, km) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
        this._chilometraggio = km;
    }

    getChilometraggio() {
        return this._chilometraggio;
    }
};

const showKm = new Automobile("fiat", "panda", 2000, 22);
console.log(showKm.getChilometraggio());
