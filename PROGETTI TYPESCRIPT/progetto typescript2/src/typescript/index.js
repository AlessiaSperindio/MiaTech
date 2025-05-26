"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const myName:string = "Alessia";
//console.log(myName);
//   In index.ts, crea alcune istanze della classe User e utilizza il metodo addTodo per aggiungere dei todo agli utenti.
const User_1 = __importDefault(require("../User"));
const user1 = new User_1.default('Mario', 'mario@example.com');
const user2 = new User_1.default('Luisa', 'luisa@example.com');
user1.addTodo('Comprare il pane');
user1.addTodo('Pagare le bollette');
user2.addTodo('Preparare la presentazione');
user2.addTodo('Chiamare il dottore');
console.log(user1.getTodos());
console.log(user2.getTodos());
