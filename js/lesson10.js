function drawX() {
    var canvas = document.getElementById("canvasExample");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(25, 25);
    ctx.lineTo(200, 150);
    ctx.moveTo(175, 25);
    ctx.lineTo(25, 150);
    ctx.strokeStyle = "#32CD32";
    ctx.stroke();
}
