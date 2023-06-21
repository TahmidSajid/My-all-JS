// create elements
var heading3 = document.createElement("h3");
var content = document.createTextNode("Text is here");



// append child
heading3.appendChild(content);
var thats = document.querySelector(".nore");
thats.appendChild(heading3);



// insert before new child
var heading4 = document.createElement("h5");
var TexT = document.createTextNode("New text up here");
heading4.appendChild(TexT);
var para = document.getElementsByTagName("p")[0];
thats.insertBefore(heading4 , para);




// adding class 
para.classList.add("textStyle");
para.classList.add("textname");



// removing class
para.classList.remove("textname");



// setting or adding new attributes 
var links = document.getElementsByTagName("a")[0];
links.setAttribute("href","https://warthunder.com/en");



// adding style
links.style.textDecoration = "none";



// replacing child
var heading5 = document.createElement("h5");
var contnt   = document.createTextNode("Replace the word");
heading5.appendChild(contnt)
var heading6 = document.getElementsByTagName("h6")[0];
thats.replaceChild(heading5, heading6)