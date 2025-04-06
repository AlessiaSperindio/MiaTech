document.getElementById("myForm").addEventListener("submit", function(event) {
    
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;

    
    if (nome === "" || cognome === "") {
        event.preventDefault(); 
        alert("Per favore, compila entrambi i campi."); 
    } else {
        alert("Modulo inviato con successo!"); 
        
    }
});