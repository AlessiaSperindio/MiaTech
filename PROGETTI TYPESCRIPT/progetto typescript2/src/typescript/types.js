"use strict";
//Crea un'interfaccia Project che include una lista di utenti e todo.
//Crea una funzione createProject che inizializza un nuovo progetto con utenti e todo.
// Funzione per creare un nuovo progetto
function createProject(users, todos) {
    return {
        users: users,
        todos: todos
    };
}
// Esempio di utilizzo
var utenti = [
    { id: 1, name: "Mario Rossi", email: "mario.rossi@example.com" },
    { id: 2, name: "Luca Bianchi", email: "luca.bianchi@example.com" }
];
var tasks = [
    { id: 1, title: "Preparare la presentazione", completed: false },
    { id: 2, title: "Inviare email ai clienti", completed: true }
];
var mioProgetto = createProject(utenti, tasks);
console.log(mioProgetto);
