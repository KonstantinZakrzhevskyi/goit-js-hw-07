const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const getIngredientsList = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  return itemEl;
});
  
const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...getIngredientsList);

console.log(ingredientsList);

