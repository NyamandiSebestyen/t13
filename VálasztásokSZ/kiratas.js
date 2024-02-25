function feladat1() {
    document.querySelector("#feladat1").innerHTML = "A helyhatósági választáson " + KepviselokSzama(szavazatok) + " képvislőjelölt indult.";
}

function feladat1tabla() {
    let table = document.querySelector("#f1table");

    for (let i = szavazatok.length - 1; i >= 0; i--) {
        let adatSor = table.insertRow(1);
        let id = adatSor.insertCell(0);
        let kepviselo = adatSor.insertCell(1);
        let part = adatSor.insertCell(2);
        id.innerHTML = i + 1;
        kepviselo.innerHTML = szavazatok[i].nev;
        if (szavazatok[i].part == "-") {
            part.innerHTML = "Független";
        } else (part.innerHTML = szavazatok[i].part)
    }
}

function feladat2() {
    if (document.querySelector("#partosLegordulo").value == "-") {
        document.querySelector("#listaSzoveg").innerHTML = "Független képviselőből " + PartKepviselok(szavazatok) + " db indul."
    } else if (document.querySelector("#partosLegordulo").value == "Nincs kiválasztva") { document.querySelector("#listaSzoveg").innerHTML = ""; } else {
        document.querySelector("#listaSzoveg").innerHTML = "A választott párt " + PartKepviselok(szavazatok) + " db képviselővel indul.";
    }
}

function feladat3() {
    let adat = KepviseloInfo(szavazatok);
    if (adat == -1) {
        document.querySelector("#szavazatMezo").innerHTML = "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!"
    } else { document.querySelector("#szavazatMezo").innerHTML = "A képviselőjelölt szavazatainak száma: " + adat }

}

function feladat4() {
    document.querySelector("#szavazatokSzoveg").innerHTML = "A választáson " + szavazatOsszes + " állapolgár, a jogosultak " + ((szavazatOsszes / szavazasraJogosult) * 100).toFixed(2) + "%-a vett részt."
}

function feladat5() {
    let table = document.querySelector("#f5table");
    let partokSzavazatok = partSzavazatObjektum(szavazatok);
    for (let i = partokSzavazatok.length - 1; i >= 0; i--) {
        let adatSor = table.insertRow(1);
        let part = adatSor.insertCell(0);
        let szavazat = adatSor.insertCell(1);
        part.innerHTML = partokSzavazatok[i].part;
        szavazat.innerHTML = partokSzavazatok[i].szavazatok;
    }
}

function feladat6() {
    let table = document.querySelector("#korzetSzavazatTabla");
    let legtobbSzavazatTomb = legtobbSzavazatIndex(szavazatok);
    for (let i = 0; i < legtobbSzavazatTomb.length; i++) {
        let adatSor = table.insertRow(1);
        let kepviselo = adatSor.insertCell(0);
        let part = adatSor.insertCell(1);
        part.innerHTML = szavazatok[legtobbSzavazatTomb[i]].part;
        kepviselo.innerHTML = szavazatok[legtobbSzavazatTomb[i]].nev;

    }
}

function feladat7(vizsgaltTomb) {
    let table = document.querySelector("#f7table");
    let nyertesekMaxTomb = maximum();


    for (let i = nyertesekMaxTomb.length - 1; i >= 0; i--) {
        for (let j = 0; vizsgaltTomb.length; j++) {
            if ((i + 1) == vizsgaltTomb[j].korzet && nyertesekMaxTomb[i] == vizsgaltTomb[j].szavazat) {
                let adatSor = table.insertRow(1);
                let korzete = adatSor.insertCell(0);
                let neve = adatSor.insertCell(1);
                let partja = adatSor.insertCell(2);
                let szavazata = adatSor.insertCell(3);
                korzete.innerHTML = vizsgaltTomb[j].korzet;
                neve.innerHTML = vizsgaltTomb[j].nev;
                if (vizsgaltTomb[j].part == "-") { partja.innerHTML = "Független" }
                else { partja.innerHTML = vizsgaltTomb[j].part; }
                szavazata.innerHTML = vizsgaltTomb[j].szavazat;
                break;
            }
        }
    }
}



feladat1();
feladat1tabla();
let listaeventGomb = document.querySelector("#listaGomb");
listaeventGomb.addEventListener("click", feladat2);
let mezoeventGomb = document.querySelector("#nevGomb");
mezoeventGomb.addEventListener("click", feladat3);
feladat4();
feladat5();
feladat6();
feladat7(szavazatok);

