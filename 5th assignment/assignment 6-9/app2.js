var a = 8, b = 5; 
var result = --a - --b + ++b + b--; 
var result1= --a;
var result2= --a - --b; 
var result3= --a - --b + ++b; 
var result4= --a - --b + ++b + b--; 
document.write("a is " +a)
document.write( "<br>"+"b is " +b)
document.write("<br>"+"result is " + result)
document.write("<br>"+"result1 is " + result1)
document.write("<br>"+"result2 is " + result2)
document.write("<br>"+"result3 is " + result3)
document.write("<br>"+"result4 is " + result4)