const $chiave = document.getElementById("nome");
const $valore = document.getElementById("cognome");

function salvaNome(chiave, valore) {
    localStorage.setItem(chiave, valore);
    console.log(` Nome salvato:${chiave} = ${valore}` );
}


function recuperaNome(chiave) {
    const Nome = localStorage.getItem(chiave);
    if (Nome) {
        console.log(` Nome recuperato:${chiave} ` );
    } else {
        console.log(` Nessun Nome trovato per la chiave: ${chiave}` );
    }
    return $valore;
}


function rimuoviNome(chiave) {
    localStorage.removeItem(chiave);
    console.log(` Nome rimosso per la chiave: ${chiave}` );
}


salvaNome('nome', 'cognome');
recuperaNome('nome');
rimuoviNome('nome');


