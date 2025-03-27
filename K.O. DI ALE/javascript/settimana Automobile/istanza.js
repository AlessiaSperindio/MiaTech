class Automobile {
    constructor(marca, modello) {
        this.marca = marca;
        this.modello = modello;
    }

    static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return `L'oggetto è un'istanza della classe ${classe.name}.`;
        } else {
            return `L'oggetto non è un'istanza della classe ${classe.name}.`;
        }
    }
}


class Camion {
    constructor(marca, modello) {
        this.marca = marca;
        this.modello = modello;
    }
}


const auto = new Automobile('Fiat', 'model1');
const camion = new Camion('Iveco', 'model2');


console.log(Automobile.verificaIstanza(auto, Automobile));
console.log(Automobile.verificaIstanza(camion, Automobile)); 