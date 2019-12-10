//still need to add pumpKills++; for if enemy is killed by player

class Player  {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.dir = 1;
  }
  
  show(){
    fill(0);
    stroke(255);
    rect((width / 18 * this.x) + (height / 144), (2 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
    stroke(0);
  }
  
  move(direction){
    //direction is 1 == up,2 == right,3 == down,4 == left
    
    //rock limits
    for(let i = obs.length - 1; i >= 0; i--){
      if(direction == 1){
        if(dist(obs[i].x,obs[i].y,this.x,this.y - 1) < 0.1 && !obs[i].special && obs[i].type == "rock"){
          direction = 3;
        }
      } else if(direction == 2){
        if(dist(obs[i].x,obs[i].y,this.x + 1,this.y) < 0.1 && !obs[i].special && obs[i].type == "rock"){
          direction = 4;
        }
      } else if(direction == 3){
        if(dist(obs[i].x,obs[i].y,this.x,this.y + 1) < 0.1 && !obs[i].special && obs[i].type == "rock"){
          direction = 1;
        }
      } else if(direction == 4){
        if(dist(obs[i].x,obs[i].y,this.x - 1,this.y) < 0.1 && !obs[i].special && obs[i].type == "rock"){
          direction = 2;
        }
      }
    }
    
    //actual movement
    if(direction == 1){
      if(round((this.x * 100)) % 100 == 0){
        this.y -= 0.1;
      } else {
        if((this.x * 100) % 100 > 50){
          this.x += 0.1;
        } else {
          this.x -= 0.1;
        }
      }
    } else if(direction == 2){
      if(round((this.y * 100)) % 100 == 0){
        this.x += 0.1;
      } else {
        if((this.y * 100) % 100 > 50){
          this.y += 0.1;
        } else {
          this.y -= 0.1;
        }
      }
    } else if(direction == 3){
      if(round((this.x * 100)) % 100 == 0){
        this.y += 0.1;
      } else {
        if((this.x * 100) % 100 > 50){
          this.x += 0.1;
        } else {
          this.x -= 0.1;
        }
      }
    } else if(direction == 4){
      if(round((this.y * 100)) % 100 == 0){
        this.x -= 0.1;
      } else {
        if((this.y * 100) % 100 > 50){
          this.y += 0.1;
        } else {
          this.y -= 0.1;
        }
      }
    }
    
    //edge limits 
    if(this.x > 13) {
      this.x = 13;
    } else if(this.x < 0) {
      this.x = 0;
    } else if(this.y < 0) {
      this.y = 0;
    } else if(this.y > 14) {
      this.y = 14;
    } 
    
    //romoving snow
    if(round((this.y * 100)) % 100 == 50){
      if(snowBlockArray[round(this.x)][floor(this.y)].fill){
        scoreBoard.add(50);
        exp.push({"x":round(this.x),"y":floor(this.y),});
      }
      if(snowBlockArray[round(this.x)][ceil(this.y)].fill){
        scoreBoard.add(50);
        exp.push({"x":round(this.x),"y":ceil(this.y),});
      }
      snowBlockArray[round(this.x)][floor(this.y)].fill = false;
      snowBlockArray[round(this.x)][floor(this.y)].down = false;
      snowBlockArray[round(this.x)][ceil(this.y)].fill = false;
      snowBlockArray[round(this.x)][ceil(this.y)].up = false;
    } else if(round((this.x * 100)) % 100 == 50){
      if(snowBlockArray[floor(this.x)][round(this.y)].fill){
        scoreBoard.add(50);
        exp.push({"x":floor(this.x),"y":round(this.y),});
      }
      if(snowBlockArray[ceil(this.x)][round(this.y)].fill){
        scoreBoard.add(50);
        exp.push({"x":ceil(this.x),"y":round(this.y),});
      }
      snowBlockArray[floor(this.x)][round(this.y)].fill = false;
      snowBlockArray[floor(this.x)][round(this.y)].right = false;
      snowBlockArray[ceil(this.x)][round(this.y)].fill = false;
      snowBlockArray[ceil(this.x)][round(this.y)].left = false;
    }
    
    this.dir = direction;
  }
  
  reset(){ //for when player is killed
    this.x = 6;
    this.y = 7;
    localScore=0;
  }
  
  attack(){ // air pump weapon
    //the temp pos of air pump weapon 
    let tx = this.x;
    let ty = this.y;
    while(obs.forEach(n => ((n.type != "drg" && n.type != "pop") || n.x != round(tx) || n.y != round(ty)))){
      if(this.dir == 1){
        ty--;
      } else if(this.dir == 2){
        tx++;
      } else if(this.dir == 3){
        ty++;
      } else if(this.dir == 4){
        tx--;
      }
    }
  }
}
