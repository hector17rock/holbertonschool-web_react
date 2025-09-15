/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

// Test the namespace and declaration merging
const teacher1: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
  experienceTeachingReact: 5,
};

const teacher2: Subjects.Teacher = {
  firstName: "Jane",
  lastName: "Smith",
};

// Test Cpp subject
const cpp = new Subjects.Cpp();
cpp.setTeacher(teacher1);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

cpp.setTeacher(teacher2);
console.log(cpp.getAvailableTeacher());

// Test React subject  
const react = new Subjects.React();
react.setTeacher(teacher1);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

react.setTeacher(teacher2);
console.log(react.getAvailableTeacher());

// Test Java subject
const java = new Subjects.Java();
java.setTeacher(teacher1);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

java.setTeacher(teacher2);
console.log(java.getAvailableTeacher());