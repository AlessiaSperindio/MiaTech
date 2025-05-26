"use strict";
//Crea un'interfaccia Project che include una lista di utenti e todo.
//Crea una funzione createProject che inizializza un nuovo progetto con utenti e todo.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoStatus = void 0;
// Funzione per creare un nuovo progetto
var createProject;
(function (users, todos) {
    return {
        users: users,
        todos: todos
    };
});
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
//In types.ts, crea un enum TodoStatus con i valori Pending, InProgress, Completed.
//Aggiorna l'interfaccia Todo per includere una proprietà status di tipo TodoStatus.
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["Pending"] = "Pending";
    TodoStatus["InProgress"] = "InProgress";
    TodoStatus["Completed"] = "Completed";
})(TodoStatus || (exports.TodoStatus = TodoStatus = {}));
//  Aggiorna la funzione addTodo per impostare il status su Pending quando un nuovo todo viene creato.
var addTodo;
(function (title) {
    var newTodo = {
        id: generateUniqueId(),
        title: title,
        status: 'Pending',
        todos: todos,
        : .push(newTodo)
    };
});
var todos = [
    { id: 1, title: 'Fare la spesa', status: 'Pending' },
    { id: 2, title: 'Studiare TypeScript', status: 'InProgress' },
    { id: 3, title: 'Pulire la casa', status: 'Pending' },
];
var updateTodoStatus;
(function (todoId, status) {
    var todo = todos.find(function (t) { return t.id === todoId; });
    if (todo) {
        todo.status = status;
        console.log("Lo stato del todo con ID ".concat(todoId, " \u00E8 stato aggiornato a ").concat(status, "."));
    }
    else {
        console.log("Todo con ID ".concat(todoId, " non trovato."));
    }
});
updateTodoStatus(2, 'Completed');
console.log(todos);
