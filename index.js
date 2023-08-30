function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    if (y === 0){
        alert("Divison by Zero is Not Allowed")
        return 0;
    }
    return x / y;
}

function operate(operator, firstNum, secondNum){
    if (operator === "+"){
        return add(firstNum, secondNum)
    } else if (operator === "-"){
        return subtract(firstNum, secondNum)
    } else if (operator === "*"){
        return multiply(firstNum, secondNum)
    } else {
        return divide(firstNum, secondNum)
    }
}

/* Display Functions */
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    const value = display.value;
    
    // Extract the numbers and operator using a regular expression
    const match = value.match(/^(\-?\d+(?:\.\d+)?)([+\-*/])(\-?\d+(?:\.\d+)?)$/);
    
    if (!match) {
        alert('Invalid operation');
        clearDisplay();
        return;
    }
    
    const firstNum = parseFloat(match[1]);
    const operator = match[2];
    const secondNum = parseFloat(match[3]);

    display.value = operate(operator, firstNum, secondNum);;
}