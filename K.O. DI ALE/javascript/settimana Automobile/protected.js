class Automobile {
    _controllaChilometri
    constructor(marca, modello, anno, chilometraggio, controllaChilometri, initialnumber = 0) {
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
}
const superoLimitekm = new Automobile("fiat", "panda", 2000, "200000", "", 100000);
console.log(superoLimitekm.controllaChilometri(200000));


class Elettrica extends Automobile {
    _controllaChilometri
    constructor(autonomia, chilometraggio, initialnumber, controllaChilometri) {
        super(autonomia, chilometraggio, initialnumber, controllaChilometri);
        this.initialnumber = initialnumber;
        this.chilometraggio = chilometraggio;
        this.autonomia = autonomia;
        this._controllaChilometri = controllaChilometri;
    }

    ricarica(km) {
        this.autonomia += km;
    }
    controllaChilometri = (chilometraggio = 0, initialnumber = 100000) => {
        if (this._controllaChilometri = chilometraggio > initialnumber)
            return `  Ha superato i ${this.initialnumber} km ,è arrivato a ${this.chilometraggio} km.`
    }
};

const superoLimitekmEl = new Elettrica("", "250000", "100000", "250000");
console.log(superoLimitekmEl.controllaChilometri(250000));











