class Automobile {
    #contatoreChiamate = 0;

    constructor(marca, modello, anno, km) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;

    }

    descrizione = () => {
        this.#contatoreChiamate ++;
        return (`questa ${this.marca} è del modello ${this.modello}`)

    }

    numeroChiamate() {
        this.#contatoreChiamate ++;
        return (`  il metodo descrizione è stato cliccato  ${this.#contatoreChiamate} volte `)

    }
    descrizione = () => {
        this.#contatoreChiamate ++;
        return (`questa${this.marca} è del modello ${this.modello}`)

    }

    #incrementaContatore(km = 0) {
        this.#contatoreChiamate ++;
        this.km = km;
    }


    aggiungiChilometri(km = 0) {
        if (km > 0) {
            for (let i = 0; i < km; i++) {
                this.#incrementaContatore();
            }
            return (`Aggiunti ${km} chilometri. Contatore attuale: ${this.#contatoreChiamate}`);
        }
        else {
            return ("Per favore, inserisci un numero di chilometri positivo.");
        }
    }
    mostraContatore() {
        return this.#contatoreChiamate;
    }
};



const chiama = new Automobile("jeep", "model3", 1999, 200);

console.log(chiama.aggiungiChilometri(4));
console.log(chiama.mostraContatore());
const lamborghini = new Automobile("lamborghini", "model1", 2000, 2025)

lamborghini.mostraContatore(2);
