// JavaScript Tasks

// Task 1 — var, let, const

// Create three variables:
// var → student name
// let → student age
// const → college name
// Requirements:
// Print all three values.
// Change the var value.
// Change the let value.
// Try changing the const value and observe the error.
// Try redeclaring the var variable.
// Try redeclaring the let variable and observe the error.
//A.
var studentName = "Sri Valli";
let studentage = 20;
const collegename = "Aditya Degree College";
console.log("Student Name:",studentName);
console.log("Student Age:",studentage);
console.log("College Name:",collegename);
studentName = "Krithi";
console.log("Changed Studet Name:",studentName);
var studentName ="Trinita";
console.log("Redeclared Student Name:",studentName);
studentage = 21;
console.log("Corrected Student age:",studentage);
// let studentage =22;
// collegename = "Aditya";
console.log(collegename);



// Task 2 — User Information

// Get the following information from the user using prompt():
// Name
// Age
// City
// Print the result in the console.
// Expected:
// Name: Naveen
// Age: 22
// City: Trichy
//A.
uname = prompt("Please enter your name:");
age= prompt("Please enter your age");
city = prompt("Please enter your city:");
console.log(uname);
console.log(age);
console.log(city);


// Task 3 — Welcome Message
// Get the user's name using prompt().
// Display:
// Welcome Naveen!
// Use alert().
//A.
username=prompt("Enter your name:");
alert("Welcome "+ username +"!!!");


// Task 4 — Age Calculator
// Ask the user for their birth year.
// Calculate their approximate age using:
// Current Year - Birth Year
// Print the age in the console.
// Example:
// Birth Year: 2000
// Age: 26
// Data Type Tasks
//A.
let birthyear = prompt("Enter your birth year:");
let bage = 2026 - birthyear;
console.log("Age:",bage);




// Task 5 — Identify Data Types
// Create variables containing:
// "Hello"
// 100
// 25.5
// true
// false
// undefined
// null
// Use typeof and print each data type.
//A.
var a = "Hello"
var b = 100
var c = 25.5
var d = true
var e = false
var f = undefined
var g = null
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));


// Task 6 — Student Data
// Create an object:
// name
// age
// city
// qualification
// isStudent
// Print:
// Complete object
// Name
// Age
// Qualification
// isStudent
//A.
let Student = {
    name : "Valli",
    age : 20,
    city : "Visakhapatnam",
    qualification : ["MBA","Bsc"],
    isStudent : true
}
console.log(Student);
console.log(Student.name);
console.log(Student.age);
console.log(Student.qualification);
console.log(Student.isStudent);



// Task 7 — Fruit Array
// Create an array containing 6 fruits.
// Apple
// Mango
// Orange
// Banana
// Grapes
// Papaya
// Print:
// First fruit
// Second fruit
// Last fruit
// Total number of fruits
// Hint:
// array.length
// array.length - 1
//A.
let fruit = ["Apple","Mango","Orange","Banana","Grapes","Papaya"]
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[fruit.length - 1]);
console.log(fruit.length);


// Arithmetic Operator Tasks

// Task 8 — Basic Calculator
// Create two numbers:
// let a = 20;
// let b = 5;
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation
// Print every result separately.
//A.
let j = 20;
let k = 5;
console.log("Addition:",j+k);
console.log("Subtraction:",j-k);
console.log("Multiplication:",j*k);
console.log("Division:",j/k);
console.log("Modulus:",j%k);
console.log("Exponentiation:",j**k);



// Task 9 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Calculate the total price.
// Expected:
// Total = 4497
//A.
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let total = shirt+pant+shoes;
console.log("Total:",total);


// Task 10 — Simple Marks Calculation
// Create marks for 3 subjects:
// Tamil = 80
// English = 75
// Maths = 90
// Calculate:
// Total marks
// Average marks
//A.
var Tamil = 80;
var English = 75;
var Maths = 90;
var totalmarks = Tamil+English+Maths;
var Averagemarks = totalmarks/3;
console.log("Total Marks:",totalmarks);
console.log("Averagemarks:",Averagemarks);


// Increment & Decrement Tasks

// Task 11 — Post Increment
// Predict the output before running the code:
// let a = 10;
// let b = a++;
// console.log(a);
// console.log(b);
// Write your expected output first, then run it.
//A.a:11
// b:10


// Task 12 — Pre Increment
// Predict the output:
// let a = 10;
// let b = ++a;
// console.log(a);
// console.log(b);
//A.a=11
// b=11

// Task 13 — Post Decrement
// Predict:
// let a = 20;
// let b = a--;
// console.log(a);
// console.log(b);
//A. a=19
//  b=20


// Task 14 — Pre Decrement
// Predict:
// let a = 20;
// let b = --a;
// console.log(a);
// console.log(b);
//A. a=19
//   b=19


// Challenge Tasks

// Task 15 — Find the Final Values
// Without running the code, find the output:
// let a = 5;
// let b = a++;
// let c = ++a;
// let d = b--;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// Students should write the answer first and then verify it.
//A. a=7
//   b=4
//   c=7
//   d=5


// Task 16 — Assignment Operators
// Given:
// let num = 10;
// Perform each operation separately:
// +=
// -=
// *=
// /=
// %=
// **=
// Example:
// num += 5;
// console.log(num);
//A.
let num = 10;
num+=5;
console.log(num);
num-=5;
console.log(num);
num*=5;
console.log(num);
num/=5;
console.log(num);
num%=4;
console.log(num);
num**=5;
console.log(num);


// Task 17 — Mini Student Profile
// Create a student profile using:
// Variables
// Name
// Age
// City
// College
// Array
// Store 5 favorite subjects.
// Object
// Create an employee/student object containing:
// name
// age
// city
// subjects
// isStudent
// Then print:
// Student name
// Student age
// City
// First subject
// Last subject
// Total subjects
// Complete object
//A.
var sname = "Vamika";
var age = 20;
var city = "visakhapatnam";
var College = "Aditya Degree College";
var Subjects = ["C","C++","Java","DS","DLD"];
let stu = {
    name : "Anamika",
    age : 21,
    city : "Visakhapatnam",
    Subjects: ["Web Development","OS","CO"],
    isStudent : true
}
console.log(sname);
console.log(age);
console.log(city);
console.log(Subjects[0]);
console.log(Subjects[Subjects.length - 1]);
console.log(Subjects.length);
console.log(stu);



// Final Challenge — User + Calculator
// Get two numbers from the user using prompt().
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Power
// Then display all results using console.log().
let num1 = Number(prompt("Enter number1:"));
let num2 = Number(prompt("Enter number2:"));
console.log("Addition:",num1+num2);
console.log("Subtraction:",num1-num2);
console.log("Multiplication:",num1*num2);
console.log("Division:",num1/num2);
console.log("Modulus:",num1%num2);
console.log("Power:",num1**num2);

