
function operazioneAsync() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const successo = Math.random() > 0.5; 

            if (successo) {
                resolve("Operazione completata con successo!");
            } else {
                reject("Operazione fallita.");
            }
        }, 1000); 
    });
}


operazioneAsync()
    .then((messaggio) => {
        console.log(messaggio); 
    })
    .catch((errore) => {
        console.error(errore);
    })
    .finally(() => {
        console.log("Esecuzione del blocco finally: azione finale eseguita."); 
    });