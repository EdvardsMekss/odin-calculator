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

function eval(firstNum, currentOperand, secondNum){
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
    else if(currentOperand === 'pow'){
        return tempSum = Math.pow(parseFloat(firstNum), parseFloat(secondNum));
    }
}


let screenText = document.getElementById("screen-text");
let firstNum;
let currentOperand;
let secondNum;
let tempSum;
let operandsUsed = 0;
let currNumb = 1;
let numbPressed = 0;

// Add event listener to backspace button
let backspaceButton = document.getElementById("backspace");
backspaceButton.addEventListener('click', ()=>{
    backspace();
});

// Add event listener to clear button
let clearButton = document.getElementById("clear");
clearButton.addEventListener('click', ()=>{
    screenText.innerText = "";
    firstNum = null;
    currentOperand = null;
    secondNum = null;
    tempSum = null;
    operandsUsed = 0;
    currNumb = 1;
    numbPressed = 0;
})


// Add event listener to sqrt button
let sqrtButton = document.getElementById("sqrt");
sqrtButton.addEventListener('click', ()=>{
    

})

// Add event listener to equals button
let evalButton = document.getElementById("equals");
evalButton.addEventListener('click', ()=>{
    tempSum = eval(firstNum, currentOperand, secondNum);
    screenText.innerText = tempSum;
})

// Add event listeners to all buttons which should be written to screen
let toScreen = document.getElementsByClassName("screen");
for(let elem of toScreen){
    elem.addEventListener('click', ()=>{
        let value = elem.innerText;
        writeToScreen(value);
    })
}


// Add event listeners to all operands
let operands = document.getElementsByClassName("operand");
for(let operand of operands){
    operand.addEventListener('click', ()=>{
        if(currNumb === 1){
            currNumb = 2;
            numbPressed = 0;
            currentOperand = operand.id;
            console.log("Curr oper: " + currentOperand);
        }
        else if(currNumb === 2){
            numbPressed = 0;
            console.log("Curr oper when pres again: " + currentOperand);
            tempSum = eval(firstNum, currentOperand, secondNum);
            firstNum = tempSum;
            console.log("Temp sum " + tempSum);
            currentOperand = operand.id;
            console.log("Curr oper: " + currentOperand);
        }
    })
}

// Add event listeners to all numbers
let numbers = document.getElementsByClassName("numb");
for(let number of numbers){
    number.addEventListener('click', ()=>{
        if(currNumb === 1 && numbPressed === 0){
            numbPressed++;
            let f2 = number.innerText;
            firstNum = f2;
            console.log("First num: " + firstNum);
        }
        else if(currNumb === 1 && numbPressed > 0){
            firstNum += number.innerText;
            console.log("First num: " + firstNum);
        }
        else if(currNumb === 2 && numbPressed === 0){
            numbPressed++;
            let f3 = number.innerText;
            secondNum = f3;
            console.log("Second num: " + secondNum);
        }
        else if(currNumb === 2 && numbPressed > 0){
            secondNum += number.innerText;
            console.log("Second num: " + secondNum);
        }
    })
}
