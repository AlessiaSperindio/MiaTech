"use strict";
// x selezionare dal tipo di dato :
var user = {
    id: "",
    name: "",
};
//x omettere elementi dal tipo di dato 
var user1 = {
    id: "",
    age: 0
};
// x SOLA LETTURA DEI DATI. NN PUO ESSERE MODIFICATO
var readonlyUser = {
    id: "",
    name: "",
    age: 0,
    isAuth: true
};
//PARTIAL E REQUIRED SONO PIU DINAMICI, PARTIAL CONSIDERA TUTTI GLI ELEMENTI COME OPZIONALI, SE NE DEFINISCPO UNO , GLI ALTRI SONO OPZIONALI
var user2 = {
    id: "",
};
// COME PARTIAL MA QUESTO DEFINISCE GLI OBBLIGATORI
var user3 = {
    id: "",
    name: "",
    age: 0,
    isAuth: false
};
