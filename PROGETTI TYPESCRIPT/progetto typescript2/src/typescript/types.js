"use strict";
//se inserisco un interfaccia:
/*interface UserAutInfo{
    isAuth:boolean,
    Verify : boolean
}*/
//const array:(string|number|null)[];diventa poi :
/*const printArray (array,{
    name:"ale",
    age: 32,
    isAuth: true,
    birth: new Date(),
    colors:array,
    auth:{
        isAuth:true,
        Verify: false
    }
});*/
// Crea una funzione addTodo che prende un titolo come parametro e restituisce un nuovo oggetto Todo con un id unico e completed impostato su false.
//Aggiungi il nuovo Todo all'array todos.
var todos = [];
// Funzione per generare un ID unico (ad esempio usando la data e un contatore)
var nextId = 1;
function addTodo(title) {
    var newTodo = {
        id: nextId++,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}


            
