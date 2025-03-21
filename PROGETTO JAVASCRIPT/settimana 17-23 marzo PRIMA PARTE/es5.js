const object = {
    nome: " alessia",
    cognome: "sperindio",
    anni: 31,
    hobby: "meditazione",
    passioni: "judo",
    figli: ["Annapaola", "Vittoria Elena"],
};
const { nome, cognome, anni, hobby, passioni, figli } =object



const { nome: nome1 , cognome : cognome1  } = object
const user1 = { nome,cognome};
const { anni: anni1 , hobby : hobby1  } = object
const user2 = { anni,hobby};
const { passioni: passioni1 , figli : figli1  } = object
const user3 = { passioni,figli};
const { nome: nome2 , cognome : cognome2  } = object
const user4 = { nome,cognome};
console.log(user4); 
console.log(user1);
console.log(user2); 
console.log(user3); 






