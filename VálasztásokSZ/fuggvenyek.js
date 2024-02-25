function KepviselokSzama(objektumTomb) {
    return objektumTomb.length;
}

function PartKepviselok(objektumTomb) {
    let valaszottPart = document.querySelector("#partosLegordulo").value;
    let szamlalo = 0;
    for (let i = 0; i < objektumTomb.length; i++) {
        if (objektumTomb[i].part == valaszottPart) {
            szamlalo++;
        }
    }
    return szamlalo;
}

function KepviseloInfo(objektumTomb) {
    let neve = document.querySelector("#vezetekNev").value.trim() + " " + document.querySelector("#keresztNev").value.trim();
    for (let i = 0; i < objektumTomb.length; i++) {
        if (neve == objektumTomb[i].nev.trim()) {
            return objektumTomb[i].szavazat;
        }
    }
    return -1;
}

function osszesSzavazatokSzama(objektumTomb) {
    let szavazatSzumma = 0;
    for (let i = 0; i < objektumTomb.length; i++) {
        szavazatSzumma += objektumTomb[i].szavazat;
    }
    return szavazatSzumma;
}

function partSzavazatObjektum(objektumTomb) {
    let ujObjektumTomb = [];
    tombPart = partokTomb(objektumTomb);

    for (let i = 0; i < tombPart.length; i++) {
        let objektum = { part: tombPart[i], szavazatok: 0 };
        ujObjektumTomb.push(objektum);
    }
    for (let i = 0; i < ujObjektumTomb.length; i++) {
        for (let j = 0; j < objektumTomb.length; j++) {
            if (ujObjektumTomb[i].part == objektumTomb[j].part) {
                ujObjektumTomb[i].szavazatok += objektumTomb[j].szavazat;
            }
        }
    }
    for (let i = 0; i < ujObjektumTomb.length; i++) {
        if (ujObjektumTomb[i].part == "-") {
            ujObjektumTomb[i].part = "Független";
        }
    }
    return ujObjektumTomb;
}

function szavazatokPartonkentTombDiagram() {
    let objektumTomb = partSzavazatObjektum(szavazatok);
    let tomb = [];
    for (let i = 0; i < objektumTomb.length; i++) {
        tomb.push(objektumTomb[i].szavazatok);
    }
    return tomb;
}

function partokTombDiagram() {
    let objektumTomb = partSzavazatObjektum(szavazatok);
    let tomb = [];
    for (let i = 0; i < objektumTomb.length; i++) {
        tomb.push(objektumTomb[i].part);
    }
    return tomb;
}

function objektumNevTomb(objektumTomb) {
    let tomb = [];
    for (let i = 0; i < objektumTomb.length; i++) {
        tomb.push(objektumTomb[i].nev);
    }
    return tomb;
}

function partokTomb(objektumTomb) {
    let tomb = [];
    for (let i = 0; i < objektumTomb.length; i++) {
        let counter = 0;
        for (let j = 0; j < tomb.length; j++) {
            if (tomb[j] == objektumTomb[i].part) {
                counter++;
            }
        }
        if (counter == 0) {
            tomb.push(objektumTomb[i].part);
        }
    }

    return tomb;
}

function hexSzinGenerator() {
    let betuk = '0123456789ABCDEF';
    let szin = '#';
    for (let i = 0; i < 6; i++) {
        szin += betuk[Math.floor(Math.random() * 16)];
    }

    return szin;

}

function szinTomb(objektumTomb) {
    let szinek = [];
    for (let i = 0; i < objektumTomb.length; i++) {
        szinek.push(hexSzinGenerator());
    }
    return szinek;
}

function szavazatMax(objektumTomb) {
    let max = objektumTomb[0].szavazat;
    for (let i = 1; i < objektumTomb.length; i++) {
        if (max < objektumTomb[i].szavazat) {
            max = objektumTomb[i].szavazat;
        }
    }
    return max;
}

function legtobbSzavazatIndex(objektumTomb) {
    let max = szavazatMax(szavazatok);
    let indexTomb = [];
    for (let i = 0; i < objektumTomb.length; i++) {
        if (objektumTomb[i].szavazat == max) {
            indexTomb.push(i);
        }
    }
    return indexTomb;
}

function korzetekTomb(objektumTomb) {
    let tomb = [];
    for (let i = 0; i < objektumTomb.length; i++) {
        let counter = 0;
        for (let j = 0; j < tomb.length; j++) {
            if (tomb[j] == objektumTomb[i].korzet) {
                counter++;
            }
        }
        if (counter == 0) {
            tomb.push(objektumTomb[i].korzet);
        }
    }
    tomb.sort(function (a, b) { return a - b });
    return tomb;
}


function szavazatKorzet(objektumTomb) {
    let korzetes = korzetekTomb(objektumTomb);
    let tomb = [];
    for (let i = 0; i < korzetes.length; i++) {
        let btomb = [];
        for (let j = 0; j < objektumTomb.length; j++) {
            if (korzetes[i] == objektumTomb[j].korzet) {
                btomb.push(objektumTomb[j].szavazat);
            }
        }
        tomb.push(btomb);
    }
    return tomb;
}

function maximum() {
    let szavazatokTomb = szavazatKorzet(szavazatok);
    let maxSzavazat = [];
    for (let i = 0; i < szavazatokTomb.length; i++) {
        let max = szavazatokTomb[i][0];
        for (let j = 0; j < szavazatokTomb[i].length; j++) {
            if (max < szavazatokTomb[i][j]) {
                max = szavazatokTomb[i][j];
            }
        }
        maxSzavazat.push(max);
    }
    return maxSzavazat;
}


