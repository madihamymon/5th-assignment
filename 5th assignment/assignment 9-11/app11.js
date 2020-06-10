var first = +prompt("Enter 1st value")
var sec = +prompt("Enter second value")
var operation = prompt("Enter operator")
if(operation=="+"){
    var result= first+sec;
    alert(result)
}
else if(operation=="-"){
    var result= first-sec;
    alert(result)
}
else if(operation=="*"){
    var result= first*sec;
    alert(result)
}
else if(operation=="/"){
    var result= first/sec;
    alert(result)
}
else if(operation=="%"){
    var result= first%sec;
    alert(result)
}