let boxes = document.querySelectorAll(".box");

const rightbox = document.getElementById("right");
const leftbox = document.getElementById("left");
let selected = null;

boxes.forEach(box => {
    box.addEventListener("dragstart", (e) => {
        
        selected = e.target.closest(".box");

    });

})

rightbox.addEventListener("dragover", (e) => {
    e.preventDefault();
});
rightbox.addEventListener("drop", (e) => {
    rightbox.appendChild(selected);
    selected = null;
})
leftbox.addEventListener("dragover", (e) => {
    e.preventDefault();
});
leftbox.addEventListener("drop", (e) => {
    leftbox.appendChild(selected);
    selected = null;
})

