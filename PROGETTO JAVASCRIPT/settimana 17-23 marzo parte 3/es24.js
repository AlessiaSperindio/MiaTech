function stampaMessaggio() {
    console.log("Questo è un messaggio stampato ogni secondo!");
}
const intervallo = setInterval(stampaMessaggio, 1000);

setTimeout(() => {
    clearInterval(intervallo);
    console.log("Intervallo fermato dopo 5 secondi.");
}
, 5000
);