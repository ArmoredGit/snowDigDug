var snowflakeArray;
var snowBlockArray;
var player1;
var moving, started;
var obs;
var localScore, pumpKills, rockKills;
var scoreBoard;
var timer;
var levels;

//https://i1.wp.com/www.edcollins.com/digdug/digdug-grid.gif image of dig dug game
//DigDug functions: http://www.edcollins.com/digdug/#:~:targetText=You%20score%20more%20points%20if,it%2C%20squashing%20it%20to%20death.

function setup() {
  createCanvas(900,900);
  background(31, 17, 120);
  levels = new LevelSelect(2);
  levels.resetLevel();
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
