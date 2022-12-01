namespace A08{

    const pad1:HTMLAudioElement = new Audio ('samples/A.mp3');
    const pad2:HTMLAudioElement = new Audio ('samples/C.mp3');
    const pad3:HTMLAudioElement = new Audio ('samples/F.mp3');
    const pad4:HTMLAudioElement = new Audio ('samples/G.mp3');
    const pad5:HTMLAudioElement = new Audio ('samples/hihat.mp3');
    const pad6:HTMLAudioElement = new Audio ('samples/kick.mp3');
    const pad7:HTMLAudioElement = new Audio ('samples/laugh-1.mp3');
    const pad8:HTMLAudioElement = new Audio ('samples/laugh-2.mp3');
    const pad9:HTMLAudioElement = new Audio ('samples/snare.mp3');

    const buttonOne: HTMLButtonElement = document.getElementById("one") as HTMLButtonElement;

    buttonOne.addEventListener("click", function(){
        
        pad1.play()
    });

    function playSample(pad1, pad2, pad3, pad4, pad5, pad6, pad7, pad8, pad9){
        
    }

}