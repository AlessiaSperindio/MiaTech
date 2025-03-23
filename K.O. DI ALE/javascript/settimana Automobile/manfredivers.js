class Automobile {
    constructor(marca, modello, anno, chilometraggio) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
      this.chilometraggio = chilometraggio
      
    }
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
    
  
  
  
  class Elettrica extends Automobile {
  
    constructor(marca, modello, anno, chilometraggio, autonomia) {
      super(autonomia);
      this.autonomia = autonomia;
    }
  
    /*descrizione() {
      return `${super.descrizione()}` +  `con un'autonomia di ${this.autonomia} km`
    }*/
    ricarica (km) {
      this.autonomia += km;
    }
  
  };
  
  const myCar = new Automobile('fiat', 'panda', 2020, 10000);
  const elettrica = new Elettrica('tesla', 'model1', 2025, 10000, 400);
  
  elettrica.ricarica(1000);
  
  /*console.log(elettrica.descrizione());*/

  
  
  Automobile.prototype.saluta = function () {
    console.log(`hi! My name is ${this.marca} and ${this.modello}`);
};

Elettrica.prototype.saluta = function () {
    console.log(`hi! My name is ${this.marca} and ${this.modello}`);
};


  const jeep = new Automobile('jeep','renegade' );
  const saab = new Automobile('saab', 'model1');
  console.log(jeep.saluta());
  
  console.log(saab.saluta());
  const electricJeep = new Elettrica ('jeep','electricrenegade');

  console.log(electricJeep.saluta());


  


  

