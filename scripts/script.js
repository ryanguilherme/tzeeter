function generateDays() {
    const daySelect = document.getElementById('day');
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
}

function generateMonths() {
    const monthSelect = document.getElementById('month');
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });
}

function generateYears() {
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const endYear = currentYear - 10;

    for (let i = startYear; i <= endYear; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

function init() {
    generateDays();
    generateMonths();
    generateYears();
}

document.addEventListener('DOMContentLoaded', init);

const form = document.querySelector('form');
const name = document.querySelector('.user-name');
const nameError = document.querySelector("#user-name + span.error");
const email = document.querySelector(".user-email");
const emailError = document.querySelector('#user-email + span.error');
const password = document.querySelector(".user-password");
const passwordError = document.querySelector("#user-password + span.error");
const passwordConfirm = document.querySelector(".user-password-confirm");
const passwordConfirmError = document.querySelector("#user-password-confirm + span.error");
const acceptTerms = document.getElementById("radsim");
const acceptTermsError = document.querySelector("#terms-buttons + span.error");
const month = document.getElementById("month");
const monthError = document.querySelector("#month + span.error");
const day = document.getElementById("day");
const dayError = document.querySelector("#day + span.error");
const year = document.getElementById("year");
const yearError = document.querySelector("#year + span.error");


email.addEventListener('input', (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError("email");
    }
    if (name.validity.valid) {
        nameError.textContent = "";
        nameError.className = "error";
    } else {
        showError("name");
    }
    if (password.validity.valid && passwordConfirm.validity.valid) {
        passwordError.textContent = "";
        passwordConfirmError.textContent = "";
        passwordError.className = "error";
        passwordConfirmError.className = "error";
    } else {
        showError("password");
    }
    if (acceptTerms.checked) {
        acceptTermsError.textContent = "";
        acceptTermsError.className = "error";
    } else {
        showError("terms");
    }
    if (month.value) {
        monthError.textContent = "";
        monthError.className = "error";
    } else {
        showError("date-month");
    }
})

form.addEventListener('submit', (event) => {
    if (!name.validity.valid) {
        showError("name");
        event.preventDefault();
    }
    if (!password.validity.valid || !passwordConfirm.validity.valid) {
        showError("password");
        event.preventDefault();
    }
    if (!email.validity.valid) {
        showError("email");
        event.preventDefault();
    }
    if (!acceptTerms.checked) {
        showError("terms");
        event.preventDefault();
    }
    if (!month.value || !day.value || !year.value) {
        showError("date");
        event.preventDefault();
    }

})

function showError(type) {
    if (type === "name") {
        nameError.textContent = "Por favor, informe um nome de usuário.";
    }
    if (type === "email") {
        emailError.textContent = "Informe um email válido.";
    }
    if (type === "password") {
        passwordError.textContent = "A senha é obrigatória e deve ter pelo menos 6 caracteres";
        passwordConfirmError.textContent= "A senha é obrigatória e deve ter pelo menos 6 caracteres";
    }
    if (type === "terms") {
        acceptTermsError.textContent = "Você deve concordar com nossos termos para se inscrever.";
    }
    if (type === "date") {
        yearError.textContent = "Forneça uma data válida.";
    }
}












