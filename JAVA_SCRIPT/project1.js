// Declare variable for counter
let count = 0;
let store = null;

// Function for display counter
function updateCounter() {
    document.getElementById('count').innerHTML = count;
}

// Function for incerase counter
function increaseCounter() {
    count++;
    updateCounter();
}

// Function for decrease counter
function decreaseCounter() {
    count--;
    updateCounter();
}

// Function for reset counter
function resetCounter() {
    count = 0;
    updateCounter();
}

// Function for save counter
function saveCounter() {
    store = Number(count);
}

// Function for load counter
function loadCounter() {
    if (store !== null) {
        count = store;
    }
    updateCounter();
}