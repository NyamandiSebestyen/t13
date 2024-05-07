interface eredmenyes {
    hazai:string;
    idegen:string;
    hazaiPont:number;
    idegenPont:number;
    helyszin:string;
    idopont:string
}

function objektumFeltoltes(tomb:string[]):eredmenyes[]{
    let objektumTomb:eredmenyes[]=[];
    for(let i:number=0;i< tomb.length;i++){
        let aktTarolo:string[]=[];
        aktTarolo=tomb[i].split(";");
            let objektum:eredmenyes={
                hazai: aktTarolo[0],
                idegen: aktTarolo[1],
                hazaiPont: Number(aktTarolo[2]),
                idegenPont: Number(aktTarolo[3]),
                helyszin: aktTarolo[4],
                idopont: aktTarolo[5]
        }
        objektumTomb.push(objektum);
    }
    return objektumTomb;
}

function RealMadrid(oTomb:eredmenyes[]):[number,number]{
    let madridEredmeny:[number,number];
    let hazai:number=0;
    let idegen:number =0;
    for(let i:number=0;i<oTomb.length;i++){
        if(oTomb[i].hazai == "Real Madrid"){
            hazai++;
        }
        if(oTomb[i].idegen=="Real Madrid"){
            idegen++;
        }
    }
    madridEredmeny=[hazai,idegen];
    return madridEredmeny;
}

function MadridKiirato(tupi:[number,number]):void{
    console.log(`Real Madrid: Hazai: ${tupi[0]}, Idegen: ${tupi[1]}`)
}

function Dontetlen(oTomb:eredmenyes[]):boolean{
    for(let i:number=0;i<oTomb.length;i++){
        if(oTomb[i].hazaiPont==oTomb[i].idegenPont){
            return true;
        }
    }
    return false;
}

function DontetlenKiirato(miVolt:boolean):void{
    if(miVolt){
        console.log("Volt döntetlen? igen");
    }
    else{
        console.log("Volt döntetlen? nem");
    };
}

function Barcelona(oTomb:eredmenyes[]):string{
    let csapatNeve:string;
    for(let i:number=0;i<oTomb.length;i++){
        if(oTomb[i].hazai.toLowerCase().includes("barcelona") && oTomb[i].helyszin == "Palau Blaugrana" ){
            csapatNeve=oTomb[i].hazai;
        }
    }
    return csapatNeve;
}

function AdottDatumEredmenyek(oTomb:eredmenyes[]):eredmenyes[]{
    let akkoriEredmeny:eredmenyes[]=[];
    for(let i:number = 0;i<oTomb.length;i++){
        if(oTomb[i].idopont == "2004-11-21"){
            akkoriEredmeny.push(oTomb[i]);
        }
    }
    return akkoriEredmeny;
}

function DatumosEredmenyKiirato(oTomb:eredmenyes[]):void{
    for(let i:number= 0;i<oTomb.length;i++){
        console.log(`${oTomb[i].hazai} ${oTomb[i].idegen} (${oTomb[i].hazaiPont}:${oTomb[i].idegenPont})`)
    }
    
}

function DiffiStadionok(oTomb:eredmenyes[]):[string,number][]{
    let stadionok:[string,number][]=[];
    for(let i:number=0;i<oTomb.length;i++){
        let counter:number = 0;
        for(let j:number = 0;j<stadionok.length;j++){
            if(oTomb[i].helyszin == stadionok[j][0]){
            counter++;
            }
        }
        if(counter==0){
            let segedTupi:[string,number]=[oTomb[i].helyszin,0];
            stadionok.push(segedTupi);
        }
    }
return stadionok;
}

function StadionMerkozesSzamok(oTomb:eredmenyes[],stadionTomb:[string,number][]):[string,number][]{
    for(let i:number=0;i<oTomb.length;i++){
        for(let j:number=0;j<stadionTomb.length;j++){
            if(oTomb[i].helyszin==stadionTomb[j][0]){
                stadionTomb[j][1]++;
            }
        }
    }
    return stadionTomb;
}

function StadionKiirato(stadionokTomb:[string,number][]):void{
    for(let i:number = 0;i<stadionokTomb.length;i++){
        if(stadionokTomb[i][1]>20){
            console.log(`${stadionokTomb[i][0]}: ${stadionokTomb[i][1]}`);
        }
    }
}

let EREDMENYEK:eredmenyes[] = objektumFeltoltes(eredmenyek);
MadridKiirato(RealMadrid(EREDMENYEK));
DontetlenKiirato(Dontetlen(EREDMENYEK));
console.log(Barcelona(EREDMENYEK));
DatumosEredmenyKiirato(AdottDatumEredmenyek(EREDMENYEK));
StadionKiirato(StadionMerkozesSzamok(EREDMENYEK,DiffiStadionok(EREDMENYEK)));