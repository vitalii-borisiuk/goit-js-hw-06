const input = document.querySelector('#validation-input');

input.addEventListener('blur', inputLength);

function inputLength(event) {
    console.log(input);
    if (event.target.value.length >= 6) {
        input.classList.remove('invalid'); 
        input.classList.add('valid'); 
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid'); 
    }
    }
