const form = document.querySelector('form');
const email = document.querySelector(".user-email");
const emailError = document.querySelector('#user-email + span.error');
const password = document.querySelector(".user-password");
const passwordError = document.querySelector("#user-password + span.error");

form.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
        showError("email");
        event.preventDefault();
    }
    if (!password.validity.valid) {
        showError("password");
        event.preventDefault();
    }

})

function showError(type) {
    if (type === "email") {
        emailError.textContent = "Informe um email válido.";
    }
    if (type === "password") {
        passwordError.textContent = "A senha é obrigatória e deve ter pelo menos 6 caracteres";
        passwordConfirmError.textContent= "A senha é obrigatória e deve ter pelo menos 6 caracteres";
    }
}