// DirectorInterface with 3 expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with 3 expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function that returns either Director or Teacher
function createEmployee(salary: number | string): Director | Teacher {
  // If salary is a number and less than 500, return Teacher
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  // Otherwise return Director
  return new Director();
}

// Test examples as specified in the requirements
console.log(createEmployee(200));   // Should print Teacher instance
console.log(createEmployee(1000));  // Should print Director instance
console.log(createEmployee('$500')); // Should print Director instance

// Additional testing to demonstrate functionality
const employee1 = createEmployee(200);
console.log(employee1.workFromHome()); // "Cannot work from home"
console.log(employee1.getCoffeeBreak()); // "Cannot have a break"

const employee2 = createEmployee(1000);
console.log(employee2.workFromHome()); // "Working from home"
console.log(employee2.getCoffeeBreak()); // "Getting a coffee break"

const employee3 = createEmployee('$500');
console.log(employee3.workFromHome()); // "Working from home"
console.log(employee3.getCoffeeBreak()); // "Getting a coffee break"

// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test the functions as specified in the requirements
console.log(executeWork(createEmployee(200)));  // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
