"use strict";
/*interface Todo {
    name: string,
    age: number,
    isAuth:boolean,
    birth?: Date,
    colors?:Todo,
}*/
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
var todos = ["", "", ""];
// Funzione per generare un ID unico (ad esempio usando la data e un contatore)
var nextId = 1;
function addTodo(title) {
    var newTodo, _a = {
        id: nextId++,
        title: title,
        completed: false
    }, number = _a.id, string = _a.title, boolean = _a.completed;
    todos.push(newTodo);
    return newTodo;
}
//  Aggiorna l'interfaccia Todo per 
// includere una proprietà opzionale
//  userId (number).
//Crea una funzione assignTodoToUser
//  che prende un todoId e un userId 
// e assegna l'utente al todo.
var userId = 5;
var assignTodoToUser = function (userId, obj) {
    console.log(userId, obj);
};
assignTodoToUser(userId, {
    id: 3,
    title: "userTodo",
    completed: false
});
console.log(assignTodoToUser);
