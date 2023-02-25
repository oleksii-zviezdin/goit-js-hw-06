const fontSizeConstrolEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

fontSizeConstrolEl.addEventListener(`input`, handlerfontSizeConstrol)


// спеціально додав 8й і 9й рядки, щоб при входи на сторнку текс одразу відповідав розміру на бігунку. Бо без цих 2х рядків виходить неточність, ніби бігунок стоїть на половині своєї стежки, а текс висвітлює якби був на min
const fontSize = fontSizeConstrolEl.value;
textEl.style.fontSize = `${fontSize}px`;
    
function handlerfontSizeConstrol(event) {
    const fontSize = fontSizeConstrolEl.value;
    textEl.style.fontSize = `${fontSize}px`;
}

