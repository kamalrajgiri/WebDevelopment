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
    views=views
}
else if(views>1000&&views<1000000)
{
    views =(views/1000).toFixed(1) +`K`
}
else if(views>1000000)
{
    views =(views/1000000).toFixed(1) +`M`
}
let monthold = Number(prompt("Enter the duration of upload in month"))//
if (monthold<12)
{
    monthold = (monthold)+` Months`
}
else if (monthold>12){
    monthold =(monthold/12).toFixed(1)+` Years`
}
let duration = Number(prompt("Enter Vedio duration in minutes"))
if (duration<60)
{
    duration = `0 : `+(duration) 
}   
else if (duration>60)
{
    duration = parseInt(duration/60) +` : ` + (duration%60)
}
let thumbnil = String(prompt("Provide a thumbnil link"))

function createcard ( title, channel, views , monthold, duration,thumbnil){

    let card =` <div style="width: 95vw;height : 125px;border : 2px solid black;display: flex; background-color: rgba(0,0,0,0.9);align-items: center;align-items: center;position: absolute;z-index: -20;" class="container">
        <div style=" width: 150px;height : 120px;border : 2px solid white;position:absolute" class="thumbnil">
            <div  class="img">
                <img style="position: relative; width: 150px;
            height : 120px; object-fit: cover;" src="${thumbnil}" alt="">
            <div style=" position: absolute;bottom: 5px;right: 5px;color: white;background-color: black;padding: 2px 4px;font-size: 12px;" class="duration">${duration}</div>
            </div>
            </div>
        </div>
        <div style="margin-left: 170px; display: flex; flex-direction: column;height: 120px;justify-content: center; gap: 10px;" class="detail">
            <div style="font-size: 20px; font-weight: bold; margin-bottom: 8px;  color: rgb(255, 255, 255);  position: relative;  top: -10px; left: 0px;" class="title">${title}</div>
            <div style="  display: flex; font-size: 14px; position: relative;  top: -10px; left: 0px;" class="about">
                <div style="margin-right: 15px; color: gray;" class="channelName">${channel}</div>
                <div class="viewsdata">
                    <ul style=" list-style:circle;display: flex;padding: 0;margin: 0; color: gray;position: absolute;">
                        <li style="position: relative; gap: 10px; margin-left: 20px;" class="views">${views} views</li>
                        <li style="position: relative; gap: 10px; margin-left: 20px;" class="monthold"> ${monthold} ago</li>
                       
                    </ul>                    
                </div>
            </div>
        </div>
     </div>`
    document.body.innerHTML += card;
    

}
createcard(title,channel,views,monthold,duration,thumbnil)
// createcard("title","channel",567,"6 years",54,"../images/ugrataratemple.JPG")
