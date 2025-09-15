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