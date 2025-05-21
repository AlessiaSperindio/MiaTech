/**
 * *Readonly
 */
type TupleArray = [string,number, boolean]
type ArrayCustom = (string|number| boolean)[]
interface User {
    readonly id: string
    name:string
}
const user : User = {
    id:"1",
    name:"Ale"
}
//user.id = "2">>>me lo segnera sempre errore perchè nn puo modificarsi
const colors: readonly string[]= ["red","blue","green"]
const colors1: ReadonlyArray <string>=["red","blue","green"]


const array :TupleArray = ["ale",32,false]
const array1 :ArrayCustom = ["ale",32,true];

