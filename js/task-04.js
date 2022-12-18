
const counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')


decrementBtn.addEventListener("click", decrement);
      let value = 0;
      const step = 1;
function decrement() {
  counterValue.textContent =  value -= step;
};

incrementBtn.addEventListener('click', increment);
function increment() {
  counterValue.textContent =  value += step;
};






 
