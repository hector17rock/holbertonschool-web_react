/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Example usage as provided in the requirements
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
// Additional examples to demonstrate the interface flexibility
var teacher1 = {
    firstName: 'Alice',
    lastName: 'Johnson',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'New York',
    subject: 'Mathematics',
    salary: 75000
};
var teacher2 = {
    firstName: 'Bob',
    lastName: 'Smith',
    fullTimeEmployee: false,
    location: 'California',
    hourlyRate: 50,
    department: 'Science'
};
console.log(teacher1);
console.log(teacher2);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVVBLGdEQUFnRDtBQUNoRCxJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFdEIsK0RBQStEO0FBQy9ELElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixRQUFRLEVBQUUsVUFBVTtJQUNwQixPQUFPLEVBQUUsYUFBYTtJQUN0QixNQUFNLEVBQUUsS0FBSztDQUNkLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsS0FBSztJQUNoQixRQUFRLEVBQUUsT0FBTztJQUNqQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLFVBQVUsRUFBRSxFQUFFO0lBQ2QsVUFBVSxFQUFFLFNBQVM7Q0FDdEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWZpbmUgdGhlIFRlYWNoZXIgaW50ZXJmYWNlXG5pbnRlcmZhY2UgVGVhY2hlciB7XG4gIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nOyAgLy8gY2FuIG9ubHkgYmUgc2V0IGR1cmluZyBpbml0aWFsaXphdGlvblxuICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nOyAgIC8vIGNhbiBvbmx5IGJlIHNldCBkdXJpbmcgaW5pdGlhbGl6YXRpb25cbiAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7ICAvLyBvcHRpb25hbCBwcm9wZXJ0eVxuICBsb2NhdGlvbjogc3RyaW5nO1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTsgICAgIC8vIGluZGV4IHNpZ25hdHVyZSB0byBhbGxvdyBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG59XG5cbi8vIEV4YW1wbGUgdXNhZ2UgYXMgcHJvdmlkZWQgaW4gdGhlIHJlcXVpcmVtZW50c1xuY29uc3QgdGVhY2hlcjM6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGNvbnRyYWN0OiBmYWxzZSxcbn07XG5cbmNvbnNvbGUubG9nKHRlYWNoZXIzKTtcblxuLy8gQWRkaXRpb25hbCBleGFtcGxlcyB0byBkZW1vbnN0cmF0ZSB0aGUgaW50ZXJmYWNlIGZsZXhpYmlsaXR5XG5jb25zdCB0ZWFjaGVyMTogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnQWxpY2UnLFxuICBsYXN0TmFtZTogJ0pvaG5zb24nLFxuICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxuICB5ZWFyc09mRXhwZXJpZW5jZTogNSxcbiAgbG9jYXRpb246ICdOZXcgWW9yaycsXG4gIHN1YmplY3Q6ICdNYXRoZW1hdGljcycsXG4gIHNhbGFyeTogNzUwMDBcbn07XG5cbmNvbnN0IHRlYWNoZXIyOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdCb2InLFxuICBsYXN0TmFtZTogJ1NtaXRoJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIGxvY2F0aW9uOiAnQ2FsaWZvcm5pYScsXG4gIGhvdXJseVJhdGU6IDUwLFxuICBkZXBhcnRtZW50OiAnU2NpZW5jZSdcbn07XG5cbmNvbnNvbGUubG9nKHRlYWNoZXIxKTtcbmNvbnNvbGUubG9nKHRlYWNoZXIyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=