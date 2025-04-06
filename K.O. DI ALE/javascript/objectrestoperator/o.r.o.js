const persona = {
    nome: 'Alessia',
    età: 32,
    professione: 'Mamma',
    città: 'Rimini',
    hobby: 'judo'
};


const { nome, età, ...resto } = persona;


console.log('Nome:', nome); 
console.log('Età:', età);
console.log('Resto delle proprietà:', resto); 