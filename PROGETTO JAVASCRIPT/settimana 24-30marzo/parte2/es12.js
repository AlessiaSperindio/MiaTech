function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve("La promessa è stata risolta!");
        } else {
            reject("La promessa è stata rifiutata!");
        }
    });
}
function secondaPromessa(messaggio) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve( `${messaggio} Ecco il risultato della seconda promessa. `);
        }, 1000
    );
    });
}


    randomPromise()
    .then((risultato) => {
        console.log(risultato);
        return secondaPromessa(risultato);
    })
    .then((risultatoFinale) => {
        console.log(risultatoFinale);
    })
    .catch((errore) => {
        console.error(errore);
    });
    secondaPromessa()
    .then((risultato) => {
        console.log(risultato);
        return randomPromise(risultato);
    })
    .then((risultatoFinale) => {
        console.log(risultatoFinale);
    })
    .catch((errore) => {
        console.error(errore);
    });
    
    
    
    
