const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector('#ingredients');

const createIngredientsListEl = (listItems, listEl) => {  
  const arrayItem = [];

  listItems.forEach((nameItem) => {
    const itemEl = document.createElement('li');
    itemEl.textContent = nameItem;
    itemEl.classList.add('item');
    arrayItem.push(itemEl);
  }) 
  
  listEl.append(...arrayItem);
};

createIngredientsListEl(ingredients, ingredientsListEl);



