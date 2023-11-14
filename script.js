console.log("¿active?");
/* const new_div = document.createElement("div");
const new_paragraph = document.createElement("p");
const new_link = document.createElement("a");
const new_image = document.createElementNS("img");
 */
//setting attributes
/* 
new_div.setAttribute("class", "my_div");
new_paragraph.setAttribute("id", "my_paragraph");
new_link.setAttribute("href", "http://example.com");
new_image.setAttribute("src", "https://image-link.png");

//create text nodes
const new_div_text = document.createTextNode("Hello World");
const new_paragraph_text = document.createTextNode("this is a paragraph");
const new_link_text = document.createTextNode("Click here");

//append text nodes to elements

new_div.appendChild(new_div_text);
new_paragraph.appendChild(new_paragraph_text);
new_link.appendChild(new_link_text);

console.log(new_div, new_paragraph, new_link, new_image);
 */

/* //selecting parent element
const container = document.querySelector(".container");

container.appendChild(new_div);
container.appendChild(new_paragraph);
container.appendChild(new_link);
container.appendChild(new_image);
 */

const p_tag = document.querySelector("article p");

// modify test content using textContent

p_tag.textContent = "Override existing Content text";

// modify test using innerText
p_tag.innerText = "Override existing Content text";
