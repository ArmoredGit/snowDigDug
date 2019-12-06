var snowflakeArray;
var snowBlockArray;
var player1;
var moving;
//https://i1.wp.com/www.edcollins.com/digdug/digdug-grid.gif image of dig dug game
//DigDug functions: http://www.edcollins.com/digdug/#:~:targetText=You%20score%20more%20points%20if,it%2C%20squashing%20it%20to%20death.

function setup() {
  createCanvas(900,900);
  snowflakeArray = [];
  snowBlockArray = [];
  for(let i = 0; i < 100;i++){
    snowflakeArray[i]= new SmallSnow();
  }
  for(let i = 100; i < 200;i++){
    snowflakeArray[i]= new BigSnow();
  }
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
  
  moving=false;
}


function draw() {
  background(31, 17, 120);
  for(let i = 0; i < 200;i++){
    snowflakeArray[i].show();
    snowflakeArray[i].move();
  }
  noStroke();
  fill(0);
  rect(14 * width / 18, 0, 4 * width / 18, height);
  for(let i = 0; i < 14;i++){
    for(let j = 0; j < 14;j++){
      snowBlockArray[i][j].show();
    }
  }
  player1.show();
  if(keyCode==UP_ARROW && moving){
    player1.move(1);
  } else if (keyCode==DOWN_ARROW && moving){
    player1.move(3);
  } else if (keyCode==LEFT_ARROW && moving){
    player1.move(4);
  } else if (keyCode==RIGHT_ARROW && moving){
    player1.move(2);
  }
    
}

function mouseDragged() {
  //(mouseY - pmouseY)
  //(mouseX - pmouseX)
  if((mouseY - pmouseY) > height / 40 ){
    player1.move(3);
  } else if((pmouseY - mouseY) > height / 40 ){
    player1.move(1);
  } else if((mouseX - pmouseX) > width / 40 ){
    player1.move(2);
  } else if((pmouseX - mouseX) > width / 40 ){
    player1.move(4);
  }
}

function keyPressed() {
  moving=true;
}

function keyReleased(){
  moving=false;
}
