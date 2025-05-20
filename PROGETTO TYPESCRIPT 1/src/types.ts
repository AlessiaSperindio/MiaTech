//    Nella directory src, crea un nuovo file chiamato types.ts.
//Definisci un'interfaccia Todo con le seguenti proprietà: id (number), title (string), completed (boolean).
type CustomArray = (string|number|null)[];       
interface Todo{
    id: number ,
 title:string ,
 completed: boolean
 colors?:CustomArray
}

const array: CustomArray = ["blue", "pink", "red"];

const todo = (array: CustomArray, obj:Todo): void => {
    console.log(array,obj);
}
todo(array, { id: 1, title: "Alessia", completed: false ,colors:array});
