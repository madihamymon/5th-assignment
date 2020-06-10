var m1 = +prompt("ENTER MARKS FOR SUB 1")
var m2 = +prompt("ENTER MARKS FOR SUB 2")
var m3 = +prompt("ENTER MARKS FOR SUB 3")
document.write("<h1>"+"MARKSHEET"+"</h1>")
var total=300;
var total1= +m1+m2+m3;
var percent= (total1 / 3) * 100;
if(percent >= 80 ){
    document.write("Total marks "+ total+ "<br>")
    document.write("Marks Obtained "+ total1+ "<br>")
    document.write("Percentage "+ percent+ "%"+"<br>")
    document.write("Grade: "+ " A-1"+ "<br>")
    document.write("Remarks "+ "Exellant")
}
else if(percent >= 70 ){
    document.write("Total marks "+ total+ "<br>")
    document.write("Marks Obtained "+ total1+ "<br>")
    document.write("Percentage "+ percent+ "%"+"<br>")
    document.write("Grade: "+ " A"+ "<br>")
    document.write("Remarks "+ "Good")
}

else if(percent >=60 ){
    document.write("Total marks "+ total+ "<br>")
    document.write("Marks Obtained "+ total1+ "<br>")
    document.write("Percentage "+ percent+ "%"+"<br>")
    document.write("Grade: "+ " B"+ "<br>")
    document.write("Remarks "+ "You need to improve")
}

else {
    document.write("Total marks "+ total+ "<br>")
    document.write("Marks Obtained "+ total1+ "<br>")
    document.write("Percentage "+ percent+ "%"+"<br>")
    document.write("Grade: "+ " Fail"+ "<br>")
    document.write("Remarks "+ "Sorry")
}

