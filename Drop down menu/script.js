const facebook = document.querySelector(".facebook");
const instagram = document.querySelector(".instagram");
const pinterest = document.querySelector(".pinterest");
const twitter = document.querySelector(".twitter");
const whatsapp = document.querySelector(".whatsapp");
const youtube = document.querySelector(".youtube");

const menu= document.querySelector(".menu");

const media = document.querySelector(".media");

const text= document.getElementById("tag");


const select= document.querySelector(".select");

select.addEventListener("click", ()=>{

    menu.classList.toggle("drop-menu");
})

menu.addEventListener("click", (e)=>{
    text.innerText= e.target.innerText;
    menu.classList.toggle("drop-menu");
})