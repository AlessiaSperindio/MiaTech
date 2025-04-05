let score = parseInt(prompt("Inserisci il tuo punteggio:"));


if (score >= 90 && score <= 100) {
    console.log("voto ottimo");
} else if (score >= 70 && score < 90) {
    console.log("voto buono");
} else if (score >= 60 && score < 70) {
    console.log("voto sufficiente");
} else if (score <= 59) {
    console.log("voto insufficiente");
} else {
    console.log("Punteggio non valido");
}