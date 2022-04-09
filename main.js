
var mouse_events="empty";
var last_x,last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",mymousedone);

function mymousedone(e){
    color=document.getElementById("col").value;
    radius=document.getElementById("radi").value;
    width=document.getElementById("wid").value;
 mouse_events="mouseDown";   
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if (mouse_events=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_x,current_y,radius, 0 ,2 * Math.PI)
        ctx.stroke();

    }
    last_x=current_x;
    last_y=current_y;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e) {
    mouse_events="mouseUP";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouse_events="mouseLeave";
}