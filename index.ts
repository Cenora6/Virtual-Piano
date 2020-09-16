const buttonRecord = document.querySelector(".record button") as HTMLButtonElement;
const buttonPlay = document.querySelector(".play button") as HTMLButtonElement;
const play = document.querySelector(".play") as HTMLDivElement;
declare const MediaRecorder: any;

const audio = document.createElement('audio') as HTMLAudioElement;
play.appendChild(audio);
let chunks: any = [];

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia (
        {
            audio: true
        })

        .then(function(stream) {
            const mediaRecorder = new MediaRecorder(stream);

            buttonRecord!.addEventListener("click", function () {
                this.classList.toggle('on');

                if(buttonPlay.className === "on") {
                    buttonPlay.classList.toggle('on');
                }

                if(this.className === "on") {
                    mediaRecorder.start();
                } else {
                    mediaRecorder.stop();
                }
            });

            buttonPlay!.addEventListener("click", function () {
                    mediaRecorder.stop();
            })

            mediaRecorder.ondataavailable = function(e: any) {
                chunks.push(e.data);
            }

            mediaRecorder.onstop = function() {
                let audioData = new Blob(chunks,
                    { 'type': 'audio/mp3;' });
                chunks = [];
                audio.src = window.URL.createObjectURL(audioData);
            }
        })

        .catch(function(err) {
                console.log('The following getUserMedia error occured: ' + err);
            }
        );
} else {
    console.log('getUserMedia not supported on your browser!');
}

document.addEventListener("keypress", function (event: KeyboardEvent) {
    let audio = document.createElement("audio") as HTMLAudioElement;
    audio.src = `./keys/${event.key.toUpperCase()}.mp3`;
    audio.play();
})

const piano_keys = document.querySelectorAll('kbd');
piano_keys.forEach( key => {
    key.addEventListener("click", function () {
        let audio = document.createElement("audio") as HTMLAudioElement;
        audio.src = `./keys/${this.innerHTML}.mp3`;
        audio.play();
    })
})

buttonPlay!.addEventListener("click", function () {

    if(buttonRecord.className === "on") {
        buttonRecord.classList.toggle('on');
    }

    this.classList.toggle('on');
    if(this.className === "on") {
        audio.play();
    } else {
        audio.pause();
    }
});