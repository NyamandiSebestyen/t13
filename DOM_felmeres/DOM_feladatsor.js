//1. feladat

function karakterSzam() {
    let karakter = document.querySelector("#karakterszam");
    karakter.innerHTML = document.querySelector("#mezo").value.length + " karakter";
}

let mezoKarakterSzam = document.querySelector("#mezo");
mezoKarakterSzam.addEventListener("input", karakterSzam);

//2.feladat

let rajz = document.querySelector("#rajz");
let rajzGomb = document.querySelector("#rajzoloGomb");

function rajzolo() {
    rajz.style.height = Number(document.querySelector("#xMezo").value) + "px";
    rajz.style.width = Number(document.querySelector("#yMezo").value) + "px";
}

rajzGomb.addEventListener("click", rajzolo);

//3.feladat

let animator = document.querySelector("#cicaGomb");

function kibeCica() {
    let cica = document.querySelector("#cica");
    let opacity = parseFloat(cica.style.opacity);

    if (isNaN(opacity)) {
        opacity = 1;
    }

    if (opacity >= 1) {
        let eltunik = setInterval(function () {
            opacity -= 0.1;
            cica.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(eltunik);
            }
        }, 100);
    } else {
        let megjelenik = setInterval(function () {
            opacity += 0.1;
            cica.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(megjelenik);
            }
        }, 100);
    }
}

animator.addEventListener("click", kibeCica);

//4.feladat

let ellGomb = document.querySelector("#ellenorzoGomb");

function formatumValid(emailc) {
    let minta = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return minta.test(emailc);
}

function ellenorzes() {
    let email = document.querySelector("#email");
    let emailM = document.querySelector("#emailMegerosit");
    let box = document.querySelector("#hibaBox");
    if (email.value.length == 0 && emailM.value.length == 0) {
        box.innerHTML = "Nincs kitöltve egyik mező sem!";
        box.style.display = "block";
        box.style.color = "firebrick";
        box.style.backgroundColor = "Red";
    }
    else if (email.value.length == 0 && emailM.value.length > 0) {
        box.innerHTML = "Nincs kitöltve az e-mail mező!";
        box.style.display = "block";
        box.style.color = "firebrick";
        box.style.backgroundColor = "Red";
    }
    else if (email.value.length > 0 && emailM.value.length == 0) {
        box.innerHTML = "Nincs kitöltve az e-mail megerősítése mező!";
        box.style.display = "block";
        box.style.color = "firebrick";
        box.style.backgroundColor = "Red";
    }
    else if (formatumValid(email.value) == false || formatumValid(emailM.value) == false) {
        box.innerHTML = "Nem megfelelő az e-mail cím formátuma!";
        console.log(formatumValid(email));
        box.style.display = "block";
        box.style.color = "firebrick";
        box.style.backgroundColor = "Red";
    }
    else if (email.value != emailM.value) {
        box.innerHTML = "A két mező tartalma nem egyezik!"; box.style.display = "block";
        box.style.color = "firebrick";
        box.style.backgroundColor = "Red";
    }
    else {
        box.innerHTML = "Adatok rögzítése sikeres!";
        box.style.display = "block";
        box.style.color = "green";
        box.style.backgroundColor = "greenyellow";
    }
}

ellGomb.addEventListener("click",ellenorzes);