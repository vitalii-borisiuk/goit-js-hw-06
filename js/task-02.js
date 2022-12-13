const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEL = document.querySelector('#ingredients');
const elements = [];
  for (const ingridient of ingredients) {  
    const ingList = document.createElement('li');
      ingList.classList.add('item');
      ingList.textContent = ingridient;
    elements.push(ingList);
 
  }
ingredientsEL.append(...elements);
