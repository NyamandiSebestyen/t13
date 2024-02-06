
const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]
function tagokSzama(unio) {
    return unio.length
}
function adottEvbenSzum(unio, ev) {
    let objektumTomb = [];
    let tomb = [];
    for (let i = 0; i < unio.length; i++) {
        tomb.push(Number(unio[i].csatlakozas.substring(0, 4)));
    }


    let alapObjektum = { Ev: tomb[0], Darab: 0 };
    objektumTomb.push(alapObjektum);
    for (let i = 1; i < tomb.length; i++) {
        let counter = 0;

        for (let j = 0; j < objektumTomb.length; j++) {
            if (objektumTomb[j].Ev == tomb[i]) {
                counter++;
            }
        }
        if (counter == 0) {
            let objektum = { Ev: tomb[i], Darab: 0 };
            objektumTomb.push(objektum);
        }

    }

    for (let i = 0; i < objektumTomb.length; i++) {
        let counter = 0;
        for (let j = 0; j < tomb.length; j++) {
            if (objektumTomb[i].Ev == tomb[j]) {
                counter++;
            }
        }
        objektumTomb[i].Darab = counter;
    }

    for (let i = 0; i < objektumTomb.length; i++) {
        if (ev == objektumTomb[i].Ev) {
            document.write(objektumTomb[i].Ev + " évben " + objektumTomb[i].Darab + " csatlakozott");
        }
    }

}
function uniosE(unio, orszag) {
    for (let i = 0; i < unio.length; i++) {
        if (orszag == unio[i].orszag) {
            document.write(orszag + " csatlakozott.");
            return i;
        }

    }
    document.write(orszag + " nem csatlakozott.");
    return -1;
}

function honapVolte(unio, honap) {
    let tomb = [];
    for (let i = 0; i < unio.length; i++) {
        tomb.push(Number(unio[i].csatlakozas.substring(5, 7)));
    }
    let counter = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (honap == tomb[i]) {
            counter++;
        }
    }
    if (counter > 0) { document.write("Az adott hónapban volt olyan ország amely csatlakozott az unióhoz."); }
    else { document.write("Az adott hónapban nem volt olyan ország amely csatlakozott az unióhoz."); }

}

function utolsoCsatlakozas(unio) {
    let objektumTomb = [];
    let tomb = [];
    for (let i = 0; i < unio.length; i++) {
        tomb = unio[i].csatlakozas.split(".");
        let objektum = { nev: unio[i].orszag, ev: Number(tomb[0]), honap: Number(tomb[1]), nap: Number(tomb[2]) };
        objektumTomb.push(objektum);
    }

    let index = 0;

    let max = objektumTomb[0].ev;
    for (let i = 1; i < objektumTomb.length; i++) {
        if (max < objektumTomb[i].ev) {
            max = objektumTomb[i].ev;
            index = i;
        }
    }
    for (let i = 0; i < objektumTomb.length; i++) {
        if (objektumTomb[index].ev == objektumTomb[i].ev && objektumTomb[index].honap < objektumTomb[i].honap) {
            index = i;
        }
    }
    for (let i = 0; i < objektumTomb.length; i++) {
        if (objektumTomb[index].ev == objektumTomb[i].ev && objektumTomb[index].honap == objektumTomb[i].honap && objektumTomb[index].nap < objektumTomb[i].nap) {
            index = i;
        }
    }
    document.write(objektumTomb[index].nev);


}

function statisztika(unio) {
    let objektumTomb = [];
    let tomb = [];
    for (let i = 0; i < unio.length; i++) {
        tomb.push(Number(unio[i].csatlakozas.substring(0, 4)));
    }


    let alapObjektum = { Ev: tomb[0], Darab: 0 };
    objektumTomb.push(alapObjektum);
    for (let i = 1; i < tomb.length; i++) {
        let counter = 0;

        for (let j = 0; j < objektumTomb.length; j++) {
            if (objektumTomb[j].Ev == tomb[i]) {
                counter++;
            }
        }
        if (counter == 0) {
            let objektum = { Ev: tomb[i], Darab: 0 };
            objektumTomb.push(objektum);
        }

    }

    for (let i = 0; i < objektumTomb.length; i++) {
        let counter = 0;
        for (let j = 0; j < tomb.length; j++) {
            if (objektumTomb[i].Ev == tomb[j]) {
                counter++;
            }
        }
        objektumTomb[i].Darab = counter;
    }


    for (let i = 0; i < objektumTomb.length; i++) {
        for (x in objektumTomb[i]) {
            document.write(x + ": " + objektumTomb[i][x] + " ");
        }
        document.write("<br>");
    }

}



//1. Hány tagja van az EU-nak?
document.write(tagokSzama(EuropaiUnio));
document.write("<hr>");
//2. Hány ország csatlakozot az adott évben
adottEvbenSzum(EuropaiUnio, 2007);
document.write("<hr>");
//3. Csatlakozot-e az adott ország az európai unióhoz?
uniosE(EuropaiUnio, "Magyarország");
document.write("<hr>");
//4. Volt-e az adott hónapban csatlakozás?
honapVolte(EuropaiUnio, 5);
document.write("<hr>");
//5. Melyik ország csatlakozot utoljára?
utolsoCsatlakozas(EuropaiUnio);
document.write("<hr>");
//6. Ország Statisztika, melyik évben hány ország csatlakozot?
statisztika(EuropaiUnio);


