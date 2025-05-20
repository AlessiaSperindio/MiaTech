const myName: string = "Alessia";
const myAge: number = 32;

console.log(myName);
console.log(myAge);

//string, number & boolean
// const myName: string = "Alessia";
//const myAge:number = 32;
const isAuth: boolean = true;
const user :{ name: string, age: number, isAuth: boolean } = {
    name: "alessia",
    age: 32,
    isAuth: true
}
const colors: string[] = ["blue", "pink", "red"];

const myFunction = (array: string[], obj:{ name: string, age: number, isAuth: boolean }): void => {
    console.log(array,obj);
}
myFunction(colors, { name: "Ale", age: 33, isAuth: false });
myFunction(colors, user);
// In index.ts, importa l'interfaccia Todo.
//Crea una variabile todos di tipo Todo[] e inizializzala con un array vuoto.
interface Todo{
    id: number ,
 title:string ,
 completed: boolean
 
}
const todos :Todo[]=[]  ;
console.log(todos);   