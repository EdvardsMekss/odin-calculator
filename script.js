function writeToScreen(value){
    screenText.innerText += value;
}


let screenText = document.getElementById("screen-text");

const numbers = document.getElementsByClassName("numb");
for(const number of numbers){
    number.addEventListener('click', ()=>{
        let value = number.innerText;
        writeToScreen(value);
    })
}

