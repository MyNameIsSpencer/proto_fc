
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var bg = new Image();
bg.style.backGround = "brown";
bg.style.width = `${canvas.width}`;
bg.style.height = `${canvas.height}`;
console.log(canvas.height);
console.log(bg.style.width);

var sprX = 100;
var sprY = 100;
var walkValue = 2;
var sprAnimCounter = 0;

var stun = false;
var attacking = false;
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

var orientation = 'right';





document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// press atk, atk = true, (in renderSprAnim) if atk == true => renderAtk {if sprAnimCounter < 801, render atk sprite; else atk = false}
function keyDownHandler(e) {
  // if atk pressed, atk one time
  // if(e.key == "a" || e.key == "KeyA") {
  //
  // }

  if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  } else if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }

  if(e.key == "Up" || e.key == "ArrowUp") {
    upPressed = true;
  } else if(e.key == "Down" || e.key == "ArrowDown") {
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  } else if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }

  if(e.key == "Up" || e.key == "ArrowUp") {
    upPressed = false;
  } else if(e.key == "Down" || e.key == "ArrowDown") {
    downPressed = false;
  }
}


function renderSprAnim() {
  // if(sprStun == true) {
  //   renderStun();
  // } else if() {
  //   renderAttack();
  // } else if() {
  //   renderShove();
  // } else if() {
  //   renderDefence();
  // } else if() {
  if (leftPressed || rightPressed || upPressed || downPressed) {
    renderWalk();
  } else {
    renderStand();
  } //else if() {
  //   renderDeath();
  // }
}


function changeImages (times, images) {
  let sprImage = new Image();
console.log(sprAnimCounter);

  if (sprAnimCounter >= times[times.length - 1]) {
    sprAnimCounter = 0;
  }

  for ( i = 0; i < times.length; i++) {
    if (sprAnimCounter < times[i]) {
      sprImage.src = images[i];
      sprAnimCounter += 10;
      break;
    }
  }

  sprImage.onload = function(){
    ctx.drawImage(sprImage, sprX, sprY);
  }
}

function renderWalk () {
  let walkLeftImages = ['./legi/Combo Proto-00-01.png', './legi/Combo Proto-13-00.png'];
  let walkRightImages = ['./legi/Combo Proto-11-00.png', './legi/Combo Proto-12-00.png'];
  let times = [501, 1001];
  let walkImages;

  if (leftPressed && upPressed) {
    sprX -= walkValue;
    sprY -= walkValue;
    walkImages = walkLeftImages;
  } else if (leftPressed && downPressed) {
    sprX -= walkValue;
    sprY += walkValue;
    walkImages = walkLeftImages;
  } else if (rightPressed && upPressed) {
    sprX += walkValue;
    sprY -= walkValue;
    walkImages = walkRightImages;
  } else if (rightPressed && downPressed) {
    sprX += walkValue;
    sprY += walkValue;
    walkImages = walkRightImages;
  } else if (leftPressed) {
    sprX -= walkValue;
    walkImages = walkLeftImages;
  } else if (rightPressed) {
    sprX += walkValue;
    walkImages = walkRightImages;
  } else if (upPressed) {
    sprY -= walkValue;
    walkImages = walkRightImages;
  } else if (downPressed) {
    sprY += walkValue;
    walkImages = walkLeftImages;
  }

  changeImages(times, walkImages);
}


function renderStand() {
  let sprImage = new Image();
  sprImage.src = './legi/Combo Proto-01-01.png';
  sprImage.onload = function(){
    ctx.drawImage(sprImage, sprX, sprY);
  }
}


// if press left sprX decrease and use left walk, if press right sprX increase right walk
// if up sprY decrease(goes up) use right walk, but up and left use left walk
// if straight down use sprY increase(goes down) use left walk






function draw() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bg,0,0);

  renderSprAnim();
}


setInterval(draw, 10);
