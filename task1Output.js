var header = document.querySelector("header");
var element = header.getElementsByTagName("li")[2];
element.querySelector('a').textContent="Projects";

var clone = element.cloneNode(true);
let hireElement=clone.querySelector('a');
hireElement.textContent="Hire Me";
element.after(clone);

var footer = document.querySelector("footer");
var list = footer.querySelector("ul");
list.style.display="none";
