const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map(ingredient => {
  const productEL = document.createElement('li');
  productEL.textContent = ingredient;
  productEL.classList.add('item');
}).join(" ");

ingredientsEl.append(productEL);
console.log(ingredientsEl);