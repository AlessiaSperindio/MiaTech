function creaLista() {
   
    let ul = document.createElement("ul");

    
    let elementi = [
        "Elemento 1",
        "Elemento 2",
        "Elemento 3",
        "Elemento 4",
        "Elemento 5"
    ];

    
    for (let i = 0; i < elementi.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = elementi[i]; 
        ul.appendChild(li); 
    }

    
    let listaContainer = document.getElementById("listaContainer");
    listaContainer.appendChild(ul);
}


document.getElementById("creaLista").addEventListener("click", creaLista);
