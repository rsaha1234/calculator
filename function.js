// script.js

function clearScreen() {
    document.getElementById('calculator-screen').value = '';
}

function backspace() {
    let screen = document.getElementById('calculator-screen');
    screen.value = screen.value.slice(0, -1);
}

function appendValue(value) {
    let screen = document.getElementById('calculator-screen');
    screen.value += value;
}

function calculate() {
    let screen = document.getElementById('calculator-screen');
    try {
        // Replace × with * and ÷ with / for evaluation
        screen.value = eval(screen.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (e) {
        alert('Invalid Calculation');
        screen.value = '';
    }
}

// Function to handle percentage
function calculatePercentage() {
    let screen = document.getElementById('calculator-screen');
    try {
        // Evaluate the current value and divide by 100
        screen.value = eval(screen.value) / 100;
    } catch (e) {
        alert('Invalid Calculation');
        screen.value = '';
    }
}
