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
            }
            else {
                mediaRecorder.stop();
            }
        });
        mediaRecorder.ondataavailable = function (e) {
            chunks.push(e.data);
        };
        mediaRecorder.onstop = function (e) {
            let audioData = new Blob(chunks, { 'type': 'audio/mp3;' });
            chunks = [];
            audio.src = window.URL.createObjectURL(audioData);
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
    let audio = document.createElement("audio");
    audio.src = `./keys/${event.key.toUpperCase()}.mp3`;
    audio.play();
});
const piano_keys = document.querySelectorAll('kbd');
piano_keys.forEach(key => {
    key.addEventListener("click", function () {
        let audio = document.createElement("audio");
        audio.src = `./keys/${this.innerHTML}.mp3`;
        audio.play();
    });
});
buttonPlay.addEventListener("click", function () {
    if (buttonRecord.className === "on") {
        buttonRecord.classList.toggle('on');
    }
    this.classList.toggle('on');
    if (this.className === "on") {
        audio.play();
    }
    else {
        audio.pause();
    }
});
