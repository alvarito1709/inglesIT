

function prueba1(){
    document.getElementById("success1").style.display = "block";
    document.getElementById("formularyButton1").style.display = "none";
}

function prueba2(){
    document.getElementById("success2").style.display = "block";
    document.getElementById("formularyButton2").style.display = "none";
}

function prueba3(){
    document.getElementById("success3").style.display = "block";
    document.getElementById("formularyButton3").style.display = "none";
}

function prueba4(){
    document.getElementById("success4").style.display = "block";
    document.getElementById("formularyButton4").style.display = "none";
}

function prueba5(){
    document.getElementById("success5").style.display = "block";
    document.getElementById("formularyButton5").style.display = "none";
}

var formulary = document.getElementById("success1");
var level1 = document.getElementById("success2");
var level2 = document.getElementById("success3");

if (formulary.style.display === "block"){
    document.getElementById("finishContainer").style.display = "block";
}
