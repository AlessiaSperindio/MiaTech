class Automobile {
    #calcolaEtà
    constructor(marca, modello, anno, chilometraggio,initialnumber = 0 ) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
      this.chilometraggio = chilometraggio
      this.#calcolaEtà = initialnumber;
      
    }
    
    descrizione=() =>{
      return (questa `${this.marca} è del modello ${this.modello}`);
    }
  
  
    aggiungiChilometri=(km) => {
      this.chilometraggio += km;
    }
  
    mostraChilometraggio =() =>  {
      return ` ${this.modello} ha ${this.chilometraggio} km.`
      
    }
    
    calcolaEtà (initialnumber = 2025)  {
        this.initialnumber = initialnumber
        this.#calcolaEtà -= this.anno
        
        return (`questa macchina ha ${this.#calcolaEtà} anni perchè è del  ${this.anno}`);
    }
    mostraEtà (initialnumber = 2025)  {
        this.initialnumber = initialnumber
        this.#calcolaEtà -= this.anno
        return (`questa macchina ha ${this.#calcolaEtà} anni perchè è del  ${this.anno}`);
    }
};
  
  
  class Elettrica extends Automobile {
  #calcolaEtà
    constructor( autonomia,anno,number = 0) {
      super(autonomia,number);
      this.anno = anno;
      this.autonomia = autonomia;
      
      this.#calcolaEtà = number;
    }
  
    /*descrizione() {
      return `${super.descrizione()}` +  `con un'autonomia di ${this.autonomia} km`
    }*/
    ricarica (km) {
      this.autonomia += km;
    }

    calcolaEtà (initialnumber = 2025)  {
        this.initialnumber = initialnumber
        this.#calcolaEtà -= this.anno
        
        return (`questa macchina ha ${this.#calcolaEtà} anni perchè è del  ${this.anno}`);
    }
    mostraEtà (initialnumber = 2025)  {
        this.initialnumber = initialnumber
        this.#calcolaEtà -= this.anno
        return (`questa macchina ha ${this.#calcolaEtà} anni perchè è del  ${this.anno}`);
    }
};
    const annoFabbricazione =new Automobile("fiat","model2",2000,"50000",2025);
    const etàAuto = annoFabbricazione.mostraEtà();
    console.log(etàAuto);
    
const annoFabbricazioneel = new Elettrica("600",2010,2025);
const etàAutoEl = annoFabbricazioneel.mostraEtà();
console.log(etàAutoEl);
  
  
  
  /*const età = calcolaEtà()-annoFabbricazione;
console.log(età)*/
  

  const myCar = new Automobile('fiat', 'panda', 2020, 10000);
  const elettrica = new Elettrica('tesla', 'model1', 2025, 10000, 400);
  
  elettrica.ricarica(1000);
  
  /*console.log(elettrica.descrizione());*/

  
  
  Automobile.prototype.saluta = function () {
    console.log(`hi! My name is ${this.marca} and ${this.modello}`);
};


  const jeep = new Automobile('jeep','renegade' );
  const saab = new Automobile('saab', 'model1');
  console.log(jeep.saluta());
  
  console.log(saab.saluta());
  

  
  

