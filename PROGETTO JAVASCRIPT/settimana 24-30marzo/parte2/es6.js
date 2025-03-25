async function nameesempio() {
    
} promessa() {
    try {
        return await new Promise((resolve, reject) => {
            const successo = Math.random() > 0.5;
            setTimeout(() => {
                if (successo) {
                    resolve(`Operazione completata con successo!`);
                } else {
                    reject(`Si è verificato un errore.`);
                }
            }, 
            1000
        );
        }
    )
    } finally {
        console.log(`Questa azione viene eseguita sempre, sia in caso di successo che di errore.`);
    }
}


console.log(result);
console.log(error);