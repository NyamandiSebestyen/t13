<script>
let Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]


//</script>
//1.Mennyi a cég havi költsége, azaz mennyibe kerül a dolgozókat fizetni egy adott hónapban?
function koltseg(obi){
let sum=0;
for(let i=0;i<obi.length;i++){
sum+=obi[i].fizetes;
}
return sum;
}
//2.Ki keresi a legtöbbet a cégnél, írd ki az összes adatát.
function legtobb(obi){
let max=obi[0].fizetes;
let c=0;
for(let i=1;i<obi.length;i++){
if(max<obi[i].fizetes){max=obi[i].fizetes;
c=i;}
}
document.write(obi[c].nev);
document.write(`<br>`);
document.write(obi[c].kor);
document.write(`<br>`);
document.write(obi[c].fizetes);
document.write(`<br>`);
document.write(obi[c].beosztas);
}

//3.Ki a legfiatalabb a cégnél?
function legfitalabbnev(obi){
let min=obi[0].kor;
let c = 0;
for(let i = 1;i<obi.length;i++){
if(min>obi[i].kor){min=obi[i].kor; c=i;}
}
return obi[c].nev;
}

//4.Növeld a legfiatalabb dolgozó bérét 30.000Ft-tal…Majd írasd ki az új „kapott fizetés” értékét.
function legfitalabbindex(obi){
let min=obi[0].kor;
let c = 0;
for(let i = 1;i<obi.length;i++){
if(min>obi[i].kor){min=obi[i].kor; c=i;}
}
return c;
}


function novelesfiatal(obi){
return obi[legfitalabbindex(obi)].fizetes+30000;
}

//5.Mennyit keresnek átlagosan a céges dolgozók?
function atlag(obi){
return koltseg(obi)/obi.length;
}
//6.Növeld az átlag alatti fizetéssel rendelkezők fizetését 10%-kal.
function fizetes10(dolgozo) {
    dolgozo.fizetes *= 1.1;
}

function atlagalatti(dolgozok) {
    let atlag1 = atlag(dolgozok)

    for (let i = 0; i < dolgozok.length; i++) {
        if (dolgozok[i].fizetes < atlag1) {
            fizetes10(dolgozok[i]);
            
        }
    }
}
//7.Ki a legidősebb a cégnél?
function legoregebbnev(obi){
let max=obi[0].kor;
let c = 0;
for(let i = 1;i<obi.length;i++){
if(max<obi[i].kor){max=obi[i].kor; c=i;}
}
return obi[c].nev;
}
//8.Mennyi van a legidősebb embernek hátra a nyugdíjig, ha a nyugdíjkorhatár egységesen 65 év!
function legoregebbindex(obi){
let max=obi[0].kor;
let c = 0;
for(let i = 1;i<obi.length;i++){
if(max<obi[i].kor){max=obi[i].kor; c=i;}
}
return c;
}

function nyugdij(obi){
return 65-obi[legoregebbindex(obi)].kor;
}

//1.
//document.write(koltseg(Dolgozok));

//2.
//legtobb(Dolgozok);

//3.
//document.write(legfitalabb(Dolgozok));

//4.
//Dolgozok[legfitalabbindex(Dolgozok)].fizetes=novelesfiatal(Dolgozok);
//document.write(Dolgozok[5].fizetes);

//5
//document.write(atlag(Dolgozok));

//6.
/*atlagalatti(Dolgozok);
for(let i=0;i<Dolgozok.length;i++){
document.write(Dolgozok[i].nev);
document.write(`<br>`);
document.write(Math.round(Dolgozok[i].fizetes));
document.write(`<br>`);}*/

//7.
//document.write(legoregebbnev(Dolgozok));

//8.
//document.write(nyugdij(Dolgozok));

</script>