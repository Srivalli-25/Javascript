// Task 1 — For Loop
// Print numbers from 1 to 10 using a for loop.
// Expected:
// 1
// 2
// 3
// ...
// 10
//A.
for (let i=1;i<=10;i++)
{
    console.log(i);
}


// Task 2 — Reverse Number
// Print numbers from 10 to 1 using a for loop.
// A.
for (let j=10;j>=1;j--)
{
    console.log(j);
}


// Task 3 — Even Numbers
// Print all even numbers from 1 to 20.
// 2
// 4
// 6
// 8
// ...
// 20
//A.
for(let k=1;k<=20;k++)
{
    if(k%2==0)
    {
        console.log(k);
    }
}


// Task 4 — Odd Numbers
// Print all odd numbers from 1 to 20.
//A.
for(let l=1;l<=20;l++)
{
    if(l%2!=0)
    {
        console.log(l);
    }
}


// Task 5 — Multiplication Table
// Get a number from the user.
// Print its multiplication table from 1 to 10.
// Example:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50
//A.
let table=prompt("Enter a number to print its table:");
for(var i=1;i<=10;i++)
{
    console.log(`${table} x ${i} = ${table*i}`);
}


// While Loop
// Task 6 — Countdown
// Using while, print:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
//A.
let m=10;
while(m>=1)
{
    console.log(m);
    m--;
}


// Task 7 — Sum of Numbers
// Using while, calculate:
// 1 + 2 + 3 + ... + 10
// Expected:
// 55
//A.
let p=1;
var sum=0;
while(p<=10)
{
    sum= sum + p;
    p++;
}
console.log(sum);


// Do While
// Task 8 — Print Numbers
// Use do...while to print:
// 1
// 2
// 3
// 4
// 5
//A.
let g=1;
do
{
    console.log(g);
    g++;
}while(g<=5);


// Task 9 — Do While Understanding
// What is the output?
// let a = 10;
// do {
//     console.log(a);
//     a++;
// } while (a <= 5);
// Important: Explain why the output occurs even though the condition is false.
//A.
// The output is 10. Even though the condition is false , a do while loop executes the code because it first executes the code inside the do block  and after that it checks the condition. So 10 will be printed once.


// For...of
// Task 10 — String Characters
// let name = "javascript";
// Print every character using for...of.
//A.
let h="javascript";
for (let v of h)
{
    console.log(v);
}


// Task 11 — Array Values
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
// Use for...of to print every fruit.
//A.
let fruits = ["apple","orange","banana","mango","grapes"];
for (let f of fruits)
{
    console.log(f);
}


// Task 12 — Student Names
// Create an array of 5 student names.
// Use for...of to print:
// Student: Arun
// Student: Priya
// ...
//A.
let Stu = ["Arun","Priya","Manu","Janu","Lily"];
for (let s of Stu)
{
    console.log("Student: ",s);
}


// For...in
// Your notes use for...in for objects.
// Task 13 — Employee Object
// Create:
// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };
// Use for...in to print:
// name Arun
// age 25
// role Developer
// city Chennai
//A.
let Employees = 
{
    name :"Arun",
    age : 25,
    role : "Developer",
    city : "Chennai"
};
for (let e in Employees)
{
    console.log(e,Employees[e]);
}


// Task 14 — Product Object
// Create:
// productName
// price
// brand
// category
// stock
// Use for...in to print every key and value.
//A.
let pro = 
{
    productname : "Creamic Bars",
    price : 600,
    brand : "Dove",
    category : "Soaps",
    stock : 100
};
for (let z in pro)
{
    console.log(z,pro[z]);
}


// Functions
// Task 15 — Simple Function
// Create a function called welcome().
// It should print:
// Welcome to JavaScript
// Call the function 3 times.
//A.
function Welcome()
{
    console.log("Welcome to JavaScript");
}
Welcome();
Welcome();
Welcome();


// Task 16 — Function With Parameter
// Create:
// function greet(name) {
// code
// }
// Call:
// greet("Naveen");
// greet("Arun");
// greet("Priya");
// Expected:
// Hello Naveen
// Hello Arun
// Hello Priya
//A.
function greet(name)
{
    console.log("Hello ",name);
}
greet("Naveen");
greet("Arun");
greet("Priya");

// Task 17 — Multiple Parameters
// Create a function:
// student(name, age, department)
// Print all three values.
// Call it with 3 different students.
//A.
function Student(name,age,department)
{
    console.log(`
        Name: ${name} 
        Age: ${age}
        Department: ${department}`);
}
Student("Valli",20,"Computer Science");
Student("Sri",22,"IT");
Student("Lalli",30,"Management");


// Return
// Task 18 — Addition Function
// Create:
// function add(a, b) {
// return result
// }
// Call:
// let result = add(10, 20);
// console.log(result);
// Expected:
// 30
//A.
function add(a,b)
{
    return a+b;
}
let result = add(10,20);
console.log(result);


// Task 19 — Salary
// Create:
// function salary(amount) {
//     return amount;
// }
// Store the returned value in a variable and print it.
//A.
function salary(amount)
{
    return amount;
}
let amt=salary(10000);
console.log(amt);


// Task 20 — Bonus Calculator
// Create:
// function bonus(salary, bonusAmount)
// Return:
// salary + bonusAmount
// Example:
// Salary = 50000
// Bonus = 5000
// Total = 55000
//A.
function bonus(salary, bonusAmount)
{
    return salary + bonusAmount;
}
let total = bonus(50000,5000)
console.log(total);


// Default Parameter
// Task 21
// Create:
// function employee(name, role = "Developer") {
// print name and role
// }
// Call:
// employee("Arun");
// employee("Priya", "Designer");
// Find the output.
//A.
function employee(name, role = "Developer")
{
    console.log(`
        Name: ${name}
        Role: ${role}`);
}
employee("Arun");
employee("Priya","Designer");


// Function Types
// Task 22 — Named Function
// Create a named function:
// function square(number) {
//     return number * number;
// }
// Call it with 5 different numbers.
//A.
function square(number)
{
    return number * number;
}
console.log( square(5));
console.log( square(6));
console.log( square(7));
console.log( square(8));
console.log( square(9));


// Task 23 — Anonymous Function
// Create an anonymous function and store it in a variable.
// let calculate = function(a, b) {
//     return a + b;
// };
// Call it and print the result.
//A.
let calculate = function(a,b)
{
    return a+b;
};
console.log(calculate(10,20));


// Task 24 — Arrow Function
// Create an arrow function that accepts two numbers and returns their multiplication.
// let multiply = (a, b) => {
//     return a * b;
// };
// A.
let multiply = (a,b) =>
{
    return a*b;
}
console.log(multiply(5,10));


// Scope
// Task 25 — Predict the Output
// function test() {

//     if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// test();
// Before running it, identify which values can be accessed.
//A.10
//  20
//  30
//  10 
// Reference error: b is not defined
// var a is function scope so it is acessible outside the if block. But let b, const c is block scoped, only acessible inside the curly brackets.


// Hoisting
// Task 26 — Predict
// console.log(a);
// var a = 10;
// What happens?
//A. undefined



// Task 27
// Predict:
// console.log(b);
// let b = 20;
//A. ReferenceError : Cannot acess 'b' before initialization.



// Task 28
// Predict:
// console.log(c);
// const c = 30;
//A. ReferenceError : Cannot acess 'c' before initialization.

// Then explain the difference between the three.
// Var is function scope so it is intialized with undefined value.
// let and const are block scope so it will not be initilaized and cannot be acessed.


// IIFE
// Task 29 — Self Invoking Function
// Create an IIFE that immediately prints:
// Welcome to JavaScript
// Then create another IIFE that accepts:
// product
// discount
// and prints the discount message.
// Your notes demonstrate an IIFE using product and discount parameters.
//A.
(function()
{
    console.log("Welcome to JavaScript");
})
();
(function(product,discount)
{
    console.log(`Discount is : ${discount}`);
})
("Laptop",50);



// Callback / Higher-Order Function
// Task 30
// Create:
// function welcome() {
//     console.log("Welcome");
// }

// function execute(callback) {
//     callback();
// }

// execute(welcome);
// Understand which function is the callback and which function is the higher-order function.
//A.
// function welcome()
// {
//     console.log("Welcome");
// }
// function execute(callback)
// {
//     callback();
// }
// execute(welcome);
// Here Welcome is the callback function and excecute is the higher-order function.
// Because a callback function is passed as an argument to another function, whereas a higher-order function accepts another function as an argument.



// Generator Function
// Task 31 — Cashback
// Create a generator:
// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }
// Create the generator object and print all values using for...of.
//A.
function* cashback()
{
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
let offers = cashback();
for (let offer of offers)
{
    console.log(offer);
}


// FINAL MINI PROJECT
// Task 32 — Employee Management Console
// Create a simple Employee Management System using only the concepts you've learned.
// Employee data
// Create an array containing employee objects:
// Name
// Age
// Department
// Role
// Salary
// Example:
// let employees = [
//     {
//         name: "Arun",
//         age: 25,
//         department: "IT",
//         role: "Developer",
//         salary: 40000
//     },
//     {
//         name: "Priya",
//         age: 24,
//         department: "HR",
//         role: "HR Executive",
//         salary: 35000
//     }
// ];
// Requirements
// Use:
// 1. for...of
// Print every employee.
// 2. for...in
// Print each employee's keys and values.
// 3. Function
// Create a function to display employee information.
// 4. Function parameters
// Pass employee information to the function.
// 5. Return
// Create a function that returns an employee's salary.
// 6. Condition
// Check:
// Salary >= 40000
// 7. Arrow function
// Create an arrow function for another simple calculation.
// 8. Generator
// Create a generator that produces employee benefits:
// Medical Insurance
// Transport
// Food Allowance
// Bonus
//A.
let employees = [
    {
        name: "Valli",
        age: 20,
        department: "IT",
        role: "Developer",
        salary: 60000
    },
    {
        name: "Timpu",
        age: 26,
        department: "HR",
        role: "HR Executive",
        salary: 65000
    },
    {
        name: "Omi",
        age: 29,
        department:"IT",
        role: "Tester",
        salary: 90000
    }
];
console.log("Employee Details:");
for(let emp of employees)
{
    console.log(emp);
}
for (let emp of employees)
{
for(let key in emp)
{
    console.log(key,emp[key]);
}
}
function displayEmpDetails(name,age,department,role,salary)
{
    console.log(`
        Name: ${name}
        Age: ${age}
        Department: ${department}
        Role: ${role}
        Salary: ${salary}`);
}
for (let employee of employees)
{
    displayEmpDetails(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}
function getSalary(salary)
{
    return salary;
}
for(let employee of employees)
{
    let employeeSalary=getSalary(employee.salary);
    console.log(
        employee.name + "'s Salary:",employeeSalary
    );
}
for(let employee of employees)
{
    if(employee.salary>=40000)
    {
        console.log(employee.name + " has a salary greater than or equal to 40000");
    }
    else
    {
        console.log(employee.name + " has a salary less than 40000");
    }
}
let yearlySalary = (salary)=>
{
    return salary * 12;
}
console.log("Yearly Salaries");
for (let employee of employees)
{
    console.log(employee.name + "'s Yearly Salary:",yearlySalary(employee.salary));
}
function* Benefits()
{
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}
console.log("Employee Benefits:");
let benefits=Benefits();
for(let benefit of benefits)
{
    console.log(benefit);
}
