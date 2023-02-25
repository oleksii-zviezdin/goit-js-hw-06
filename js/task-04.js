const value = document.querySelector('#value');
let counterValue = 0;

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const handleDecrementCount = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

decrementBtnEl.addEventListener('click', handleDecrementCount);


const incrementBtnEl = document.querySelector('button[data-action="increment"]');

const handleIncrementCount = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

incrementBtnEl.addEventListener('click', handleIncrementCount);