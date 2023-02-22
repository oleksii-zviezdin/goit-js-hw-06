const value = document.querySelector('#value');
let counterValue = 0;

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const decrementCount = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

decrementBtnEl.addEventListener('click', decrementCount);


const incrementBtnEl = document.querySelector('button[data-action="increment"]');

const incrementCount = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

incrementBtnEl.addEventListener('click', incrementCount);