class ScoreBoard  {
  //start with local score
  constructor() {
    //this.playerName = playerName;
    this.score=0;
    this.survivedTime=0;
    localScore=(500*pumpKills)+(1000*rockKills)+this.score;
}
  
  countScore(){
    this.score++;
    localScore=(500*pumpKills)+(1000*rockKills)+round(this.score/5);
  }
  
  add(amount){
    this.score += amount;
    localScore=(500*pumpKills)+(1000*rockKills)+round(this.score/5);
  }
  
  show(){
    fill(255,255,255);
    textAlign(CENTER);
    textSize(height/30);
    text("Scoreboard:", 8*width/9, height/22);
    textSize(height/45);
    text("Player Score:\n" + localScore, 8*width/9, height/11);
  }
}
