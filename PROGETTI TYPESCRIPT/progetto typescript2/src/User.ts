//In src, crea un nuovo file User.ts.
//Definisci una classe User con le proprietà id, name, email (opzionale), e un costruttore per inizializzare queste proprietà.
/*export class User {
  id: number;
  name: string;
  email?: string;

  constructor(id: number, name: string, email?: string) {
    this.id = id;
    this.name = name;
    if (email) {
      this.email = email;
    }
  }
}*/
// Aggiungi un metodo addTodo alla classe User che accetta un oggetto Todo e lo aggiunge a un array di todos dell'utente.
type TodoStatus = 'Pending' | 'InProgress' | 'Completed';

interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
}

export class User {
  id: number;
  name: string;
  email?: string;
  todos: Todo[]; 

  constructor(id: number, name: string, email?: string) {
    this.id = id;
    this.name = name;
    if (email) {
      this.email = email;
    }
    this.todos = []; 
  }

  
  addTodo(todo: Todo): void {
    this.todos.push(todo);
    console.log(`Todo "${todo.title}" aggiunto all'utente ${this.name}.`);
  }
}
