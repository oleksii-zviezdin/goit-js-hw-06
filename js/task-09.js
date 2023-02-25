function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector(`.change-color`)
const valueHexColorEl = document.querySelector(`.color`)

changeColorBtnEl.addEventListener(`click`, handleChangeColorBtn)

console.log(changeColorBtnEl)

function handleChangeColorBtn (event) {
  document.body.style.backgroundColor = getRandomHexColor()
  valueHexColorEl.textContent = `${getRandomHexColor()}`
}