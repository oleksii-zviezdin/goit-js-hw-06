const inputEl = document.querySelector(`#validation-input`);

const dataLength = Number(inputEl.getAttribute("data-length"));
// const length = Number(inputEl.dataset.length)

inputEl.addEventListener(`change`, handleInputValidation)

function handleInputValidation (event) {
    if (event.currentTarget.value.length === dataLength) {
        inputEl.classList.add(`valid`);
        inputEl.classList.remove(`invalid`);
    } else if (event.currentTarget.value.length === 0) {
        inputEl.classList.remove(`invalid`);
        inputEl.classList.remove(`valid`);
    } else {
        inputEl.classList.add(`invalid`);
        inputEl.classList.remove(`valid`);  
    }
}