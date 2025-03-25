class Automobile {


    constructor(marca, modello) {
        this.marca = marca;
        this.modello = modello;
       
    }

    static verificaIstanza(oggetto, classe) {
        if (oggetto instanceof classe) {
            return (`${oggetto.constructor} è un'istanza di ${classe}.`);
        } else {
            return (`${oggetto.constructor} non è un'istanza di ${classe}.`);
        }
    }
}

class Camion extends Automobile {
    constructor(marca, modello) {
        super(marca, modello)
        this.marca = marca;
        this.modello = modello;
    }
};


const auto = new Automobile('Fiat', 'model1');
const camion = new Camion('Iveco', 'model2');


console.log(auto instanceof Automobile);
console.log(camion instanceof Camion);
console.log(Automobile.verificaIstanza(auto, Automobile));
console.log(Automobile.verificaIstanza(camion, Automobile));