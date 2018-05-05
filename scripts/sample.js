// alert("Coffee Time");
/* I am 
   Multi Line
  */

var x = 9, y = 10;

document.write("<h4>The sum of x and y is " + (x+y) + "</h4>");

var collection = [9,10,'Bugs Bunny', "Dafffy Duck"]

document.write(collection[2]);

function max(a,b) {
	if (a > b) {
		document.write("<p>" + a + " is greater.</p>");
	}
	else {
		document.write("<p>" + b + " is greater.</p>");
	}
}

max(21,34);

//anonymous function

/*function() {} defines a javascript function as anonymous.
Surrounding it with () makes it an expression. Following it with ()
executes it.


*/
(function() {
	var x=3, y=4;
	alert(x*y);
})();


var me = (function() {
	var x=7, y=9;
	return x*y
});

document.write(me);
document.write("<br />");
document.write(me()); //execute it
