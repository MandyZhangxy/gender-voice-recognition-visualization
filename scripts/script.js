//01 Accessing DOM JS

/*
//grab a single element
var myTitleLink = document.getElementById("logo_title");

//information about the node
document.write("<p>Node type for logo_title is " + myTitleLink.nodeType 
												+ "</p>");
document.write("<p>Inner HTML for logo_title is " + myTitleLink.innerHTML
												+ "</p>");
document.write("<p>Child nodes for logo_title are " 
							+ myTitleLink.childNodes.length + "</p>");

//how many links?
var myLinks = document.getElementsByTagName("a");
document.write("<p>Number of links: " + myLinks.length + "</p>");

//how many ul do I have?
var unorderedLists = document.getElementsByTagName("ul");
document.write("<p>Number of uls: " + unorderedLists.length + "</p>");

*/

/*
//02 Changing DOM JS

var contact_us = document.getElementById("contact_us");
contact_us.setAttribute("align", "right");

document.write("<p>The Inner HTML is " + contact_us.innerHTML + "</p>");

//array of h1s

main = document.getElementById("main");
var arrayOfH1s = main.getElementsByTagName("h1"); //this is an array
document.write(arrayOfH1s[0].innerHTML);
arrayOfH1s[0].innerHTML = "This is a new title";
arrayOfH1s[1].innerHTML = "This is another title";
*/

//03 Creating DOM JS
/*
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

//To add content, either use innerHTML
//newHeading.innerHTML = "Did you know?";
//newParagraph.innerHTML = "JavaScript is not related to Java?";

//OR create child nodes manually
var h1Text = document.createTextNode("Did you know?");
var paratext = document.createTextNode("JavaScript is not related to Java?");

//add them as child nodes to the new elements
newHeading.appendChild(h1Text);
newHeading.appendChild(paratext);


//and we still need to attach them to the document
document.getElementById("attach_here").appendChild(newHeading);
document.getElementById("attach_here").appendChild(newParagraph);
*/

//04 Click and Load JS

/*
//document.onclick = function() {
//	alert("You clicked somewhere");
//};

function prepareEventHandlers() {
	var myLogo = document.getElementById("logo");
	myLogo.onclick = function() {
		alert("You clicked the logo");
	};
}

window.onload = function() {
	prepareEventHandlers();
};
*/

//05 Focus and Blur JS
/*
var emailField = document.getElementById("your_email");

emailField.onfocus = function() {
	if (emailField.value == "your email") {
		emailField.value = "";
	}
};

emailField.onblur = function() {
	if (emailField.value == "") {
		emailField.value = "your email";
	}
};
*/

//06 Timers JS

//Two methods for timers: setTimeout and setInterval (Single/Repeating)

function simpleMessage() {
	alert("This is a simple message");
}

//setTimeout(simpleMessage, 5000); //time is in milliseconds

var myImage = document.getElementById("mainImage");
var imageArray = ["style/image01.jpg", "style/image02.jpg",
                  "style/image03.jpg", "style/image04.jpg"];
				  
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(changeImage, 3000);

//setInterval returns a value
myImage.onclick = function() {
	clearInterval(intervalHandle);
};
