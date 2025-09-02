let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}
function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}