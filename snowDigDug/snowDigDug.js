var snowflakeArray;
var snowBlockArray;
var player1;
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
  
  for(let i = 0; i < 6;i++){
    snowBlockArray[6][i].fill = false;
    snowBlockArray[6][i].up = false;
    snowBlockArray[6][i].down = false;
  }
  
  snowBlockArray[6][6].fill = false;
  snowBlockArray[6][6].up = false;
  snowBlockArray[6][6].down = false;
  snowBlockArray[6][6].left = false;
  snowBlockArray[6][6].right = false;
  snowBlockArray[7][6].fill = false;
  snowBlockArray[7][6].left = false;
  snowBlockArray[5][6].fill = false;
  snowBlockArray[5][6].right = false;
  
  player1 = new Player(6,6);
  
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
