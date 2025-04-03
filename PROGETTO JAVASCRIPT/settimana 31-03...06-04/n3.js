


function salvaValore(chiave, valore) {
    sessionStorage.setItem(chiave, valore);
    console.log(`Valore salvato: ${chiave} = ${valore}`);
}

function recuperaValore(chiave) {
    const valore = sessionStorage.getItem(chiave);
    console.log(`Valore recuperato: ${chiave} `);
    return valore;
}

function rimuoviValore(chiave) {
     sessionStorage.removeItem(chiave);
    console.log(`Valore rimosso: ${chiave}`);
}


salvaValore('nome', 'Alessia');
recuperaValore('nome');
rimuoviValore('nome'); 