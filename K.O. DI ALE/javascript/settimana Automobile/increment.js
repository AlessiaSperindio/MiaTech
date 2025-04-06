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
            this.#incrementaContatore();
            console.log(` Chiamate effettuate: ${this.#contatoreChiamate}` );
    }
    descrizione = () => {
        this.#contatoreChiamate ++;
        return (`questa${this.marca} è del modello ${this.modello}`)

    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }
}

const increment = new Automobile();
increment.numeroChiamate(); 
increment.numeroChiamate(); 



