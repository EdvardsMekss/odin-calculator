// Converts innerText to string and removes last element
function backspace(){
    let opSimb;
    if(currentOperand === 'plus'){
        opSimb = '+';
    } 
    else if(currentOperand === 'minus'){
        opSimb = '-';
    }
    else if(currentOperand === 'multiply'){
        opSimb = '&#215';
    }
    else if(currentOperand === 'divide'){
        opSimb = '&#247';
    }
    else if(currentOperand === 'pow'){
        opSimb = '^';
    }
    else if(currentOperand === 'mod'){
        opSimb = 'mod';
    }

    if(screenText.innerText.length !== 0){
        if(currNumb === 1){
            console.log("First num before: " + firstNum)
            firstNum = firstNum.slice(0, -1);
            screenText.innerText = firstNum;
            console.log("First num after: " + firstNum)
        }
        else if(currNumb === 2){
            if(secondNum === '' || secondNum === 0 || secondNum === undefined){
                currNumb = 1;
                screenText.innerText = screenText.innerText.slice(0, -1);
            }
            else {
                console.log("Second num before: " + secondNum)
                secondNum = secondNum.slice(0, -1);
                screenText.innerText = firstNum + opSimb + secondNum;
                console.log("Second num after: " + secondNum)
            }
        }
        
    }
}

// Evaluates result of first and second numb based on operator
function eval(firstNum, currentOperand, secondNum){
    if(currentOperand === 'plus'){
        return tempSum = parseFloat(firstNum) + parseFloat(secondNum);
    } 
    else if(currentOperand === 'minus'){
        return tempSum = parseFloat(firstNum) - parseFloat(secondNum);
    }
    else if(currentOperand === 'multiply'){
        return tempSum = parseFloat(firstNum) * parseFloat(secondNum).toFixed(5);;
    }
    else if(currentOperand === 'divide'){
        return tempSum = parseFloat(firstNum) / parseFloat(secondNum).toFixed(5);;
    }
    else if(currentOperand === 'pow'){
        return tempSum = Math.pow(parseFloat(firstNum), parseFloat(secondNum)).toFixed(5);;
    }
    else if(currentOperand === 'mod'){
        return tempSum = parseFloat(firstNum) % parseFloat(secondNum);
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

// Add event listener to equals button
let evalButton = document.getElementById("equals");
evalButton.addEventListener('click', ()=>{
    tempSum = eval(firstNum, currentOperand, secondNum);
    screenText.innerText = tempSum;
})

// Add event listener to sqrt button
let sqrtButton = document.getElementById("sqrt");
sqrtButton.addEventListener('click', ()=>{
    if (currNumb === 1){
        firstNum = Math.sqrt(firstNum).toFixed(5);
        screenText.innerText = firstNum;
    }
    else if (currNumb === 2){
        console.log("temp sum before sqrt: " + tempSum)
        tempSum = Math.sqrt(eval(firstNum, currentOperand, secondNum)).toFixed(5);
        console.log("temp sum after sqrt: " + tempSum)
        screenText.innerText = tempSum;
        currNumb = 1;
        firstNum = tempSum;
    }
})

// Add event listeners to all buttons which should be written to screen
let toScreen = document.getElementsByClassName("screen");
for(let elem of toScreen){
    elem.addEventListener('click', ()=>{
        let value = elem.innerText;
        screenText.innerText += value;
    })
}

// Add event listeners to all operands
let operands = document.getElementsByClassName("operand");
for(let operand of operands){
    operand.addEventListener('click', ()=>{
        if (currNumb === 1) {
            currNumb = 2;
            numbPressed = 0;
            currentOperand = operand.id;
        }
        else if(currNumb === 2){
            numbPressed = 0;
            tempSum = eval(firstNum, currentOperand, secondNum);
            firstNum = tempSum;
            currentOperand = operand.id;
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
        }
        else if(currNumb === 1 && numbPressed > 0){
            firstNum += number.innerText;
        }
        else if(currNumb === 2 && numbPressed === 0){
            numbPressed++;
            let f3 = number.innerText;
            secondNum = f3;
        }
        else if(currNumb === 2 && numbPressed > 0){
            secondNum += number.innerText;
        }
    })
}
