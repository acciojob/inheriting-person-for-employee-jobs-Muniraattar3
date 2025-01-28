function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  const message = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  console.log(message); // Ensure it logs the message
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
  const message = `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
  console.log(message); // Ensure it logs the message
};

// Do not change the code below
window.Person = Person;
window.Employee = Employee;
