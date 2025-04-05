function salvaValori() {
    
    localStorage.setItem('chiaveLocal', 'valoreLocal');
    console.log('Valore salvato in localStorage:', localStorage.getItem('chiaveLocal'));

   
    sessionStorage.setItem('chiaveSession', 'valoreSession');
    console.log('Valore salvato in sessionStorage:', sessionStorage.getItem('chiaveSession'));
}


function recuperaValori() {
    const valoreLocal = localStorage.getItem('chiaveLocal');
    console.log('Valore recuperato da localStorage:', valoreLocal);

    const valoreSession = sessionStorage.getItem('chiaveSession');
    console.log('Valore recuperato da sessionStorage:', valoreSession);
}


function rimuoviValori() {
    localStorage.removeItem('chiaveLocal');
    console.log('Valore rimosso da localStorage:', ('chiaveLocal'));

    sessionStorage.removeItem('chiaveSession');
    console.log('Valore rimosso da sessionStorage:',('chiaveSession'));
}


salvaValori();
recuperaValori();
rimuoviValori();