// JavaScript Tasks — Beginner Level
console.clear();
// Task 1 — Variables

// Create variables using var, let, and const.
// Name
// Age
// City
// College
// Requirements:
// Print all values.
// Change the var value.
// Change the let value.
// Try changing the const value.
// Try redeclaring each variable and observe what happens.
// A.
var Name = "Sri Valli"
let age = 20
var City = "Visakhapatnam"
const College = "Aditya Degree College"
console.log("Name:",Name);
console.log("Age:",age);
console.log("City:",City);
console.log("College:",College);
Name = "Valli"
console.log("Changed Name:",Name);
var Name = "Krithi"
console.log("Redeclared Name:",Name);
age=22
console.log("Corrected Age:",age);
// let age = 20
// College ="Aditya"
// const College ="Aditya Degree"

// Task 2 — Printing Statements
// Use:
// console.log()
// alert()
// confirm()
// prompt()
// document.writeln()
// Create one example for each.
// A.
console.log("Hello World!!!");
alert("This is a message from developer!!!");
confirm("Do you want to countinue");
var usname=prompt("Hello!! This is Valli. May I know your name:");
console.log(usname);
document.writeln("Hello World!!!");

// Task 3 — User Details
// Get from the user:
// Name
// Age
// City
// Qualification
// Print the details in the console.
// A.
let uname = prompt("Enter your Name:");
let uage = prompt("Enter your age:");
let ucity =prompt("Enter your city");
let uqualification =prompt("Enter your qualification:");
console.log("User Name:",uname);
console.log("User Age:",uage);
console.log("User City:",ucity);
console.log("User Qulaification",uqualification);


// Data Type Tasks

// Task 4 — Find Data Types
// Create variables containing:
// "JavaScript"
// 100
// 99.5
// true
// false
// undefined
// null
// Print their values and use typeof to identify their data types.
//A.
var z = "JavaScript"
var y = 100
var x = 99.5
var w = true
var v = false 
var u = undefined 
var t = null 
console.log(z);
console.log(y);
console.log(x);
console.log(w);
console.log(v);
console.log(u);
console.log(t);
console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x));
console.log(typeof(w));
console.log(typeof(v));
console.log(typeof(u));
console.log(typeof(t));


// Task 5 — Student Array
// Create an array containing:
// Student names
// Example:
// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// Print:
// First student
// Second student
// Last student
// Total students
// Use only:
// array[index]
// array.length
// A.
let stu = ["Hani","Bunny","Munni","Lalli","Penny"]
console.log(stu[0]);
console.log(stu[1]);
console.log(stu[stu.length - 1 ]);
console.log(stu.length);


// Task 6 — Employee Object
// Create an employee object containing:
// name
// age
// role
// skills
// isWorking
// qualification
// skills and qualification should be arrays.
// Print:
// Employee name
// Age
// Role
// First skill
// Last qualification
// Working status
// A.
let Emp = {
    name : "Vami",
    age : 20,
    role : "Full Stack Developer",
    Skills : ["MERN","C","C++"],
    isWorking : "Yes",
    qualification : ["Bsc","MBA"]
}
console.log(Emp.name);
console.log(Emp.age);
console.log(Emp.role);
console.log(Emp.Skills[0]);
console.log(Emp.qualification[Emp.qualification.length - 1 ]);
console.log(Emp.isWorking);


// Arithmetic Operator Tasks

// Task 7 — Calculator
// Create:
// let a = 20;
// let b = 5;
// Calculate:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation
// A.
let a = 20
let b = 5
console.log("Addition :",a+b);
console.log("Subtraction :",a-b);
console.log("Multiplication :",a*b);
console.log("Division :",a/b);
console.log("Modulus :",a%b);
console.log("Exponentiation :",a**b);


// Task 8 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Bag = 799
// Calculate:
// Total price
// Use arithmetic operators only.
// A.
var Shirt = 999
var Pant = 1499
var Shoes = 1999
var Bag = 799
var total = Shirt+Pant+Shoes+Bag
console.log("Total Price:",total);

// Task 9 — Increment & Decrement
// Find the output without running the code first.
// A
// let a = 10;
// let b = a++;
// console.log(a);
// console.log(b);
// A. a=11
//    b=10


// B
// let a = 10;
// let b = ++a;
// console.log(a);
// console.log(b);
// A. a=11
//    b=11

// C
// let a = 10;
// let b = a--;
// console.log(a);
// console.log(b);
// A. a=9
//    b=10

// D
// let a = 10;
// let b = --a;
// console.log(a);
// console.log(b);
// A. a=9
//    b=9


// Assignment Operator Tasks
// Task 10
// Start with:
// let num = 10;
// Perform separately:
// num += 5
// num -= 3
// num *= 2
// num /= 4
// num %= 3
// num **= 2
// Print the result after each operation.
let num = 10
console.log("Addition:",num+=5);
console.log("Subtraction:",num-=3);
console.log("Multiplication:",num*=2);
console.log("Division:",num/=4);
console.log("Modulus:",num%=3);
console.log("Exponential",num**=2);


// Comparison Operator Tasks

// Task 11 — Find Output
// Predict the result:
// console.log(10 > 5);
// A.true
// console.log(10 < 5);
// A.false
// console.log(10 >= 10);
// A.true
// console.log(10 <= 9);
// A.false
// console.log(5 == "5");
// A.true
// console.log(5 === "5");
// A.false
// console.log(10 != "10");
// A.false
// console.log(10 !== "10");
// A.true


// Logical Operator Tasks

// Task 12 — AND
// Find the output:
// console.log(true && true);
// A.true
// console.log(true && false);
// A.false
// console.log(false && true);
// A.false
// console.log(false && false);
// A.false


// Task 13 — OR
// console.log(true || true);
// A.true
// console.log(true || false);
// A.true
// console.log(false || true);
// A.true
// console.log(false || false);
// A.false


// Task 14 — NOT
// console.log(!true);
// A.false
// console.log(!false);
// A.true
// console.log(!(5 > 10));
// A.true
// console.log(!(10 > 5));
// A.false


// Task 15 — Combination

// Find the output without executing:
// console.log(5 == "5" && !(5 === 5) || 6 > 7);
// A.false

// console.log(10 > 5 && 8 < 12 || 4 === "4");
// A.true

// console.log(7 === 7 && 10 != "10" || 5 >= 5);
// A.true

// console.log(15 < 10 || 20 > 15 && 5 == "5");
// A.true

// Ternary Operator Tasks

// Task 16 — Voting
// Create:
// let age = 20;
// Use the ternary operator:
// age >= 18 → "Eligible to vote"
// age < 18  → "Not eligible"
// A.
let vage =20
vage >=18 ? console.log("Eligible to vote"):console.log("Not eligible");


// Task 17 — Password
// Create:
// let password = true;
// Use ternary:
// true  → "Login successful"
// false → "Wrong password"
// A.
let password = true;
password ? console.log("Login successful"):console.log("Wrong password");

// Concatenation & Template String

// Task 18 — User Introduction
// Create:
// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
// Print:
// My name is Naveen. I am 25 years old. I live in Trichy.
// Do it two ways:
// Using +
// Using template literals `${}`
// A. 
let name = "Valli"
let Age = 20
let city = "Visakhapatnam"
console.log("My name is "+ name +". I am "+ Age +" years old. I live in "+city);
console.log(`My name is ${name}. I am ${Age} years old. I live in ${city}.`);


// Type Casting Tasks

// Task 19 — String Conversion
// Use String() to convert:
// 100
// true
// undefined
// null
// [1, 2]
// Print the result and its typeof.
// A.
console.log(String(100),typeof(String(100)));
console.log(String(true),typeof(String(true)));
console.log(String(undefined),typeof(String(undefined)));
console.log(String(null),typeof(String(null)));
console.log(String([1,2]),typeof(String([1,2])));


// Task 20 — Number Conversion
// Predict the output:
// console.log(Number());
// A. 0
// console.log(Number(""));
// A. 0
// console.log(Number("123"));
// A. 123
// console.log(Number("a1"));
// A. NaN
// console.log(Number(true));
// A. 1
// console.log(Number(false));
// A. 0
// console.log(Number(undefined));
// A. NaN
// console.log(Number(null));
// A. 0


// Task 21 — Boolean Conversion
// Predict:
// console.log(Boolean());
// A. false
// console.log(Boolean(""));
// A. false
// console.log(Boolean("hello"));
// A. true
// console.log(Boolean(123));
// A. true
// console.log(Boolean(true));
// A. true
// console.log(Boolean(false));
// A. false
// console.log(Boolean(undefined));
// A. false
// console.log(Boolean(null));
// A. false
// console.log(Boolean([]));
// A. true
// console.log(Boolean({}));
// A. true

// Flow Control Tasks

// Task 22 — Voting Eligibility
// Get age using prompt().
// 18 or above → "You can vote"
// Below 18   → "You can't vote"
// Use:
// if
// else
// A.
let VoterAge = Number(prompt("Enter your age:"));
if (VoterAge>=18)
{
    console.log("You can Vote");
    
}
else
{
    console.log("You can't vote");
    
}

// Task 23 — Positive or Negative
// Get a number from the user.
// Check:
// Positive
// Negative
// Zero
// Use if / else if / else.
// A.
number = Number(prompt("Enter any number:"));
if (number > 0)
{
    console.log("Positive");
    
}
else if(number < 0)
{
    console.log("Negative");
    
}
else
{
    console.log("Zero")
}

// Task 24 — Grade System
// Get marks from the user.
// Create:
// 90–100 → A Grade
// 80–89  → B Grade
// 70–79  → C Grade
// 60–69  → D Grade
// Below 60 → Fail
// Use if / else if / else.
// A.
let Marks = prompt("Enter your marks:");
if ( Marks >=90 && Marks <=100)
{
    console.log("A Grade");
}
else if(Marks >=80 && Marks <=89)
{
    console.log("B Grade");
}
else if(Marks >=70 && Marks <=79 )
{
    console.log("C Grade");
}
else if(Marks >=60 && Marks <=69)
{
    console.log("D Grade");
}
else
{
    console.log("Fail");
}

// Nested If Task

// Task 25 — Job Eligibility
// Get:
// Age
// Height
// Weight
// Rules:
// Age >= 18
// Height >= 160
// Weight >= 60
// If all conditions are satisfied:
// "Congratulations! You are selected"
// Otherwise display the appropriate reason.
// This is based directly on the nested-if structure in your code.
// A.
var Jage = prompt("Enter your age:");
var Jheight = prompt("Enter your height: (in cm)");
var Jweight = prompt("Enter your Weight: (in kgs)");
if (Jage>=18)
{
    if(Jheight>=160)
    {
        if(Jweight>=60)
        {
            console.log("Congratulations! You are selected");
        }
        else
        {
            console.log("Sorry! Your Weight doesn't match the eligibility")
        }
    }
    else
    {
        console.log("Sorry! Your Height doesn't match the eligibility"); 
    }
}
else
{
    console.log("Sorry! You are Underage");
    
}

// Switch Tasks
// Task 26 — Traffic Light
// Get a traffic light color:
// red
// yellow
// green
// Use switch.
// red    → Stop
// yellow → Ready
// green  → Go
// A.
let trafficlight = prompt("Enter the traffic light color:");
switch(trafficlight)
{
    case "red" : console.log("Stop the vechile."); break;
    case "yellow" : console.log("Start the vechile and Be Ready"); break;
    case "green" : console.log("Start the vechile and Go"); break;
    default :console.log("Signal not working");
}

// Task 27 — Day
// Create:
// let day = 1;
// Use switch:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// Add:
// default → Invalid day
// A.
let day = prompt("Enter Day number:");
switch (day) {
    case "1":console.log("Monday"); break;
    case "2":console.log("Tuesday"); break;
    case "3":console.log("Wednesday"); break;
    case "4":console.log("Thrusday"); break;
    case "5":console.log("Friday"); break;
    case "6":console.log("Saturday"); break;
    case "7":console.log("Sunday"); break;
    default:console.log("Invalid day"); break;
}


// FINAL MINI PROJECT
// Task 28 — Student Result System
// Create a small Student Result System using everything you've learned.
// Step 1 — Get user details
// Name
// Age
// City
// Step 2 — Get marks
// Tamil
// English
// Maths
// Step 3 — Calculate
// Total
// Average
// Step 4 — Check result
// Use if / else if / else:
// 90+ → A
// 80+ → B
// 70+ → C
// 60+ → D
// Below 60 → Fail
// Step 5 — Check voting
// Age >= 18
// Step 6 — Display
// Use a template string:
// Name: Naveen
// Age: 22
// City: Trichy
// Total: 250
// Average: 83.33
// Grade: B
// Voting: Eligible
// A.
let Stname = prompt ("Enter Student name:");
let stage = Number(prompt("Enter Student Age:"));
let stcity = prompt("Enter Student City:");
let tamil = Number(prompt("Enter tamil  marks:"));
let eng = Number(prompt("Enter english marks:"));
let mat = Number(prompt("Enter maths marks:"));
let Totalmarks = tamil+eng+mat;
let avg = Totalmarks/3;
var grade;
var vote;
if (avg>=90)
    {
        grade='A';
    } 
else if(avg>=80)
{
    grade = 'B';
}
else if(avg>=70)
{
    grade='C';
}
else if(avg>=60)
{
    grade='D';
}
else
{
    grade='Fail';
}
if(stage>=18)
{
    vote='Eligible';
}
else
{
    vote='Not Eligible';
}
console.log(`
    Name:${Stname}
    Age:${stage}
    City:${stcity}
    Total:${Totalmarks}
    Average:${avg}
    Grade:${grade}
    Voting:${vote}`)