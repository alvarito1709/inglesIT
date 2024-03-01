var urlBase = "http://localhost:8080"


function submitApartado(data){
    var url = urlBase+'/test/level';
    var test;
    var apartado;
    var level;


    switch (data){
        case "listening1":
            test = "level1";
            apartado = "READING";
            level = 1;
            break;

        case "reading1":
            test = "level1";
            apartado = "ENGLISH";
            level= 1;
            break;

        case "useOfEnglish1":

            break;

        case "listening2":

            test = "level2";
            apartado = "READING";
            level= 2;
            break;

        case "reading2":
           test = "level2";
           apartado = "ENGLISH";
            level= 2;
            break;

        case "listening3":
            test = "level3";
            apartado = "READING";
            level= 3;
            break;

        case "englishUse3":
            test = "level3";
            apartado = "ENGLISH";
            level= 3;
            break;
    }

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            prueba: test,
            level: level,
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

