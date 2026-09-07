//  Variables & Data Types (Questions 1-8)

// Q1: What is the difference between var, let, and const?
// A. var can be redeclared and reassigned. But let cannot be redeclared in the same scope but can be reassigned.
//    And const cannot be redeclared or reassigned.

// Q2: Can you re-declare a variable with var? What about let and const?
// A. Yes, with var we can re-declare a variable. But let and const cannot be redeclared in the same scope.


// Q3: What is the output of this code?
// javascript
// var x = 5;
// let y = 10;
// const z = 15;
// x = 20;
// y = 25;
// z = 30;
// console.log(x, y, z);
// A. It gives error meassage as z is const varaiable and we cannot reassign a const variable. Therefore console.log() will not execute.

//  Q4: What is the difference between declaring and initializing a variable?
//  A. Declaration means creating a variable and initializing means assigning a value to that variable.

//  Q5: What will be the output?
// javascript
// let a;
// console.log(a);
// A. undefined

//  Q6: What is hoisting? Give an example.
//  A. 
//  Example:
console.log(x);
var x = 10;
// Output will be undefined.

//  Q7: What is the difference between null and undefined?
//  A. undefined means a variable has been declared but no value is assigned to it.
//     Whereas null means intentionally empty value.
//  Example:
//  let a;
//  console.log(a); It is undefined as no value is assigned
//  let b = null;
//  console.log(b); It is as developer intentionally kept it as null 

//  Q8: What will be the output?
// javascript
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof []);
// console.log(typeof {});
// A. object 
//    undefined
//    object
//    object


// Operators (Questions 9-14)

// Q9: What is the difference between == and ===?
// A. == check the value only it doesn't compare the data type where === check the value and data type.

// Q10: What is the difference between ++i and i++?
// A. ++i is pre-increment operator in which it first increments, then uses the value.
//    where as i++ is post-increment operator where it first uses value, then increments.

//  Q11: What will be the output?
// javascript
// let x = 10;
// let y = "5";
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// A. 105
//    5
//    50
//    2


//  Q12: What are logical operators? Explain with examples.
//  A. Logical operator is used for checking logical conditions. There are 3 types of logical operators
//     && - AND (True only if both conditions are true )
//     || - OR (False only if both conditions are false)
//      ! - NOT (Reverse the boolean value: true becomes false and false becomes true).
let age = 20;
console.log(age>=18 && age <=60);
console.log(age <18 || age > 60);
console.log(!(age>=18));

//  Q13: What will be the output?
// javascript
// console.log(5 > 3 && 10 > 5);
// console.log(5 > 10 || 10 > 5);
// console.log(!(5 > 3));
// A. true
//    true
//    false

//  Q14: What is the ternary operator? Give an example.
//  A. A ternary operator is a shorthand way of writing an if-else statement.
//  synatax: condition ? Truestatement : Falsestatement;
//  Example
var num = 10;
num >= 0 ? console.log("Positive") : console.log("Negative");

//  Type Casting (Questions 15-17)

//  Q15: What is the difference between implicit and explicit type casting?
//  A. Implicit type casting means javascript automatically converts one data type into another.
//     Explicit type casting means we have to manually converts one data type into another.

//  Q16: What will be the output?
// javascript
// console.log(Number("123"));
// console.log(Number("hello"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Boolean(0));
// console.log(Boolean("hello"));
// A. 123
//    NaN
//    1
//    0
//    false
//    true

//  Q17: What is NaN? Give an example.
// A. NaN stands for Not a Number. It occurs when javascript performs an invalid mathematical operation.
console.log(Number("hello"));

//  Conditional Statements (Questions 18-21)

//  Q18: What is the difference between if-else and switch?
//  A. If-else is used to check different conditions, especially when conditions involve comparisons or ranges. Whereas switch is used to compare one expression with multiple fixed values.

//  Q19: What will be the output?
// javascript
// let age = 20;
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
// A. Adult

//  Q20: What is nested if? Give an example.
// A. Nested if means placing an if statement inside another if statement.
var uage = 20;
var working = "Yes";
if (uage>=18)
{
    if(working === "Yes")
    {
        console.log("Adult and Working");
    }
    else
    {
        console.log("Adult and searching for job");
    }
}
else
{
    console.log("Child");
}

//  Q21: Write a program to check if a number is even or odd using ternary operator.
var jnum = 50;
jnum % 2 == 0 ? console.log("EVEN"):console.log("ODD");

// 

//  Loops (Questions 22-25)

//  Q22: What is the difference between while and do-while?
//  A. In While loop it first checks the condition and executes the code. Whereas in do-while loop it first executes the code and checks the condition. And in do-while loop it executes at least once even if condition is false. 

//  Q23: What will be the output?
// javascript
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// A. 1
//    2
//    3
//    4
//    5

//  Q24: What is the difference between for-of and for-in?
//  A. for- of is used for iteration over values and where as for - in used for iteration over index / keys.

//  Q25: Write a program to find sum of numbers from 1 to 100.
var sum = 0;
for(var i = 1; i<=100; i++)
{
    sum = sum + i;
}
console.log(sum);

//  Arrays (Questions 26-27)

//  Q26: What is the difference between slice and splice?
//  A. slice() - it is used for printing or extracting a certain part of an array without changing the original array.
//     splice() - it is used for adding or removing or replacing elements in array and changes the original array.

//  Q27: What will be the output?
// javascript
// let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// console.log(arr);
// A. [1,2,3]


//  Functions (Questions 28-30)

//  Q28: What is the difference between function declaration and function expression?
//  A. A function declaration is creating a function using function keyword and a name.
//  Example :
function hi()
{
    console.log("This function says hiii");
}
hi();
//  whereas function expression means storing a function inside a variable.
let hello = function()
{
    console.log("HIII");
}
hello();


//  Q29: What is an arrow function? Give an example.
//  A. An arrow function is a shorter way to write a function in Javascript.
var add = (a,b) => {
    console.log(a + b);
};
add(10,20)

//  Q30: What will be the output?
// javascript
// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message);
// A. Hello
