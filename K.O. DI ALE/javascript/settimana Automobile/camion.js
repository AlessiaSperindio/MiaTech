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
    constructor(discoOrario=0) {
        super(discoOrario)
            this.discoOrario = discoOrario;
        }
    };


const foodTruck = new Camion (5);
console.log(foodTruck);
