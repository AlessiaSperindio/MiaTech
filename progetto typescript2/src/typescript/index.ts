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