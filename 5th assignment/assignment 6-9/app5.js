var sub1 =prompt("enter subject 1");
var mark1 =+prompt("enter  marks for subject 1");
var sub2 =prompt("enter subject 2");
var mark2 =+prompt("enter  marks for subject 2");
var sub3 =prompt("enter subject 3");
var mark3 =+prompt("enter  marks for subject 3");
 var total= 100;

document.write("<b>" + "SUBJECT ------ TOTAL MARKS ------ OBTAINED MARKS ------ PERCENTAGE"+ "<b>")
document.write("<br>" + sub1+ "------"+ total +"------" + mark1+ " ------"  + mark1 +"%")
document.write("<br>" + sub2+ "------"+ total +"------" + mark2+ " ------"  + mark2 +"%")
document.write("<br>" + sub3+ "------"+ total +"------" + mark3+ " ------"  + mark3 +"%")
total1= +mark1+ mark2+ mark3;
var percentage= (total1 / 3) * 100;
document.write("<br>"+total* 3  +"-------" + total1 +"------" + percentage+"%")

