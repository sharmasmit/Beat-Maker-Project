class Drumkit{
    constructor(){
        this.pads = document.querySelectorAll(".pad");
        this.kickAudio = document.querySelectorAll(".kick-sound");
        this.snareAudio = document.querySelectorAll(".snare-sound");
        this.hihatAudio = document.querySelectorAll(".hihat-sound");
        this.index = 0;
        this.bpm = 150;
    }
    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        this.index++;
    }
    start(){
        setInterval(() => {
            this.repeat();
            }, 1000);
        }
    }

    const drumkit = new Drumkit();

    drumkit.start();