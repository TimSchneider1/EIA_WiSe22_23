var A07;
(function (A07) {
    let italien = "Italien";
    let alterItalien = 47.6;
    let frankreich = "Frankreich";
    let alterFrankreich = 42.1;
    let deutschland = "Deutschland";
    let alterDeutschland = 45.9;
    let rumänien = "Rumänien";
    let alterRumänien = 43.0;
    let summe = alterItalien + alterFrankreich + alterDeutschland + alterRumänien;
    let durchschnitt = summe / 4;
    function consoleOutput(countryName, age) {
        console.log("Das durchschnittliche Alter in " + countryName + " beträgt " + age + " Jahre.");
    }
    ;
    consoleOutput(italien, alterItalien);
    consoleOutput(frankreich, alterFrankreich);
    consoleOutput(deutschland, alterDeutschland);
    consoleOutput(rumänien, alterRumänien);
    const buttonGer = document.getElementById("buttonDE");
    buttonGer.addEventListener("click", function () {
        document.getElementById("text").innerText = "Durchschnittliches Alter in Deutschland: " + alterDeutschland + " Jahre";
    });
    const buttonFra = document.getElementById("buttonF");
    buttonFra.addEventListener("click", function () {
        document.getElementById("text").innerText = "Durchschnittliches Alter in Frankreich: " + alterFrankreich + " Jahre";
    });
    const buttonIta = document.getElementById("buttonI");
    buttonIta.addEventListener("click", function () {
        document.getElementById("text").innerText = "Durchschnittliches Alter in Italien: " + alterItalien + " Jahre";
    });
    const buttonRu = document.getElementById("buttonR");
    buttonRu.addEventListener("click", function () {
        document.getElementById("text").innerText = "Durchschnittliches Alter in Rumänien: " + alterRumänien + " Jahre";
        document.querySelector(".chart").setAttribute('style', 'height:' + alterRumänien);
    });
    const buttonSt = document.getElementById("Stern");
    buttonSt.addEventListener("click", function () {
        document.getElementById("text").innerText = "Durchschnittliches Alter in allen aufgeführten Ländern: " + durchschnitt + " Jahre";
    });
})(A07 || (A07 = {}));
//# sourceMappingURL=datenTwo.js.map