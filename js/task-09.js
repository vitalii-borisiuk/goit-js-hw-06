const refs = {
  bgColor: document.querySelector('.color'),
  bgButtom: document.querySelector('.change-color'),
}



refs.bgButtom.addEventListener('click', changeColor);

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();  
  refs.bgColor.textContent = getRandomHexColor();  
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

