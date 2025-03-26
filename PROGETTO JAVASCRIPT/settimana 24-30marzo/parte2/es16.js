function promessaDopoDueSecondi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promessa è stata risolta!");
        }, 2000);
    });
}


async function stampaMessaggio() {
    const messaggio = await promessaDopoDueSecondi();
    console.log(messaggio);
}


stampaMessaggio();