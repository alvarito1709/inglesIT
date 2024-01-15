var hour = 0;
var minute = 10;
var second = 60;
var mSecond = 1000;


 setInterval(timer, 1000);


function timer(){
    if (second !== 0){
        second -=1;
        document.getElementById("second").innerHTML = second;
    }

    if (second <10){document.getElementById("second").innerHTML = "0" + second;}

    if (second === 0){
        minute -= 1;
        second = 60;
    }
    document.getElementById("minute").innerHTML = minute;

    if (minute <=1){
        document.getElementById("counterDisplay").style.color = "red";
    }

    return console.log(minute + ":" + second);

}