const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail,
        password,
    }
        if (mail === "" || password === "") {
    return alert("Заполните все поля");
        }
    console.log(formData);
    event.currentTarget.reset();
};
