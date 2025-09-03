const qrtext = document.getElementById("input");

const qrcode = document.getElementById("img");

const generate= document.getElementById("btn");

const qrbox = document.getElementById("imgbox");



generate.addEventListener("click", ()=>{
    if (qrtext.value.trim()!==""){
        qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value
        qrbox.classList.add("qrcode");
    }
})