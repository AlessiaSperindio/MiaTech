const pulsante = document.getElementById('cambiaTesto');
const paragrafo = document.getElementById('mioParagrafo');

pulsante.addEventListener('click', function() {
    
    paragrafo.textContent = 'Il testo è stato cambiato!';
});