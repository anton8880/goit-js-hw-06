const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsEl = ingredients.map(ingredient => {
//   const productEl = document.createElement('li');
//   productEL.textContent = ingredient;
//   productEl.classList.add('item');
// }).join(" ");

// ingredientsEl.append(productEL);
// console.log(ingredientsEl);


const ingredientsEl = document.querySelector('#ingredients');

const productEL = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, '');

ingredientsEl.innerHTML = productEL;