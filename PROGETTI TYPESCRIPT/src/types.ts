//    Nella directory src, crea un nuovo file chiamato types.ts.
//Definisci un'interfaccia Todo con le seguenti proprietà: id (number), title (string), completed (boolean).
type CustomArray = (string|number|null)[];       
interface CustomObject{
    id: number ,
 title:string ,
 completed: boolean
 colors?:CustomArray
}

const array: CustomArray = ["blue", "pink", "red"];

const todo = (array: CustomArray, obj:CustomObject): void => {
    console.log(array,obj);
}
todo(array, { id: 1, title: "Alessia", completed: false ,colors:array});
