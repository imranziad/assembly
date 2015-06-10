// link JS file end of the body in HTML
//1 functions
alert();
prompt();
confirm();

//2 variables and Data type
var isString = "This is a string variable.", // this is a "String" data type
	isNum = 45, //this is a "Number" data type
	isBoolean = true; // this is a "Boolean" data type

//3 "Concatenation"
var myVariable = "This is " + "is a string Concatenation";

//4 Number to String
var numToStr = 6 + ""; //Concatenation of number with string converts it to string
var num = 8,
	toStr = num.toString();

//5 String to Number
var strToNum = parseInt("34", 10), // base 10 Decimal Integer
	strToNum = parseFloat("3.14", 10); // fractional number

//6 Functions
function functionName(paramOne, paramTwo){
		paramOne = paramTwo + 1,
		paramTwo = paramOne + 3;
		paramOne = paramTwo * 3;

		return paramOne; // function will return "undefined" without defining "return"
}

//7 Scope
var globalVar = "This is a global variable."; // variable in the root

var globalFunction = function(){ 
	var localVar = "This is a local variable."; // variable inside a function
	
	var localFunction = function(){
		var superLocalVar = "This is a super local variable."; // variable inside a function which is inside another function
	}
}
// var randomVar; here "randomVar" is called an identifier, also known as "Variable Name"

//8 Object - Length
var obj = "This is a string object.",
	length = obj.length; //24
	// Object - Index
	var index = obj.indexOf("is"); //2; index start from 0
	var index2 = obj.indexOf("is", index + 1); // index2 search starts after the first "index" search
	// Object - Index - Right to Left
	var index3 = obj.lastIndexOf("is"); //2 right to left search
	var index4 = obj.lastIndexOf("is", index - 1); 
	// Object - Extract String
	var substr = obj.substr(10, 6); //string; 10 is the starting index, 6 is the length
	var substring = obj.substring(0, 3); //This; 0 is the starting point, 3 is the last point
	// Object - replace
	var newString = obj.replace("object", "value");
	// case transform
	var toUpperCase = obj.toUpperCase();
	var toLowerCase = obj.toLowerCase();

//9 create Object
var person = 
{
	firstName : "Jeremy", // use colon (:) instead of "="
	lastName : "McPeak",
	getFullName : function(){
		return this.firstName + " " + this.lastName;
	} // don't use semi-colon here
}

//10 Arrays
var foo = [11, "hello", true];
foo[3] = 15; // add values
foo[foo.length] = "last";
foo.push("last");

// Arrays 2
var names = ["Jack", "Jeremy"],
	names2 = ["Jackie", "Jennifer"];

var people = names.concat(names2); // add Arrays
var joined = people.join(", "); // separate array variables
var reversed = people.reverse(); // reverse array variable order
var sorted = people.sort(); // sort variables alphabetically

//11 Conditions
if(/*conditions*/){
	//statements
}
// logical AND: &&
// logical OR: ||
// logical NOT: if(!(conditions))

//12 loops
for(/*initialization*/; /*conditions*/; /*incrementation*/){
	//statements
}

// while loop
while(/*conditions*/){
	//statements
}

// alternate to While loop
do{
	//statement
}while(/*conditions*/)

// Document Object Module (DOM)
document.getElementsByTagName(); // get elements by HTML Tags (LIVE)

document.getElementById(); // get elements by HTML IDs

document.querySelector(); // CSS query: get elements by HTML tags, IDs, Classes (Not Live)

document.querySelectorAll(); // CSS query: get all elements by HTML tags, IDs, Classes (Not Live)

.parentNode.tagName(); // get elements parent Tag name

document.createElement(); // Create HTML element

document.body.appendChild(); // add created HTMl element in HTML body

document.createTextNode(); // create text content

.appendChild(); // add content to the created parent element

.setAttribute("attName", "attValue"); // set HTML attribute to HTML tags

.id = ""; // create ID in HTML element

.parentNode.insertBefore(newElement, referenceElement); // 

.parentNode.replaceChild(newElement, OldElement);

.innerHTML = ""; // create HTML tags supported content

.style.color = "blue"; // to add inline styles

.className = ""; // add or remove CSS classes

.className.replace = ("", ""); // replace a class

.classList.add = ""; // add single class

.classList.remove = ""; // remove CSS class

.classList.toggle(""); // add or remove class

window.getComputedStyle(element, null).getPropertyValue(""); // get CSS property value (don't support: <IE9)

element.currentStyle[""]; // get CSS property value only for <IE9 browsers

// cross-browser CSS property getting function
var getStyle = function(el, cssProperty){
	if (typeof getComputedStyle !== "undefined") {
		return window.getComputedStyle(el, null).getPropertyValue(cssProperty); //for general browsers
	} else{
		return el.currentStyle[cssProperty]; // for legacy browsers
	}
};

// animations
var timer = setTimeout(doSomethingFunction, speed); //

clearTimeout(timer); // break timeout

var timer = setInterval(doSomethingFunction, speed); // repeatedly call a function with a time delay

clearInterval(timer);

// Event Handler
.onclick =;

window.onload

.addEventListener("click", functionName, false); // (event, function, true=event capturing/false=event bubbling)

.removeEventListener("click", functionName, false); // need to be the same as addEventListener

function(evt){ // used inside eventListener as function
	evt.preventDeafault(); // prevent deafualt action like links
	evt.type;
	evt.target;
	evt.returnValue = false; //as same as preventDefault
}
