function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector(`button[data-create]`);
const destroyBtnEl = document.querySelector(`button[data-destroy]`);
const divBoxesEl = document.querySelector(`#boxes`)
const divControlsEl = document.querySelector(`#controls`)

divBoxesEl.style.display = `flex`;
divBoxesEl.style.flexWrap = `wrap`;
divBoxesEl.style.gap = `10px`

createBtnEl.addEventListener(`click`, createBoxes)
destroyBtnEl.addEventListener(`click`, destroyBoxes)

function destroyBoxes() {
  divBoxesEl.innerHTML = ``;
  divControlsEl.firstElementChild.value = '';
}

function createBoxes() {  
  const quantity = divControlsEl.firstElementChild.value;
  const collectionBoxes = []
  
  let baseHeight = `30`;
  let baseWidth = `30`;
  
  for (let i = 0; i < quantity; i += 1) {
    const color = getRandomHexColor();
    const box = document.createElement(`div`);
    box.style.height = `${baseHeight}px`;
    box.style.width = `${baseWidth}px`;
    box.style.borderRadius = `10%`
    box.style.boxShadow = `0 0 15px ${color}`
    baseHeight = Number(baseHeight) + 10;
    baseWidth = Number(baseWidth) + 10;
    box.style.backgroundColor = `${color}`;
    collectionBoxes.push(box)
  }
  divBoxesEl.append(...collectionBoxes)
}