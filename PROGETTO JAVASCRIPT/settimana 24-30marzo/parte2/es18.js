function funzioneUno() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Risultato dalla funzione uno");
        }, 2000);
    });
}

function funzioneDue() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Risultato dalla funzione due");
        }, 3000);
    });
}


async function funzioneTerza() {
    const risultatoUno = await funzioneUno();
    const risultatoDue = await funzioneDue();
    
    console.log(risultatoUno);
    console.log(risultatoDue);
}


funzioneTerza();
