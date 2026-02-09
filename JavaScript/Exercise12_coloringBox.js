console.log("Exercise 12: Coloring a Box");

// given 5 boxes , assign a random color and a random background to each box using DOM concepts.

let colors = ["blue ","red","yellow","green","purple", "orange","pink","brown","black","white", "gray"];
let bgcolors = ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff","#fffffc", "#d3d3d3", "#c0c0c0"]

const container = document.querySelector(".container");
console.log("Container element:", container);
const boxes = container.children;
console.log("Child elements (boxes):", boxes);
for (let i = 0; i < boxes.length; i++) {
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    let randomBgColorIndex = Math.floor(Math.random() * bgcolors.length);
    boxes[i].style.color = colors[randomColorIndex];
    boxes[i].style.backgroundColor = bgcolors[randomBgColorIndex];
    boxes[i].style.margin = "10px";
}