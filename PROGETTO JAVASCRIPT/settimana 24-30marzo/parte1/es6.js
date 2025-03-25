esempioPromessa = () => {
    return new Promise((resolve, reject) => {

        const successo = Math.random() > 0.5;

        setTimeout(() => {
            if (successo) {
                resolve("Operazione completata con successo!");
            } else {
                reject("Si è verificato un errore.");
            }
        }, 1000
    );
    })
        .finally(() => {
            console.log("Questa azione viene eseguita sempre, sia in caso di successo che di errore.");
        });
}

esempioPromessa()
    .then(result => console.log(result))
    .catch(error => console.error(error));