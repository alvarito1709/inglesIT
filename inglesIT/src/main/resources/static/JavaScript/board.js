var urlBase = "http://localhost:8080"

var container = document.getElementById("container");
var body = document.getElementById("boardBody");

function showPersonalData(){

    var url = urlBase+'/test/level'
    const test = document.getElementById("prueba").value;


    $.ajax({
        type: 'POST',
        url: url,
        data:{
            prueba: test
        },
        success: [function (data){
            $("#tester").html(data);
        },
        function (){
            container.style.display = "flex";
            body.style.display = "none";
        }],
        error: [function () {

        }]
    })

}

function showLevel1(){
    var url = urlBase+'/test/level'
    const test = document.getElementById("level1").value;

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            prueba: test
        },
        success: [function (data){
            $("#tester").html(data);
        },
            function (){
                container.style.display = "flex";
                body.style.display = "none";
            }],
        error: [function () {

        }]
    })
}

function showLevel2(){
    var url = urlBase+'/test/level'
    const test = document.getElementById("level2").value;

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            prueba: test
        },
        success: [function (data){
            $("#tester").html(data);
        },
            function (){
                container.style.display = "flex";
                body.style.display = "none";
            }],
        error: [function () {

        }]
    })
}

function showLevel3(){
    var url = urlBase+'/test/level'
    const test = document.getElementById("level4").value;

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            prueba: test
        },
        success: [function (data){
            $("#tester").html(data);
        },
            function (){
                container.style.display = "flex";
                body.style.display = "none";
            }],
        error: [function () {

        }]
    })
}

function showLevel4(){
    document.getElementById("success5").style.display = "block";
    document.getElementById("formularyButton5").style.display = "none";
}

var formulary = document.getElementById("success1");
var level1 = document.getElementById("success2");
var level2 = document.getElementById("success3");

if (formulary.style.display === "block"){
    document.getElementById("finishContainer").style.display = "block";
}
