const eye = document.getElementById("image");

let text= document.getElementById("strength");

let inputBox= document.getElementById("inputbox");

let show= 0;

eye.addEventListener("click", ()=>{

    if(show===0){
    eye.src= "eye-icons/eye_open.svg";
    inputBox.type= "text"
    show= 1;
    }
    else{
        eye.src= "eye-icons/eye_close.svg";
        inputBox.type= "password"
        show= 0;
    }
})


// chatgpt function created 

function checkPasswordStrength(password) {
    // Regular expressions to check for character types
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);

    // Calculate a "strength score" based on the variety of characters
    let strengthScore = 0;
    if (hasLower) strengthScore++;
    if (hasUpper) strengthScore++;
    if (hasDigit) strengthScore++;
    if (hasSpecial) strengthScore++;

    // --- STRONG PASSWORD --- 💪
    // Condition: 12+ characters AND contains all four character types.
    if (password.length >= 12 && strengthScore === 4) {
        text.innerText = "Strong password";
        text.style.color = "green";
    }
    // --- MEDIUM PASSWORD --- 👍
    // Condition: 8+ characters AND contains at least three different character types.
    else if (password.length >= 8 && strengthScore >= 3) {
        text.innerText = "Medium password";
        text.style.color = "orange"; // Orange is often more visible than yellow
    }
    // --- WEAK PASSWORD --- 👎
    // Condition: Anything that doesn't meet the medium or strong criteria.
    else {
        text.innerText = "Weak password";
        text.style.color = "red";
    }
}

inputBox.addEventListener("keypress", (event) => {
    if (event.key === ' ') {
        event.preventDefault(); // Prevent space from being entered
    }
});

inputBox.addEventListener("input", (event) => {
    let value = inputBox.value;

    checkPasswordStrength(value);
});
