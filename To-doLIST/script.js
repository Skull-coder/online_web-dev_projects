

const input= document.getElementById("input-box");
const listConatainer= document.getElementById("list-container");
const btn= document.getElementById("addbtn");

btn.addEventListener("click", ()=>{
    if(input.value.trim() !=='' ){
        let li = document.createElement("li");
        li.innerText= input.value;
        listConatainer.appendChild(li);

        let span= document.createElement("span");
        span.innerText= "\u00d7";
        li.appendChild(span);
        saveData()
    }

    input.value="";
})

listConatainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", listConatainer.innerHTML);
}

function loadData(){
    listConatainer.innerHTML= localStorage.getItem("data");
}

loadData();
