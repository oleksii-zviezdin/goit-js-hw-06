const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const createIngredientsListEl = (listItems, listEl) => listItems.forEach(nameItem => {
  const itemEl = document.createElement('li');
  itemEl.textContent = nameItem;
  itemEl.classList.add('item');
  listEl.appendChild(itemEl);
});

createIngredientsListEl(ingredients, ingredientsListEl);


// const ingredientsListEl = document.querySelector('#ingredients');

// const addItemsToIngredientsListEl = item => ingredientsListEl.appendChild(item);

// const createIngredientsListEl = (listItems, callback) => listItems.forEach(nameItem => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = nameItem;
//   itemEl.classList.add('item');
//   callback(itemEl);
// });

// createIngredientsListEl(ingredients, addItemsToIngredientsListEl);



