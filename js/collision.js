//碰撞检测部分大鱼和果实的距离
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
//鱼妈妈和小鱼的碰撞检测
function momBabyCollison(){
  var l = calLength2(mom.x,mom.y,baby.x,baby.y)
  if(l < 900){
    baby.babyBodyCount = 0;
}}
