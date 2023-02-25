const nameIntputEl = document.querySelector(`#name-input`);
const nameOutputEl = document.querySelector(`#name-output`);

nameIntputEl.addEventListener(`input`, handleInputText);

function handleInputText () {
    nameIntputEl.value.length === 0 ?
    nameOutputEl.textContent = `Anonymous` :
    nameOutputEl.textContent = nameIntputEl.value;
}