function descriviFamiglia(mamma) {
    return `Nome: ${mamma.nome}, Età: ${mamma.eta}, Professione: ${mamma.professione}`;
};


const mammaEsempio = {
    nome: "Maria",
    eta: 70,
    professione: "casalinga"
};


const descrizione = descriviFamiglia(mammaEsempio);
console.log(descrizione);