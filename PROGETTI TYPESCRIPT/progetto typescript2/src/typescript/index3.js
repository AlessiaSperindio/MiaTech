"use strict";
//any, unknown, never
const thisname = "ale";
thisName.toUpperCase();
// any va a disattivare accettando tutti i dati, il typecheck di typescript
const thisage = 32;
thisage.toUpperCase();
if (typeof thisage == `string`) {
    thisage = thisage.toUpperCase();
}
console.log(thisage);
// il dato è sconosciuto
const thissport = "judo";
thissport.toUpperCase();
const throwError = (message) => {
    throw new Error(message);
};
const assertError = (value) => {
    throw new Error(`not valid value : ${value}`);
};
//all'interno della funzione si assicura che la funzione non raggiunga il suo scopo.
