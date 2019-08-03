var can1;
var can2;

var ctx1;
var ctx2;
var canWidth;
var canHeight;

var lastTime;
var deltaTime;
var ane;
var fruit;
var mom;
var baby;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];

var data;
var momBodyOra = [];
var momBodyBlue = [];

var bgPic = new Image();


document.body.onload = game;

function game(){
  init();
  lastTime = Date.now()
  deltaTime = 0;
  gameloop();
}

function init() {
  can1 = document.getElementById('canvas1');
  ctx1 = can1.getContext("2d");
  can2 = document.getElementById('canvas2');
  ctx2 = can2.getContext("2d");

  can1.addEventListener('mousemove',onMouseMove,false);

  bgPic.src = './img/background.jpg'

  canWidth = can1.width
  canHeight = can1.height

  ane = new aneObj();
  ane.init()
  fruit = new fruitObj();
  fruit.init()

  mom = new momObj()
  mom.init()

  baby = new babyObj()
  baby.init()
  for(var i = 0; i < 8; i++){
    babyTail[i] = new Image();
    babyTail[i].src = "./img/babyTail" + i + ".png"
  }
  for(var i = 0; i < 2; i++){
    babyEye[i] = new Image()
    babyEye[i].src = "./img/babyEye" + i + ".png"
  }
  for(var i = 0; i < 20;i++){
    babyBody[i] = new Image()
    babyBody[i].src = "./img/babyFade" + i + ".png"
  }
  for(var i = 0; i < 8;i++){
    momTail[i] = new Image()
    momTail[i].src = "./img/bigTail" + i +".png"
  }
  for(var i = 0;i < 2;i++){
    momEye[i] = new Image()
    momEye[i].src = "./img/bigEye" + i + ".png"
  }

  data = new dataObj();
  //不知道为啥 先是undefind  然后是nan 所以加的这个
  data.fruitNum = 0
  for(var i = 0; i < 8;i++){
    momBodyOra[i] = new Image()
    momBodyBlue[i] = new Image()
    momBodyOra[i].src = "./img/bigSwim" + i + ".png"
    momBodyBlue[i].src = "./img/bigSwimBlue" + i + ".png"
  }
}

function gameloop() {
  window.requestAnimFrame(gameloop);//智能计算刷新时间
  var now = Date.now()
  deltaTime = now - lastTime
  lastTime = now
  //解决果实因两帧时间长而变太大
  if(deltaTime > 40) {
    deltaTime = 40;
  }
  //console.log(deltaTime)
  drawBackground()
  ane.draw()
  fruitMonitor();
  fruit.draw();
  ctx1.clearRect(0,0,canWidth,canHeight);
  mom.draw();
  momFruitsCollision();
  momBabyCollison();
  baby.draw();
  data.draw()
}
function onMouseMove(e) {
  if(e.offSetX || e.layerX){
    mx = e.offSetX == undefined ? e.layerX : e.offSetX;
    my = e.offSetY == undefined ? e.layerY : e.offSetY;
  }
}
