let form = document.querySelector('#user-details');
let nameError = document.querySelector('.name-error')
let emailError = document.querySelector('.email-error')
let passwordError = document.querySelector('.password-error')
let confirmError = document.querySelector('.confirm-error')
let inputs = Array.from(document.querySelectorAll('.user-input'))
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function checkError(person) {
    let error = {};
    if (person.name === "") {
        error.name = "Name cannot be empty";

    }
    else if (!isNaN(person.name) || (person.name.length < 3 || person.name.length > 20)) {
        error.name = "Invalid Name";

    }
    else if (person.email === "") {
        error.email = "Email cannot be empty";

    }
    else if (!person.email.match(emailFormat)) {
        error.email = "Invalid Email";

    }
    else if (person.password === "") {
        error.password = "Password cannot be empty";

    }
    else if (person.password.length < 6 || person.password.length > 10) {
        error.password = "Password must be in 6 to 10 character long";

    }
    else if (person.password !== person.confirm) {
        error.confirm = "Password don't match";

    }
    return error;

}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    eventArr = Array.from(event.target);
    let person = {
        name: eventArr[0].value,
        email: eventArr[1].value,
        password: eventArr[2].value,
        confirm: eventArr[3].value
    }

    let userError = checkError(person);
    if (Object.keys(userError).length >= 1) {
        nameError.innerText = userError.name || "";
        emailError.innerText = userError.email || "";
        passwordError.innerText = userError.password || "";
        confirmError.innerText = userError.confirm || "";
    }
    else {
        nameError.innerText = "";
        emailError.innerText = "";
        passwordError.innerText = "";
        confirmError.innerText = "";
        form.reset();
        window.location.href = "./sign-up.html";
    }
})
inputs.forEach((input, index) => {
    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            inputs[index + 1].focus();
        }
    })
})