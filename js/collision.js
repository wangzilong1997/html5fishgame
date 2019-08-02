//碰撞检测部分
function momFruitsCollision() {
  for(var i = 0; i< fruit.num ; i++){
    if(fruit.alive[i]){
      //斜边的平方
      var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y)
      if (l < 900)
      {
        //被吃掉了
        fruit.dead(i)
      }
    }
  }
}
