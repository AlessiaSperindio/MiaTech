//any, unknown, never
const thisname : any = "ale";
thisName.toUpperCase();
// any va a disattivare accettando tutti i dati, il typecheck di typescript
const thisage : unknown = 32;
thisage.toUpperCase();
if (typeof thisage == `string`){thisage =thisage.toUpperCase();}
    console.log(thisage
    );
// il dato è sconosciuto
const thissport : never = "judo";
thissport.toUpperCase();

    const throwError = (message?:string):never => {
        throw new Error (message);
    }
const assertError = (value:never):never =>{
    throw new Error (`not valid value : ${value}` );
} 
//all'interno della funzione si assicura che la funzione non raggiunga il suo scopo.
