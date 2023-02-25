const fontSizeConstrolEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

fontSizeConstrolEl.addEventListener(`input`, handlerfontSizeConstrol)

function handlerfontSizeConstrol(event) {
    const fontSize = fontSizeConstrolEl.value;
    textEl.style.fontSize = `${fontSize}px`;
}

