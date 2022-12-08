namespace A08{

    const pad1:HTMLAudioElement = new Audio ('samples/808 FlexKick.wav');
    const pad2:HTMLAudioElement = new Audio ('samples/808 FlexSnare.wav');
    const pad3:HTMLAudioElement = new Audio ('samples/808 FlexHat.wav');
    const pad4:HTMLAudioElement = new Audio ('samples/G.mp3');
    const pad5:HTMLAudioElement = new Audio ('samples/hihat.mp3');
    const pad6:HTMLAudioElement = new Audio ('samples/kick.mp3');
    const pad7:HTMLAudioElement = new Audio ('samples/laugh-1.mp3');
    const pad8:HTMLAudioElement = new Audio ('samples/laugh-2.mp3');
    const pad9:HTMLAudioElement = new Audio ('samples/snare.mp3');

    const buttonOne: HTMLButtonElement = document.getElementById("one") as HTMLButtonElement;
    buttonOne.addEventListener("click", function(){
        playSample (new Audio ('samples/808 FlexKick.wav'))
    });

    const buttonTwo: HTMLButtonElement = document.getElementById("two") as HTMLButtonElement;
    buttonTwo.addEventListener("click", function(){
        playSample (new Audio ('samples/808 FlexSnare.wav'))
    });

    const buttonThree: HTMLButtonElement = document.getElementById("three") as HTMLButtonElement;
    buttonThree.addEventListener("click", function(){
        playSample (new Audio ('samples/808 FlexHat.wav'))
    });

    const buttonFour: HTMLButtonElement = document.getElementById("four") as HTMLButtonElement;
    buttonFour.addEventListener("click", function(){
        playSample (new Audio ('samples/G.mp3'))
    });

    const buttonFive: HTMLButtonElement = document.getElementById("five") as HTMLButtonElement;
    buttonFive.addEventListener("click", function(){
        playSample (new Audio ('samples/hihat.mp3'))
    });

    const buttonSix: HTMLButtonElement = document.getElementById("six") as HTMLButtonElement;
    buttonSix.addEventListener("click", function(){
        playSample (new Audio ('samples/kick.mp3'))
    });

    const buttonSeven: HTMLButtonElement = document.getElementById("seven") as HTMLButtonElement;
    buttonSeven.addEventListener("click", function(){
        playSample (new Audio ('samples/laugh-1.mp3'))
    });

    const buttonEight: HTMLButtonElement = document.getElementById("eight") as HTMLButtonElement;
    buttonEight.addEventListener("click", function(){
        playSample (new Audio ('samples/laugh-2.mp3'))
    });

    const buttonNine: HTMLButtonElement = document.getElementById("nine") as HTMLButtonElement;
    buttonNine.addEventListener("click", function(){
        playSample (new Audio ('samples/snare.mp3'))
    });

    const buttonPlay: HTMLButtonElement = document.getElementById("playbutton") as HTMLButtonElement;
    buttonPlay.addEventListener ('click', function () {
        setInterval(function () {
            playSample(new Audio (arraySamples [ton]))
            ton++
            if (ton==4) {ton=0}
        }, 300)
    })

    let ton = 0;

    let arraySamples = ['samples/808 FlexKick.wav', 'samples/808 FlexHat.wav', 'samples/808 FlexSnare.wav', 'samples/808 FlexHat.wav']

    function playSample(widergabe: any) {
        widergabe.play()
    }

}