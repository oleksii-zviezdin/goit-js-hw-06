const nameIntputEl = document.querySelector(`#name-input`);
const nameOutputEl = document.querySelector(`#name-output`);

const inputText = () =>
    nameIntputEl.textContent === " " ? nameOutputEl.textContent =`Anonymous` : nameOutputEl.textContent = nameIntputEl.value;

nameIntputEl.addEventListener(`input`, inputText);