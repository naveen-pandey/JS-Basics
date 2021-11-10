// My first Javascript code
console.log('Hello Worldddddd');


  let name = 'Nav33n';
console.log(name);

// variable name or identifier shouldn't be a reserved keyword like let,const,var,if,else
// variable name should be meaningful
// variable name cannot start with a number like 1naveen
// variable name cannot contain space or hyphen
// variable names are case sensitive

let firstName = 'Naveen';  // String Literal
let lastName = 'Pandey';
console.log(firstName,lastName);


const interestRate = 0.3;
// let vs const difference
// interestRate = 1.25;    gives  Uncaught TypeError: Assignment to constant variable.
console.log(interestRate);

// value which can be assigned to a variable are of two types which are Primitive types and Reference types
// Primtives or Value types- string, number, boolean, undefined, null
// Reference types- objects, arrays, functions

let age = 27;
let isAprroved = true; // Boolean literal
let middleName = undefined; // if variable not initialised then by default it is undefined. But here we are explicitly defining the variable as undefined
let selectedColor = null; // use this when we want to explicitly clear the value of a variable

// JS is a dynamic language as the type of variable can be changed in future which is unlikely in static language
// undefined is a type and also a value

//Object creation syntax below
const  person = {     
  name:'Naveen',
  age: 27 
};

// Dot Notation to access the property of object. Best notation.
person.name ='John';
console.log(person.name);

// Bracket notation to access the property of object
person['name'] = 'Johnny';

//also
let selection = 'name';
person[selection] = 'Johnnnnnyyy';

console.log(person.name);

const selectedColours = ['red','blue'];
selectedColours[2] = 'green';
selectedColours[3] = 45192;
// type of items in the array as well as size of the array are dynamic
// array is an object in javascript
// let allows mutation and reassigning, but const allow only mutation and not reassigning
// selectedColours='fkdf';   gives    Uncaught TypeError: Assignment to constant variable. 
console.log(selectedColours);
console.log(selectedColours.length);


// a function is a set of statements that performs a task or calculates a value
// performing a task
function greet(naam, lastName) {    //naam, lastName is a parameter to this function
    console.log('hello hello hello'+ naam +' '+ lastName);
}


greet('Nav33n','Pandeyy');   // Nav33n is an argument supplied to the function greet()
greet('Naveeeen');   // Naveeeen is an argument supplied to the function greet()


// Caclucating a value in a function
function square(num) {
     return num*num;
}



let getsq = square(6);
console.log(getsq);
console.log(square(3));




// String primitive
const message = 'hey yyo';

// String object
const anotherString = new String('hii');







