function objektumFeltoltes(tomb) {
    var objektumTomb = [];
    for (var i = 0; i < tomb.length; i++) {
        var aktTarolo = [];
        aktTarolo = tomb[i].split(";");
        var objektum = {
            hazai: aktTarolo[0],
            idegen: aktTarolo[1],
            hazaiPont: Number(aktTarolo[2]),
            idegenPont: Number(aktTarolo[3]),
            helyszin: aktTarolo[4],
            idopont: aktTarolo[5]
        };
        objektumTomb.push(objektum);
    }
    return objektumTomb;
}
function RealMadrid(oTomb) {
    var madridEredmeny;
    var hazai = 0;
    var idegen = 0;
    for (var i = 0; i < oTomb.length; i++) {
        if (oTomb[i].hazai == "Real Madrid") {
            hazai++;
        }
        if (oTomb[i].idegen == "Real Madrid") {
            idegen++;
        }
    }
    madridEredmeny = [hazai, idegen];
    return madridEredmeny;
}
function MadridKiirato(tupi) {
    console.log("Real Madrid: Hazai: ".concat(tupi[0], ", Idegen: ").concat(tupi[1]));
}
function Dontetlen(oTomb) {
    for (var i = 0; i < oTomb.length; i++) {
        if (oTomb[i].hazaiPont == oTomb[i].idegenPont) {
            return true;
        }
    }
    return false;
}
function DontetlenKiirato(miVolt) {
    if (miVolt) {
        console.log("Volt döntetlen? igen");
    }
    else {
        console.log("Volt döntetlen? nem");
    }
    ;
}
function Barcelona(oTomb) {
    var csapatNeve;
    for (var i = 0; i < oTomb.length; i++) {
        if (oTomb[i].hazai.toLowerCase().includes("barcelona") && oTomb[i].helyszin == "Palau Blaugrana") {
            csapatNeve = oTomb[i].hazai;
        }
    }
    return csapatNeve;
}
function AdottDatumEredmenyek(oTomb) {
    var akkoriEredmeny = [];
    for (var i = 0; i < oTomb.length; i++) {
        if (oTomb[i].idopont == "2004-11-21") {
            akkoriEredmeny.push(oTomb[i]);
        }
    }
    return akkoriEredmeny;
}
function DatumosEredmenyKiirato(oTomb) {
    for (var i = 0; i < oTomb.length; i++) {
        console.log("".concat(oTomb[i].hazai, " ").concat(oTomb[i].idegen, " (").concat(oTomb[i].hazaiPont, ":").concat(oTomb[i].idegenPont, ")"));
    }
}
function DiffiStadionok(oTomb) {
    var stadionok = [];
    for (var i = 0; i < oTomb.length; i++) {
        var counter = 0;
        for (var j = 0; j < stadionok.length; j++) {
            if (oTomb[i].helyszin == stadionok[j][0]) {
                counter++;
            }
        }
        if (counter == 0) {
            var segedTupi = [oTomb[i].helyszin, 0];
            stadionok.push(segedTupi);
        }
    }
    return stadionok;
}
function StadionMerkozesSzamok(oTomb, stadionTomb) {
    for (var i = 0; i < oTomb.length; i++) {
        for (var j = 0; j < stadionTomb.length; j++) {
            if (oTomb[i].helyszin == stadionTomb[j][0]) {
                stadionTomb[j][1]++;
            }
        }
    }
    return stadionTomb;
}
function StadionKiirato(stadionokTomb) {
    for (var i = 0; i < stadionokTomb.length; i++) {
        if (stadionokTomb[i][1] > 20) {
            console.log("".concat(stadionokTomb[i][0], ": ").concat(stadionokTomb[i][1]));
        }
    }
}
var EREDMENYEK = objektumFeltoltes(eredmenyek);
MadridKiirato(RealMadrid(EREDMENYEK));
DontetlenKiirato(Dontetlen(EREDMENYEK));
console.log(Barcelona(EREDMENYEK));
DatumosEredmenyKiirato(AdottDatumEredmenyek(EREDMENYEK));
StadionKiirato(StadionMerkozesSzamok(EREDMENYEK, DiffiStadionok(EREDMENYEK)));
