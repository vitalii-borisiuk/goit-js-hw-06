// 1. Посчитать общее количество категорий.
const categories = document.querySelectorAll('.item').length;

console.log('Number of categories:', categories);

const category = document.querySelectorAll('h2');
for (const element of category) {
    console.log('Category:', element.textContent);
    const itemLi = element.parentElement.querySelectorAll('li');
    console.log('Elements:', itemLi.length);
}




