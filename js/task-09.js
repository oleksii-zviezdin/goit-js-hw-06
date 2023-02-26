function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector(`.change-color`)
const valueHexColorEl = document.querySelector(`.color`)

changeColorBtnEl.addEventListener(`click`, handleChangeColorBtn)

function handleChangeColorBtn(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  valueHexColorEl.textContent = `${color}`;
}