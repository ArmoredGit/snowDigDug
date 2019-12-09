var snowflakeArray;
var snowBlockArray;
var player1;
var moving, started;
var obs;
var localScore, pumpKills, rockKills;
var scoreBoard;
var timer;

//https://i1.wp.com/www.edcollins.com/digdug/digdug-grid.gif image of dig dug game
//DigDug functions: http://www.edcollins.com/digdug/#:~:targetText=You%20score%20more%20points%20if,it%2C%20squashing%20it%20to%20death.

function setup() {
  createCanvas(900,900);
  timer=0;
  scoreBoard=new ScoreBoard();
  snowflakeArray = [];
  snowBlockArray = [];
  obs = [];
  localScore=0;
  pumpKills=0;
  rockKills=0;
  started=false;
  for(let i = 0; i < 200;i++){
    snowflakeArray[i]= new Snow();
  }
  for(let i = 200; i<300; i++){
    snowflakeArray[i]= new RedSnow();
  }
  for(let i = 300; i<400; i++){
    snowflakeArray[i]= new GreenSnow();
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
  snowBlockArray[6][6].left = false;
  snowBlockArray[6][6].right = false;
  snowBlockArray[7][6].fill = false;
  snowBlockArray[7][6].left = false;
  snowBlockArray[5][6].fill = false;
  snowBlockArray[5][6].right = false;
  
  player1 = new Player(6,6);
  
  moving=false;
  
  //level 1 code
  snowBlockArray[1][1].fill = false;
  snowBlockArray[1][1].down = false;
  snowBlockArray[1][2].up = false;
  snowBlockArray[1][2].fill = false;
  snowBlockArray[1][2].down = false;
  snowBlockArray[1][3].up = false;
  snowBlockArray[1][3].fill = false;
  snowBlockArray[1][3].down = false;
  snowBlockArray[1][4].up = false;
  snowBlockArray[1][4].fill = false;
  snowBlockArray[1][4].down = false;
  snowBlockArray[1][5].up = false;
  snowBlockArray[1][5].fill = false;
  
  snowBlockArray[9][1].fill = false;
  snowBlockArray[9][1].right = false;
  snowBlockArray[10][1].left = false;
  snowBlockArray[10][1].fill = false;
  snowBlockArray[10][1].right = false;
  snowBlockArray[11][1].left = false;
  snowBlockArray[11][1].fill = false;
  snowBlockArray[11][1].right = false;
  snowBlockArray[12][1].left = false;
  snowBlockArray[12][1].fill = false;
  
  snowBlockArray[2][9].fill = false;
  snowBlockArray[2][9].right = false;
  snowBlockArray[3][9].left = false;
  snowBlockArray[3][9].fill = false;
  snowBlockArray[3][9].right = false;
  snowBlockArray[4][9].left = false;
  snowBlockArray[4][9].fill = false;
  snowBlockArray[4][9].right = false;
  snowBlockArray[5][9].left = false;
  snowBlockArray[5][9].fill = false;
  
  
  snowBlockArray[9][8].fill = false;
  snowBlockArray[9][8].down = false;
  snowBlockArray[9][9].up = false;
  snowBlockArray[9][9].fill = false;
  snowBlockArray[9][9].down = false;
  snowBlockArray[9][10].up = false;
  snowBlockArray[9][10].fill = false;
  snowBlockArray[9][10].down = false;
  snowBlockArray[9][11].up = false;
  snowBlockArray[9][11].fill = false;
  snowBlockArray[9][11].down = false;
  snowBlockArray[9][12].up = false;
  snowBlockArray[9][12].fill = false;
  
  obs.push(new Obstacle("rock",4,2));
  obs.push(new Obstacle("rock",10,8));
  obs.push(new Obstacle("rock",3,10));
  obs.push(new Obstacle("puf",1,2));
  obs.push(new Obstacle("puf",10,1));
  obs.push(new Obstacle("puf",9,10));
  obs.push(new Obstacle("drg",4,9));
  //end level 1 code
}


function draw() {
  background(31, 17, 120);
  noStroke();
  fill(0, 121, 163);
  rect(0, width / 18 *17, 800, 900-(width / 18 *17));
  timer++;
  textAlign(LEFT);
  var greeting = "Happy Holidays!";
  var x1 = 165;
  var y1 = 85;
  noStroke();
  textSize(50);
  if((timer)%50<=5){
    fill(255,0,0);
  } else {
    fill(0,255,0);
  }
  text(greeting, x1, y1);
  if((timer)%50<=5){
    fill(0,255,0);
  } else {
    fill(255,0,0);
  }
  text(greeting, x1+4, y1+4);
  for(let i = 0; i < 400;i++){
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
    started=true;
  } else if (keyCode==DOWN_ARROW && moving){
    player1.move(3);
    started=true;
  } else if (keyCode==LEFT_ARROW && moving){
    player1.move(4);
    started=true;
  } else if (keyCode==RIGHT_ARROW && moving){
    player1.move(2);
    started=true;
  }
  scoreBoard.show();
  if(started){
    scoreBoard.countScore();
  }
  obs.forEach(x => x.show());
  obs.forEach(x => x.move());
  obs.forEach(x => x.kill());
  for(let i = obs.length-1; i >= 0; i--){
    if(obs[i].dead){
      obs.splice(i,1);
    }
  }
}

function mouseDragged() {
  started=true;
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
