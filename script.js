const firstVideo = document.getElementById("firstVideo");
const secondVideo = document.getElementById("secondVideo");
const finalScreen = document.getElementById("finalScreen");

const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");

// "Ready for this..." wale point ka time
const READY_TIME = 5;

let secondVideoStarted = false;


// ========================================
// START WEBSITE
// ========================================

startBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");

    firstVideo.currentTime = 0;
    firstVideo.muted = false;

    firstVideo.play().catch(error => {
        console.log("First video play error:", error);
    });

});


// ========================================
// FIRST VIDEO
// Ready for this... ke baad SECOND VIDEO
// ========================================

firstVideo.addEventListener("timeupdate", () => {

    if (
        firstVideo.currentTime >= READY_TIME &&
        !secondVideoStarted
    ) {

        secondVideoStarted = true;

        // First video stop
        firstVideo.pause();
        firstVideo.classList.add("hidden");

        // Second video show
        secondVideo.classList.remove("hidden");

        secondVideo.currentTime = 0;
        secondVideo.muted = false;

        secondVideo.play().catch(error => {
            console.log("Second video play error:", error);
        });
    }

});


// ========================================
// SECOND VIDEO FINISH
// ========================================

secondVideo.addEventListener("ended", () => {

    // Second video completely stop
    secondVideo.pause();
    secondVideo.classList.add("hidden");

    // Final Ganesh Ji photo show
    finalScreen.classList.remove("hidden");

});
