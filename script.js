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
}

let screenText = document.getElementById("screen-text");

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

// Add event listeners to all number buttons
const numbers = document.getElementsByClassName("numb");
for(const number of numbers){
    number.addEventListener('click', ()=>{
        let value = number.innerText;
        writeToScreen(value);
    })
}
