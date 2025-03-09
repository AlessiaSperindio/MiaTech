let students =[ 
    {name:"jhonny",
        grade: 80,
    },
    {name:"samuel",
        grade: 70,
    },
    {name:"anna",
        grade: 60,
    },
    {name:"elena",
        grade: 50
    },
    
];
console.log(students);

let passedStudents =students.filter((value) => value.grade >= 60);

console.log(passedStudents);

let found = students.find((value) => value.grade <= 60);

console.log(found);
