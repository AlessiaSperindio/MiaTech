class Automobile {
    #contatorechiamata = 0;

    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;

    }

    descrizione = () => {
        this.#contatorechiamata ++;
        return (`questa${this.marca} è del modello ${this.modello}`)

    }

    numeroChiamate() {
        this.#contatorechiamata ++;
        return (`  il metodo descrizione è stato cliccato  ${this.#contatorechiamata} volte `)

    }

}

const lamborghini = new Automobile("lamborghini", "model1", 2025)
const volteTotali = new Automobile();
volteTotali.numeroChiamate();
console.log(volteTotali.numeroChiamate());
console.log(lamborghini.descrizione());
console.log(volteTotali.numeroChiamate());


