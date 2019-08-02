var momObj = function (){
  this.x
  this.y
  this.angle
  this.bigEye = new Image();
  this.bigBody = new Image();
  this.bigTail = new Image();

  this.momTailTimer = 0;
  this.momTailCount = 0;
}
momObj.prototype.init = function() {

  this.x = canWidth * 0.5;
  this.y = canHeight * 0.5;
  this.bigEye.src = "./img/bigEye0.png"
  this.bigBody.src = "./img/bigSwim0.png"
  //this.bigTail.src = "./img/bigTail0.png"
  //mx my在鼠标未进入之前未定义 解决该问题
  mx = this.x;
  my = this.y;
  //旋转角度
  this.angle = 0;
}
momObj.prototype.draw = function() {
 //趋向坐标
  this.x = lerpDistance(mx,this.x,0.9)
  this.y = lerpDistance(my,this.y,0.9)

  //旋转角度
  var deltaY = my - this.y
  var deltaX = mx - this.x
  var beta = Math.atan2(deltaY, deltaX) + Math.PI;
  //趋向角度
  this.angle = lerpAngle(beta, this.angle ,0.6)

  //尾巴动画
  this.momTailTimer += deltaTime
  if(this.momTailTimer > 50) {
    this.momTailCount = (this.momTailCount + 1) % 8
    this.momTailTimer %= 50
  }
  ctx1.save();
  ctx1.translate(this.x,this.y)
  ctx1.rotate(this.angle)
  var momTailCount = this.momTailCount
  ctx1.drawImage(this.bigEye,-this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
  ctx1.drawImage(this.bigBody,-this.bigBody.width * 0.5,-this.bigBody.height * 0.5);
  ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width * 0.5 + 30,-momTail[momTailCount].height * 0.5);
  ctx1.restore();
}
