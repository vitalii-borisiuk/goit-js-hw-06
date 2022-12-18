const refs = {
    input: document.querySelector('#name-input'),
    outputText: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) { 
    if (event.target.value === "") {
         return refs.outputText.textContent = "Anonymous";
    };
    refs.outputText.textContent = event.target.value;

};

