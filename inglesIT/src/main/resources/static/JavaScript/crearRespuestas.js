var urlBase = "http://localhost:8080"



function formDisplay(){
    var formulary = document.getElementById("formDisplay").value;

    switch (formulary){
        case ("AGREGAR"):
            document.getElementById("agregarRespuesta").style.display= "flex";
            document.getElementById("edicionRespuesta").style.display= "none";

        break;
        case ("EDITAR"):
            document.getElementById("edicionRespuesta").style.display= "flex";
            document.getElementById("agregarRespuesta").style.display= "none";
            break;
    }

}


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
    var formulary = document.getElementById("formDisplay").value;

    var level;
    var apartado;
    const url = urlBase + "/admin/filtrarPreguntas"

    var contenedorid;

    switch (formulary){
        case("AGREGAR"):

            level = parseInt(document.getElementById("nivel").value);
            apartado = document.getElementById("apartado").value;
            contenedorid = "#pregunta";

            break;

        case("EDITAR"):

            level = parseInt(document.getElementById("nivelEdicion").value);
            apartado = document.getElementById("apartadoEdicion").value;
            contenedorid = "#preguntaEdicion";
            break;

    }

    $.ajax({
        type: 'POST',
        url: url,
        data:{
            level: level,
            apartado: apartado,
        },
        success: [function (data){
            $(contenedorid).html(data);
        }],
        error: [function () {

        }]
    })

}


function answerFilter(){
    var url = urlBase+'/admin/filtrarRespuestas'

    var pregunta = document.getElementById("preguntaEdicion");

    $.ajax({
        type: 'POST',
        url: url,
        data: {pregunta: pregunta.value},
        success: function (data){
            $('#respuestaEdicion').html(data);
        },
        error: function (e){

        }
    })

}





