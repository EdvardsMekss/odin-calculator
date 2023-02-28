function writeToScreen(value){
    screenText.innerText += value;
}

function backspace(){
    if(screenText.innerText.length !== 0){
        let currentNumber = screenText.innerText.toString();
        let newCurrNumb = currentNumber.slice(0, -1);
        screenText.innerText = newCurrNumb;
    }
}

let screenText = document.getElementById("screen-text");

// Add event listener to backspace button
let backspaceButton = document.getElementById("backspace");
backspaceButton.addEventListener('click', ()=>{
    backspace();
});

// Add event listeners to all number buttons
const numbers = document.getElementsByClassName("numb");
for(const number of numbers){
    number.addEventListener('click', ()=>{
        let value = number.innerText;
        writeToScreen(value);
    })
}
