

// ctx.fillStyle = "blue";
// var rightPressed = false;
// var leftPressed = false;
//
// var sprX = 100;
// var sprY = 100;
//
//
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
//
// function keyDownHandler(e) {
//     if(e.key == "Right" || e.key == "ArrowRight") {
//       console.log(sprX, sprY);
//         rightPressed = true;
//         sprX += 7;
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft") {
//       console.log("Lefter button");
//         leftPressed = true;
//         sprX -= 7;
//     }
// }
// function keyUpHandler(e) {
//     if(e.key == "Right" || e.key == "ArrowRight") {
//         rightPressed = false;
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft") {
//         leftPressed = false;
//     }
// }
//
//
// function renderSprAnim() {
//   spr_image = new Image();
//   spr_image.src = './legi/Combo Proto-00-00.png';
//   spr_image.onload = function(){
//     ctx.drawImage(spr_image, sprX, sprY);
//   }
//
//
// }
//
//
// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.beginPath();//ADD THIS LINE!<<<<<<<<<<<<<
//
//   renderSprAnim();
//   // window.requestAnimationFrame(draw);
// }
//
// // draw();
// setInterval(draw, 10);
