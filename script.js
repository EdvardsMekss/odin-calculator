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
    secondNum = evalSecondNum();
    console.log(firstNum)
    console.log(secondNum)
    if(currentOperand === 'plus'){
        return tempSum = parseFloat(firstNum) + parseFloat(secondNum);
    } 
    else if(currentOperand === 'minus'){
        return tempSum = parseFloat(firstNum) - parseFloat(secondNum);
    }
    else if(currentOperand === 'multiply'){
        return tempSum = parseFloat(firstNum) * parseFloat(secondNum);
    }
    else if(currentOperand === 'divide'){
        return tempSum = parseFloat(firstNum) / parseFloat(secondNum);
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
