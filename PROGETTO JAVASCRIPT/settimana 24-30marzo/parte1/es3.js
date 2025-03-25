function primaFunzione(callback) {
    console.log("Eseguo la prima operazione...");
    
    setTimeout(() => {
        console.log("Prima operazione completata.");
        
        callback();
    }, 1000);
}

function secondaFunzione() {
    console.log("Eseguo la seconda operazione...");
    
    setTimeout(() => {
        console.log("Seconda operazione completata.");
    }, 1000);
}

primaFunzione(secondaFunzione);
