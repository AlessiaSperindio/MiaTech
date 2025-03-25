function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve("La promessa è stata risolta!");
        } else {
            reject("La promessa è stata rifiutata.");
        }
    });
}

randomPromise()
    .then(result => {
        console.log(result); 
        return "Manipolazione del risultato: " + result;
    })
    .then(manipulatedResult => {
        console.log(manipulatedResult); 
    })
    .catch(error => {
        console.error(error); 
    });