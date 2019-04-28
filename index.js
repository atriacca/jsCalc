var readline = require("readline-sync");

var operations = ["+", "-", "*", "/"]

var firstNum = readline.question("Please enter your first number: ")

var index = readline.keyInSelect(operations, "Please enter the operation to perform: add, subtract, multiply or divide ")

var secondNum = readline.question("Please enter your second number: ")

switch(index) {
    case 0:
    console.log(add(firstNum, secondNum))
    break
    case 1:
    console.log(subtract(firstNum, secondNum))
    break
    case 2:
    console.log(multiply(firstNum, secondNum))
    break
    case 3:
    console.log(divide(firstNum, secondNum))
}

function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}

/*
var num1 = readline.question('Please enter a number ');
var num2 = readline.question('Please enter another number ');
var operator = readline.question('Please enter an operator: +, -, * or / ');

var operation = firstNum + operator + secondNum

var result = eval(operation);

console.log("The answer is " + result);

You are going to create a calculator in pure Javascript using NodeJS and readline-sync.

Your script must have:
A function that adds two numbers and returns the result
A function that multiplies two numbers and returns the result
A function that divides two numbers and returns the result
A function that subtracts two numbers and returns the result
Each function will have 2 parameters, num1, num2
On the console the prompt will print to the user:
Please enter your first number (store that number)
Please enter your second number (store that number)
Please enter the operation to perform: add, sub, mul, div (then store the operation)
Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
You will then print to the console: The result is: [the result]
*/