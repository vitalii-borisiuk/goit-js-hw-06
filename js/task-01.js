// 1. Посчитать общее количество категорий.
const categories = document.querySelectorAll('.item').length;

console.log('Number of categories:', categories);

// 2. Перечислить категории.

const category = document.querySelectorAll('h2');
for (const element of category) {
    console.log('Category:', element.textContent);
}



const itemLi = document.querySelectorAll('.item');
for (const items of itemLi) {
    // console.log(items.children[1]);
    for (const el of items.children) {
        console.log(el)
    }
}


console.log(document.body)
// console.log(itemLi);
// const item = itemLi.children;
// console.log(item);
// for (const itemList of itemLi) {
//     console.log(itemList);

        
// }
    
