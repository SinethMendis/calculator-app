let num1;
let num2;
let operator = prompt("Please enter the operator");

calculate(operator);

function calculate() {

    switch (operator) {
        case "+":
            num1 = Number(prompt("Enter the augend"))
            num2 = Number(prompt("Enter the addend"))
            alert(`${add(num1, num2)}`)
            break;

        case "-":
            num1 = Number(prompt("Enter the minuend"))
            num2 = Number(prompt("Enter the subtrahend"))
            alert(subtract(num1, num2))
            break;
            
        case "*":
            num1 = Number(prompt("Enter the multiplicand"))
            num2 = Number(prompt("Enter the multiplier"))
            alert(multiply(num1, num2))
            break;

        case "/":
            num1 = Number(prompt("Enter the dividend"))
            num2 = Number(prompt("Enter the divisor"))
            if (num2 === 0) {
                prompt("Can't divide by zero!")
            }
            else {
                alert(divide(num1, num2))
            }
            break;

        default:
            console.log("Invalid operator")
            break;

    }

}

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