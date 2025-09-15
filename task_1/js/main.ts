// Define the Teacher interface
interface Teacher {
  readonly firstName: string;  // can only be set during initialization
  readonly lastName: string;   // can only be set during initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // optional property
  location: string;
  [propName: string]: any;     // index signature to allow any additional properties
}

// Example usage as provided in the requirements
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Additional examples to demonstrate the interface flexibility
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  subject: 'Mathematics',
  salary: 75000
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'California',
  hourlyRate: 50,
  department: 'Science'
};

console.log(teacher1);
console.log(teacher2);

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage as provided in the requirements
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Should print: J. Doe
console.log(printTeacher("Alice", "Johnson")); // Should print: A. Johnson
console.log(printTeacher("Bob", "Smith")); // Should print: B. Smith

// Interface for StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1: StudentClassInterface = new StudentClass("John", "Doe");
console.log(student1.displayName()); // Should print: John
console.log(student1.workOnHomework()); // Should print: Currently working

const student2: StudentClassInterface = new StudentClass("Alice", "Johnson");
console.log(student2.displayName()); // Should print: Alice
console.log(student2.workOnHomework()); // Should print: Currently working
