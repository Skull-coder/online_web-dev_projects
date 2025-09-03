const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const emailInput = document.getElementById("email");

const name_error = document.getElementById("name_error");
const number_error = document.getElementById("number_error");
const email_error = document.getElementById("email_error");

const button = document.getElementById("btn");

const Namecheck = document.getElementById("name_check");
const Numbercheck = document.getElementById("number_check");
const Emailcheck = document.getElementById("email_check");

function Submit() {
    if (!nameInput.value.match(/^[A-Za-z]+\s+[A-Za-z]+(\s+[A-Za-z]+)?$/)) {
        name_error.innerText = "Invalid name";
        return false;
    }

    if (!numberInput.value.match(/^[0-9]{10}$/)) {
        number_error.innerText = "Invalid number";
        return false;
    }

    if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        email_error.innerText = "Invalid email";
        return false;
    }

    return true;
}

nameInput.addEventListener("input", () => {
    if (nameInput.value.match(/^[A-Za-z]+\s+[A-Za-z]+(\s+[A-Za-z]+)?$/)) {
        name_error.innerText = "";
        Namecheck.style.display = "inline-block";
    }

    else {

        Namecheck.style.display = "none";
    }
});


numberInput.addEventListener("input", () => {
    if (numberInput.value.match(/^[0-9]{10}$/)) {
        number_error.innerText = "";
        Numbercheck.style.display = "inline-block";
    } else {

        Numbercheck.style.display = "none";
    }
});

emailInput.addEventListener("input", () => {
    if (emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        email_error.innerText = "";
        Emailcheck.style.display = "inline-block";
    } else {

        Emailcheck.style.display = "none";
    }
});

button.addEventListener("click", (event) => {
    event.preventDefault();


    if (Submit()) {
        button.style.background = "rgb(24, 210, 48)";
        nameInput.disabled = true;
        numberInput.disabled = true;
        emailInput.disabled = true;
        button.innerText = "Submitted :)";
    }



});
