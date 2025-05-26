"use strict";
//lezione 2 :dati primitivi, oggetti, array
const myName = "Alessia";
const myAge = 32;
const isAuth = true;
const user = {
    myName: "Alessia",
    myAge: 32,
    isAuth: true
};
const colors = ["blue", "red", "yellow"];
const myFunction = (array, obj) => {
    console.log(array, obj);
};
myFunction(colors, user);
