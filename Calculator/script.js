const textbox = document.getElementById("textbox");
const allSpecialButtons = document.querySelectorAll(".special");

const specials = ["+", "-", "*", "/", "."];

allSpecialButtons.forEach(button => {
    button.addEventListener("click", () => {



        let btnText = button.textContent;
        let lastChar = textbox.value.slice(-1);

        if (lastChar !== "") {
            if (specials.includes(btnText)) {
                // if last char is also a special → replace it
                if (specials.includes(lastChar)) {
                    textbox.value = textbox.value.slice(0, -1) + btnText;
                }
                else {
                    textbox.value += btnText;
                }
            }
            else {
                // numbers (or = if you add later) just append
                textbox.value += btnText;
            }
        }

    });
});