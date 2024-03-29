

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');

const addIngrToList = ingredients => {
  return ingredients.map(ingredient => {
    const ingrRef = document.createElement('li');
    ingrRef.textContent = ingredient;
    ingrRef.classList.add('item');
    return ingrRef;
  });
};

ulRef.append(...addIngrToList(ingredients));
