
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
const  createProject(users: User[], todos: Todo[]): Project {
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
            

//In types.ts, crea un enum TodoStatus con i valori Pending, InProgress, Completed.
//Aggiorna l'interfaccia Todo per includere una proprietà status di tipo TodoStatus.
            export enum TodoStatus {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Completed = 'Completed'
}


export interface Todo {
  id: number;
  title: string;
  description?: string;
  status: TodoStatus; 
}

//  Aggiorna la funzione addTodo per impostare il status su Pending quando un nuovo todo viene creato.
const  addTodo(title) {
  const newTodo = {
    id: generateUniqueId(), 
    title: title,
    status: 'Pending' 
  todos.push(newTodo);
 
}
}
//Crea una funzione updateTodoStatus che prende un todoId e un status di tipo TodoStatus e aggiorna lo stato del todo.
 type TodoStatus = 'Pending' | 'InProgress' | 'Completed';


interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
}


const todos: Todo[] = [
  { id: 1, title: 'Fare la spesa', status: 'Pending' },
  { id: 2, title: 'Studiare TypeScript', status: 'InProgress' },
  { id: 3, title: 'Pulire la casa', status: 'Pending' },
];


const  updateTodoStatus(todoId: number, status: TodoStatus): void {
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    todo.status = status;
    console.log(`Lo stato del todo con ID ${todoId} è stato aggiornato a ${status}.`);
  } else {
    console.log(`Todo con ID ${todoId} non trovato.`);
  }
}


updateTodoStatus(2, 'Completed'); 
console.log(todos); 