//碰撞检测部分大鱼和果实的距离
function momFruitsCollision() {
  if(!data.gameOver){
    for(var i = 0; i< fruit.num ; i++){
      if(fruit.alive[i]){
        //斜边的平方
        var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y)
        if (l < 900)
        {
          //被吃掉了
          fruit.dead(i)
          data.fruitNum++
          mom.momBodyCount++
          //console.log(mom.mombodyCount)
          if(mom.momBodyCount > 7){
            mom.momBodyCount = 7
          }
          if(fruit.fruitType[i] == "blue")
          {
            data.double = 2
          }
          wave.born(fruit.x[i],fruit.y[i])
        }
      }
    }
  }
}
//鱼妈妈和小鱼的碰撞检测
function momBabyCollison(){
  if(data.fruitNum > 0 && !data.gameOver){
    var l = calLength2(mom.x,mom.y,baby.x,baby.y)
    if(l < 900){
      baby.babyBodyCount = 0
      //data.reset()
      mom.momBodyCount = 0
      //score updata
      data.addScore()
      //draw halo
      halo.born(baby.x,baby.y)
   }
  }
}
