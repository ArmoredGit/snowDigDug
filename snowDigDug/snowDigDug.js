var snowflakeArray;
var snowBlockArray;
var player1;
var moving;
var attacking;
var started;
var obs;
var localScore;
var pumpKills;
var rockKills;
var scoreBoard;
var timer;
var levels;
var playing;
var exp;
var rocksDropped;
var maze;

//https://i1.wp.com/www.edcollins.com/digdug/digdug-grid.gif image of dig dug game
//DigDug functions: http://www.edcollins.com/digdug/#:~:targetText=You%20score%20more%20points%20if,it%2C%20squashing%20it%20to%20death.

function setup() {
  createCanvas(900,900);
  background(31, 17, 120);
  levels = new LevelSelect(1);
  levels.resetLevel();
  playing = false;
}


function draw() {
  if(playing){
    background(31, 17, 120);
    noStroke();
    fill(0, 121, 163);
    rect(0, width / 18 *17, 800, 900-(width / 18 *17));
    timer++;
    textAlign(LEFT);
    let greeting = "Happy Holidays!";
    let x1 = 165;
    let y1 = 85;
    noStroke();
    textSize(height / 18);
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
      for(let j = 0; j < 15;j++){
        snowBlockArray[i][j].show();
      }
    }
    player1.show();
    if(attacking){
      player1.attack();
      moving = false;
    }
    if(keyCode==UP_ARROW && moving){
      player1.move(1);
      started=true;
      attacking = false;
    } else if (keyCode==DOWN_ARROW && moving){
      player1.move(3);
      started=true;
      attacking = false;
    } else if (keyCode==LEFT_ARROW && moving){
      player1.move(4);
      started=true;
      attacking = false;
    } else if (keyCode==RIGHT_ARROW && moving){
      player1.move(2);
      started=true;
      attacking = false;
    }
    
    scoreBoard.show();
    obs.forEach(x => x.show());
    obs.forEach(x => x.move());
    obs.forEach(x => x.kill());
    for(let i = obs.length-1; i >= 0; i--){
      if(obs[i].dead){
        obs.splice(i,1);
      }
    }
    
    //fruit -- this sort of works
    if(rocksDropped >= 2){
      fill("pink");
      stroke(255);
      rect((width / 18 * 6) + (height / 72), (2 * height / 18) + (height / 18 * 7) + (width / 72), (2 * width / 72), (2 * height / 72));
      noStroke();
      if(player1.x == 6 && player1.y == 7){
        rocksDropped = -10;
        scoreBoard.add(500);
      }
    }
    
    //ending the level
    let j = true;
    for(let i = obs.length-1; i >= 0; i--){
      if(obs[i].type != "rock"){
        j = false;
      }
    }
    if(j){
      levels.setLevel(levels.level + 1);
      levels.resetLevel();
    }
  } else {
    //animation / stall screen
    background(31, 17, 120);
    timer++;
    if((timer)%50<=25){
      fill(255,0,0);
    } else {
      fill(0,255,0);
    }
    if(timer < 500){
      textAlign(CENTER);
      textSize(height / 36);
      text("MERRY CHRISTMAS",0,2*height/9 + (height) - (timer * height / 500),width,height/3 + (height) - (timer * height / 500));
      textSize(height / 9);
      text("DIG DUG",0,3*height/9 + (height) - (timer * height / 500),width,4*height/9 + (height) - (timer * height / 500));
      textSize(height / 36);
      text("1UP      HIGH SCORE         ",0,height/18 + (height) - (timer * height / 500),width,height/9 + (height) - (timer * height / 500));
      textSize(height / 36);
      text("CHARACTER",0,4*height/9 + (height) - (timer * height / 500),width,5*height/9 + (height) - (timer * height / 500));
      textSize(height / 36);
      text("POOKA                   FYGAR",0,5*height/9 + (height) - (timer * height / 500),width,6*height/9 + (height) - (timer * height / 500));
      textSize(height / 36);
      fill("white");
      text("BASED ON A NAMCO GAME\nREPRODUCED BY M.LESKA & N.RUDD",0,6*height/9 + (height) - (timer * height / 500),width,7*height/9 + (height) - (timer * height / 500));
      textSize(height / 36);
      text("CREDIT  INF                                ROUND 1",0,17*height/18 + (height) - (timer * height / 500),width,8*height/9 + (height) - (timer * height / 500));
      text("\n[    press any key to begin    ]",0,2*height/9 + (height) - (timer * height / 500),width,height/3 + (height) - (timer * height / 500));
      text("\n00           000000             ",0,height/18 + (height) - (timer * height / 500),width,height/9 + (height) - (timer * height / 500));
      fill("red");
      rect((width / 18 * 6) + (height / 36), (height / 18 * 7) + (2 * height / 18) + (height) - (timer * height / 500), width / 18, height / 18);
      fill("green");
      rect((width / 18 * 10) + (height / 36), (height / 18 * 7) + (2 * height / 18) + (height) - (timer * height / 500), width / 18, height / 18);
      fill("orange");
      if((timer)%50<=25){
        rect((width / 18 * 11) + (height / 36), (height / 18 * 7) + (2 * height / 18) + (height) - (timer * height / 500), width / 18, height / 18);
      }
      fill("black");
      stroke("white");
      rect((width / 18 * 8) + (height / 36), (height / 18 * 7) + (2 * height / 18) + (height) - (timer * height / 500), width / 18, height / 18);
      noStroke();
    } else if(timer < 800){
      textAlign(CENTER);
      textSize(height / 36);
      text("MERRY CHRISTMAS",0,2*height/9,width,height/3);
      textSize(height / 9);
      text("DIG DUG",0,3*height/9,width,4*height/9);
      textSize(height / 36);
      text("1UP      HIGH SCORE         ",0,height/18,width,height/9);
      textSize(height / 36);
      text("CHARACTER",0,4*height/9,width,5*height/9);
      textSize(height / 36);
      text("POOKA                   FYGAR",0,5*height/9,width,6*height/9);
      textSize(height / 36);
      fill("white");
      text("BASED ON A NAMCO GAME\nREPRODUCED BY M.LESKA & N.RUDD",0,6*height/9,width,7*height/9);
      textSize(height / 36);
      text("CREDIT  INF                                ROUND " + levels.level,0,17*height/18,width,8*height/9);
      text("\n[    press any key to begin    ]",0,2*height/9,width,height/3);
      text("\n00           000000             ",0,height/18,width,height/9);
      fill("red");
      rect((width / 18 * 6) + (height / 36), (height / 18 * 7) + (2 * height / 18), width / 18, height / 18);
      fill("green");
      rect((width / 18 * 10) + (height / 36), (height / 18 * 7) + (2 * height / 18), width / 18, height / 18);
      fill("orange");
      if((timer)%50<=25){
        rect((width / 18 * 11) + (height / 36), (height / 18 * 7) + (2 * height / 18), width / 18, height / 18);
      }
      fill("black");
      stroke("white");
      rect((width / 18 * 8) + (height / 36), (height / 18 * 7) + (2 * height / 18), width / 18, height / 18);
      noStroke();
    } else if(timer < 1500){
      background(0);
      background(31, 17, 120);
      noStroke();
      fill(0, 121, 163);
      rect(0, width / 18 *17, 800, 900-(width / 18 *17));
      timer++;
      textAlign(LEFT);
      let greeting = "Happy Holidays!";
      let x1 = 165;
      let y1 = 85;
      noStroke();
      textSize(height / 18);
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
        for(let j = 0; j < 15;j++){
          snowBlockArray[i][j].show();
        }
      }
      player1.show();
      if(round(timer)%2 == 1 && timer < 950){
        player1.move(2);
      } else if(round(timer)%2 == 1 && timer < 1100){
        player1.move(3);
      } else if(round(timer)%2 == 1 && timer < 1250){
        player1.move(4);
      } else if(round(timer)%2 == 1 && timer < 1450){
        player1.move(1);
      } else if(round(timer)%2 == 1){
        player1.move(2);
      }
      scoreBoard.show();
      obs.forEach(x => x.show());
      obs.forEach(x => x.move());
      obs.forEach(x => x.kill());
      for(let i = obs.length-1; i >= 0; i--){
        if(obs[i].dead){
          obs.splice(i,1);
        }
      }
    } else {
      timer = 0;
      levels.resetLevel();
    }
  }
}

function mousePressed() {
  if(!playing){
    playing = true;
    levels.resetLevel();
  }
}

function mouseDragged() {
  started=true;
  if((mouseY - pmouseY) > height / 40 ){
    player1.move(3);
    attacking = false;
  } else if((pmouseY - mouseY) > height / 40 ){
    player1.move(1);
    attacking = false;
  } else if((mouseX - pmouseX) > width / 40 ){
    player1.move(2);
    attacking = false;
  } else if((pmouseX - mouseX) > width / 40 ){
    player1.move(4);
    attacking = false;
  }
}

function mousePressed() {
  if(!playing){
    playing = true;
    levels.resetLevel();
  } else {
    attacking = true;
  }
}

function mouseReleased() {
  attacking = false;
}

function keyPressed() {
  if(!playing){
    playing = true;
    levels.resetLevel();
  } else {
    moving=true;
    attacking = false;
  }
}

function keyReleased(){
  moving=false;
}
