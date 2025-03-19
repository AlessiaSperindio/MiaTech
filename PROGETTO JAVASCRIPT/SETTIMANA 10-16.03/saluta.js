class Automobile {
    autonomia;
    constructor(marca, modello, anno, initialnumber = 1000,) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
      this.chilometraggio = initialnumber
    }
    
        
      };



const fiat = {
    marca: "fiat",
    modello: "panda",
    
    saluta() {
        return "ciao! "+ (this.marca) + " è del modello " + (this.modello) ;
      }
    
  };
  console.log(fiat.saluta());

  const cinqueCento = {
    __proto__: fiat,
  };
  console.log(cinqueCento.saluta());
  cinqueCento.marca = "fiat",
  cinqueCento.modello = "cinquecento",
  console.log(cinqueCento.saluta());

class Elettrica extends Automobile {

    constructor (marca,modello,anno,chilometraggio,ricarica,autonomia ) {
      super (marca,modello,anno,chilometraggio,ricarica);
      
      this.autonomia = autonomia;
    
  
    }
    saluta() {
        return "ciao! "+ (this.marca) + " è del modello " + (this.modello) ;
      }

}
const audi= new Elettrica ("audi","a4",2000,"50000", "50300","400");

audi.marca = "audi";
audi.modello = "A3";
console.log(audi.saluta());