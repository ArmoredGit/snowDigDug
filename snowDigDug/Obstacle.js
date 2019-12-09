class Obstacle {
  //Obstacles include the two enemy types and rocks
  //all Obstacles havwe a move and show
  //move includes wandering, running away, and chasing the player
  //types are rock, drg, & puf
  //Still need to add rockKills++; when rock kills an enemy
  constructor(type, x, y) {
    this.type = type;
    if (type == null) {
      this.type = "rock";
    }
    this.x = x;
    this.y = y;
    this.special = false;
    this.tic = 0;
    this.dir = 2;
    this.id = random();
    this.dead = false;
  }

  move() {
    if (this.type == "drg" || this.type == "puf") {
      
      //edge limits 
      if(this.x > 13.12) {
        this.dir = 4;
      } else if(this.x < -0.12) {
        this.dir = 2;
      } else if(this.y < -0.12) {
        this.dir = 3;
      } else if(this.y > 13.12) {
        this.dir = 1;
      } 
      
      //changing direction
      if(round(this.y * 100) % 100 == 0 && round(this.x * 100) % 100 == 0){
        while(true){
          if(this.dir == 1 && snowBlockArray[round(this.x)][round(this.y)].up == true){
            this.dir++;
          } else if(this.dir == 3 && snowBlockArray[round(this.x)][round(this.y)].down == true){
            this.dir++;
          } else if(this.dir == 2 && snowBlockArray[round(this.x)][round(this.y)].right == true){
            this.dir++;
          } else if(this.dir == 4 && snowBlockArray[round(this.x)][round(this.y)].left == true){
            this.dir++;
          } else {
            break;
          }
          while(this.dir > 4){
            this.dir -= 4;
          }
        }
      }
      while(this.dir > 4){
        this.dir -= 4;
      }
      
      //direction is 1 == up,2 == right,3 == down,4 == left
      if (this.dir == 1) {
        if (round((this.x * 100)) % 100 == 0) {
          this.y -= 0.05;
        } else {
          if ((this.x * 100) % 100 > 50) {
            this.x += 0.1;
          } else {
            this.x -= 0.1;
          }
        }
      } else if (this.dir == 2) {
        if (round((this.y * 100)) % 100 == 0) {
          this.x += 0.05;
        } else {
          if ((this.y * 100) % 100 > 50) {
            this.y += 0.1;
          } else {
            this.y -= 0.1;
          }
        }
      } else if (this.dir == 3) {
        if (round((this.x * 100)) % 100 == 0) {
          this.y += 0.05;
        } else {
          if ((this.x * 100) % 100 > 50) {
            this.x += 0.1;
          } else {
            this.x -= 0.1;
          }
        }
      } else if (this.dir == 4) {
        if (round((this.y * 100)) % 100 == 0) {
          this.x -= 0.05;
        } else {
          if ((this.y * 100) % 100 > 50) {
            this.y += 0.1;
          } else {
            this.y -= 0.1;
          }
        }
      }
      
      //rock limits
      for(let i = obs.length - 1; i >= 0; i--){
        if(this.dir == 1){
          if(dist(obs[i].x,obs[i].y,this.x,this.y - 1) < 0.1 && !obs[i].special && obs[i].type == "rock"){
            this.dir = 3;
          }
        } else if(this.dir == 2){
          if(dist(obs[i].x,obs[i].y,this.x + 1,this.y) < 0.1 && !obs[i].special && obs[i].type == "rock"){
            this.dir = 4;
          }
        } else if(this.dir == 3){
          if(dist(obs[i].x,obs[i].y,this.x,this.y + 1) < 0.1 && !obs[i].special && obs[i].type == "rock"){
            this.dir = 1;
          }
        } else if(this.dir == 4){
          if(dist(obs[i].x,obs[i].y,this.x - 1,this.y) < 0.1 && !obs[i].special && obs[i].type == "rock"){
            this.dir = 2;
          }
        }
      }
      
      this.tic++; // tic increase 
      if(this.tic > 130){
        this.tic = 0;
      }
    } else if (this.type == "rock") { // rocks, yeah that
      if (this.special == false) {
        if (this.y < 13) {
          if (!snowBlockArray[round(this.x)][round(this.y + 1)].fill && dist(this.x, (this.y + 1), player1.x, player1.y) > 0.9) {
            this.special = true;
            this.tic = 0;
          }
        }
      } else if (this.special) {
        if (this.tic > 21) { //keep time odd or program breaks
          this.y+= 0.1;
          if (this.y < 13) {
            if (round(this.y * 100) % 100 == 50) {
              snowBlockArray[round(this.x)][floor(this.y)].down = false;
              snowBlockArray[round(this.x)][ceil(this.y)].up = false;
            }
            if (snowBlockArray[floor(this.x)][floor(this.y + 1)].fill) {
              this.y = floor(this.y);
              this.special = false;
              this.dead = true;
            }
          } else if (floor(this.y) == 13) {
            this.special = false;
            this.dead = true;
            this.y = 13;
          }
        } else {
          snowBlockArray[round(this.x)][round(this.y)].fill = false;
          this.tic++;
          if (round(this.tic)%2 == 0) {
            this.x+=0.02;
            this.y+=0.02;
          } else {
            this.x-=0.02;
            this.y-=0.02;
          }
        }
      }
    }
  }

  show() {
    if (this.type == "drg") {
      if (snowBlockArray[round(this.x)][round(this.y)].fill) {
        fill("green");
        circle((width / 18 * this.x) + (height / 36), (3 * height / 18) + (height / 18 * this.y) + (width / 36), (3 * width / 144));
      } else {
        fill("green");
        rect((width / 18 * this.x) + (height / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
      }
      if(this.tic > 100){
        fill("orange");
        if(this.dir == 1){
          rect((width / 18 * this.x) + (height / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144) - (6 * width / 144), (6 * width / 144), (6 * height / 144));
        } else if(this.dir == 2){
          rect((width / 18 * this.x) + (height / 144) + (6 * width / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
        } else if(this.dir == 3){
          rect((width / 18 * this.x) + (height / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144) + (6 * width / 144), (6 * width / 144), (6 * height / 144));
        } else if(this.dir == 4){
          rect((width / 18 * this.x) + (height / 144) - (6 * width / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
        }
      }
    } else if (this.type == "puf") {
      if (snowBlockArray[round(this.x)][round(this.y)].fill) {
        fill("red");
        circle((width / 18 * this.x) + (height / 36), (3 * height / 18) + (height / 18 * this.y) + (width / 36), (3 * width / 144));
      } else {
        fill("red");
        rect((width / 18 * this.x) + (height / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
      }
    } else if (this.type == "rock") {
      fill("grey");
      if (this.special) {
        fill(255);
      }
      rect((width / 18 * this.x) + (height / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
    }
  }

  kill() {//kills the player if they should be dead
    if (this.type == "drg") {
      if(dist(player1.x,player1.y,this.x,this.y) < 0.9){
        player1.reset();
      }
      if(this.tic > 100){
        if(this.dir == 1){
          if(dist(player1.x,player1.y,this.x,this.y - 1) < 0.9){
            player1.reset();
          }
        } else if(this.dir == 2){
          if(dist(player1.x,player1.y,this.x + 1,this.y) < 0.9){
            player1.reset();
          }
        } else if(this.dir == 3){
          if(dist(player1.x,player1.y,this.x,this.y + 1) < 0.9){
            player1.reset();
          }
        } else if(this.dir == 4){
          if(dist(player1.x,player1.y,this.x - 1,this.y) < 0.9){
            player1.reset();
          }
        }
      }
    } else if (this.type == "puf") {
      if(dist(player1.x,player1.y,this.x,this.y) < 0.9){
        player1.reset();
      }
    } else if (this.type == "rock") {
      if(dist(player1.x,player1.y,this.x,this.y) < 0.9 && this.special){
        player1.reset();
      }
      for(let i = obs.length - 1; i >= 0; i--){
        if(!obs[i].equals(this.id)){
          if(dist(obs[i].x,obs[i].y,this.x,this.y) < 0.9 && this.special){
            obs.splice(i,1);
          }
        }
      }
    }
  }
  
  equals(comp){
    return (this.id == comp);
  }
}
