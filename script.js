 //margin variable
 var m=0;
 var y;

 function run(){
    if(m==1200){
        clearInterval(x);
        m=0;
    }
    else{
        m+=5;
        var x=document.getElementById("car");
        x.style.marginLeft = m+"px";
    }
   
}

 function start(){
     //run the 'run' function in 1sec interval
     y = setInterval(run,100);
     console.log(y);
 }
 function stop(){
     clearInterval(y);
 }
