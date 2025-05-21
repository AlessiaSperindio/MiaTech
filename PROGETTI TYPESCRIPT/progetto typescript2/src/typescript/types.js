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
var todos = [
    { id: 1, userId: 1, title: "Fare la spesa", completed: false },
    { id: 2, userId: 2, title: "Pulire la casa", completed: true },
    { id: 3, userId: 1, title: "Studiare TypeScript", completed: false },
];
function getUserTodos(userId) {
    return todos.filter(function (todo) { return todo.userId === userId; });
}
var user1Todos = getUserTodos(1);
console.log(user1Todos);
// Crea una funzione error che prende un messaggio come parametro e lancia un errore usando il tipo never.
var thisSport = "judo";
thissport.toUpperCase();
var throwError = function (message) {
    throw new Error(message);
};
var assertError = function (value) {
    throw new Error("not valid value : ".concat(value));
};
//  Crea una funzione parseInput 
// che prende un input di tipo unknown.
//  Se l'input è una stringa, 
// restituiscila com'è. 
// Se l'input è un numero, 
// restituisci la rappresentazione stringa del numero.
//  Altrimenti, lancia un errore usando la funzione error dall'Esercizio 4.1.
var input = "accepted user";
input.toUpperCase();
var parseInput = function (input) {
    console.log("".concat(input));
};
//Aggiungi una nuova proprietà metadata all'interfaccia Todo con il tipo any.
//Aggiorna la funzione addTodo per accettare un parametro opzionale metadata.
var newmeta = "newData";
newmeta.toUpperCase();
var addTodo = function (newmeta) {
    console.log("".concat(newmeta));
};
