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
// Esempio di array di todos
var todos = [
    { id: 1, userId: 1, title: "Fare la spesa", completed: false },
    { id: 2, userId: 2, title: "Pulire la casa", completed: true },
    { id: 3, userId: 1, title: "Studiare TypeScript", completed: false },
    // altri todo...
];
// La funzione getUserTodos
function getUserTodos(userId) {
    return todos.filter(function (todo) { return todo.userId === userId; });
}
// Esempio di utilizzo
var user1Todos = getUserTodos(1);
console.log(user1Todos);
