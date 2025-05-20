type Tipo = (string|number|null)[];

interface Todo {
    name: string,
    age: number,
    isAuth:boolean,
    birth?: Date,
    colors?:Todo,
}

//se inserisco un interfaccia:
/*interface UserAutInfo{
    isAuth:boolean,
    Verify : boolean
}*/


//const array:(string|number|null)[];diventa poi :

const todos: Todo[] = [];
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
console.log(todos);