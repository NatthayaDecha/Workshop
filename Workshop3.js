//ใช้odject
let students1={
    name: "supalak",
    age  :20,
    grade: "A"
};
let students2 ={
    name: "Kannika",
    age  :21,
    grade: "A"
};
let students3 ={
    name: "Malee",
    age  :20,
    grade: "B"
}

let students =[students1,students2,students3];
//ใช้forEach
students.forEach((student, index) => {
    console.log(`Student [${index}]: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
});
function showStudentCount(list) {
    console.log("Total students:", list.length);
}
showStudentCount(students);