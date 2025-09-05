let choices = document.querySelectorAll(".choice");

let player_choice = document.getElementById("player_hand");
let computer_choice = document.getElementById("computer_hand");

let play = document.querySelector(".play");
let select = document.querySelector(".select");

let human_score = document.getElementById("human");
let computer_score = document.getElementById("computer");

let humanspan = 0;
let computerspan = 0;
let resetTimeout = null;

let Hscore = document.getElementById("Hscore");
let Cscore = document.getElementById("Cscore");


function computerHand() {
    let list = ["paper", "scissors", "stone"];
    let index = Math.floor(Math.random() * list.length); // pick random index
    return list[index]; // return the string at that index
}



choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        player_choice.src = e.target.src;


        let computer = computerHand();


        if (player_choice.src === "http://127.0.0.1:3000/stone%20papper%20scissor/gameImages/scissorsPlayer.png") {
            player_choice.style.marginTop = "45px";
            player_choice.style.marginLeft = "20px"
        }

        computer_choice.src = `gameImages/${computer}computer.png`

        if (computer_choice.src === "http://127.0.0.1:3000/stone%20papper%20scissor/gameImages/scissorscomputer.png") {
            computer_choice.style.marginTop = "45px";
            computer_choice.style.marginRight = "20px"
        }

        select.classList.add("close");
        play.classList.add("start");

        player_choice.classList.add("move_left");
        computer_choice.classList.add("move_right");

        playRound(e.target.id, computer);

        Hscore.innerText = humanspan;
        Cscore.innerText = computerspan;

        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(reset, 4000);


    })
})

function playRound(player, computer) {

    console.log(player);
    console.log(computer);

    if (player === computer) {
        console.log("draw");
    }

    else if (player === "stone") {
        if (computer === "scissors") {
            //   return "Player wins!";

            human_score.classList.add("win");
            computer_score.classList.add("lost");
            humanspan++;


        } else {
            //   return "Computer wins!";
            human_score.classList.add("lost");
            computer_score.classList.add("win");
            computerspan++;

        }
    }

    else if (player === "paper") {
        if (computer === "stone") {
            //   return "Player wins!";
            human_score.classList.add("win");
            computer_score.classList.add("lost");
            humanspan++;
        } else {
            //   return "Computer wins!";
            human_score.classList.add("lost");
            computer_score.classList.add("win");
            computerspan++;
        }
    }

    else if (player === "scissors") {
        if (computer === "paper") {
            //   return "Player wins!";
            human_score.classList.add("win");
            computer_score.classList.add("lost");
            humanspan++;
        } else {
            //   return "Computer wins!";
            human_score.classList.add("lost");
            computer_score.classList.add("win");
            computerspan++;
        }
    }
}


function reset() {
    // hide play, show select
    select.classList.remove("close");
    play.classList.remove("start");

    // remove result classes safely (remove both)
    human_score.classList.remove("win", "lost");
    computer_score.classList.remove("win", "lost");

    // remove hand movement classes so images go back
    player_choice.classList.remove("move_left");
    computer_choice.classList.remove("move_right");

    player_choice.style.marginTop = "";
    player_choice.style.marginLeft = "";
    computer_choice.style.marginTop = "";
    computer_choice.style.marginRight = ""

}

