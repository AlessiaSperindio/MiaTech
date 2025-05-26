"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
//In src, crea un nuovo file User.ts.
//Definisci una classe User con le proprietà id, name, email (opzionale), e un costruttore per inizializzare queste proprietà.
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        if (email) {
            this.email = email;
        }
    }
}
exports.User = User;
