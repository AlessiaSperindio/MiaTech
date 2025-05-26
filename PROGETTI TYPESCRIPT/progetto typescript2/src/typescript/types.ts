
//Crea un'interfaccia Project che include una lista di utenti e todo.
//Crea una funzione createProject che inizializza un nuovo progetto con utenti e todo.

interface User {
  id: number;
  name: string;
  email: string;
}

// Definizione dell'interfaccia Todo
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Interfaccia Project che include utenti e todo
interface Project {
  users: User[];
  todos: Todo[];
}

// Funzione per creare un nuovo progetto
function createProject(users: User[], todos: Todo[]): Project {
  return {
    users: users,
    todos: todos
  };
}

// Esempio di utilizzo
const utenti: User[] = [
  { id: 1, name: "Mario Rossi", email: "mario.rossi@example.com" },
  { id: 2, name: "Luca Bianchi", email: "luca.bianchi@example.com" }
];

const tasks: Todo[] = [
  { id: 1, title: "Preparare la presentazione", completed: false },
  { id: 2, title: "Inviare email ai clienti", completed: true }
];

const mioProgetto = createProject(utenti, tasks);
console.log(mioProgetto);
            