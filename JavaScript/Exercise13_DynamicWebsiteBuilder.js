console.log("Exercise 13 Dynamic Website Builder")

// function createcard ( title, channel, no of views , monthsold, duration,thumbnil){
// finish this function}
// the workflow must complete on running a function 


let title = String(prompt("Enter a Title"))
console.log(title)
let channel = String(prompt("Enter a channel name"))
console.log(channel)
let views = Number(prompt("Enter no of views "))
if(views<1000)
{
    console.log(views)
}
else if(views>1000&&views<1000000)
{
    console.log(views/1000 +`K`)
}
else if(views>1000000)
{
    console.log(views/1000000 +`M`)
}
let monthold = number(prompt("Enter the duration of upload in month"))
if (monthold<12)
{
    console.log(monthold+`Months`)
}
else if (monthold>12){
    console.log(monthold/12+`Years`)
}
let duration = Number(prompt("Enter Vedio duration in minutes"))
console.log(duration +`min`)

let thumbnil = String(prompt("Provide a thumbnil link"))
console.log(thumbnil)