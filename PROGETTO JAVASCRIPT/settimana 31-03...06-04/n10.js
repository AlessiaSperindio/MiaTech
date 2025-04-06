function aggiungiBottone() {
    const paragrafo = document.getElementById("mioParagrafo");
    paragrafo.innerHTML = 'Questo è un paragrafo di esempio. <button onclick="alert(\'Hai cliccato il bottone!\')">Cliccami!</button>';
}


document.getElementById("aggiungiBottone").addEventListener("click", aggiungiBottone);
