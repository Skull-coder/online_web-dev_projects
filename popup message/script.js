const submit = document.getElementById("Submitbtn");
const popup = document.querySelector(".popup");
const ok = document.getElementById("okBtn");

submit.addEventListener("click", () => {
    
    popup.classList.add("open-popup");
});

ok.addEventListener("click", () => {
    
    
    popup.classList.remove("open-popup");
});