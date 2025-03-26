function promessa1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promessa 1 risolta dopo 2 secondi");
        }, 2000);
    });
}

function promessa2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promessa 2 risolta dopo 5 secondi");
        }, 5000);
    });
}

Promise.race([promessa1(), promessa2()])
    .then((risultato) => {
        console.log(risultato); 
    })
    .catch((errore) => {
        console.error("Si è verificato un errore:", errore);
    });