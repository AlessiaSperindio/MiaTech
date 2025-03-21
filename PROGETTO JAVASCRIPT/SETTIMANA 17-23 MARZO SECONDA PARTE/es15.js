const persone = '[{"mamma": "gabriella","anni": 71},{"papà": "vittorio","anni": 70}]';
const jsonPersone = JSON.parse('[{"mamma": "gabriella","anni": 71},{"papà": "vittorio","anni": 70}]');


console.log(jsonPersone);

 const personejava = [ { mamma: 'gabriella', anni: 71 }, { 'papà': 'vittorio', anni: 70 } ];

 let obj = { fratello: "romeo", anni: 48 };

personejava.push(obj);
console.log(personejava);


const personeJSON = JSON.stringify(personejava);
console.log(personeJSON);

