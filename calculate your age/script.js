
let today = new Date().toISOString().split("T")[0];


document.getElementById("date").setAttribute("max", today);


const btn = document.querySelector(".btn");
const result = document.querySelector("#result");

let y1;
let m1;
let d1;

today = new Date();

let d2 = today.getDate();        
let m2 = today.getMonth() + 1;   
let y2 = today.getFullYear();


let d;
let m;
let y;


function diff(){

    
    y = y2 - y1;
    m = m2 - m1;
    d = d2 - d1;

    
    if (d < 0) {
        m -= 1;
        let prevMonth = new Date(y2, m2 - 1, 0).getDate(); // days in previous month
        d += prevMonth;
    }

    
    if (m < 0) {
        y -= 1;
        m += 12;
    }


}


function resultshow(){
    result.innerText = `you are ${y} years ${m}months ${d}day old`
}


btn.addEventListener("click", () => {

    let dateValue = document.getElementById("date").value;


    let parts = dateValue.split("-");


    y1 = parts[0];
    m1 = parts[1];
    d1 = parts[2];

    diff();
    resultshow();


    // console.log("Day:", d1);
    // console.log("Month:", m1);
    // console.log("Year:", y1);
})













