let quiz = [

    {
        question: "Who was the first President of India?",
        options: [
            { option: "Dr. Rajendra Prasad", correct: true },
            { option: "Dr. B. R. Ambedkar", correct: false },
            { option: "Jawaharlal Nehru", correct: false },
            { option: "Sardar Vallabhbhai Patel", correct: false }
        ]
    },

    {
        question: "Which is the largest planet in our solar system?",
        options: [
            { option: "Saturn", correct: false },
            { option: "Earth", correct: false },
            { option: "Jupiter", correct: true },
            { option: "Mars", correct: false }
        ]
    },

    {
        question: "In which year did India gain independence?",
        options: [
            { option: "1942", correct: false },
            { option: "1947", correct: true },
            { option: "1950", correct: false },
            { option: "1930", correct: false }
        ]
    },

    {
        question: "Who is known as the 'Father of the Nation' in India?",
        options: [
            { option: "Bhagat Singh", correct: false },
            { option: "Mahatma Gandhi", correct: true },
            { option: "Subhas Chandra Bose", correct: false },
            { option: "Bal Gangadhar Tilak", correct: false }
        ]
    }

];




let Q_Number = document.getElementById("q-number");
let questionContainer = document.getElementById("question");
let answer = document.getElementsByClassName("ans");
let lock = document.getElementById("lock-in");
let next = document.getElementById("next");
let option = document.querySelectorAll(".option");
let options = document.querySelector(".options");
const start = document.querySelector(".start");
const gamebtn = document.querySelector("#Gamebtn");


let correctanswer = 0;
let selected = null;
let index = 0;


function showQuestion() {
    
    Q_Number.innerText=   `Question ${index+1} out of ${quiz.length}`
    
    
    questionContainer.innerText = "";
    questionContainer.innerText = quiz[index].question;


    options.innerHTML = "";

    quiz[index].options.forEach(opt => {

        let btn = document.createElement("button");
        btn.classList.add("ans", "option");
        btn.innerHTML = `<h3>${opt.option}</h3>`

        btn.addEventListener("click", () => {

            if (selected === null) {
                selected = btn;
                selected.classList.toggle("selected");
            }
            else if (selected !== btn) {
                btn.classList.toggle("selected");
                selected.classList.remove("selected");
                selected = btn;
            }
            else {
                selected.classList.toggle("selected")
                selected = null;
            }

        })

        btn.dataset.correct = opt.correct;
        options.appendChild(btn);

    })
}


gamebtn.addEventListener("click", () => {
    start.style.display = "none"
    document.querySelector(".quiz").style.display = "block";
    showQuestion();
})


function showresult() {
    document.querySelector(".quiz").style.display = "none";
    const scoreDiv = document.querySelector(".score");
    scoreDiv.style.display = "flex";
    document.getElementById("final-score").innerText =
        `You scored ${correctanswer} out of ${quiz.length}`;

    document.getElementById("video").src= "memes/Adbhut ｜｜KBC｜｜Meme template｜｜Amitabh Bachchan｜｜Free download.mp4";
    document.getElementById("result-video").load();
    
}


function nextbtn() {

    index++;
    selected= null;

    next.addEventListener("click", () => {

        if (index >= quiz.length) {
            showresult();

        }
        else {
            showQuestion();
            lock.style.display = "block";
            next.style.display = "none";
        }
    })

    lock.style.display = "none";
    next.style.display = "block";
}


lock.addEventListener("click", () => {
    if (selected) {

        if (selected.dataset.correct === "true") {
            selected.classList.remove("selected");
            selected.classList.add("correct");
            correctanswer += 1;

        } else {
            selected.classList.remove("selected");
            selected.classList.add("wrong");

            document.querySelectorAll(".option").forEach(btn => {
                if (btn.dataset.correct === "true") {
                    btn.classList.add("correct");
                }
            });

        }

        document.querySelectorAll(".option").forEach(btn => {
            btn.disabled = true;
        });


        nextbtn();
    }
})




