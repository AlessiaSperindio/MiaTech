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
    constructor(marca, modello, chilometraggio, capacitàCarico) {
        super(marca, modello, chilometraggio);
        this.capacitàCarico = capacitàCarico;
    }
};


const miaAuto = new Automobile('saab', 'model3', 10000);


const mioCamion = new Camion('Iveco', 'Stralis', 50000, 12000);
console.log(mioCamion);