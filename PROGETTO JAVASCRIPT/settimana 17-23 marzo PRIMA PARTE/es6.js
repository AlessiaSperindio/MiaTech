const object = {
    nome: " alessia",
    anni: "31",
    passioni: "judo",
 };
const {nome,anni,passioni,cognome = "sperindio", figli= 2,hobby = "meditazione",} = object;
const cognomeMio = cognome;
const figliNumero = figli;
const hobbyMio = hobby;
console.log(cognomeMio);
console.log(hobbyMio);
console.log(figliNumero);



