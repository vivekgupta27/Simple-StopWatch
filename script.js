const clock=document.querySelector(".clock");
let sec=0,min=0,hr=0;
let intervalId;


const startStopwatch=()=>{
    intervalId=setInterval(() => {
      sec++;
        if(sec>59){
           min++;
            sec=0;
        }
        else if(min>59)

        {
            hr++;
            min=0;
        }
        clock.innerHTML=`${ String(hr).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
    },500);
}


const stopStopwatch=()=>{
    clearInterval(intervalId);
}