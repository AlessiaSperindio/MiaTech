function promiseResolved() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promessa risolta!");
        }, 1000);
    });
}


function anotherPromiseResolved() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Un'altra promessa risolta!");
        }, 500);
    });
}


function promiseRejected() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Promessa rifiutata!");
        }, 800);
    });
}

Promise.allSettled([
    promiseResolved(),
    anotherPromiseResolved(),
    promiseRejected()
]).then((results) => {
    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log("Successo:", result.value);
        } else {
            console.log("Errore:", result.reason);
        }
    });
});