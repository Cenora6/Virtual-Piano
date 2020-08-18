"use strict";
const buttonRecord = document.querySelector(".record button");
const buttonPlay = document.querySelector(".play button");
const play = document.querySelector(".play");
const audio = document.createElement('audio');
play.appendChild(audio);
let chunks = [];
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
        .then(function (stream) {
        const mediaRecorder = new MediaRecorder(stream);
        buttonRecord.addEventListener("click", function () {
            this.classList.toggle('on');
            if (buttonPlay.className === "on") {
                buttonPlay.classList.toggle('on');
            }
            if (this.className === "on") {
                mediaRecorder.start();
                console.log(mediaRecorder.state);
                console.log("recorder started");
            }
            else {
                mediaRecorder.stop();
                console.log(mediaRecorder.state);
                console.log("recorder stopped");
            }
        });
        mediaRecorder.ondataavailable = function (e) {
            chunks.push(e.data);
        };
        mediaRecorder.onstop = function (e) {
            console.log("recorder stopped!!");
            let audioData = new Blob(chunks, { 'type': 'audio/mp3;' });
            chunks = [];
            audio.src = window.URL.createObjectURL(audioData);
            console.log(audio.src);
            //
            // const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
            // chunks = [];
            // const audioURL = window.URL.createObjectURL(blob);
            // audio.src = audioURL;
            //
            // deleteButton.onclick = function(e) {
            //     let evtTgt = e.target;
            //     evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
            // }
        };
    })
        .catch(function (err) {
        console.log('The following getUserMedia error occured: ' + err);
    });
}
else {
    console.log('getUserMedia not supported on your browser!');
}
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
buttonPlay.addEventListener("click", function () {
    console.log(this.className);
    this.classList.toggle('on');
    if (buttonRecord.className === "on") {
        buttonRecord.classList.toggle('on');
    }
    if (this.className === "on") {
        audio.play();
        console.log(audio.duration);
    }
    else {
        audio.pause();
    }
});
