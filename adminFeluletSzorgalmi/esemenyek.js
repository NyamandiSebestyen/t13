veNev.addEventListener("change", vnevValid);
keNev.addEventListener("change", knevValid);
emailcim.addEventListener("change", emailValid);
cegesTelo.addEventListener("change", telefonValid);
ujElemFeltolto.addEventListener("click", UjSorBeszuras);
aktivalo.addEventListener("click", mindenCheck);
csikozasBe.addEventListener("click", SavozasBe);
darkMode.addEventListener("click", DarkMode);
tesztSor.addEventListener("click", TesztSorBeszuras);
bezaro.addEventListener("click", function () {
    figyAblak.style.display = "none";
    egesz.style.filter = "blur(0px)";
});
sorTorles.addEventListener("click", torles);


igenGomb.addEventListener("click",function () {
    visszater("igen");
});

nemGomb.addEventListener("click", function () {
    visszater("nem");
});