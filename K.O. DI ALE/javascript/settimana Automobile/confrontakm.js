class Automobile {

    constructor(marca, modello, anno, chilometraggio, controllaChilometri, initialnumber = 0,) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
        this._controllaChilometri = controllaChilometri;
        this.initialnumber = initialnumber;
    }

    descrizione = () => {
        return (questa`${this.marca} è del modello ${this.modello}`);
    }


    aggiungiChilometri = (km) => {
        this.chilometraggio += km;
    }

    mostraChilometraggio = () => {
        return ` ${this.modello} ha ${this.chilometraggio} km.`

    }
    controllaChilometri = (chilometraggio = 0, initialnumber = 100000) => {
        if (this._controllaChilometri = chilometraggio > initialnumber)
            return `  Ha superato i ${this.initialnumber} km ,è arrivato a ${this.chilometraggio} km.`
    }

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return ` ${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore di ${auto2.marca} ${auto2.modello}`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore di ${auto1.marca} ${auto1.modello}.`;
        } else {
            return `Entrambe le automobili hanno lo stesso chilometraggio.`;
        }
    }
};

const auto1 = new Automobile("porche", "carrera", "", "200000", "", 100000);
const auto2 = new Automobile("lamborghini", "model1", "", "20000", "", 1000);
const risultato = Automobile.confrontaChilometraggio(auto1, auto2);
console.log(risultato);

