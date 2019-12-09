class LevelSelect{
  constructor(level) {
    this.level = level;
  }
  
  setLevel(level){
    this.level = level;
  }
  
  resetLevel(){
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
}
