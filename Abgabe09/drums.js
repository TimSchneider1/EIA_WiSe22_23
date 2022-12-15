var A09;
(function (A09) {
    let Samples = [("samples/808 FlexKick.wav"), ("samples/808 FlexSnare.wav"), ("samples/808 FlexHat.wav"),
        ("A.mp3"), ("C.mp3"), ("F.mp3"), ("G.mp3"), ("laugh-1.mp3"), ("laugh-2.mp3")];
    const buttonOne = document.getElementById("one");
    buttonOne.addEventListener("click", function () {
        playSample(new Audio('samples/808 FlexKick.wav'));
    });
    const buttonTwo = document.getElementById("two");
    buttonTwo.addEventListener("click", function () {
        playSample(new Audio('samples/808 FlexSnare.wav'));
    });
    const buttonThree = document.getElementById("three");
    buttonThree.addEventListener("click", function () {
        playSample(new Audio('samples/808 FlexHat.wav'));
    });
    const buttonFour = document.getElementById("four");
    buttonFour.addEventListener("click", function () {
        playSample(new Audio('samples/A.mp3'));
    });
    const buttonFive = document.getElementById("five");
    buttonFive.addEventListener("click", function () {
        playSample(new Audio('samples/C.mp3'));
    });
    const buttonSix = document.getElementById("six");
    buttonSix.addEventListener("click", function () {
        playSample(new Audio('samples/F.mp3'));
    });
    const buttonSeven = document.getElementById("seven");
    buttonSeven.addEventListener("click", function () {
        playSample(new Audio('samples/G.mp3'));
    });
    const buttonEight = document.getElementById("eight");
    buttonEight.addEventListener("click", function () {
        playSample(new Audio('samples/laugh-1.mp3'));
    });
    const buttonNine = document.getElementById("nine");
    buttonNine.addEventListener("click", function () {
        playSample(new Audio('samples/laugh-2.mp3'));
    });
    const playButton = document.getElementById("btnPlay");
    playButton.addEventListener("click", function () {
        playBeat();
    });
    const remixButton = document.getElementById("remix");
    remixButton.addEventListener("click", function () {
        remixer();
    });
    const stopButton = document.getElementById("btnStop");
    stopButton.addEventListener("click", function () {
        stopRemixer();
    });
    let samplesBeat = [Samples[0], Samples[2], Samples[1], Samples[2]];
    function playSample(widergabe) {
        widergabe.play();
    }
    let ton = 0;
    function playBeat() {
        setInterval(function () {
            playSample(new Audio(samplesBeat[ton]));
            ton++;
            if (ton == 4) {
                ton = 0;
            }
        }, 300);
    }
    let sounds = [new Audio('samples/808 FlexKick.wav'), new Audio('samples/808 FlexSnare.wav'), new Audio('samples/808 FlexHat.wav')];
    function remixer() {
        if (ton == 0) {
            ton = setInterval(function () {
                let mixedNumbers = Math.floor(sounds.length * Math.random());
                playSample(sounds[mixedNumbers]);
                console.log(mixedNumbers);
            }, 300);
        }
    }
    function stopRemixer() {
        clearInterval(ton);
        ton = 0;
    }
    // namespace A08{
    //     const pad1:HTMLAudioElement = new Audio ('samples/808 FlexKick.wav');
    //     const pad2:HTMLAudioElement = new Audio ('samples/808 FlexSnare.wav');
    //     const pad3:HTMLAudioElement = new Audio ('samples/808 FlexHat.wav');
    //     const pad4:HTMLAudioElement = new Audio ('samples/G.mp3');
    //     const pad5:HTMLAudioElement = new Audio ('samples/hihat.mp3');
    //     const pad6:HTMLAudioElement = new Audio ('samples/kick.mp3');
    //     const pad7:HTMLAudioElement = new Audio ('samples/laugh-1.mp3');
    //     const pad8:HTMLAudioElement = new Audio ('samples/laugh-2.mp3');
    //     const pad9:HTMLAudioElement = new Audio ('samples/snare.mp3');
    //     const buttonOne: HTMLButtonElement = document.getElementById("one") as HTMLButtonElement;
    //     buttonOne.addEventListener("click", function(){
    //         playSample (new Audio ('samples/808 FlexKick.wav'))
    //     });
    //     const buttonTwo: HTMLButtonElement = document.getElementById("two") as HTMLButtonElement;
    //     buttonTwo.addEventListener("click", function(){
    //         playSample (new Audio ('samples/808 FlexSnare.wav'))
    //     });
    //     const buttonThree: HTMLButtonElement = document.getElementById("three") as HTMLButtonElement;
    //     buttonThree.addEventListener("click", function(){
    //         playSample (new Audio ('samples/808 FlexHat.wav'))
    //     });
    //     const buttonFour: HTMLButtonElement = document.getElementById("four") as HTMLButtonElement;
    //     buttonFour.addEventListener("click", function(){
    //         playSample (new Audio ('samples/G.mp3'))
    //     });
    //     const buttonFive: HTMLButtonElement = document.getElementById("five") as HTMLButtonElement;
    //     buttonFive.addEventListener("click", function(){
    //         playSample (new Audio ('samples/hihat.mp3'))
    //     });
    //     const buttonSix: HTMLButtonElement = document.getElementById("six") as HTMLButtonElement;
    //     buttonSix.addEventListener("click", function(){
    //         playSample (new Audio ('samples/kick.mp3'))
    //     });
    //     const buttonSeven: HTMLButtonElement = document.getElementById("seven") as HTMLButtonElement;
    //     buttonSeven.addEventListener("click", function(){
    //         playSample (new Audio ('samples/laugh-1.mp3'))
    //     });
    //     const buttonEight: HTMLButtonElement = document.getElementById("eight") as HTMLButtonElement;
    //     buttonEight.addEventListener("click", function(){
    //         playSample (new Audio ('samples/laugh-2.mp3'))
    //     });
    //     const buttonNine: HTMLButtonElement = document.getElementById("nine") as HTMLButtonElement;
    //     buttonNine.addEventListener("click", function(){
    //         playSample (new Audio ('samples/snare.mp3'))
    //     });
    //     function stopPlay(): void {
    //         if (document.querySelector(".fa-play").classList.contains("fa-play")) {
    //             document.querySelector(".fa-play").classList.add("fa-stop");
    //             document.querySelector(".fa-play").classList.remove("fa-play");
    //         }
    //         else {
    //             document.querySelector(".fa-play").classList.remove("fa-stop");
    //             document.querySelector(".fa-play").classList.add("fa-play")
    //         }
    //     }
    //     document.querySelector(".fa-play").addEventListener('click', function () {
    //         document.querySelector(".fa-stop").classList.remove('visibility')
    //         document.querySelector(".fa-play").classList.add('visibility')
    //         clearInterval
    //     })
    //     document.querySelector(".fa-stop").addEventListener('click', function () {
    //         document.querySelector(".fa-play").classList.remove('visibility')
    //         document.querySelector(".fa-stop").classList.add('visibility')
    //         clearInterval
    //     })
    //     const buttonPlay:HTMLElement = document.querySelector(".fa-play");
    //     const buttonStop:HTMLElement = document.querySelector(".fa-stop");
    //     buttonPlay.addEventListener ('click', function () {
    //         setInterval(function () {
    //             playSample(new Audio (arraySamples [ton]))
    //             ton++
    //             if (ton==4) {ton=0}
    //         }, 300)
    //     })
    //     let ton:number = 0;
    //     let arraySamples = ['samples/808 FlexKick.wav', 'samples/808 FlexHat.wav', 'samples/808 FlexSnare.wav', 'samples/808 FlexHat.wav']
    //     function playSample(widergabe: any) {
    //         widergabe.play()
    //     }
    //     // const buttonRemix: HTMLButtonElement = document.getElementById("remix") as HTMLButtonElement;
    //     // buttonRemix.addEventListener ('click', function () {
    //     //     let randomSamples = []
    //     //     for (let i:number = 0; i<=randomSamples.length;i++ );
    //     //     let number1 = (Math.random() * 9);
    //     //     let number2 = (Math.random() * 9);
    //     //     let number3 = (Math.random() * 9);
    //     //     let number4 = (Math.random() * 9);
    //     //     console.log()
    //     // });
})(A09 || (A09 = {}));
//# sourceMappingURL=drums.js.map