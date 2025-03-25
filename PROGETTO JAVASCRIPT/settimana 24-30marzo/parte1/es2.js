function operazioneConCallback(num1, num2, callback) {
    
    const risultato = num1 + num2;
    
    callback(risultato);
}

function stampaRisultato(risultato) {
    console.log("Il risultato dell'operazione è:", risultato);
}

operazioneConCallback(5, 10, stampaRisultato);
