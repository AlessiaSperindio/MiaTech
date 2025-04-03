function salvaValori() {
    
    
    console.log(`Valore salvato in localStorage:`, localStorage.getItem(`chiaveLocal`));

    
    console.log(`Valore salvato in sessionStorage:`, sessionStorage.getItem(`chiaveStorage`));
}

function recuperaValori() {
    $valoreLocal = localStorage.getItem(`chiaveLocal`);
    console.log(`Valore recuperato da localStorage:`, $valoreLocal);

    const $valoreStorage = sessionStorage.getItem(`chiaveStorage`);
    console.log(`Valore recuperato da sessionStorage:`, $valoreStorage);
}


function rimuoviValori() {
    localStorage.removeItem(`chiaveLocal`);
    console.log(`Valore rimosso da localStorage:`, localStorage.getItem(`chiaveLocal`));

    sessionStorage.removeItem(`chiaveSession`);
    console.log(`Valore rimosso da sessionStorage:`, sessionStorage.getItem(`chiaveSession`));
}


salvaValori();
recuperaValori();
rimuoviValori();