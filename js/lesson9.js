function clicky() {
    document.getElementById("mouse").classList.toggle("hide");
    console.log("button");
}

function mouse() {
    document.getElementById("mouseDiv").classList.toggle("color");
    console.log("mouse");
}

//document.querySelector('main')addEventListener('touchstart', touchFunction);

// what happens when touchstart
function touchFunction(ev) {
    console.log(ev.touches);
    var pageX = ev.touches.pageY;
    var pageY = ev.touches.pageX;
    document.getElementById("outputDiv").innerHTML = "You are seeing this because you triggered a touch event!" + "X position: " + pageX + "Y position: " + pageY;
}
