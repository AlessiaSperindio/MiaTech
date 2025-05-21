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