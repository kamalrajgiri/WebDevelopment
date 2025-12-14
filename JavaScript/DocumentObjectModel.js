console.log("Document Object Model (DOM) in JavaScript");
document.title = "DOM Example";
// console.log(document.title);
// console.log(document.body);
// document.body.style.backgroundColor = "#3de80dff";
// document.body.querySelector("div").style.backgroundColor = "#ff5733";

console.log("Javascript DOM - Children , Parent , Sibling Nodes")
console.log("Body childNodes ",document.body.childNodes);
console.log("Body firstChild:", document.body.firstChild);
console.log("Body lastElementChild childNodes:", document.body.lastElementChild.childNodes);
console.log("Body lastChild:", document.body.lastChild);
console.log("Body firstElementChild:", document.body.firstElementChild);
console.log("Body FirstElementchildNode:FirstChild", document.body.firstElementChild.firstChild);
console.log("Body FirstElementchildNode:LastChild", document.body.firstElementChild.lastChild);
const container = document.querySelector(".container");
console.log("Container element:", container);
container.style.border = "2px solid blue";
container.style.padding = "10px";
const parent = container.parentElement;
console.log("Parent element of container:", parent);
const boxes = container.children;
console.log("Child elements (boxes):", boxes);
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "#f0e68cff";
    boxes[i].style.margin = "10px";
}
