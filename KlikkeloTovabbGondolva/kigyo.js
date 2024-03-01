let elem = document.querySelector("#ugraloFelirat");
let szamoloElem = document.querySelector("#szamlalo");
let inditas = document.querySelector("#indito");
let szam = Number(document.querySelector("#szamlalo").innerHTML);
console.log(szam);
inditas.addEventListener("click", indit);

function szintezo() {
    let fokozat = document.getElementsByName("fokozatok");
    for (let i = 0; i < fokozat.length; i++) {
        if (fokozat[i].checked) {
            return fokozat[i].value;
        }
    }
}

function ugras() {
    let szeles = window.innerWidth;
    let magas = window.innerHeight;
    let randomTopErtek = Math.round(Math.random() * (magas - 100));
    let randomLeftErtek = Math.round(Math.random() * (szeles - 100));
    elem.style.top = randomTopErtek + "px";
    elem.style.left = randomLeftErtek + "px";
    document.querySelector("#szamlalo").innerHTML = Number(document.querySelector("#szamlalo").innerHTML) + 1;
    if (Number(document.querySelector("#szamlalo").innerHTML) == 30) {
        elem.removeEventListener("click", ugras);
        elem.style.cursor = "default";
    }

}

function mozgas() {
    let ugraloFelirat = document.querySelector("#ugraloFelirat");
    let kigyo = document.querySelector("#kigyo");


    function animacio() {
        if (Number(document.querySelector("#szamlalo").innerHTML) == 30) { document.querySelector("#nyertes").innerHTML = "Győzelem"; } else {
            let ugraloFeliratRect = ugraloFelirat.getBoundingClientRect(); // ugraloFelirat elem pozíciójának lekérése
            let posx = ugraloFeliratRect.left; // az ugraloFelirat bal felső sarkának x koordinátája
            let posy = ugraloFeliratRect.top; // az ugraloFelirat bal felső sarkának y koordinátája
            let sebesseg = szintezo();
            // kígyó pozíciójának beállítása az ugraloFelirat aktuális pozíciójára
            kigyo.style.transition = "top " + sebesseg + "s ease, left " + sebesseg + "s ease";
            kigyo.style.left = posx + "px";
            kigyo.style.top = posy + "px";

            requestAnimationFrame(animacio);
        } // animáció folytatása
    }

    animacio(); // animáció indítása
}

function indit() {
    document.querySelector(".menu").style.display = "none";
    elem.style.cursor = "pointer";
    elem.addEventListener("click", ugras);
    szamoloElem.addEventListener("click", ujrakezd);
    mozgas();
}

function ujrakezd() {
    window.location.reload();
}
