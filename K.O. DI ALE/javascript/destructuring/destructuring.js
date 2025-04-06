const student = {
    name: "Alessia Sperindio",
    age: 32,
    course: "web developer"
};


const entries = Object.entries(student);


console.log(entries);


entries.forEach(([key, value]) => {
    console.log( `${key}: ${value} `);
});