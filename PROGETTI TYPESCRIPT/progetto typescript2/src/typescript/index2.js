"use strict";
//lezione 2 :dati primitivi, oggetti, array
var myName = "Alessia";
var myAge = 32;
var isAuth = true;
var user = {
    myName: "Alessia",
    myAge: 32,
    isAuth: true
};
var colors = ["blue", "red", "yellow"];
var myFunction = function (array, obj) {
    console.log(array, obj);
};
myFunction(colors, user);
