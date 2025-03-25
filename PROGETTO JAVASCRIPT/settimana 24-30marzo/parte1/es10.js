function promessaRifiutata() {
    return new Promise((_, reject) => {
        reject("Si è verificato un errore!");
    });
}

promessaRifiutata()
    .catch((errore) => {
        console.log(errore);
    });