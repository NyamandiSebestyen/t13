function aktualisHomerseklet (){
    return SZABALYOZO.value;
}

function homersekletKiirato (aktHo){
    AKTUALIS.innerHTML = " "+aktHo+"°C";
}

function kepValtoztato(){
    let aktHo = aktualisHomerseklet();
    homersekletKiirato(aktHo);
    if(aktHo>=100){
        KEP.src = "steam.jpg"
        KEP.alt = "légnemű";
        KEP.title = "légnemű";
        TELJES.style.backgroundImage = "none";
        TELJES.style.backgroundColor = "black";
        TELJES.style.color = "white";
    }else if(aktHo>0){
        KEP.src = "water.jpg"
        KEP.alt = "folyékony";
        KEP.title = "folyékony";
        TELJES.style.backgroundImage = "linear-gradient(to right,#7EA4D1,white";
        TELJES.style.color = "black";
    }else{
        KEP.src = "ice.jpg"
        KEP.alt = "szilárd";
        KEP.title = "szilárd";
        TELJES.style.backgroundImage = "none";
        TELJES.style.backgroundColor = "white";
        TELJES.style.color = "black";
    }
}