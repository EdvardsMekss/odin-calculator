// Value stores number which was clicked by user and is added on screen
function writeToScreen(value){
    screenText.innerText += value;
}

// Converts innerText to string and removes last element
function backspace(){
    if(screenText.innerText.length !== 0){
        let currentNumber = screenText.innerText.toString();
        let newCurrNumb = currentNumber.slice(0, -1);
        screenText.innerText = newCurrNumb;
    }
}

// Clears entire screen
function clear(){
    if(screenText.innerText.length !== 0){
        screenText.innerText = "";
    }
    firstNum = '';
    currentOperand = '';
    secondNum = '';
    tempSum ='';
}

function eval(firstNum, currentOperand){
    if(currentOperand === 'plus'){
        secondNum = evalSecondNum();
        return tempSum = parseFloat(firstNum) + parseFloat(secondNum);
    } 
    else if(currentOperand === 'minus'){
        secondNum = evalSecondNum();
        return tempSum = parseFloat(firstNum) - parseFloat(secondNum);
    }
    else if(currentOperand === 'multiply'){
        secondNum = evalSecondNum();
        return tempSum = parseFloat(firstNum) * parseFloat(secondNum);
    }
    else if(currentOperand === 'divide'){
        secondNum = evalSecondNum();
        return tempSum = parseFloat(firstNum) / parseFloat(secondNum);
    }
    else if(currentOperand === 'pow'){
        tempSum = Math.pow(firstNum, 2);
        screenText.innerText = tempSum;
    }
    else if(currentOperand === 'sqrt'){
        tempSum = Math.sqrt(parseFloat(firstNum));
        screenText.innerText = tempSum;
    }
}

function evalSecondNum(){
    let currNum = screenText.innerText.toString();
    const regex = /-?\s*\d+$/; // matches an optional negative sign, optional whitespace, and one or more digits at the end of the string
    const match = currNum.match(regex); // search for the last occurrence of the pattern in the string
    return match ? match[0].trim() : null; // return the matched number without leading/trailing whitespace or null if there's no match
}

function readFirstNum(){
    let currentNumber = screenText.innerText.toString();
    firstNum = currentNumber.slice(0, -1);
}

let screenText = document.getElementById("screen-text");
let firstNum = '';
let currentOperand = '';
let secondNum = '';
let tempSum ='';

// Add event listener to backspace button
let backspaceButton = document.getElementById("backspace");
backspaceButton.addEventListener('click', ()=>{
    backspace();
});

// Add event listener to clear button
let clearButton = document.getElementById("clear");
clearButton.addEventListener('click', ()=>{
    clear();
})

// Add event listener to pow^2 button
let powButton = document.getElementById("pow");
powButton.addEventListener('click', ()=>{
    firstNum = screenText.innerText.toString();
    currentOperand = 'pow'
    eval(firstNum, currentOperand);
})

// Add event listener to sqrt button
let sqrtButton = document.getElementById("sqrt");
sqrtButton.addEventListener('click', ()=>{
    firstNum = screenText.innerText.toString();
    currentOperand = 'sqrt'
    eval(firstNum, currentOperand);
})

// Add event listener to equals button
let evalButton = document.getElementById("equals");
evalButton.addEventListener('click', ()=>{
    let sum = eval(firstNum, currentOperand);
    screenText.innerText = sum;
})

// Add event listeners to all buttons which should be written to screen
let numbers = document.getElementsByClassName("numb");
for(let number of numbers){
    number.addEventListener('click', ()=>{
        let value = number.innerText;
        writeToScreen(value);
    })
}

// Add event listeners to all operands
let operands = document.getElementsByClassName("operand");
for(let operand of operands){
    operand.addEventListener('click', ()=>{
        currentOperand = operand.id;
        if(firstNum === ''){
            readFirstNum();
        } else {
            firstNum = tempSum;
            eval(firstNum, currentOperand);
        }
            
    })
}
