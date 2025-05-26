"use strict";
//  In src, crea un nuovo file utils.ts.
//Definisci una funzione generica filterTodos che accetta un array di Todo e
//  una funzione di filtro e restituisce un array di todo filtrati.
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterTodos = filterTodos;
function filterTodos(todos, filterFn) {
    return todos.filter(filterFn);
}
