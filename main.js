canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseevent = "empty";
var lastx;
var lasty;
color = "red";
linewidth = 1;

var width = screen.width;
var new_width = screen.width - 70;
var new_Height = screen.height - 300;


if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_Height;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", myTouchstart);
function myTouchstart(e) {
    color = document.getElementById("color").value;
    linewidth = document.getElementById("linewidth").value;
    lastx = e.touches[0].clientX - canvas.offsetLeft;
    lasty = e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove", myTouchmove);
function myTouchmove(e) {
    currentx = e.touches[0].clientX - canvas.offsetLeft;
    currenty = e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        console.log("last positions -");
        console.log(lastx, lasty);
        ctx.moveTo(lastx, lasty);
        console.log("current positions -");
        console.log(currentx, currenty);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();
    
    lastx = currentx;
    lasty = currenty;

}

function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

canvas.addEventListener("mousedown", mymousedown); 

function mymousedown(e) { 

    color = document.getElementById("color").value; 

    linewidth = document.getElementById("linewidth").value; 

    mouseevent = "mousedown"; 

} 

 
 

canvas.addEventListener("mouseup", mymouseup); 

function mymouseup(e) { 

 
 

    mouseevent = "mouseup"; 

} 

 
 

canvas.addEventListener("mouseleave", mymouseleave); 

function mymouseleave(e) { 

 
 

    mouseevent = "mouseleave"; 

} 

 
 

canvas.addEventListener("mousemove", mymousemove); 

function mymousemove(e) { 

    currentx = e.clientX - canvas.offsetLeft; 

    currenty = e.clientY - canvas.offsetTop; 

 
 

    if (mouseevent == "mousedown") { 

        ctx.beginPath(); 

        ctx.strokeStyle = color; 

        ctx.lineWidth = linewidth; 

        console.log("last positions -"); 

        console.log(lastx, lasty); 

        ctx.moveTo(lastx, lasty); 

        console.log("current positions -"); 

        console.log(currentx, currenty); 

        ctx.lineTo(currentx, currenty); 

        ctx.stroke(); 

    } 

lastx=currentx; 

lasty=currenty; 

 
 

} 

 