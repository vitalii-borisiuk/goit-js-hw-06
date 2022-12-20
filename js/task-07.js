const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}
refs.input.addEventListener('input', font);


function font(event) {
    const size = event.currentTarget.value;
    refs.text.style.fontSize = `${size}px`;
};
