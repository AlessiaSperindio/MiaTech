"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        if (email) {
            this.email = email;
        }
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
        console.log(`Todo "${todo.title}" aggiunto all'utente ${this.name}.`);
    }
}
exports.User = User;
const utils_1 = require("./utils");
const todos = [
    { id: 1, title: 'Fare la spesa', completed: false },
    { id: 2, title: 'Studiare', completed: true },
];
const completedTodos = (0, utils_1.filterTodos)(todos, todo => todo.completed);
console.log(completedTodos);
