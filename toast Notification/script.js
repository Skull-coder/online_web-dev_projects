const submitbtn = document.querySelector(".submitbtn");

const invalidbtn = document.querySelector(".invalidbtn");

const errorbtn = document.querySelector(".errorbtn");

const notification = document.querySelector(".notifications");




submitbtn.addEventListener("click", () => {

    const box = document.createElement("div");
    box.classList.add("submit", "box");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-circle-check");
    icon.style.color = "#26c538";

    const span = document.createElement("span");
    span.textContent = "Submitted successfully";

    box.appendChild(icon);
    box.appendChild(span);
    notification.appendChild(box);

    requestAnimationFrame(() => {
        box.classList.add("box_display");
    });

    

    setTimeout(() => {
        box.remove();
    }, 5100);



})

invalidbtn.addEventListener("click", () => {
    const box = document.createElement("div");
    box.classList.add("invalid", "box");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-circle-exclamation");
    icon.style.color = "rgb(240, 236, 7)";

    const span = document.createElement("span");
    span.textContent = "Invalid try again!";

    box.appendChild(icon);
    box.appendChild(span);
    notification.appendChild(box);

    requestAnimationFrame(() => {
        box.classList.add("box_display");
    });

     setTimeout(() => {
        box.remove();
    }, 5100);
})

errorbtn.addEventListener("click", () => {
    const box = document.createElement("div");
    box.classList.add("error", "box");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-circle-xmark");
    icon.style.color = "red";

    const span = document.createElement("span");
    span.textContent = "Error occured try again!";

    box.appendChild(icon);
    box.appendChild(span);
    notification.appendChild(box);

    requestAnimationFrame(() => {
        box.classList.add("box_display");
    });

     setTimeout(() => {
        box.remove();
    }, 5100);
})