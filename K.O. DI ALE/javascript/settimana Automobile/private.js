class Automobile {
  constructor(marca, modello, annoDiFabbricazione) {
      this.marca = marca;
      this.modello = modello;
      this.annoDiFabbricazione = annoDiFabbricazione;
  }

  
  #calcolaEtà() {
      const annoCorrente = new Date().getFullYear();
      return annoCorrente - this.annoDiFabbricazione;
  }

  
  mostraEtà() {
      const età = this.#calcolaEtà();
      console.log(`L'età dell'automobile ${this.marca} ${this.modello} è di ${età} anni.`);
  }
}

const miaAuto = new Automobile('Volkswagen', 'troc', 2015);
miaAuto.mostraEtà();