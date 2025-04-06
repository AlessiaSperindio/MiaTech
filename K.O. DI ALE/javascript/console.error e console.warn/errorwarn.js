let frase = 'errore'; 

if (frase === 'errore') {
    console.error('Si è verificato un errore: la frase ha un  "errore".');
} else if (frase === 'avviso') {
    console.warn('Attenzione: la frase ha un "avviso".');
} else {
    console.log('Tutto è a posto: la frase giusta è : ' + frase + '.');
}