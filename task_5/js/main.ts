// Interface for MajorCredits with brand property for nominal typing
interface MajorCredits {
  credits: number;
  __brand: "MajorCredits";
}

// Interface for MinorCredits with brand property for nominal typing
interface MinorCredits {
  credits: number;
  __brand: "MinorCredits";
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits"
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits"
  };
}

// Example usage to demonstrate the functionality
const majorSubject1: MajorCredits = {
  credits: 3,
  __brand: "MajorCredits"
};

const majorSubject2: MajorCredits = {
  credits: 4,
  __brand: "MajorCredits"
};

const minorSubject1: MinorCredits = {
  credits: 1,
  __brand: "MinorCredits"
};

const minorSubject2: MinorCredits = {
  credits: 2,
  __brand: "MinorCredits"
};

// Test the functions
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log('Total Major Credits:', totalMajorCredits.credits); // Should print: 7

const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log('Total Minor Credits:', totalMinorCredits.credits); // Should print: 3

// The following would cause TypeScript errors due to nominal typing:
// sumMajorCredits(minorSubject1, minorSubject2); // Error: MinorCredits not assignable to MajorCredits
// sumMinorCredits(majorSubject1, majorSubject2); // Error: MajorCredits not assignable to MinorCredits