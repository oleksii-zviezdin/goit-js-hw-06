const nameIntputEl = document.querySelector(`#name-input`);
const nameOutputEl = document.querySelector(`#name-output`);

const inputText1 = () =>
    nameIntputEl.textContent === " " ? nameOutputEl.textContent = `Anonymous` : nameOutputEl.textContent = nameIntputEl.textContent;

const inputText = () =>
    nameIntputEl.textContent === " " ? nameOutputEl.textContent =`Anonymous` : nameOutputEl.textContent = nameIntputEl.value;

nameIntputEl.addEventListener(`input`, inputText);