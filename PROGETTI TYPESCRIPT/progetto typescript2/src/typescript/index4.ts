/**
 //* extends interfaces;
 //* union type;
 //* pick;
 //* omit;
 //* readOnly;
 //* partial;
 //* required
 */
interface UserInfo {
    id:string,
    name: string,
    age:number
}
interface UserAuth  {
    isAuth : boolean
}
type User = UserInfo & UserAuth
// x selezionare dal tipo di dato :
const user : Pick<User, "id"| "name"> = {
    id:"",
    name:"",
} 
//x omettere elementi dal tipo di dato 
const user1 : Omit<User, "name"| "isAuth"> = {
    id:"",
    age:0
} 
// x SOLA LETTURA DEI DATI. NN PUO ESSERE MODIFICATO
const readonlyUser : Readonly<User>= {
    id:"",
    name:"",
    age:0,
    isAuth:true
}
//PARTIAL E REQUIRED SONO PIU DINAMICI, PARTIAL CONSIDERA TUTTI GLI ELEMENTI COME OPZIONALI, SE NE DEFINISCPO UNO , GLI ALTRI SONO OPZIONALI
const user2 : Partial<User> = {
id:"",
}
// COME PARTIAL MA QUESTO DEFINISCE GLI OBBLIGATORI
const user3: Required <User> = {
    id:"",
    name:"",
    age:0,
    isAuth:false
}