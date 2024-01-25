var hour = 0;
var minute = 10;
var second = 60;
var mSecond = 1000;


function initializateTimer(){
     setInterval(timer, mSecond);
}



function timer(){
    if (second !== 0){
        second -=1;
        document.getElementById("second").innerHTML = second;
    }

    if (second <10){document.getElementById("second").innerHTML = "0" + second;}

    if (second === 0){
        if(minute === 0){
            clearInterval(interval);

            //llamar aca a funciones para guardar los datos al acabarse el tiempo
        }
        else{
            minute -= 1;
            second = 60;
        }
    }
    document.getElementById("minute").innerHTML = minute;

    if (minute <=1){
        document.getElementById("counterDisplay").style.color = "red";
    }


    return console.log(minute + ":" + second);

}