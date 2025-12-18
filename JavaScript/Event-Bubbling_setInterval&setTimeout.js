console.log("Event, Event Bubbling, setInterval & setTimeout in JavaScript");

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events



let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
document.querySelector('.box').innerHTML = "Content Changed!";
    // alert("Button Clicked");
});
btn.addEventListener("dblclick",()=>{
    document.querySelector('.box').innerHTML = "Content Changed on Double Click!";
});
btn.addEventListener("contextmenu",()=>{
    document.querySelector('.box').innerHTML = "Content Changed on Right Click!";
});
document.addEventListener("keydown",(e)=>{
console.log(e, e.key , e.keyCode);
});
