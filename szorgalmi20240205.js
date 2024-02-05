<script>
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
function objektumTombFeltoltese(eredetiTomb,objektumTomb){

let tomb= [];
for(let i=0;i<eredetiTomb.length;i++){
let objektum={};
tomb=eredetiTomb[i].split(";");
objektum.nev=tomb[0];
objektum.helyezes=Number(tomb[1]);
objektum.valtozas=Number(tomb[2]);
objektum.pont=Number(tomb[3]);
objektumTomb.push(objektum);
}
}


function csapatokAtlagPontszama(csapatok){
let sum =0;
for(let i = 0;i<csapatok.length;i++){
sum+=csapatok[i].pont;

}

return sum/csapatok.length
}

function atlagnalTobb(csapatok){

document.write("<table><tr><th>Név</th><th>Pont</th>");
for(let i=0;i<csapatok.length;i++){
if(csapatok[i].pont>csapatokAtlagPontszama(csapatok)){
document.write("<tr>");
document.write("<td>"+csapatok[i].nev+"</td>");
document.write("<td>"+csapatok[i].pont+"</td>");
document.write("</tr>");

}
}
document.write("</tr></table>");
}
function legtobbetJavitoCsapat(csapatok){
let max = csapatok[0].valtozas;
let index = 0;
for(let i=1;i<csapatok.length;i++){
if(max<csapatok[i].valtozas){
max=csapatok[i].valtozas;
index = i;
}
}
document.write("Helyezés: "+csapatok[index].helyezes+" Csapat neve: "+csapatok[index].nev+" Pontszáma: "+csapatok[index].pont); 
}
function orszagVane(csapatok){
let orszag = prompt("Melyik országot nézzük, hogy szerepel-e?");
for(let i=0;i<csapatok.length;i++){
if(csapatok[i].nev==orszag){
document.write(orszag+" szerepel az adatok között.");
return i;
}

}
document.write(orszag+" nem szerepel az adatok között.");
return -1;
}

function valtozasStatisztika(csapatok){
let kulonbozoValtozasokObjektumTomb= [];
let alapObjektum={ valtozasEgyedi: csapatok[0].valtozas, valtozasDarab:0};
kulonbozoValtozasokObjektumTomb.push(alapObjektum);

for(let i=1;i<csapatok.length;i++){
let counter =0;
for(let j =0;j<kulonbozoValtozasokObjektumTomb.length;j++){
if(kulonbozoValtozasokObjektumTomb[j].valtozasEgyedi==csapatok[i].valtozas){
counter++;
}
}
if(counter == 0){
let objektum ={};
objektum.valtozasEgyedi=csapatok[i].valtozas;
objektum.valtozasDarab =0;
kulonbozoValtozasokObjektumTomb.push(objektum);
}
}


for(let i=0;i<kulonbozoValtozasokObjektumTomb.length;i++){
let counter =0;
for(let j=0;j<csapatok.length;j++){
if(kulonbozoValtozasokObjektumTomb[i].valtozasEgyedi==csapatok[j].valtozas){
counter++;
}

}
kulonbozoValtozasokObjektumTomb[i].valtozasDarab = counter;
}
//Ezt csak kipróbáltam :)
/*for(let i=0;i<kulonbozoValtozasokObjektumTomb.length;i++){
for( x in kulonbozoValtozasokObjektumTomb[i]){
document.write(x+" "+kulonbozoValtozasokObjektumTomb[i][x]+" ");
}
document.write("<br>");
}*/ 

document.write("<table><tr><th>Változás</th><th>Darab</th></tr>");
for(let i=0;i<kulonbozoValtozasokObjektumTomb.length;i++){
if(kulonbozoValtozasokObjektumTomb[i].valtozasDarab>1){
document.write("<tr><td>"+kulonbozoValtozasokObjektumTomb[i].valtozasEgyedi+"</td><td>"+kulonbozoValtozasokObjektumTomb[i].valtozasDarab+"</td></tr>");
}
}
document.write("</table>");
}
const csapatokObjektumTomb=[];
objektumTombFeltoltese(csapatAdat,csapatokObjektumTomb);

//document.write(csapatokObjektumTomb[1].nev);

// 1. Ajda meg aktuálisan hány csapt szerepel a ranglistán.
document.write(csapatokObjektumTomb.length);
document.write("<hr>");
// 2. Írja ki mennyi a résztvevő csapatok átlag pontszáma.
document.write(csapatokAtlagPontszama(csapatokObjektumTomb));
document.write("<hr>");
// 3. Listázza ki azokat a csapatokat akik az átlagnál több pontot értek el.
atlagnalTobb(csapatokObjektumTomb);
document.write("<hr>");
// 4. Írja ki a legtöbbet javító csapat adatait.
legtobbetJavitoCsapat(csapatokObjektumTomb);
document.write("<hr>");
// 5. Határozza meg az adatok között szerepel e egy adott ország csapata.
orszagVane(csapatokObjektumTomb);
document.write("<hr>");
// 6. Statisztika
valtozasStatisztika(csapatokObjektumTomb);
</script>
