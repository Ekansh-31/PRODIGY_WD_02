let [hours,minutes,seconds,milliseconds] = [0,0,0,0];
let displayTime = document.querySelector(".timer");
let timer = null;

const watch = ()=>{
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours <10 ? "0" + hours : hours;
    let m = minutes <10 ? "0" + minutes : minutes;
    let s = seconds <10 ? "0" + seconds : seconds;
    let ms = milliseconds <10 ? "00" + milliseconds : milliseconds <100 ? "0" + milliseconds : milliseconds;

    displayTime.innerHTML = h + " : " + m + " : " + s + " : " + ms;
}

const start = ()=>{
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(watch,10);
}

const pause = ()=>{
    clearInterval(timer);
}

const stop = ()=>{
    clearInterval(timer);
    let [hours,minutes,seconds,milliseconds] = [0,0,0,0];
    displayTime.innerHTML = "00 : 00 : 00 : 000";
    

}