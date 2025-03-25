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
    .then((risultato) => {
        return risultato + 3; 
    })
    .then((risultatoFinale) => {
        console.log(risultatoFinale); 
    });