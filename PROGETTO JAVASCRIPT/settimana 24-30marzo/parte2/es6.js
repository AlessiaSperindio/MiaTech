 async function esempioPromessa() {
    return new Promise((resolve, reject) => {
        
        const successo = Math.random() > 0.5; 

        setTimeout(() => {
            if (successo) {
                resolve("Operazione completata con successo!");
            } else {
                reject("Si è verificato un errore.");
            }
        }, 1000);
    })
    .finally(() => {
        console.log("Operazione completata, indipendentemente dal risultato.");
    });
}

esempioPromessa()
    .then(result => console.log(result))
    .catch(error => console.log(error));
