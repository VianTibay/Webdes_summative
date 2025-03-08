let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let historyPanel = document.getElementById('historyPanel');
let menuButton = document.getElementById('menuButton');

// Append value when clicking buttons
function appendValue(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Append value when typing directly
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendValue(key); // Numbers and operators
    } else if (key === 'Enter') {
        calculateResult(); // Calculate on 'Enter'
    } else if (key === 'Backspace') {
        deleteLast(); // Delete last character on 'Backspace'
    } else if (key === 'Escape') {
        clearDisplay(); // Clear display on 'Escape'
    }
});

// Clear display
function clearDisplay() {
    display.innerText = '0';
}

// Delete last character
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

// Calculate result
function calculateResult() {
    try {
        const result = eval(display.innerText);
        historyList.innerHTML += `<li>${display.innerText} = ${result}</li>`;
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}

// Toggle History Panel
menuButton.addEventListener('click', () => {
    historyPanel.classList.toggle('show');
});
