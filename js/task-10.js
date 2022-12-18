const allBlocks = document.querySelector('#controls')
const refsBlock = {
  createBtn: allBlocks.querySelector('[data-create]'),
  destroyBtn: allBlocks.querySelector('[data-destroy]'),
  input: allBlocks.querySelector('input'),
  boxes: document.querySelector('#boxes'),
};

const { createBtn, destroyBtn, input, boxes } = refsBlock;


const box = [];
let boxSize = 30;


createBtn.addEventListener('click', addBoxes);
destroyBtn.addEventListener("click", destroyBoxes);


function destroyBoxes() {
  window.location.reload();
};

function addBoxes() {
  createBoxes(Number(input.value));
  boxes.append(...box);
  input.value = 0;
}

function createBoxes(amount) { 
  for (let i = 0; i < amount; i += 1) {
      const boxEl = document.createElement('div');
    boxEl.classList.add('item');
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxSize += 10;    
    boxEl.style.backgroundColor = getRandomHexColor();
    box.push(boxEl);
  } 
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


