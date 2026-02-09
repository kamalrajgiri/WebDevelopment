

console.log("Exercise 14 - Hacker's Terminal")

// create a hacking simulator which has a green background and it shows these message with random delay 1 to 7 seconds
// Initializing hacking
// Reading your files 
// Password files detected
// Sending all password and personal files to server...
// Cleaning up...
// these three dots must blink


let html = `
<style>
.blink{
    animation: blinker 9s linear infinite;
}
</style>
<div style=" color: white; font-size: 30px; font-family: monospace; padding: 20px;">
      <h2>Hacker's Terminal</h2>
        <pre style="color: white; font-size: 30px; font-family: monospace;  margin: 10px; " id="terminal-output">
         <span class="blink"></span></pre>
       
</div>`
let blink = '<style> .blink{ animation: blinker 1s linear infinite; } @keyframes blinker { 50% { opacity: 0; } } </style> <span class="blink">...</span> '
// let blink = "..."

let delay = Math.floor(Math.random()*7)
let a = "Initializing hacking"
let b = "Reading your files"
let c ="Password files detected"
let d ="Sending all password and personal files to server"
let e ="Cleaning up" 


 function getData(data){
    //simulates getting data from a server
    return new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve(data)
    },delay*1000);})
}

document.body.style.backgroundColor = "green"
document.body.innerHTML = html
document.body.innerHTML += blink


async function main(data) {
    // document.body.innerHTML = document.body.innerHTML.replace(blink, "..") 

document.body.querySelector("#terminal-output").textContent = await getData(a)
document.body.querySelector("#terminal-output").textContent += "\n\n"+ await getData(b)  
document.body.querySelector("#terminal-output").textContent += "\n\n"+ await getData(c);  
document.body.querySelector("#terminal-output").textContent += "\n\n"+ await getData(d); 
document.body.querySelector("#terminal-output").textContent += "\n\n"+ await getData(e);
// console.log(await getData(a));  
// console.log(await getData(b));  
// console.log(await getData(c));  
// console.log(await getData(d));
// console.log(await getData(e));  
}
main();