"use strict";
//any, unknown, never
const thisname = "ale";
thisName.toUpperCase();
const thisage = 32;
thisage.toUpperCase();
const thissport = "judo";
thissport.toUpperCase();
if (typeof thisname == ``) {
    thisname = thisname.toUpperCase();
}
console.log(thisname);
const throwError = (message) => {
    throw new Error(message);
};
const assertError = (value) => {
    throw new Error(`not valid value : ${value}`);
};
