class Automobile {
    #contatoreChiamate = 0;

    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;

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

    incrementaContatore() {
        this.#contatoreChiamate
        return (`le chiamate sono aumentate di  ${this.#contatoreChiamate + 500} volte `)
    }
};
const chiama = new Automobile();
console.log(chiama.incrementaContatore());
console.log(chiama.numeroChiamate());

const lamborghini = new Automobile("lamborghini", "model1", 2025)
const volteTotali = new Automobile();
volteTotali.numeroChiamate();
console.log(lamborghini.incrementaContatore());
console.log(lamborghini.descrizione());
console.log(lamborghini.incrementaContatore());



