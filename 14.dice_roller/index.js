const numberOfDice = document.getElementById("numberOfDice")
const result = document.getElementById("result")
const diceImages = document.getElementById("diceImages")

const images = [];
const values = [];

function rollDice() {
    for (let i = 0; i < numberOfDice.value; i++) {
        const value = Math.floor(Math.random() * (6)) + 1;
        values.push(value)
        images.push(`<img src="images/${value}.png">`);
    }

    result.textContent = values.join(',');
    diceImages.innerHTML = images.join('');
}