var dataObj = function (){
  this.double = 1
  this.friutNum = 0
}
dataObj.prototype.reset = function (){
  this.fruitNum = 0
  this.double = 1
}
dataObj.prototype.draw = function (){
  var w = can1.width
  var h = can1.height

  ctx1.fillStyle = "white"
  var double = this.double
  ctx1.fillText("num " + this.fruitNum, w * 0.5,h - 50)
  ctx1.fillText("double " + double, w * 0.5,h - 80)
}
