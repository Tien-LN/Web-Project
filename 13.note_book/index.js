const input = document.getElementById("note-input");
const form = document.getElementById("note-form");
const notelist = document.getElementById("note-list");

let checkboxs = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const note = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        span.classList.toggle('completed', checkbox.checked);
    });

    const span = document.createElement('span');
    span.textContent = text;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => note.remove());

    note.append(checkbox, span, removeButton);
    notelist.appendChild(note);

    checkboxs = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
    
    input.value = '';
});

let lastChecked;

function handleCheck(e) {
    let isbetween = false;
    if (e.shiftKey && this.checked)
    {
        checkboxs.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                isbetween = !isbetween;
            }
            if (isbetween) {
                checkbox.checked = true;
                checkbox.nextElementSibling.classList.add('completed');
            }
        });
    }
    lastChecked = this;
}

checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));