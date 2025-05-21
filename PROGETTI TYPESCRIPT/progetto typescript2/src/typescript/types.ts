type Tipo = (string|number|null)[];

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
const todos: string[] = ["","",""];

// Funzione per generare un ID unico (ad esempio usando la data e un contatore)
let nextId = 1;

/*function addTodo(title: string): Todo {
  const newTodo: Todo: {
    id: number,title: string,completed: boolean} = {
    id: nextId++, 
    title: title,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
}*/
//In types.ts, definisci un'interfaccia User con le seguenti proprietà: id (number), name (string), email (string, opzionale).
interface User {
    id: number,
    name:string,
    email?:string,
    }

//  Aggiorna l'interfaccia Todo per 
// includere una proprietà opzionale
//  userId (number).
//Crea una funzione assignTodoToUser
//  che prende un todoId e un userId 
// e assegna l'utente al todo.
const userId: number = 5;
 

const assignTodoToUser = (userId: number, obj: {
    id: number,title: string,completed: boolean}): void => {
    console.log(userId,obj );

}
assignTodoToUser(userId, {
    id: 3,
    title:"userTodo",
    completed: false
});
console.log(assignTodoToUser);
//   Crea una funzione getUserTodos che 
// prende un userId e restituisce tutti 
// i todo associati a quell'utente.
interface Todo {
  id: number;
  userId: number;
  title: string; 
  completed: boolean;
}


const todos: Todo[] = [
  { id: 1, userId: 1, title: "Fare la spesa", completed: false },
  { id: 2, userId: 2, title: "Pulire la casa", completed: true },
  { id: 3, userId: 1, title: "Studiare TypeScript", completed: false },
  
];


function getUserTodos(userId: number): Todo[] {
  return todos.filter(todo => todo.userId === userId);
}


const user1Todos = getUserTodos(1);
console.log(user1Todos);

// Crea una funzione error che prende un messaggio come parametro e lancia un errore usando il tipo never.
const thisSport : never = "judo";
thissport.toUpperCase();

    const throwError = (message?:string):never => {
        throw new Error (message);
    }
const assertError = (value:never):never =>{
    throw new Error (`not valid value : ${value}` );            
}
//  Crea una funzione parseInput 
// che prende un input di tipo unknown.
//  Se l'input è una stringa, 
// restituiscila com'è. 
// Se l'input è un numero, 
// restituisci la rappresentazione stringa del numero.
//  Altrimenti, lancia un errore usando la funzione error dall'Esercizio 4.1.
            const input : unknown = "accepted user";
            input.toUpperCase();
            const parseInput = (input :unknown) : unknown =>{
                console.log(`${input}`);
            }
//Aggiungi una nuova proprietà metadata all'interfaccia Todo con il tipo any.
//Aggiorna la funzione addTodo per accettare un parametro opzionale metadata.
       const newmeta : any = "newData";
       newmeta.toUpperCase();
      const addTodo = (newmeta?: any) :any =>{
        console.log(`${newmeta}`)
      }


//   Crea un'interfaccia TodoWithMetadata che estende Todo aggiungendo la proprietà metadata.
            type TupleArray = [string,number, boolean]
type ArrayCustom = (string|number| boolean)[]
interface Todo {
    id: string
    name:string
}
interface TodoWithMetadata  {
    id:"1",
    name:"Ale",
    newmeta : "newData"
}


type TupleArray = Todo & TodoWithMetadata