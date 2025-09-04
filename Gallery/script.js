let gallery = document.querySelector(".gallery");

const backBtn= document.getElementById("backbtn");
const nextBtn= document.getElementById("nextbtn");

function scrollLeftGallery() {
    gallery.scrollBy({
        left: -665,   
        behavior: "smooth"  
    });
}

function scrollRightGallery() {
    gallery.scrollBy({
        left: 665,   
        behavior: "smooth"
    });
}

backBtn.addEventListener("click", ()=>{
    scrollLeftGallery();
})

nextBtn.addEventListener("click",()=>{
    scrollRightGallery();
})
