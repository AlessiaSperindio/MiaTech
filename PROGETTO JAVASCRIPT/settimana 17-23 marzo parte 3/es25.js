function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisione per zero non è consentita.");
        }
        const result = a / b;
        console.log(`Il risultato è: ${result}`);
    } catch (error) {
        console.error(`Si è verificato un errore: ${error.message}`);
    }
};


divide(10, 2); 
divide(10, 0); 