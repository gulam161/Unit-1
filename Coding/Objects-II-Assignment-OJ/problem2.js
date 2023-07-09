// - Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total

let arr = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] }
    ]
  }
]

///////////////////////////////////////////////////////////////
function marks(arr_marks) {
  let sum = 0;
  for (let i = 0; i <arr_marks.length; i++) {
    sum = sum + arr_marks[i]
  }
  return sum;
}

function highest(arr) {
  let grade = arr.grade;
  let hi_marks = -Infinity;
  let name;

  for (let i = 0; i < arr.students.length; i++) {
    
    let arr_marks = arr.students[i].marks;
    let total_marks = marks(arr_marks); // function call
    
    if (total_marks > hi_marks) {
      hi_marks = total_marks;
      
      name = arr.students[i].name;
    }
  }
  console.log(grade + "-" + name + "-" + hi_marks)
}
for (let i = 0; i < arr.length; i++) {
  highest(arr[i])
}