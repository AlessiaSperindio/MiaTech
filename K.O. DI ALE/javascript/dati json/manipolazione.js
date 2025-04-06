const jsonString = '[{"nome": "Alessia", "età": 32}, {"nome": "Roberto", "età": 49}]';


let persone = JSON.parse(jsonString);


persone.push({ nome: "Annapaola", età: 8 });


const jsonAggiornato = JSON.stringify(persone);

console.log(jsonAggiornato);