function caricaDati(valore) {
    return new Promise((resolve, reject) => {
        
        if (valore < 0) {
            reject('Errore: il valore non può essere negativo.');
        } else {
            
            setTimeout(() => {
                resolve(`Dati caricati con successo per il valore: ${valore}`);
            },
             1000
            );
        }
    });
}


caricaDati(-1)
    .then((risultato) => {
        console.log(risultato);
    }
)
    .catch((errore) => {
        console.error(errore); 
    }
);