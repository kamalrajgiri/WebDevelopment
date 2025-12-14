document.title = "JS Id Class & More";
console.log("JS Id Class & More Loaded");   

// let bhupendrajogis = document.getElementsByClassName("box");
// console.log(bhupendrajogis);
// bhupendrajogis[1].style.backgroundColor = "yellow";

document.getElementById("red").style.backgroundColor = "red";
document.querySelector(".box").style.borderRadius = "25px";
document.querySelector("#red").style.fontSize = "20px";

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e => {
    // console.log(e);
e.style.backgroundColor = "green";})

document.getElementsByTagName("div")[2].style.color = "white";
e = document.getElementsByTagName("div");
e[3].style.fontSize = "30px";
e[3].matches("#red"); // true
e[3].matches(".box"); // true
e[3].matches(".container"); // false
console.log(e[3].matches("#red"));
console.log(document.querySelector("#red").textContent = "Bhupendra Jogi")