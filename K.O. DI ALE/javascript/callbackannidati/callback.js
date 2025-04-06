
function primaOperazione(callback) {
    console.log("Esecuzione della prima operazione...");

    
    const primoRisultato = 5 + 3; 

    
    callback(primoRisultato);
}


function secondaOperazione(valore, callback) {
    console.log("la seconda operazione ha questo risultato:", valore);

    
    const secondoRisultato = valore * 2; 
    
    callback(secondoRisultato);
}


function eseguiOperazioni() {
    primaOperazione(function(primoRisultato) {
        secondaOperazione(primoRisultato, function(secondoRisultato) {
            console.log("Risultato finale:", secondoRisultato);
        });
    });
}


eseguiOperazioni();