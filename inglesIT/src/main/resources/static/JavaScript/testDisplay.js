var urlBase = "http://localhost:8080"


function submitListening1(){
    var listening = document.getElementById("listening1")
    var englishUse = document.getElementById("englishUse1")

    var url = urlBase+'/test/level'
    const test = "level1";

    const apartado = "READING";

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            prueba: test,
            level: 1,
            apartado: apartado
        },
        success: [function (data){
            $("#tester").html(data);
        },
            function (){


            }],
        error: [function () {

        }]
    })

    window.scrollTo({top: 0, behavior: 'smooth'});


}

function submitReading1(){
    var url = urlBase+'/test/level'
    const test = "level1";

    const apartado = "ENGLISH";

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            prueba: test,
            level: 1,
            apartado: apartado
        },
        success: [function (data){
            $("#tester").html(data);
        },
            function (){


            }],
        error: [function () {

        }]
    })

    window.scrollTo({top: 0, behavior: 'smooth'});
}

function submitEnglish1(){
    console.log("Caiste wey");

    window.scrollTo(0, 0);
}

function submitListening2(){

    var url = urlBase+'/test/level'
    const test = "level2";

    const apartado = "READING";

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            prueba: test,
            level: 2,
            apartado: apartado
        },
        success: [function (data){
            $("#tester").html(data);
        },
            function (){


            }],
        error: [function () {

        }]
    })

    window.scrollTo({top: 0, behavior: 'smooth'});

}

function submitReading2(){
    var url = urlBase+'/test/level'
    const test = "level2";

    const apartado = "ENGLISH";

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            prueba: test,
            level: 2,
            apartado: apartado
        },
        success: [function (data){
            $("#tester").html(data);
        },
            function (){


            }],
        error: [function () {

        }]
    })

    window.scrollTo({top: 0, behavior: 'smooth'});
}

function submitListening3(){

    var url = urlBase+'/test/level'
    const test = "level3";

    const apartado = "READING";

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            prueba: test,
            level: 3,
            apartado: apartado
        },
        success: [function (data){
            $("#tester").html(data);
        },
            function (){


            }],
        error: [function () {

        }]
    })

    window.scrollTo({top: 0, behavior: 'smooth'});

}