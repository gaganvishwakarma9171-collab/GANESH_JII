const firstVideo = document.getElementById("firstVideo");
const secondVideo = document.getElementById("secondVideo");
const finalScreen = document.getElementById("finalScreen");

const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");

const READY_TIME = 5;


// ========================================
// START
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
// FIRST VIDEO - ONLY 5 SECONDS
// ========================================

firstVideo.addEventListener("timeupdate", () => {

    if (firstVideo.currentTime >= READY_TIME) {

        firstVideo.pause();

        firstVideo.classList.add("hidden");

        // SECOND VIDEO START
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

    /*
       Video ko hidden karne ke bajay
       usko screen se hata rahe hain,
       taaki uska audio photo ke time chale.
    */

    secondVideo.classList.add("hidden");

    finalScreen.classList.remove("hidden");

    /*
       SECOND VIDEO KO DOBARA PLAY KARTE HAIN
       LEKIN VISUAL HIDDEN HAI.

       Isse second video ka original audio
       photo ke saath ek baar chalega.
    */

    secondVideo.currentTime = 0;
    secondVideo.muted = false;

    secondVideo.play().catch(error => {
        console.log("Photo music error:", error);
    });

});
