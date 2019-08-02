var babyObj = function (){
  this.x
  this.y
  this.angle
  this.babyEye = new Image()
  this.babyBody = new Image()
  this.babyTail = new Image()

  this.babyTailTimer = 0
  this.babyTailCount = 0
}
babyObj.prototype.init = function(){



  this.x = canWidth * 0.5 - 50
  this.y = canHeight * 0.5 + 50
  this.angle = 0
  this.babyEye.src = "./img/babyEye0.png"
  this.babyBody.src = "./img/babyFade0.png"
  //this.babyTail.src = "./img/babyTail0.png"
}
babyObj.prototype.draw = function() {
  //baby tail
  this.babyTailTimer += deltaTime
  if(this.babyTailTimer > 50){
    this.babyTailCount = (this.babyTailCount + 1 ) % 8
    this.babyTailTimer %= 50
  }

  this.x = lerpDistance(mom.x,this.x,0.98)
  this.y = lerpDistance(mom.y,this.y,0.98)

  let deltaY = mom.y - this.y
  let deltaX = mom.x - this.x
  let beta = Math.atan2(deltaY,deltaX) + Math.PI
  this.angle = lerpAngle(beta,this.angle,0.6)

  ctx1.save()
  ctx1.translate(this.x,this.y)
  ctx1.rotate(this.angle)
  var babyTailCount = this.babyTailCount
  ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width * 0.5 + 23,-babyTail[babyTailCount].height *0.5)
  ctx1.drawImage(this.babyBody,-this.babyBody.width * 0.5,-this.babyBody.height *0.5)
  ctx1.drawImage(this.babyEye,-this.babyEye.width * 0.5,-this.babyEye.height *0.5)


  ctx1.restore()

}
