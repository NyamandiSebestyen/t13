function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        if (elemLista[i].checked) {
            elemLista[i].checked = false;
        } else {
            elemLista[i].checked = true;
        }

    }

}

function SavozasBe() {
    let kivalasztottTabla = document.querySelector("table");
    let tomb = kivalasztottTabla.classList;
    let counter = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] == "table-striped") {
            counter++;
        }
    }
    if (counter == 0) {
        kivalasztottTabla.classList.add("table-striped");
        document.querySelector("#csikozasBe").innerHTML = "Táblázat sávozásának kikapcsolása";
    } else {
        document.querySelector("table").classList.remove("table-striped");
        document.querySelector("#csikozasBe").innerHTML = "Táblázat sávozásának bekapcsolása";
    }
}

function DarkMode() {
    let kivalasztottTabla = document.querySelector("table");
    let gomb = document.querySelector("#darkMode");
    let counter = 0;
    for (let i = 0; i < kivalasztottTabla.classList.length; i++) {
        if (kivalasztottTabla.classList[i] == "table-dark") {
            counter++;
        }
    }
    if (counter == 0) {
        kivalasztottTabla.classList.remove("table-light");
        kivalasztottTabla.classList.add("table-dark");
        gomb.innerHTML = "LightMODE ON";
        gomb.classList.remove("btn-light");
        gomb.classList.add("btn-dark");
    }
    else {
        kivalasztottTabla.classList.remove("table-dark");
        kivalasztottTabla.classList.add("table-light");
        gomb.innerHTML = "DarkMODE ON";
        gomb.classList.remove("btn-dark");
        gomb.classList.add("btn-light");
    }
}

function TesztSorBeszuras() {
    let kivalasztottTabla = document.querySelector("table");//kiválasztom a táblát
    let sor = kivalasztottTabla.insertRow(-1);//beleillesztek egy sort a táblába
    let vezNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let kerNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let emailCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let telefonCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let beosztasCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let aktivalCella = sor.insertCell();//Beszúrom a szükséges cellákat

    vezNevCella.innerHTML = "teszt";
    kerNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

function UjSorBeszuras() {

    if (vnevValid() && knevValid() && emailValid() && telefonValid()) {

        let kivalasztottTabla = document.querySelector("table");//kiválasztom a táblát
        let sor = kivalasztottTabla.insertRow();//beleillesztek egy sort a táblába
        let vezNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
        let kerNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
        let emailCella = sor.insertCell();//Beszúrom a szükséges cellákat
        let telefonCella = sor.insertCell();//Beszúrom a szükséges cellákat
        let beosztasCella = sor.insertCell();//Beszúrom a szükséges cellákat
        let aktivalCella = sor.insertCell();//Beszúrom a szükséges cellákat

        vezNevCella.innerHTML = document.querySelector("#vezNev").value;
        kerNevCella.innerHTML = document.querySelector("#kerNev").value;
        emailCella.innerHTML = document.querySelector("#email").value;
        telefonCella.innerHTML = document.querySelector("#tel").value;
        beosztasCella.innerHTML = document.querySelector("#beosztas").value;
        aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
    }
}

function nevValidator(nev) {
    let minta = /^[A-ZÁÉÖÜŐÚŰÍ][a-zíáéőúűóüö]+$/;
    return minta.test(nev);
}

function emailValidator(emailc) {
    let minta = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return minta.test(emailc);
}

function telValidator(telefon) {
    let minta = /^[0-9]{3}-[0-9]{4}$/;
    return minta.test(telefon);
}

function vnevValid() {
    let vnev = document.querySelector("#vezNev");
    if (nevValidator(vnev.value)) {
        vnev.style.border = "none";
        document.querySelector("#vNevNemValid").innerHTML = "";
        return true;
    } else {
        vnev.style.border = "2px solid red";
        document.querySelector("#vNevNemValid").innerHTML = 'A "Vezetéknév" mezőnek nagybetűvel kell kezdődnie és csak betüket tartalmazhat. Kérem, javítsa!';
        return false;
    }
}

function knevValid() {
    let knev = document.querySelector("#kerNev");
    if (nevValidator(knev.value)) {
        knev.style.border = "none";
        document.querySelector("#kNevNemValid").innerHTML = "";
        return true;
    } else {
        knev.style.border = "2px solid red";
        document.querySelector("#kNevNemValid").innerHTML = 'A "Vezetéknév" mezőnek nagybetűvel kell kezdődnie és csak betüket tartalmazhat. Kérem, javítsa!';
        return false;
    }
}

function emailValid() {
    let email = document.querySelector("#email");
    if (emailValidator(email.value)) {
        email.style.border = "none";
        document.querySelector("#emailNemValid").innerHTML = "";
        return true;
    } else {
        email.style.border = "2px solid red";
        document.querySelector("#emailNemValid").innerHTML = 'A "E-mail" mező nem megfelelő formátumban került kitöltésre. Kérem, javítsa!';
        return false;
    }
}

function telefonValid() {
    let telo = document.querySelector("#tel");
    if (telValidator(telo.value)) {
        telo.style.border = "none";
        document.querySelector("#teloNemValid").innerHTML = "";
        return true;
    } else {
        telo.style.border = "2px solid red";
        document.querySelector("#teloNemValid").innerHTML = 'A "Céges mobilszám" mező nem megfelelő formátumban került kitöltésre. Kérem, javítsa!';
        return false;
    }
}

function SorokTorlese() {
    let kivalasztottTabla = document.querySelector("table");
    let elemLista = document.querySelectorAll(".allapot:checked");
    elemLista.forEach(elem => {
        let sor = elem.closest("tr");
        kivalasztottTabla.deleteRow(sor.rowIndex);
    });
}

function visszater(id) {
    if (id == "igen") {
        SorokTorlese();
        figyAblak.style.display = "none";
        egesz.style.filter = "blur(0px)";
    } else {
        figyAblak.style.display = "none";
        egesz.style.filter = "blur(0px)";
    }
}

function torles() {
    egesz.style.filter = "blur(2px)"
    figyAblak.style.display = "block";
}