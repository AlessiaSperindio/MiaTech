/* crea una sottoclasse chiamata Elettrica che estende la classe Automobile.
1classe Automobile.
class Persona{
nome= ""
cognome= ""
età=0

constructor(nome,cognome,età){
this.nome= nome
this.cognome= cognome
this età = età
}
}
let mario = new persona ("mario"," rossi", 30);
console.log(mario);
2sottoclasse elettrica che estende Automobile.

class Operatore extends Persona{
mansione=""
constructor (nome,cognome,età,mansione){
super(nome,cognome,età);
this.mansione= mansione;
}
}
let pizzaiolo= new Operatore("carlo", "Bufala", 25, "pizzaiolo");


aggiungi una nuova proprietà autonomia per rappresentare l'autonomia della batteria in km.

classe Persona{
nome:""
cognome:""
eta:0

static Pianeta= "Terra"

constructor(nome, cognome, età){
this.nome=nome
this.cognome=cognome
this.età=età
}
static creaGemelloPaolo(persona){
let gemello=new Persona ("paolo",persona.cognome,persona.età)}
return gemello
}
Sovrascrivi il metodo descrizione(Cavalli) per includere anche l'autonomia.

aggiungi un metodo ricarica (km )che aumenta l'autonomia della batteria */


class Automobile {
    marca = ""
    modello = ""
    anno = 0



    constructor(marca, modello, anno) {
        this.marca = marca
        this.modello = modello
        this.anno = anno
    }
     descrizione() {
        
        return `${this.marca} ${this.modello} ${this.anno}`
        
    };
}


let mercedes = new Automobile("mercedes", " benz", 2010);
console.log(mercedes.descrizione());

class Elettrica extends Automobile {
    autonomia = ""
    constructor(marca, modello, anno, autonomia) {
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }
    descrizione(){
        return super.descrizione()+` ${this.autonomia}`
    }
}
let alimentazione = new Elettrica("mercedes", "benz", 2010, "500 km");
console.log(alimentazione.descrizione());

/*aggiungi un metodo ricarica (km )che aumenta l'autonomia della batteria*/ 
class AddAutonomy extends Automobile {
    
    ricarica = "km"
    constructor(marca, modello, anno, autonomia, ricarica) {
        super(marca, modello, anno, autonomia);
        this.ricarica = ricarica;
    }
    descrizione(){
        return super.descrizione()+ ` ${this.ricarica}`
    }
}
let recharge = new AddAutonomy("mercedes", "benz", 2010,"500km","20km");
console.log(recharge.descrizione());
console.log(alimentazione.descrizione());


function aR(alimentazione){
    let ricaricaAutonomia=alimentazione
    function altatensione (ricarica){
    return ricaricaAutonomia+ricarica}
    return altatensione}
    
    let piuAutonomia=aR(500);
    console.log(piuAutonomia(20));
    
    

