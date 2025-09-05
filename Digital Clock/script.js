const h = document.getElementById("hour");
const m = document.getElementById("minute");
const s = document.getElementById("second");


function time() {
    const now = new Date();

    if (now.getHours()< 10) {
        h.innerText = "0" + now.getHours();
    }
    else {
        h.innerText = now.getHours();
    }
    if (now.getMinutes() < 10) {
        m.innerText = "0" + now.getMinutes();
    }
    else {
        m.innerText = now.getMinutes();
    }
    if (now.getSeconds() < 10) {
        s.innerText = "0" + now.getSeconds();
    }
    else {
        s.innerText = now.getSeconds();
    }
}

setInterval(time, 1000);