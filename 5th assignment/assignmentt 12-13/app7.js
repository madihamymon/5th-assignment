var time=prompt("ENTER TIME IN 24 HOURS CLOCK FORMAT LIKE (1900=7pm)")
if(time>=0000 && time<1200){
    alert("good morning")
}
else if(time>=1200 && time<1700){
    alert("good afternoon")
}
else if(time>=1700 && time<2100){
    alert("good evening")
}
else if(time>=2100 && time<2359){
    alert("good night")
}