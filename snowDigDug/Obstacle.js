class Obstacle {
  //Obstacles include the two enemy types and rocks
  //all Obstacles havwe a move and show
  //move includes wandering, running away, and chasing the player
  //types are rock drg & puf
  constructor(type,x,y) {
    this.type = type;
    if(type == null){
      this.type = "rock";
    }
    this.x = x;
    this.y = y;
    this.special = false;
    this.tic = 0;
  }
  
  move(){
    if(this.type == "drg"){
      
    } else if(this.type == "puf"){
      
    } else if(this.type == "rock"){
      if(this.special == false){
        if(this.y < 13){
          if(!snowBlockArray[round(this.x)][round(this.y + 1)].fill && dist(this.x,(this.y + 1),player1.x,player1.y) > 0.9){
            this.special = true;
            this.tic = 0;
          }
        }
      } else if(this.special){
        if(this.tic > 21){//keep time odd or program breaks
          this.y+= 0.1;
          if(this.y < 13){
            if(round(this.y * 100) % 100 == 50){
              snowBlockArray[round(this.x)][floor(this.y)].down = false;
              snowBlockArray[round(this.x)][ceil(this.y)].up = false;
            }
            if(snowBlockArray[floor(this.x)][floor(this.y + 1)].fill){
              this.y = floor(this.y);
              this.special = false;
            }
          } else if(floor(this.y) == 13){
            this.special = false;
            this.y = 13;
          }
        } else {
          this.tic++;
          if(round(this.tic)%2 == 0){
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
  
  show(){
    if(this.type == "drg") {
      if(snowBlockArray[round(this.x)][round(this.y)].fill){
        fill("green");
        circle((width / 18 * this.x) + (height / 36), (3 * height / 18) + (height / 18 * this.y) + (width / 36), (3 * width / 144));
      } else {
        fill("green");
        rect((width / 18 * this.x) + (height / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
      }
    } else if(this.type == "puf") {
      if(snowBlockArray[round(this.x)][round(this.y)].fill){
        fill("red");
        circle((width / 18 * this.x) + (height / 36), (3 * height / 18) + (height / 18 * this.y) + (width / 36), (3 * width / 144));
      } else {
        fill("red");
        rect((width / 18 * this.x) + (height / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
      }
    } else if(this.type == "rock") {
      fill("grey");
      if(this.special){
        fill(255);
      }
      rect((width / 18 * this.x) + (height / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
      
    }
  }
}
