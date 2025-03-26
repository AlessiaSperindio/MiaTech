function gestisciPromessa(valoreBooleano) {
    return new Promise((resolve, reject) => {
        if (valoreBooleano) {
            resolve("La promessa è stata risolta con successo!");
        } else {
            reject("La promessa è stata rifiutata.");
        }
    }
);
}


gestisciPromessa(true)
    .then((messaggio) => {
        return(messaggio);
    }
)
    .catch((errore) => {
        console.error(errore);
    }
);

gestisciPromessa(false)
    .then((messaggio) => {
        return(messaggio);
    })
    .catch((errore) => {
        console.error(errore);
    });