namespace A07{

    let italien:string = "Italien";
    let alterItalien:number = 47.6;

    let frankreich:string = "Frankreich";
    let alterFrankreich:number = 42.1;

    let deutschland:string = "Deutschland";
    let alterDeutschland:number = 45.9;

    let rumänien:string = "Rumänien";
    let alterRumänien:number = 43.0;

    let summe:number = alterItalien+alterFrankreich+alterDeutschland+alterRumänien;
    let durchschnitt:number = summe/4;

    function consoleOutput (countryName: string, age: number): void {
        console.log ("Das durchschnittliche Alter in "+countryName+" beträgt "+age+" Jahre." );
    };

    consoleOutput(italien, alterItalien);
    consoleOutput(frankreich, alterFrankreich);
    consoleOutput(deutschland, alterDeutschland);
    consoleOutput(rumänien, alterRumänien);

    
    const buttonGer: HTMLButtonElement = document.getElementById("buttonDE") as HTMLButtonElement;

    buttonGer.addEventListener("click", function(){
        document.getElementById("text").innerText = "Durchschnittliches Alter in Deutschland: "+alterDeutschland+" Jahre";
    });


    const buttonFra: HTMLButtonElement = document.getElementById("buttonF") as HTMLButtonElement;

    buttonFra.addEventListener("click", function(){
        document.getElementById("text").innerText = "Durchschnittliches Alter in Frankreich: "+alterFrankreich+" Jahre";
    });


    const buttonIta: HTMLButtonElement = document.getElementById("buttonI") as HTMLButtonElement;

    buttonIta.addEventListener("click", function(){
        document.getElementById("text").innerText = "Durchschnittliches Alter in Italien: "+alterItalien+" Jahre";
    });

    const buttonRu: HTMLButtonElement = document.getElementById("buttonR") as HTMLButtonElement;

    buttonRu.addEventListener("click", function(){
        document.getElementById("text").innerText = "Durchschnittliches Alter in Rumänien: "+alterRumänien+" Jahre";
        document.querySelector(".chart").setAttribute('style', 'height:'+alterRumänien)
    });


    const buttonSt: HTMLButtonElement = document.getElementById("Stern") as HTMLButtonElement;

    buttonSt.addEventListener("click", function(){
        document.getElementById("text").innerText = "Durchschnittliches Alter in allen aufgeführten Ländern: "+durchschnitt+" Jahre";
    });

}