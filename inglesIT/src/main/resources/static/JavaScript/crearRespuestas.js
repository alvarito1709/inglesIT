var urlBase = "http://localhost:8080"

function crearRespuesta(){
    var url = urlBase + "/admin/submitRespuesta"


    var nivel = document.getElementById("nivel");
    var apartado = document.getElementById("apartado");
    var cuerpo = document.getElementById("cuerpo");
    var tipo = document.getElementById("tipo");
    var respuestaCorrecta = document.getElementById("respuestaCorrecta");
    var pregunta = document.getElementById("pregunta");

    var data = {
        nivel: nivel.value,
        apartado: apartado.value,
        cuerpoRespuesta: cuerpo.value,
        tipo: tipo.value,
        respuestaCorrecta: respuestaCorrecta.value,
        pregunta: {id: pregunta.value}
    }

    var dataJson = JSON.stringify(data);




    console.log(dataJson);

    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: dataJson
    };

    fetch(url, requestOptions).then(response => response.json()).then(result =>{
        console.log("respuesta del servidor", result)
    })
}




function change(){
    var level = parseInt(document.getElementById("nivel").value);
    var apartado = document.getElementById("apartado").value;

    console.log("ta tomando wey");

    var url = urlBase + "/admin/filtrarPreguntas"

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            level: level,
            apartado: apartado,
        },
        success: [function (data){
            $("#pregunta").html(data);
        }],
        error: [function () {

        }]
    })

}





