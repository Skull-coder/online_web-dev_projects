const time= document.getElementById("time");
const mainBtn= document.getElementById("main");
const resetbtn = document.getElementById("reset");

let seconds= 0;
let minutes= 0;
let hours= 0;

let timer = null

function startwatch(){

    if(seconds<59){
        seconds++;
    }

    else if(seconds === 59){
        seconds = 0;
        if(minutes<59){
            minutes++;
        }
        else if(minutes=== 59){
            minutes =0;
            hours++;
        }
    }


    let s,m,h;
    s= seconds;
    m=minutes;
    h=hours

    if(seconds<10){
        s= "0"+seconds;
    }
    
    if(minutes<10){
        m= "0"+minutes;
    }
    if(hours<10){
        h= "0"+hours;
    }

    time.innerText= h+":"+m+":"+s;

}

function reset(){
    seconds =0;
    minutes =0;
    hours =0;
}

mainBtn.addEventListener("click", ()=>{

    if(timer === null){
        timer= setInterval(startwatch, 1000);

        mainBtn.src= "file/stop.png";
    }
    else {
        
        clearInterval(timer);
        timer = null;
        mainBtn.src= "file/start.png";
    }


})



resetbtn.addEventListener("click", ()=>{

    clearInterval(timer);
    timer= null;

    reset();

    time.innerText= "0"+hours+":"+"0"+minutes+":"+"0"+seconds;
})

