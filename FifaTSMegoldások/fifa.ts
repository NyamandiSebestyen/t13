interface FifaAdat {
    nev: string;
    helyezes: number;
    valtozas: number;
    pont: number;
}

interface Valtozasok {
    valtozas:number;
    darab:number;
}

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
function ObjektumFeltolto(feltoltendoElem: string[]): FifaAdat[] {
    let beolvasottAdatok: FifaAdat[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let daraboltAdatok = feltoltendoElem[i].split(";");
        let ujCsapat: FifaAdat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3])
        }
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}


let CsapatokObjektum: FifaAdat[] = ObjektumFeltolto(csapatAdat);

function CsapatokSzama (objektum:FifaAdat[]):number{
    return objektum.length;
}


function AtlagPontszam(objektum:FifaAdat[]):number{
    let counter:number = 0;
    for(let i:number= 0;i<objektum.length;i++){
       counter+= objektum[i].pont;
    }
    return counter/objektum.length;
}

function AtlagFelettiCsapatok(objektum:FifaAdat[]):string[]{
    let AtlagFelettiTomb:string[]=[];
    for(let i:number=0;i<objektum.length;i++){
        if(objektum[i].pont>AtlagPontszam(CsapatokObjektum)){
            AtlagFelettiTomb.push(objektum[i].nev);
        }
    }
    return AtlagFelettiTomb;
}



function MaxValtozas(objektum:FifaAdat[]):number{
    let maximum:number = objektum[0].valtozas;
    for(let i:number = 0;i<objektum.length;i++){
        if(maximum<objektum[i].valtozas){
            maximum=objektum[i].valtozas;
        }
    }
    return maximum;
}

function MaxValtozasCsapatok(objektum:FifaAdat[]):FifaAdat[]{
    let maxCsapatok:FifaAdat[]=[];
    for(let i:number=0;i<objektum.length;i++){
        if(objektum[i].valtozas==MaxValtozas(objektum)){
            maxCsapatok.push(objektum[i]);
        }
    }
    return maxCsapatok;
}

function VanE(objektum:FifaAdat[],keresettCsapat:string):boolean{
    for(let i:number=0;i<objektum.length;i++){
        if(objektum[i].nev==keresettCsapat){
            return true;
        }
    }
    return false;
}

function ValtozasokTomb(objektum:FifaAdat[]):number[]{
    let egyediSzamok:number[]=[];
    
    egyediSzamok.push(objektum[0].valtozas);
    for(let i:number=0;i<objektum.length;i++){
        let counter:number=0;
        for(let j:number=0;j<egyediSzamok.length;j++){
            if(egyediSzamok[j]==objektum[i].valtozas){
                counter++;
            }
        }
       if(counter==0){
        egyediSzamok.push(objektum[i].valtozas);
       }
    }
    return egyediSzamok;
}

function ValtozasokTombFeltoltes(szamok:number[]):Valtozasok[]{
    let valtozasokTomb:Valtozasok[]=[];
    
    for(let i:number=0;i<szamok.length;i++){
        let valtozasIF:Valtozasok = {
            valtozas:szamok[i],
            darab: 0
        };
        valtozasokTomb.push(valtozasIF);
    }
    return valtozasokTomb;
}

function Statisztika(objektum:FifaAdat[],valtozasTomb:Valtozasok[]):Valtozasok[]{
    for(let i:number=0;i<objektum.length;i++){
        for(let j:number = 0;j<valtozasTomb.length;j++){
            if(objektum[i].valtozas==valtozasTomb[j].valtozas){
                valtozasTomb[j].darab++
            }
        }
    }
    return valtozasTomb;
}

function Statisztikakiirato():void{
   let statTomb:Valtozasok[]= Statisztika(CsapatokObjektum,ValtozasokTombFeltoltes(ValtozasokTomb(CsapatokObjektum)))
   for(let i:number= 0;i<statTomb.length;i++){
    if(statTomb[i].darab>1){
        console.log(statTomb[i]);
    }
   }
}

console.log(CsapatokSzama(CsapatokObjektum));
console.log(AtlagPontszam(CsapatokObjektum));
console.log(AtlagFelettiCsapatok(CsapatokObjektum));
console.log(MaxValtozasCsapatok(CsapatokObjektum));
console.log(VanE(CsapatokObjektum,"Magyarország"));
console.log(AtlagPontszam(CsapatokObjektum));
Statisztikakiirato();