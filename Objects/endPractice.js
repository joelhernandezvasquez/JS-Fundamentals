//Need to validate a form with and try to apply objects concepts


// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
const students = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };


// for(let student in students){
//     console.log(student)
// }

const studentsKey = Object.keys(students);
console.log(studentsKey);