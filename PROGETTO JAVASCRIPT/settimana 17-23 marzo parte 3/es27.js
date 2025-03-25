function operazione() {
    try {
        
        let risultato = 10 / 0; 
        console.log("Risultato:", risultato);
    } catch (errore) {
        
        console.error("Si è verificato un errore:", errore.message);
    } finally {
        
        console.log("Operazione completata.");
    }
}

operazione();