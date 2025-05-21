"use strict";
//any, unknown, never
var thisname = "ale";
thisName.toUpperCase();
var thisage = 32;
thisage.toUpperCase();
var thissport = "judo";
thissport.toUpperCase();
if (typeof thisname == "") {
    thisname = thisname.toUpperCase();
}
console.log(thisname);
var throwError = function (message) {
    throw new Error(message);
};
var assertError = function (value) {
    throw new Error("not valid value : ".concat(value));
};
