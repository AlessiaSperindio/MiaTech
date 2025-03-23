class Automobile {
    static auto1 = "auto 1" ;
    static auto2 = "auto 2";
    static chilometraggio = "chilometraggio";

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
    
    static confrontaChilometri(auto1,auto2,chilometraggio = 0 ) {
        auto1  = auto2 
        return `confrontando il ${this.chilometraggio}, ${this.auto1} ha gli stessi km di ${this.auto2}`;
      }
      static confrontachilometri(auto1,auto2,chilometraggio) {
        chilometraggio=auto1 < auto2 
        return `I ${this.auto1} km della prima auto sono meno dei  ${this.auto2} km della seconda auto`;
      }
    }
    
const primaFraLeDue = new Automobile("porche", "carrera","", "200000", "", 100000);
const secondaFraLeDue = new Automobile ("lamborghini", "model1","", "20000", "", 1000);
console.log(primaFraLeDue);
console.log(secondaFraLeDue);


console.log(this.chilometraggio.auto1);
console.log(Automobile.auto1(20000)); 
console.log(Automobile.auto2(3000)); 




