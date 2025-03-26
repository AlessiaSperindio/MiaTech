function funzione1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Risultato della funzione 1");
        }, 2000); 
    });
}

function funzione2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Risultato della funzione 2");
        }, 1000); 
    });
}


Promise.all([funzione1(), funzione2()])
    .then((risultati) => {
        console.log("Entrambe le promesse sono risolte:");
        console.log(risultati); 
    })
    .catch((errore) => {
        console.error("Si è verificato un errore:", errore);
    });