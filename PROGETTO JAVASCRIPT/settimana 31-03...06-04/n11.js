function creaLista() {

    const ul = document.createElement("ul");


    const elementi = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"];


    for (const i = 0; i < elementi.length; i++);{
        const li = document.createElement("li");
        li.textContent = elementi[i];
        ul.appendChild(li);
    }


    const listaDiv = document.getElementById(".listaDiv");
    listaDiv.appendChild(ul);
}
document.getElementById(".creaLista").addEventListener("click", creaLista);