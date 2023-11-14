const new_div = document.createElement("div");
const new_paragraph = document.createElement("p");
const new_link = document.createElement("a");
const new_image = document.createElementNS("img");

//setting attributes

new_div.setAttribute("class", "my_div");
new_paragraph.setAttribute("id", "my_paragraph");
new_link.setAttribute("href", "http://example.com");
new_image.setAttribute("src", "https://image-link.png");


//create text nodes
const new_div_text = document.createTextNode("Hello World");
const new_paragraph_text = document.createTextNode("this text)  
