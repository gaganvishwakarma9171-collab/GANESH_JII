const firstVideo = document.getElementById("firstVideo");
const secondVideo = document.getElementById("secondVideo");
const finalScreen = document.getElementById("finalScreen");


// ========================================
// FIRST VIDEO
// ========================================

// Yahan "Ready for this..." ke exact time ko set karenge.
// Pehle 12 seconds try karte hain.
const READY_TIME = 5;


// Page load hote hi first video start
window.addEventListener("load", () => {

    firstVideo.play().catch(() => {
        console.log("Video play karne ke liye screen par click karein.");
    });

});


// First video ko READY_TIME par stop karo
firstVideo.addEventListener("timeupdate", () => {

    if (firstVideo.currentTime >= READY_TIME) {

        // First video stop
        firstVideo.pause();

        // First video hide
        firstVideo.classList.add("hidden");


        // ========================================
        // SECOND VIDEO
        // ========================================

        secondVideo.classList.remove("hidden");

        secondVideo.currentTime = 0;

        secondVideo.play().catch(() => {
            console.log("Second video play nahi hua.");
        });

    }

});


// ========================================
// SECOND VIDEO FINISH
// ========================================

secondVideo.addEventListener("ended", () => {

    // Second video hide
    secondVideo.classList.add("hidden");


    // ========================================
    // FINAL GANESH JI PHOTO
    // ========================================

    finalScreen.classList.remove("hidden");

});