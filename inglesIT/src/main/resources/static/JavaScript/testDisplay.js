var urlBase = "http://localhost:8080"



//toma datos necesarios y los usa para filtrar las preguntas y respuestas que se muestran al usuario en cada nivel y apartado
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


//ESPERA A QUE EL ID CON VALOR TESTER SE ACTUALICE PARA CREAR EL DRAG AND DROP
var tester = document.getElementById("tester");

tester.addEventListener('DOMSubtreeModified', () =>{

        let questionContainer = document.getElementsByClassName('dropQuestion');

        let answer = document.getElementsByClassName('listeningAnswerContainer');


        //mapea el HTML collection de questionContainer para agregarles un addEventListener a todos
        for (let i = 0; i < questionContainer.length; i++) {

            // agrega el evento dragover segun el elemento que se está arrastrando iterandolo con [i]

            questionContainer[i].addEventListener('dragover',ev => {
                ev.preventDefault();
                questionContainer[i].classList.add('dropHover');
            })

            // agrega el evento dragleave segun el elemento que se está arrastrando iterandolo con [i]
            questionContainer[i].addEventListener('dragleave',ev => {
                // remueve la clase dropHover del elemento
                questionContainer[i].classList.remove('dropHover');
            })

            questionContainer[i].addEventListener('drop',ev => {

                // remueve la clase dropHover del elemento
                questionContainer[i].classList.remove('dropHover');

                //recibe la variable del elemento arrastrado mediante un dataTransfer
                var id = ev.dataTransfer.getData('id');

                console.log(id);
            })
        }


        //mapea el HTML collection de answer para agregarles un addEventListener a todos
        for (let i = 0; i < answer.length; i++) {
            answer[i].addEventListener("dragstart", ev => {
                //toma el span children del contenedor y lo almacena en una variable html collection
                var children = answer[i].children;

                console.log(children);

                //crea una variable de tipo array para almacenar el id
                var childrenId = [];

                //almacena el id en la variable childrenId
                for (let i = 0; i < children.length; i++) {
                    childrenId.push(children[i].id);
                }

                //mapea la variable childrenId y deja el dato Id del elemento hijo
                var id = childrenId.map(e => parseInt(e)).join("")

                // agrega el id del elemento arrastrado a un dataTransfer para ser recibido por el contenedor destino.
                ev.dataTransfer.setData('id', id);
            });
        }


    })



