var snowflakeArray;
var snowBlockArray;
//https://i1.wp.com/www.edcollins.com/digdug/digdug-grid.gif image of dig dug game

function setup() {
  createCanvas(900,900);
  snowflakeArray = [];
  snowBlockArray = [];
  for(let i = 0; i < 14;i++){
    snowBlockArray[i] = [];
    for(let j = 0; j < 14;j++){
      snowBlockArray[i][j] = new SnowBlock(i,j);
    }
  }
  
  //for(let i = 0; i < 14;i++){
   // snowflakeArray[i] = new Snowflake(random(0,width),0);
  //}
}


function draw() {
  background(31, 17, 120);
  fill(0);
  rect(14 * width / 18, 0, 4 * width / 18, height);
  for(let i = 0; i < 14;i++){
    for(let j = 0; j < 14;j++){
      snowBlockArray[i][j].show();
    }
  }
  
  //for(let i = 0; i < 14;i++){
    //snowflakeArray[i].show();
  //}
}
