const categories = document.querySelector(`#categories`);

const allCategories = categories.querySelectorAll(`.item`);

const getNumberOfCategories = () => {
    console.log(`Number of categories:`, allCategories.length);
};

const getNameOfCategories = () => {

    for (let categoty of allCategories) {
        console.log("Category:", categoty.firstElementChild.textContent);
        console.log("Elements:", categoty.lastElementChild.querySelectorAll(`li`).length);
        console.log(` `);
    }
};

getNumberOfCategories();
console.log(` `)
getNameOfCategories();