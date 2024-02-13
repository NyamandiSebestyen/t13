function menetidoSzamitas() {
    let induloIdo = document.getElementById("indulo").value;
    let erkezoIdo = document.getElementById("erkezo").value;
    if (induloIdo == erkezoIdo) { window.alert("Hiba: Azonos megállókat választott ki!") } else { window.alert(`Menetidő: ${Math.abs(induloIdo - erkezoIdo)} perc!`) }
   
}

