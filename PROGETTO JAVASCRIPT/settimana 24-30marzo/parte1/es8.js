function getNumberAfterOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 100); 
            resolve(number);
        }, 1000);
    });
}

getNumberAfterOneSecond()
    .then((number) => {
        console.log(` Numero iniziale: ${number}` );
        if (number % 2 === 0) {
            return number * 2; 
        } else {
            return number + 1; 
        }
    })
    .then((result) => {
        console.log(` Risultato finale: ${result}` );
    })
    .catch((error) => {
        console.error('Si è verificato un errore:', error);
    });
