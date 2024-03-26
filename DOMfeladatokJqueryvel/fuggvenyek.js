$(document).ready(function(){
    let pattern = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;

    $("#karakterMezo").keypress(function () {
        $("#karakterszam").text($("#karakterMezo").val().length+1 + " karakter");
    });

    $("#rajzGomb").click(function(){
        $("#rajz").width($("#xMezo").val());
        $("#rajz").height($("#yMezo").val());
    });

    $("#cicaGomb").click(function(){
        $("#cica").fadeToggle(5000);
    });

    $("#ellenorzoGomb").click(function(){
        if($("#email").val().length ==0 &&$("#emailMegerosit").val().length ==0){
            $("#hibaBox").text("Nincs kitöltve egyik mező sem!").css({"color":"red","display":"block"});            
        } else if($("#email").val().length ==0){
            $("#hibaBox").text("Nincs kitöltve az e-mail mező!").css({"color":"red","display":"block"}); 
        }else if($("#emailMegerosit").val().length ==0){
            $("#hibaBox").text("Nincs kitöltve az e-mail megerősítése mező!").css({"color":"red","display":"block"}); 
    } else if($("#email").val() !=$("#emailMegerosit").val()){
        $("#hibaBox").text("A két mező tartalma nem egyezik!").css({"color":"red","display":"block"});
    }else if(!pattern.test($("#email").val())){
        $("#hibaBox").text("Nem megfelelő az e-mail cím formátuma!").css({"color":"red","display":"block"});
    }else {
        $("#hibaBox").text("Adatok rögzítése sikeres!").css({"color":"green","display":"block"});
    }
    
 });
}) 

