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
  
  show(){
    fill(255,255,255);
    textAlign(CENTER);
    textSize(30);
    text("Scoreboard:", 800, 40);
    textSize(20);
    text("Player Score:\n" + localScore, 800, 80);
  }
}
