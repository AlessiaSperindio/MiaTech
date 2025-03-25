function sommaEseguiCallback(a, b, callback) {
    
    const risultato = a + b;
    
    console.log("Il risultato della somma è:", risultato);
    
    callback();
}

function mioCallback() {
    console.log("Il callback è stato eseguito!");
}

sommaEseguiCallback(5, 3, mioCallback);