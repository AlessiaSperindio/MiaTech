"use strict";
const myName = "Alessia";
const myAge = 32;
console.log(myName);
console.log(myAge);
//string, number & boolean
// const myName: string = "Alessia";
//const myAge:number = 32;
const isAuth = true;
const user = { name: string, age: number, isAuth: boolean } = {
    name: "alessia",
    age: 32,
    isAuth: true
};
const colors = ["blue", "pink", "red"];
const myFunction = (array, obj, { name: string, age: number, isAuth: boolean }) => {
    console.log(array,obj);
};
myFunction(colors, { name: "Ale", age: 33, isAuth: false });
myFunction(colors, user);
