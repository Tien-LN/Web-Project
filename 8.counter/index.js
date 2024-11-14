const increase_button = document.getElementById("in-btn");
const decrease_button = document.getElementById("de-btn");
const reset_button = document.getElementById("re-btn");
const counter = document.getElementById("counter");
let count = 0;

increase_button.onclick = function() {
    count++;
    counter.textContent = count;
}

decrease_button.onclick = function () {
    if (count > 0)
    {
    count--;
    counter.textContent = count;
    }
}

reset_button.onclick = function() {
    count = 0;
    counter.textContent = count;
}
