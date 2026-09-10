// Task 1 — Student Result Analyzer
// Create a program that accepts a student's:
// Name
// Department
// 5 subject marks
// Requirements:
// Calculate total marks
// Calculate average
// Find pass/fail
// Assign grade:
// 90+ → A
// 75–89 → B
// 60–74 → C
// 50–59 → D
// Below 50 → Fail
// Display the result using console.log()
// Concepts: variables, arithmetic operators, if/else, functions.
// A.
let stuname = prompt ("Enter the Student Name:");
let studepartment = prompt ("Enter the Student Department:");
let stumarks = [];
for (let i = 0;i < 5; i++)
{
    let u = Number(prompt(`Enter ${i+1} Subject Marks:`));
    stumarks.push(u);
}
function CalcTotalMarks(marks)
{
    let totalmarks = 0;
    for (let i = 0; i < 5;i++)
    {
        totalmarks = totalmarks + marks[i];
    }
    return totalmarks;
}
let totalmarks=CalcTotalMarks(stumarks);
function CalculateAverage(marks)
{
    let average = 0;
    average = marks / stumarks.length;
    return average;
    
}
let average=CalculateAverage(totalmarks);
let result;
if(average >= 50)
{
    result = "Pass";
}
else
{
    result = "Fail";
}
function CalculateGrade(avg)
{
    let grade="";
    if (avg>=90)
    {
        grade = "A";
    }
    else if(avg >= 75 && avg <=89)
    {
        grade = "B";
    }
    else if(avg >=60 && avg <=74)
    {
        grade = "C";
    }
    else if(avg >=50 && avg <=59)
    {
        grade = "D";
    }
    else
    {
        grade = "Fail";
    }
    return grade;
}
let grade = CalculateGrade(average);
console.log("Student Details:");
console.log("Student's Name:",stuname);
console.log("Student's Department",studepartment);
console.log("Student's Marks:",stumarks);
console.log("Student's Total Marks:",totalmarks);
console.log("Student's Average Marks:",average);
console.log("Student's Result:",result);
console.log("Student's Grade:",grade);


// Task 2 — Employee Salary Calculator
// Create an employee object:
// {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// }
// Calculate:
// Basic salary
// 10% bonus if experience ≥ 2
// 15% bonus if experience ≥ 5
// Final salary
// Use a function:
// calculateSalary(employee)
// Concepts: objects, functions, conditions, arithmetic.
// A.
let employee =
{
    name : "Arun",
    role : "Developer",
    salary : 45000,
    experience : 2
};
function calculateSalary(employee)
{
    let basicSalary = employee.salary;
    let bonus = 0;
    if (employee.experience >= 5) 
    {
        bonus = basicSalary * 15 / 100;
    }
    else if (employee.experience >= 2) 
    {
        bonus = basicSalary * 10 / 100;
    }
    let finalSalary = basicSalary + bonus;
    console.log("Employee Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}
calculateSalary(employee);


// Task 3 — Product Filter System
// Create an array:
// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];
// Perform:
// Get products above ₹2,000
// Get only electronics
// Find the first product below ₹1,000
// Calculate total price of all products
// Check whether any product costs more than ₹50,000
// Check whether every product has a price above ₹500
// Concepts: filter(), find(), reduce(), some(), every().
// A.
let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];
let above2000=products.filter((c,i,t)=>{
    return c.price>2000;
});
let electronics = products.filter((c,i,t)=>
{
    return c.category === "electronics"
});
let below1000 = products.find((c,i,t)=>
{
    return c.price<1000;
});
let total = products.reduce((acc,c,i,t)=>{
    return acc + c.price;
},0);
let expensive = products.some((c,i,t)=>
{
    return c.price>50000;
});
let allabove500 = products.every((c,i,t)=>
{
    return c.price>500;
});
console.log("Products above 2000 are :",above2000);
console.log("Electronic Products are:",electronics);
console.log("The first product below 1000 are:",below1000);
console.log("Total cost of all products:",total);
console.log("Products above 50000 are:",expensive);
console.log("Products above 500 are:",allabove500);


// Task 4 — Employee Management
// Create an array of 6 employees.
// Each employee should have:
// {
//     id: 101,
//     name: "Kavin",
//     role: "Frontend Developer",
//     salary: 40000
// }
// Perform:
// Display all employee names
// Display employees earning above ₹40,000
// Find employee with ID 103
// Calculate total salary
// Find highest-paid employee
// Sort employees from highest salary to lowest
// Create a new array containing only employee names
// Concepts: objects, arrays, map(), filter(), find(), reduce(), sort().
// A.
let Employees = [
    {
        id: 101,
        name: "Kelivin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Amala",
        role: "Backend Developer",
        salary: 45000
    },
    {
        id: 103,
        name: "Liya",
        role: "HR",
        salary: 50000
    },
    {
        id: 104,
        name: "Damini",
        role: "Software Developer",
        salary: 60000
    },
    {
        id: 105,
        name: "Reena",
        role: "Tester",
        salary: 35000
    },
    {
        id: 106,
        name: "Harini",
        role: "Full Stack Developer",
        salary: 55000
    }
];
let Empname = Employees.map((c,i,t) =>{
    return c.name;
});
console.log("Employee Names:", Empname);
let highSalary = Employees.filter((c,i,t)=>{
    return c.salary>40000;
});
console.log("Employees earning above ₹40,000:", highSalary);
let E = Employees.find((c,i,t)=>{
    return c.id == 103
});
console.log("Employee with ID 103:", E);
let EmptotalSalary = Employees.reduce((acc,c,i,t) => {
    return acc + c.salary;
}, 0);
console.log("Total Salary:", EmptotalSalary);
let highestPaid = Employees.reduce((acc,c) => {
    if (c.salary > acc.salary) {
        return c;
    }
    else {
        return acc;
    }
});
console.log("Highest Paid Employee:", highestPaid);
let sortedEmployees = Employees.sort((a, b) =>{
    return b.salary - a.salary
});
console.log("Highest to Lowest Salary:", sortedEmployees);
let employeeNames = Employees.map((c,i,t) =>{
    return c.name;
});
console.log("Employee Names Array:", employeeNames);


// Task 5 — Shopping Cart
// Create:
// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];
// Calculate:
// Item total:
// price × quantity
// Then calculate:
// Total cart value
// 10% discount if total > ₹50,000
// Final payable amount
// Create a function:
// calculateCart(cart)
// Concepts: objects, functions, reduce(), conditions.
// A.
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];
function calculateCart(cart) {
    let itemTotal = cart.map((c,i,t) => {
        return c.price * c.quantity;
    });
    console.log("Item Totals:", itemTotal);
    let total = cart.reduce((acc,c,i,t) => {
        return acc + (c.price * c.quantity);
    }, 0);
    console.log("Total Cart Value:", total);
    let discount = 0;
    if (total > 50000) {
        discount = total * 10 / 100;
    }
    console.log("Discount:", discount);
    let finalAmount = total - discount;
    console.log("Final Payable Amount:", finalAmount);
}
calculateCart(cart);


// Task 6 — Student Search System
// Create an array of students:
// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];
// Requirements:
// Display all student names
// Display students who scored above 80
// Find student named "Priya"
// Calculate average mark
// Check whether anyone failed
// Check whether everyone scored above 40
// Sort students by marks
// A.
let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];
let snames = students.map((c,i,t) =>{
    return c.name;
});
console.log("Student Names:", snames);
let above80 = students.filter((c,i,t) => {
    return c.mark>80;
});
console.log("Students above 80:", above80);
let priya = students.find((c,i,t) =>{
    return c.name == "Priya"
});
console.log("Priya:", priya);
let totalMarks = students.reduce((acc,c,i,t) => {
    return acc + c.mark;
}, 0);
let averageMark = totalMarks / students.length;
console.log("Average Mark:", averageMark);
let failed = students.some((c,i,t) =>{
    return c.mark <50;
});
console.log("Anyone Failed:", failed);
let everyoneAbove40 = students.every((c,i,t) =>{
    return c.mark>40;
});
console.log("Everyone above 40:", everyoneAbove40);
let sortedStudents = students.sort((a, b) =>{
    return b.mark - a.mark;
});
console.log("Students by Marks:", sortedStudents);


// Task 7 — Array Transformation Challenge
// Given:
// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
// Perform:
// Create a new array containing numbers × 2
// Get only even numbers
// Get numbers greater than 15
// Find the first number greater than 20
// Find total of all numbers
// Check whether any number is greater than 40
// Check whether every number is positive
// Sort from highest to lowest
// Restriction: Use array higher-order methods wherever possible.
// A.
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
let doubled = numbers.map((c,i,t)=>{
    return c*2;
});
console.log("Numbers × 2:", doubled);
let evenNumbers = numbers.filter((c,i,t) => {
    return c % 2 ===0;
});
console.log("Even Numbers:", evenNumbers);
let greater15 = numbers.filter((c,i,t)=>{
    return c >15;
});
console.log("Numbers greater than 15:", greater15);
let firstGreater20 = numbers.find((c,i,t) =>{
    return c>20;
});
console.log("First number greater than 20:", firstGreater20);
let Total = numbers.reduce((acc,c,i,t) => {
    return acc + c;
}, 0);
console.log("Total:", Total);
let greater40 = numbers.some((c,i,t) =>{
    return c >40;
});
console.log("Any number greater than 40:", greater40);
let positive = numbers.every((c,i,t) =>{
    return c>0;
});
console.log("Every number is positive:", positive);
let sorted = numbers.sort((a, b) =>{
    return b - a;
});
console.log("Highest to Lowest:", sorted);


// Task 8 — String Analyzer
// Ask the user to enter a sentence.
// Example:
// "JavaScript is very powerful"
// Display:
// Total characters
// Uppercase sentence
// Lowercase sentence
// Whether it contains "JavaScript"
// First character
// Last character
// Number of words
// Replace "JavaScript" with "Python"
// Convert sentence into an array using split()
// Concepts: length, includes(), slice(), toUpperCase(), toLowerCase(), replace(), split().
// A.
let sentence = prompt("Enter a sentence:");
console.log("Total Characters:", sentence.length);
console.log("Uppercase:", sentence.toUpperCase());
console.log("Lowercase:", sentence.toLowerCase());
console.log("Contains JavaScript:", sentence.includes("JavaScript"));
console.log("First Character:", sentence.slice(0, 1));
console.log("Last Character:", sentence.slice(-1));
let words = sentence.split(" ");
console.log("Number of Words:", words.length);
console.log("Replaced Sentence:", sentence.replace("JavaScript", "Python"));
console.log("Sentence Array:", words);


// Final Mini Project — Employee Dashboard
// This would be a good intermediate-level class project.
// Create an Employee Dashboard using JavaScript.
// Data
// let employees = [
//     {
//         id: 101,
//         name: "Arun",
//         department: "IT",
//         salary: 45000,
//         experience: 2
//     },
//     {
//         id: 102,
//         name: "Priya",
//         department: "HR",
//         salary: 50000,
//         experience: 4
//     },
//     {
//         id: 103,
//         name: "Karthi",
//         department: "IT",
//         salary: 65000,
//         experience: 6
//     }
// ];
// Students must implement
// 1. Employee List
// Display all employees.
// 2. Search
// Search employee by name.
// 3. Department Filter
// Filter employees by department.
// 4. Salary Filter
// Show employees earning more than ₹50,000.
// 5. Salary Calculation
// Calculate total company salary.
// 6. Highest Salary
// Find the highest-paid employee.
// 7. Experience
// Find employees with more than 3 years' experience.
// 8. Sorting
// Sort employees by salary:
// Low → High
// High → Low
// 9. Statistics
// Display:
// Total Employees: 3
// Total Salary: ₹160000
// Highest Salary: ₹65000
// Average Salary: ₹53333
// A.
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];
console.log("All Employees:");
console.log(employees);
let searchName = prompt("Enter the employee name to search:");
let searchedEmployee = employees.find((c,i,t) =>{
    return c.name === searchName
});
console.log("Search Result:", searchedEmployee);
let itEmployees = employees.filter((c,i,t) =>{
    return c.department === "IT";
});
console.log("IT Employees:", itEmployees);
let highSalaryEmployees = employees.filter((c,i,t) =>{
    return c.salary>50000;
});
console.log("Employees earning above ₹50,000:", highSalaryEmployees);
let totalSalary = employees.reduce((acc,c,i,t) => {
    return acc + c.salary;
}, 0);
console.log("Total Company Salary:", totalSalary);
let highestSalary = employees.reduce((acc,c) => {
    if (c.salary > acc.salary) {
        return c;
    }
    else {
        return acc;
    }
});
console.log("Highest Paid Employee:", highestSalary);
let experiencedEmployees = employees.filter((c,i,t) =>{
    return c.experience > 3;
});
console.log("Employees with more than 3 years experience:", experiencedEmployees);
let lowToHigh = employees.sort((a, b) =>{
    return a.salary - b.salary;
});
console.log("Salary Low to High:", lowToHigh);
let highToLow =employees.sort((a, b) =>{ 
    return b.salary - a.salary;
});
console.log("Salary High to Low:", highToLow);
let totalEmployees = employees.length;
let averageSalary = totalSalary / totalEmployees;
console.log("Statistics:");
console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalSalary);
console.log("Highest Salary: ₹" + highestSalary.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));
