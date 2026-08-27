// Task:


// 1.What is a variable in JavaScript?
//A. A variable is a named container used to store a value in JavaScript.


//2. What are the three keywords used to create variables?
//A. Var, let, const are the three variables required.


//3. Write the syntax to create a variable using var.
//A. var variablename = value


//4. Write the syntax to create a variable using let.
//A. let variablename = value


//5. Write the syntax to create a variable using const.
//A. const variablename = value


//6. What is declaration?
//A. Declaration means creating a varible by giving it a name.


//7. What is initialization?
//A. Initialization means assigning a value to a varaible.


//8. What is reassignment?
//A. Reassignment means changing the value of an existing varaible.


//9. What is redeclaration?
//A. Redeclaration means declaring the same varaible again using the same keyword.


//10. Which keyword allows redeclaration?
//A. var allows redeclaration.


//11. Which keyword allows reassignment?
//A. var and let allows reassignment.


//12. Which keyword requires initialization when declared?
//A. const keyword requires initialization when declared.


//13. Identify the declaration and initialization:
// let age = 25;
//A. Declaration : age
// initialization : 25
// the varaible is created using let keyword.


//14. What is the value of a?
// var a = 100;
// console.log(a);
//A. The value of a is 100.


//15. Change the value of this variable to 200:
// let number = 100;
//A. let number =100;
// number = 200;


// var

//16. What will be the output?
// var a = 10;
// console.log(a);
//A. 10


//17. What will be the output?
// var a = 10;
// a = 20;
// console.log(a);
//A. 20


//18. What will be the output?
// var a = 10;
// var a = 30;
// console.log(a);
//A. 30


//19. Write a var variable named name with the value "John".
//A. var name = "John";


//20. Create a var variable named price with the value 500.
//A. var price = 500;


//21. Reassign price from 500 to 1000.
//A. var price = 500; 
// price = 1000;


//22. What will be the output?
// var x = 50;
// x = 100;
// console.log(x);
//A. 100


//23. Can a var variable be reassigned?
//A. yes


//24. Can a var variable be redeclared?
//A. yes


//25. Write an example of var redeclaration.
//A. var s = 10;
// var s = 20;
// console.log(s);


// let

//26. Create a let variable named age with the value 25.
//A. let age = 25;


//27. What will be the output?
// let age = 20;
// age = 30;
// console.log(age);
//A. 30


//28. Can a let variable be reassigned?
//A. yes


//29. Can a let variable be redeclared?
//A. No, a let varaible cannot be redeclared in the same scope.


//30. Find the error:
// let name = "John";
// let name = "David";
//A. Here the same let variable is redeclared twice. So this causes error.


//31. Create a let variable called city and assign "Chennai".
//A. let city = "Chennai";


//32. Change the value of city to "Salem".
//A. let city = "Chennai";
// city = "Salem";


//33. What will be the output?
// let x = 10;
// x = 50;
// console.log(x);
//A. 50


//34. Write a let variable called salary with the value 25000.
//A. let salary = 25000;


//35. Reassign salary to 30000.
//A. let salary = 25000;
// salary = 30000;


// const

//36. Create a const variable called pi with the value 3.14.
//A. const pi = 3.14;


//37. Can a const variable be reassigned?
//A. No, a const varaible cannot be reassigned.


//38. Can a const variable be redeclared?
//A. No, a const varaible cannot be redeclared.


//39. What is wrong with this code?
// const age;
// age = 25;
//A. A const varaible must be intialized when declared. so const age causes error.


//40. What happens here?
// const price = 500;
// price = 1000;
//A. An error occurs as const varaible cannot be reassigned.


//41. Create a const variable called country with the value "India".
//A. const country = "India";


//42. What will be the output?
// const x = 100;
// console.log(x);
//A. 100


//43. Which keyword should you use if the value should not be reassigned?
//A. const


//44. What is the difference between let and const?
//A. A let varaible can be reassigned, but a const varaible cannot be reassigned.


//45. What is the difference between var and const?
//A. var can be reassigned and redeclared, while const cannot be reassigned or redeclared.


// Printing & Console

//46. Write JavaScript code to print Hello World using console.log().
//A. console.log("Hello World");


//47. Write JavaScript code to print the number 500 using console.log().
//A. console.log(500);


//48. What is the purpose of console.warn()?
//A. It is used to display a warning message in the console.


//49. What is the purpose of console.error()?
//A. It is used to display an error message in the console.


//50. What is the purpose of each?
//A. alert() - Display a message in a pop-up box.
// prompt() - Ask the user to enter a value.
// confirm() - Ask user to confirm an action and gives Ok or cancel options.
// document.writeln() - Writes content directly to the webpage.
// console.log() - Display information in the browser console.

// Practical Question:

// 1. Create a variable for student name, age, and mark and print all three.

let studentname = "Valli";
let studentage= 20;
let studentmarks =8.6;
console.log(studentname);
console.log(studentage);
console.log(studentmarks);

// 2. Ask the user's name using prompt() and display it using alert().

let name=prompt("Enter your name:");
alert(name);

// 3. Ask the user's age using prompt() and print it using console.log().

let age=prompt("Enter your age:");
console.log(age);

// 4. Ask the user a question using confirm().

let answer = confirm("Do you like JavaScript:");
console.log(answer);

// 5. Ask the user's name and display it on the webpage using document.writeln().

let usname=prompt("Enter your name:");
document.writeln("Hello Va"+usname);
