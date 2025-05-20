//const myName:string = "Alessia";
//console.log(myName);
//string, number, boolean
const myName: string = "Alessia";
const myAge: number = 32;
const isAuth: boolean = true;
const user: { name: string, age: number, isAuth: boolean } = {
    name: "Alessia",
    age: 32,
    isAuth: true
}
const colors: string[] = ["blue", "red", "yellow"];
const myFunction = (array: string[], obj: { name: string, age: number, isAuth: boolean }): void => {
    console.log(array, obj);

}
myFunction(colors, user)
//any, unknown, never
const thisname : any = "ale";
thisName.toUpperCase();
const thisage : unknown = 32;
thisage.toUpperCase();
const thissport : never = "judo";
thissport.toUpperCase();
if (typeof thisname == ``){thisname =thisname.toUpperCase();}
    console.log(thisname);
    const throwError = (message?:string):never => {
        throw new Error (message);
    }
const assertError = (value:never):never =>{
    throw new Error (`not valid value : ${value}` );
} 
/**
 //* extends interfaces;
 //* union type;
 //* pick;
 //* omit;
 //* readOnly;
 //* partial;
 //* required
 */
interface User {
    id:string,
    name: string,
    age:number
}
interface User extends UserInfo {
    isAuth : boolean
}
type User = UserInfo & UserAuth
const user : Pick<User, "id"| "name"> = {
    id:"",
    name:"",
} 
const user1 : Omit<User, "name"| "isAuth"> = {
    id:"",
    age:0
} 
const readOnlyUser : Readonly<User>= {
    id:"",
    name:"",
    age:0,
    isAuth:true
}
const user2 : Partial<User> = {
id:"",
}
const user3: Required <User> = {
    id:"",
    name:"",
    age:0,
    isAuth:false
}