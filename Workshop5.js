// สร้าง Array students เก็บข้อมูลนักเรียนอย่างน้อย 6 คน
let students = [
  { name: "Mila", score: 85 },
  { name: "Bam", score: 60 },
  { name: "Pingpong", score: 45 },
  { name: "Numfa", score: 75 },
  { name: "Jinny", score: 90 },
  { name: "Pong", score: 55 }
];

function filterPassedStudents(minScore) {
  students.forEach(student => {
    if (student.score >= minScore) {
      console.log(`Student ${student.name} passed with score ${student.score}`);
    }
  });
}

filterPassedStudents(60);
