// let num1;
// let num2;
// let operator = prompt("Please enter the operator");

// calculate(operator);

// function calculate(operator) {

//     switch (operator) {
//         case "+":
//             num1 = Number(prompt("Enter the augend"))
//             num2 = Number(prompt("Enter the addend"))
//             console.log(`${add(num1, num2)}`)
//             break;

//         case "-":
//             num1 = Number(prompt("Enter the minuend"))
//             num2 = Number(prompt("Enter the subtrahend"))
//             console.log(subtract(num1, num2))
//             break;

//         case "*":
//             num1 = Number(prompt("Enter the multiplicand"))
//             num2 = Number(prompt("Enter the multiplier"))
//             console.log(multiply(num1, num2))
//             break;

//         case "/":
//             num1 = Number(prompt("Enter the dividend"))
//             num2 = Number(prompt("Enter the divisor"))
//             if (num2 === 0) {
//                 prompt("Can't divide by zero!")
//             }
//             else {
//                 console.log(divide(num1, num2))
//             }
//             break;

//         default:
//             console.log("Invalid operator")
//             break;

//     }

// }

let num1;
let myArrayWithElements = [1, 2, 3];

const oneButton = document.getElementById("one-button");
const twoButton = document.getElementById("two-button");
const threeButton = document.getElementById("three-button");
const fourButton = document.getElementById("four-button");
const fiveButton = document.getElementById("five-button");
const sixButton = document.getElementById("six-button");
const sevenButton = document.getElementById("seven-button");
const eightButton = document.getElementById("eight-button");
const nineButton = document.getElementById("nine-button");

const screen = document.querySelector(".screen");

const fontSize = 45;
const aspectRatio = 0.35;
const averageCharacterWidth = fontSize * aspectRatio;


const maxContentLength = Math.floor(screen.clientWidth / averageCharacterWidth);

function appendToScreen(content) {
    if (screen.textContent.length < maxContentLength) {
        screen.textContent += content;
    } else {
        console.log("Content limit reached");
    }
}
~


oneButton.addEventListener("click", function () {
    appendToScreen("\uD835\uDFCF");
    num1 = 1;
});

twoButton.addEventListener("click", function () {
    appendToScreen("\uD835\uDFD0");
    num1 = 2;
});

threeButton.addEventListener("click", function () {
    appendToScreen("\uD835\uDFD1");
});

fourButton.addEventListener("click", function () {
    appendToScreen("\uD835\uDFD2");
});

fiveButton.addEventListener("click", function () {
    appendToScreen("\uD835\uDFD3");
});

sixButton.addEventListener("click", function () {
    appendToScreen("\uD835\uDFD4");
});

sevenButton.addEventListener("click", function () {
    appendToScreen("\uD835\uDFD5");
});

eightButton.addEventListener("click", function () {
    appendToScreen("\uD835\uDFD6");
});

nineButton.addEventListener("click", function () {
    appendToScreen("\uD835\uDFD7");
});






function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;

} function multiply(num1, num2) {
    return num1 * num2;

} function divide(num1, num2) {

    return num1 / num2;
}

