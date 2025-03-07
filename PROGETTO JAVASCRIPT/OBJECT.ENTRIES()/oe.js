let student = [{
    name: "Sheldon Mini",
    age:30,
    grade:"teacher",
    school: "manhattan university"
}
];
Object.entries(student);
console.log(Object.entries(student));

for(let chiave in student){
    let valore= student[chiave];
    (chiave + valore)
};
