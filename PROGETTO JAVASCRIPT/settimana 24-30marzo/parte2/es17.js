function simulateAsyncOperation(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Operazione completata con successo!");
            } else {
                reject("Si è verificato un errore durante l'operazione.");
            }
        }, 1000);
    });
}

async function executeOperation(success) {
    try {
        const result = await simulateAsyncOperation(success);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

executeOperation(true); 
executeOperation(false); 