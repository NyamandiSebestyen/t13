let helsinki=[
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak-kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak-kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat"
    ];

interface verseny{
    helyezes:number,
    letszam: number,
    sportNeve:string,
    versenyNeve:string
};


    function ObjektumFeltoltese():verseny[]{
        let versenyekTomb:verseny[]=[];
        let szovegTomb:string[]=[];
        
        for(let i:number=0;i<helsinki.length;i++){
            szovegTomb=helsinki[i].split(" ");
            let versenyTomb:verseny = {
                helyezes: Number(szovegTomb[0]),
                letszam: Number(szovegTomb[1]),
                sportNeve: szovegTomb[2],
                versenyNeve: szovegTomb[3]
            }
            versenyekTomb.push(versenyTomb);
        }
        return versenyekTomb;
    }

    let ALAPTOMB:verseny[]=ObjektumFeltoltese();

    function PontszerzoHelyezes(objektumTomb:verseny[]):number{
        let counter = 0;
        for(let i:number=0;i<objektumTomb.length;i++){
            if(objektumTomb[i].helyezes>0 && objektumTomb[i].helyezes<7){
                counter++;
            }
        }
        return counter;
    }

    interface ermek {
        arany:number,
        ezust:number,
        bronz:number
        osszesen:number
    }

    function EremStatisztika(objektumTomb:verseny[]):ermek{
        let eremObjektum:ermek={
            arany:0,
            ezust:0,
            bronz:0,
            osszesen:0
        }
        for(let i:number=0;i<objektumTomb.length;i++){
            if(objektumTomb[i].helyezes==1){
                eremObjektum.arany++;
                eremObjektum.osszesen++;
            }else if(objektumTomb[i].helyezes==2){
                eremObjektum.ezust++;
                eremObjektum.osszesen++;
            }else if(objektumTomb[i].helyezes==3){
                eremObjektum.bronz++;
                eremObjektum.osszesen++;
            }
        }
        return eremObjektum;
    }

    function PontokOsszege(objektumTomb:verseny[]):number{
        let counter:number = 0;
        for(let i:number = 0;i<objektumTomb.length;i++){
            if(objektumTomb[i].helyezes == 1){
                counter+=7
            }else if(objektumTomb[i].helyezes == 2){
                counter+=5
            }else if(objektumTomb[i].helyezes == 3){
                counter+=4
            }else if(objektumTomb[i].helyezes == 4){
                counter+=3
            }else if(objektumTomb[i].helyezes == 5){
                counter+=2
            }else if(objektumTomb[i].helyezes == 6){
                counter+=1
            }
        }
        return counter;
    }
   
    function TornaVUszas(objektumTomb:verseny[]):string{
        let torna:number = 0;
        let uszas:number = 0;
        for(let i:number=0;i<objektumTomb.length;i++){
            if(objektumTomb[i].sportNeve=="torna"){
                torna++;
            } else if(objektumTomb[i].sportNeve=="uszas"){
                uszas++;
            }
        }
        if(uszas>torna){
            return "Úszás sportágban szereztek többet";
        } else if(torna>uszas){
            return "Torna sportágban szereztek többet";
        }else{return "Egyenlő volt az érmek száma";}
    }

    function UjTomb(objektumTomb:verseny[]):string[]{
        let javitottTomb:string[]=[];
        for(let i:number=0;i<objektumTomb.length;i++){
            let szoveg:string = "";
            if(objektumTomb[i].sportNeve=="kajakkenu"){
                szoveg=objektumTomb[i].helyezes+" "+objektumTomb[i].letszam+" kajak-kenu "+objektumTomb[i].versenyNeve;
            } else{szoveg=objektumTomb[i].helyezes+" "+objektumTomb[i].letszam+" "+objektumTomb[i].sportNeve+" "+objektumTomb[i].versenyNeve;}
            javitottTomb.push(szoveg);
        }
        return javitottTomb;
    }

    function LegtobbPontSzerzo(objektumTomb:verseny[]):verseny{
        let pontszerzoTomb:verseny[]=[];
        for(let i:number=0;i<objektumTomb.length;i++){
            if(objektumTomb[i].helyezes>0&&objektumTomb[i].helyezes<7){
                pontszerzoTomb.push(objektumTomb[i]);
            }
        }
        let max = pontszerzoTomb[0].letszam;
        let eredmeny:verseny={
            helyezes:pontszerzoTomb[0].helyezes,
        letszam: pontszerzoTomb[0].letszam,
        sportNeve:pontszerzoTomb[0].sportNeve,
        versenyNeve:pontszerzoTomb[0].versenyNeve
        };
        for(let i:number=0;i<pontszerzoTomb.length;i++){
            if(max<pontszerzoTomb[i].letszam){
                max=pontszerzoTomb[i].letszam;
                eredmeny = pontszerzoTomb[i];
        }
        
    }
    return eredmeny;
    }
    console.log(`Pontszerző helyezések száma: ${PontszerzoHelyezes(ALAPTOMB)}`);
    console.log(EremStatisztika(ALAPTOMB));
    console.log(`Olimpiai pontok száma: ${PontokOsszege(ALAPTOMB)}`);
    console.log(TornaVUszas(ALAPTOMB));
    console.log(UjTomb(ALAPTOMB));
    console.log(LegtobbPontSzerzo(ALAPTOMB));