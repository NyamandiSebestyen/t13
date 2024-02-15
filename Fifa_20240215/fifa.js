const csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];
//Alapadatok feldolgozása
function objektumTombFeltoltese(eredetiTomb, objektumTomb) {

    let tomb = [];
    for (let i = 0; i < eredetiTomb.length; i++) {
        let objektum = {};
        tomb = eredetiTomb[i].split(";");
        objektum.nev = tomb[0];
        objektum.helyezes = Number(tomb[1]);
        objektum.valtozas = Number(tomb[2]);
        objektum.pont = Number(tomb[3]);
        objektumTomb.push(objektum);
    }
}

let objektumTomb = [];
objektumTombFeltoltese(csapatAdat, objektumTomb);
//Csapatok száma
function CsapatokSzama() {
    document.querySelector("#f1").innerHTML = "A csapatok száma: " + objektumTomb.length;
}
//Csapatok száma Kiiratás
CsapatokSzama();

//Átlagszámítás
function csapatokAtlagPontszama(csapatok) {
    let sum = 0;
    for (let i = 0; i < csapatok.length; i++) {
        sum += csapatok[i].pont;

    }

    return sum / csapatok.length
}
//Kiirató fv.
function AtlagPontszamaKiir(AtlagPont) {
    document.querySelector("#f2").innerHTML = "A csapatok átlag pontszáma: " + AtlagPont;
}
//Átlag Kiiratás
AtlagPontszamaKiir(csapatokAtlagPontszama(objektumTomb));


//Átlag felettiek kiválógatása
function atlagnalTobb(csapatok) {
    let AtlagFelettiCsapatok = [];
    for (let i = 0; i < csapatok.length; i++) {
        if (csapatok[i].pont > csapatokAtlagPontszama(csapatok)) {
            AtlagFelettiCsapatok.push(csapatok[i].nev);
        }
    }
    return AtlagFelettiCsapatok;
}

function StatisztikaTablazatGeneratorAtlagFelett() {
    let csapatok = atlagnalTobb(objektumTomb);
    let table = document.querySelector("#f3");
    for (let i = 0; i < csapatok.length; i++) {
        let adatSor = table.insertRow(1);
        let csapat = adatSor.insertCell(0);
        csapat.innerHTML = csapatok[i];

    }
    f3eventGomb.removeEventListener("click", StatisztikaTablazatGeneratorAtlagFelett);
}
let f3eventGomb = document.querySelector("#f3feladat");
f3eventGomb.addEventListener("click", StatisztikaTablazatGeneratorAtlagFelett);



//Legtöbbet javító csapat objektumbeli indexe
function legtobbetJavitoCsapat(csapatok) {
    let max = csapatok[0].valtozas;
    let index = 0;
    for (let i = 1; i < csapatok.length; i++) {
        if (max < csapatok[i].valtozas) {
            max = csapatok[i].valtozas;
            index = i;
        }
    }
    return index;
}

function legtobbetJavitoCsapatGenerator() {
    let index = legtobbetJavitoCsapat(objektumTomb);
    let table = document.querySelector("#f4");
    let adatSor = table.insertRow(1);
    let hely = adatSor.insertCell(0);
    let nev = adatSor.insertCell(1);
    let pont = adatSor.insertCell(2);
    hely.innerHTML = objektumTomb[index].helyezes;
    nev.innerHTML = objektumTomb[index].nev;
    pont.innerHTML = objektumTomb[index].pont;
    f4eventGomb.removeEventListener("click", legtobbetJavitoCsapatGenerator);

}
let f4eventGomb = document.querySelector("#f4feladat");
f4eventGomb.addEventListener("click", legtobbetJavitoCsapatGenerator);

//Csapat kiolvasása
function Csapatkiolvaso() {
    let adottCsapat = document.querySelector("#csapatNeve").value;
    return adottCsapat;
}

function csapatVane(csapatok) {
    let keresettCsapat = Csapatkiolvaso();
    for (let i = 0; i < csapatok.length; i++) {
        if (csapatok[i].nev == keresettCsapat) {

            return i;
        }

    }

    return -1;
}

function csapatVaneKiir() {
    let keresettCsapat = Csapatkiolvaso();
    let vane = csapatVane(objektumTomb);
    if (vane == -1) { document.querySelector("#f5").innerHTML = `${keresettCsapat} nincs benne a listában.` }
    else { document.querySelector("#f5").innerHTML = `${keresettCsapat} benne van a listában.` }
}
let f5eventGomb = document.querySelector("#f5feladat");
f5eventGomb.addEventListener("click", csapatVaneKiir);

//Statisztika objektum tömbjének a kinyerése
function valtozasStatisztika(csapatok) {
    let kulonbozoValtozasokObjektumTomb = [];
    let alapObjektum = { valtozasEgyedi: csapatok[0].valtozas, valtozasDarab: 0 };
    kulonbozoValtozasokObjektumTomb.push(alapObjektum);

    for (let i = 1; i < csapatok.length; i++) {
        let counter = 0;
        for (let j = 0; j < kulonbozoValtozasokObjektumTomb.length; j++) {
            if (kulonbozoValtozasokObjektumTomb[j].valtozasEgyedi == csapatok[i].valtozas) {
                counter++;
            }
        }
        if (counter == 0) {
            let objektum = {};
            objektum.valtozasEgyedi = csapatok[i].valtozas;
            objektum.valtozasDarab = 0;
            kulonbozoValtozasokObjektumTomb.push(objektum);
        }
    }


    for (let i = 0; i < kulonbozoValtozasokObjektumTomb.length; i++) {
        let counter = 0;
        for (let j = 0; j < csapatok.length; j++) {
            if (kulonbozoValtozasokObjektumTomb[i].valtozasEgyedi == csapatok[j].valtozas) {
                counter++;
            }

        }
        kulonbozoValtozasokObjektumTomb[i].valtozasDarab = counter;
    }


    return kulonbozoValtozasokObjektumTomb;
}

function StatisztikaTablazatGenerator() {
    let statisztikaTomb = valtozasStatisztika(objektumTomb);
    let table = document.querySelector("#f6");
    for (let i = 0; i < statisztikaTomb.length; i++) {
        let adatSor = table.insertRow(1);
        let valtozasCella = adatSor.insertCell(0);
        let darabCella = adatSor.insertCell(1);
        valtozasCella.innerHTML = statisztikaTomb[i].valtozasEgyedi
        darabCella.innerHTML = statisztikaTomb[i].valtozasDarab
    }
    f6eventGomb.removeEventListener("click", StatisztikaTablazatGenerator);
}
let f6eventGomb = document.querySelector("#f6feladat");
f6eventGomb.addEventListener("click", StatisztikaTablazatGenerator);
