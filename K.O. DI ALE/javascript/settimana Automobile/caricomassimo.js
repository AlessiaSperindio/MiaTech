class Automobile {


    constructor(marca, modello, anno, km, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
        this._chilometraggio = chilometraggio;
    }
};

class Camion extends Automobile {
    constructor(marca, modello, caricoMassimo, caricoAttuale) {
        super(marca, modello, caricoMassimo, caricoAttuale)
        this.marca = marca;
        this.modello = modello;
        this.caricoMassimo = caricoMassimo;
        this.caricoAttuale = 0;
    }
    descrizione() {
        return (`Camion: ${this.marca} ${this.modello},Carico massimo: ${this.caricoMassimo} kg,Carico attuale: ${this.caricoAttuale} kg`);
    }
    carica(kg) {
        if (this.caricoAttuale + kg <= this.caricoMassimo) {
            this.caricoAttuale += kg;
            console.log(`Caricato ${kg} kg. Carico attuale: ${this.caricoAttuale} kg. `);
        } else {
            console.log(`Impossibile caricare ${kg} kg. Supererebbe il carico massimo di ${this.caricoMassimo} kg.`);
        }
    }
};


const foodTruck = new Camion("iveco", "model1", 2000, 20000);
console.log(foodTruck.carica(300));






console.log(foodTruck.descrizione());
foodTruck.carica(5000);
console.log(foodTruck.descrizione());
foodTruck.carica(6000); 