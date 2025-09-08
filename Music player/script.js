const backbtn = document.getElementById("backward");
const frontbtn = document.getElementById("forward");
const pause_play = document.getElementById("pause_play");
const song = document.getElementById("song");
const progress = document.getElementById("progress");


song.addEventListener("loadedmetadata", () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
});


pause_play.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        pause_play.classList.remove("fa-play");
        pause_play.classList.add("fa-pause");
    } else {
        song.pause();
        pause_play.classList.add("fa-play");
        pause_play.classList.remove("fa-pause");
    }
});


frontbtn.addEventListener("click", () => {
    song.currentTime = Math.min(song.currentTime + 10, song.duration);
});

backbtn.addEventListener("click", () => {
    song.currentTime = Math.max(song.currentTime - 10, 0);
});

song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;
});

progress.addEventListener("input", () => {
    song.currentTime = progress.value;
    song.play();
    pause_play.classList.remove("fa-play");
    pause_play.classList.add("fa-pause");

});