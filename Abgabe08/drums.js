var A08;
(function (A08) {
    const pad1 = new Audio('samples/A.mp3');
    const pad2 = new Audio('samples/C.mp3');
    const pad3 = new Audio('samples/F.mp3');
    const pad4 = new Audio('samples/G.mp3');
    const pad5 = new Audio('samples/hihat.mp3');
    const pad6 = new Audio('samples/kick.mp3');
    const pad7 = new Audio('samples/laugh-1.mp3');
    const pad8 = new Audio('samples/laugh-2.mp3');
    const pad9 = new Audio('samples/snare.mp3');
    const buttonOne = document.getElementById("one");
    buttonOne.addEventListener("click", function () {
        pad1.play();
    });
    function playSample(pad1, pad2, pad3, pad4, pad5, pad6, pad7, pad8, pad9) {
    }
})(A08 || (A08 = {}));
//# sourceMappingURL=drums.js.map