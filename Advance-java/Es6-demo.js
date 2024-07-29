// Correct usage of var, let, and const
var name = "Parag";
console.log(name); // Outputs: Parag

name = "audi";
console.log(name); // Outputs: audi

const pi = 3.14; // Corrected to use '=' instead of '-'

// Function with block scope using var, let, and const
function count() { 
  var counter = 1;
  console.log(counter); // Outputs: 1

  for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
  }
}
count();

// Correct comments about var, let, and const
// var: can be redeclared, reinitialized, and has function-level scope
// let: cannot be redeclared, can be reinitialized, and has block-level scope
// const: cannot be redeclared, cannot be reinitialized, and has block-level scope

// Arrow functions
let noraisetopower = (num, power) => num ** power;
console.log(noraisetopower(2, 6)); // Outputs: 64

// Default parameters
let calcarea = (height = 100, width = 100) => height * width;
console.log(calcarea()); // Outputs: 10000
console.log(calcarea(10)); // Outputs: 1000 (10 * 100)
console.log(calcarea(20, 10)); // Outputs: 200

// Template Literal
let fname = "Parag";
let lname = "Joshi"; // Corrected from Iname to lname
let job = "Program Manager";
let info = `${fname} ${lname} is working as ${job}`; // Corrected template literal syntax
console.log(info); // Outputs: Parag Joshi is working as Program Manager

// Destructuring Assignment
let cars = ["BMW", "VOLVO", "RENAULT", "AUDI", "SUZUKI"];
let [c1, c2, c3, c4, c5] = cars;
console.log(c1); // Outputs: BMW

let person = { name: "Parag", designation: "PM" }; 
// Corrected object syntax
    // let { name, designation } = person; 
// Corrected destructuring syntax
    // console.log(designation); 
// Outputs: PM
