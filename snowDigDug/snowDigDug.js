var snowflakeArray;
var snowBlockArray;
//https://i1.wp.com/www.edcollins.com/digdug/digdug-grid.gif image of dig dug game

function setup() {
  createCanvas(700,900);
  snowflakeArray = [];
  snowBlockArray = [];
  for(let i = 0; i < 14;i++){
    snowBlockArray[i] = [];
    for(let j = 0; i < 14;i++){
      snowBlockArray[i][j] = new SnowBlock(i,j);
    }
  }
  
  for(let i = 0; i < 14;i++){
    snowflakeArray[i] = new Snowflake(random(0,width),0);
  }
}


function draw() {
  
}
