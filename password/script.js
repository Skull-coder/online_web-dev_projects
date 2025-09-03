const inputtext = document.getElementById("textbox");
const btn = document.getElementById("button");

let seen = false

btn.addEventListener("click", () => {

    if (!seen) {
        btn.src = "eye-icons/eye-open.png"
        seen = true;
        inputtext.type= "text"
    }
    else if (seen) {
        btn.src = "eye-icons/eye-close.png"
        seen = false;
        inputtext.type= "password"
    }
})