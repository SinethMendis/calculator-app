document.addEventListener('DOMContentLoaded', () => {
    let num1;
    let characterList = [];
    const calculatorContainer = document.querySelector(".calculator-container")
    const clearAllButton = document.getElementById("clear-all-button")
    const clearRecentButton = document.getElementById("clear-recent-button")
    const zeroButton = document.getElementById("zero-button")
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
    const closeButton = document.getElementById("closing-btn")
    const equalButton = document.getElementById("equal-button");
    const divButton = document.getElementById("division-button")
    const multiButton = document.getElementById("multiplication-button")
    const addButton = document.getElementById("addition-button")
    const subButton = document.getElementById("subtract-button")
    const dotButton = document.getElementById("dot-button")
    const pButton = document.getElementById("p-button")


    const fontSize = 35;
    const aspectRatio = 0.45;
    const averageCharacterWidth = fontSize * aspectRatio;
    const maxContentLength = Math.floor(screen.clientWidth / averageCharacterWidth);
    function appendToScreen(content) {
        if (screen.textContent.length < maxContentLength) {
            screen.textContent += content;
        } else {
            console.log("Content limit reached");
            characterList.pop();
            // Above line removes the characters added after the content limit reached message is logged
        }
    }
    dotButton.addEventListener("click", function () {

        if (!dotButton.disabled) {
            appendToScreen(".");
            num1 = ".";
            characterList.push(num1);

            dotButton.disabled = true;
        }

    })
    pButton.addEventListener("click", function () {
        appendToScreen("%")
        characterList.push("%")
        dotButton.disabled = false;
    })
    divButton.addEventListener("click", function () {
        appendToScreen("/");
        characterList.push("/");
        dotButton.disabled = false;
    });
    multiButton.addEventListener("click", function () {
        appendToScreen("*");
        characterList.push("*");
        dotButton.disabled = false;

    });
    addButton.addEventListener("click", function () {
        appendToScreen("+");
        characterList.push("+");
        dotButton.disabled = false;

    });
    subButton.addEventListener("click", function () {
        appendToScreen("-");
        characterList.push("-");
        dotButton.disabled = false;

    });
    const showButton = document.createElement("button");
    showButton.classList.add("show-btn");
    showButton.textContent = "Calculator";
    closeButton.addEventListener("click", function () {
        showButton.classList.remove("hide-content");
        calculatorContainer.classList.add("hide-content");
        document.body.appendChild(showButton);
        screen.textContent = "";
        characterList = [];
        dotButton.disabled = false;

    });
    showButton.addEventListener("click", function () {
        calculatorContainer.classList.remove("hide-content");
        showButton.classList.add("hide-content");


    })
    clearRecentButton.addEventListener("click", function () {
        screen.textContent = screen.textContent.slice(0, -1);
        characterList.pop();
        dotButton.disabled = false;

    });
    clearAllButton.addEventListener("click", function () {
        screen.textContent = "";
        characterList = [];
        dotButton.disabled = false;


    })
    zeroButton.addEventListener("click", function () {
        appendToScreen("0");
        num1 = 0;
        characterList.push(num1);

    });
    oneButton.addEventListener("click", function () {
        appendToScreen("1");
        num1 = 1;
        characterList.push(num1);


    });
    twoButton.addEventListener("click", function () {
        appendToScreen("2");
        num1 = 2;
        characterList.push(num1);

    });
    threeButton.addEventListener("click", function () {
        appendToScreen("3");
        num1 = 3;
        characterList.push(num1);

    });
    fourButton.addEventListener("click", function () {
        appendToScreen("4");
        num1 = 4;
        characterList.push(num1);


    });
    fiveButton.addEventListener("click", function () {
        appendToScreen("5");
        num1 = 5;
        characterList.push(num1);

    });
    sixButton.addEventListener("click", function () {
        appendToScreen("6");
        num1 = 6;
        characterList.push(num1);

    });
    sevenButton.addEventListener("click", function () {
        appendToScreen("7");
        num1 = 7;
        characterList.push(num1);

    });
    eightButton.addEventListener("click", function () {
        appendToScreen("8");
        num1 = 8;
        characterList.push(num1);


    });
    nineButton.addEventListener("click", function () {
        appendToScreen("9");
        num1 = 9;
        characterList.push(num1);

    });
    equalButton.addEventListener("click", function operate() {
        dotButton.disabled = false;
        console.log(characterList);
        let numbers1 = [];
        let numbers2 = [];
        let operator;
        let result;
        characterList.forEach(function (currentValue) {
            if (isNaN(currentValue) && currentValue !== '.') {
                operator = currentValue;
            }
            else {
                if (operator === undefined) {
                    numbers1.push(currentValue);
                }
                else {
                    numbers2.push(currentValue);
                }
            }
        });


        let n1 = Number(numbers1.join(""));
        let n2 = Number(numbers2.join(""));

        console.log(n1);
        console.log(n2);
        console.log(operator);



        switch (operator) {
            case "/":
                result = divide(n1, n2)
                break;
            case "*":
                result = multiply(n1, n2)
                break
            case "+":
                result = add(n1, n2)
                break
            case "-":
                result = subtract(n1, n2)
                break
            case "%":
                result = percentage(n1, n2)
                break
            default:
                break;
        }

        screen.textContent = "";
        characterList.push(result);
        screen.textContent += "=" + result;

        while (characterList.length > 1) {
            characterList.shift();
        }

        numbers1 = [];
        numbers2 = [];
        operator = "";


        function percentage(n1,n2){
            return n1/100 ;

        }
        function divide(n1, n2) {
            if (n2 > 0) {
                return (n1 / n2).toFixed(2);

            } else {
                alert("Division by zero is undefined in Mathematics")
                return "Can't divide by zero"
            }
        }
        function multiply(n1, n2) {
            return n1 * n2;
        }
        function add(n1, n2) {
            return n1 + n2;
        }
        function subtract(n1, n2) {
            return n1 - n2;
        }
    });
});















