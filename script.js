let expression = "";
let dividePressed = false;
let locked = false;

const messages = [
    "Ты дурак?",
    "На ноль делить нельзя!",
    "Совсем е-бо-бо?"
];


function updateDisplay(text) {
    document.getElementById("display").value = text;
}


function addDigit(digit) {

    if (dividePressed || locked) {
        return;
    }

    expression += digit;
    updateDisplay(expression);
}


function divideZero() {

    if (locked || dividePressed || expression === "") {
        return;
    }

    expression += " ÷ 0";
    dividePressed = true;

    updateDisplay(expression);
}


function calculate() {

    if (locked || !dividePressed) {
        return;
    }

    let result = messages[Math.floor(Math.random() * messages.length)];

    updateDisplay(result);

    locked = true;
}


function clearDisplay() {

    expression = "";
    dividePressed = false;
    locked = false;

    updateDisplay("");
}
