const oggettoOriginale = {
    nome: 'Alessia',
    età: 32
};


const copiaOggetto = {
    ...oggettoOriginale,
    professione: 'Ingegnere'
}

console.log('Oggetto Originale:', oggettoOriginale);
console.log('Copia Modificata:', copiaOggetto);