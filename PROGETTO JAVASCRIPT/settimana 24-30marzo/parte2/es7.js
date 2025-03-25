function creaPromessa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5); 
        }, 1000);
    });
}

creaPromessa()
    .then((numero) => {
        return numero * 2; 
    })
    .then((numeroDoppio) => {
        return numeroDoppio + 3; 
    })
    .then((risultatoFinale) => {
        console.log(risultatoFinale); 
    })
    .catch((errore) => {
        console.error('Si è verificato un errore:', errore);
    });