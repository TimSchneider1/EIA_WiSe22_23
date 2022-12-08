var A08;
(function (A08) {
    const pad1 = new Audio('samples/808 FlexKick.wav');
    const pad2 = new Audio('samples/808 FlexSnare.wav');
    const pad3 = new Audio('samples/808 FlexHat.wav');
    const pad4 = new Audio('samples/G.mp3');
    const pad5 = new Audio('samples/hihat.mp3');
    const pad6 = new Audio('samples/kick.mp3');
    const pad7 = new Audio('samples/laugh-1.mp3');
    const pad8 = new Audio('samples/laugh-2.mp3');
    const pad9 = new Audio('samples/snare.mp3');
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
        playSample(new Audio('samples/G.mp3'));
    });
    const buttonFive = document.getElementById("five");
    buttonFive.addEventListener("click", function () {
        playSample(new Audio('samples/hihat.mp3'));
    });
    const buttonSix = document.getElementById("six");
    buttonSix.addEventListener("click", function () {
        playSample(new Audio('samples/kick.mp3'));
    });
    const buttonSeven = document.getElementById("seven");
    buttonSeven.addEventListener("click", function () {
        playSample(new Audio('samples/laugh-1.mp3'));
    });
    const buttonEight = document.getElementById("eight");
    buttonEight.addEventListener("click", function () {
        playSample(new Audio('samples/laugh-2.mp3'));
    });
    const buttonNine = document.getElementById("nine");
    buttonNine.addEventListener("click", function () {
        playSample(new Audio('samples/snare.mp3'));
    });
    const buttonPlay = document.getElementById("playbutton");
    buttonPlay.addEventListener('click', function () {
        setInterval(function () {
            playSample(new Audio(arraySamples[ton]));
            ton++;
            if (ton == 4) {
                ton = 0;
            }
        }, 300);
    });
    let ton = 0;
    let arraySamples = ['samples/808 FlexKick.wav', 'samples/808 FlexHat.wav', 'samples/808 FlexSnare.wav', 'samples/808 FlexHat.wav'];
    function playSample(widergabe) {
        widergabe.play();
    }
    const buttonRemix = document.getElementById("remix");
    buttonRemix.addEventListener('click', function () {
        for (let i = 0; i <= 4; i++)
            ;
        let myNumber = (Math.random() * 9);
        console.log();
    });
    let randomSamples = [];
})(A08 || (A08 = {}));
//# sourceMappingURL=drums.js.map