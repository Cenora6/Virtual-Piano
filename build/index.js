"use strict";
document.addEventListener("keypress", function (event) {
    let audio = document.createElement("AUDIO");
    if (event.key === "a") {
        audio.src = "./white_keys/A.mp3";
        audio.play();
    }
    else if (event.key === "s") {
        audio.src = "./white_keys/S.mp3";
        audio.play();
    }
    else if (event.key === "d") {
        audio.src = "./white_keys/D.mp3";
        audio.play();
    }
    else if (event.key === "f") {
        audio.src = "./white_keys/F.mp3";
        audio.play();
    }
    else if (event.key === "g") {
        audio.src = "./white_keys/G.mp3";
        audio.play();
    }
    else if (event.key === "h") {
        audio.src = "./white_keys/H.mp3";
        audio.play();
    }
    else if (event.key === "j") {
        audio.src = "./white_keys/J.mp3";
        audio.play();
    }
    else if (event.key === "w") {
        audio.src = "./black_keys/W.mp3";
        audio.play();
    }
    else if (event.key === "e") {
        audio.src = "./black_keys/E.mp3";
        audio.play();
    }
    else if (event.key === "t") {
        audio.src = "./black_keys/T.mp3";
        audio.play();
    }
    else if (event.key === "y") {
        audio.src = "./black_keys/Y.mp3";
        audio.play();
    }
    else if (event.key === "u") {
        audio.src = "./black_keys/U.mp3";
        audio.play();
    }
});
