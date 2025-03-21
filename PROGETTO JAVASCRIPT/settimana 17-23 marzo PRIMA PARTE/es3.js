const array = [1, 2, 3];
const [ale, anna, ele] = array;

const mum = ale;
const  firstbaby = anna;
const secondbaby = ele;
console.log(ale);

console.log(anna);

console.log(ele);


const [...others1] = array;
const [...others2] = array;


console.log(others1); 
const grandpa = (others1 = 4);
const grandma = (others2 = 5);
console.log(array);

/*non stai rispettando la consegna,
 dopo aver dichiarato l'array e averlo destrutturato
  devi solo fare in modo di assegnare dei valori predefiniti a
   degli elementi mancanti nell'array originale*/




