function processString(input) {
    try {
       
        if (typeof input !== 'string') {
            throw new TypeError('L\'input deve essere una stringa.');
        }

        
        const result = input.toUpperCase();
        console.log('Risultato:', result);
    } catch (error) {
        
        if (error instanceof TypeError) {
            console.error('Errore di tipo:', error.message);
        } else {
            console.error('Errore generico:', error.message);
        }
    }
}


processString('ciao'); 
processString(123); 
processString(null);