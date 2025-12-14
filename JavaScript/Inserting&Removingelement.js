console.log("Inserting & Removing Elements in the DOM");

document.querySelector(".box")
document.querySelector(".box").innerHTML
document.querySelector(".container").innerHTML
document.querySelector(".container").innerText
// Inserting a new box element inside the container
document.querySelector(".container").innerHTML += `<div class="box"> New Box </div>`;
// Removing the first box element inside the container
// document.querySelector(".box").remove();
document.querySelector(".container").outerHTML
document.querySelector(".container").tagName
document.querySelector(".container").nodeName
document.querySelector(".container").textContent
// document.querySelector(".container").hidden = true; // Hides the container
// document.querySelector(".container").hidden = false; // Shows the container again
document.querySelector(".container").innerHTML = " Hey man"; // Removes all child elements inside the container
// document.querySelector(".box").hasAttribute("style"); // Checks if the box has a style attribute
// document.querySelector(".box").getAttribute("style"); // Gets the class attribute of the box
// document.querySelector(".box").setAttribute("style", "color: blue; background-color: yellow;"); // Sets a new style attribute for the box

// document.designMode = "on"; // Enables design mode for the entire document, allowing editing
// document.designMode = "off"; // Disables design mode for the entire document
// document.querySelector(".box").dataset // Accesses the data attributes of the box element




document.querySelector(".container").classList
document.querySelector(".container").classList.add("new-class") // Adds a new class to the container
document.querySelector(".container").classList.add("new-class") // Adds a new class to the container (does not duplicate if already present)
document.querySelector(".container").classList.remove("red") // Removes the red class from the container
document.querySelector(".container").classList.toggle("bg-green") // Toggles the bg-green class on the container