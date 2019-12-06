class Obstacle {
  //Obstacles include the two enemy types and rocks
  //all Obstacles havwe a move and show
  //move includes wandering, running away, and chasing the player
  //
  constructor(type,x,y) {
    this.type = type;
    if(type == null){
      this.type = "rock";
    }
    this.x = x;
    this.y = y;
    this.special = false;
  }
  
  move(){
    if(this.type == "rock"){
      if(this.y < 13){
        if(!snowBlockArray[round(this.x)][(this.y + 1)].fill){
          this.special = true;
        }
      }
    }
  }
  
  show(){
    if(this.type == "rock"){
      fill("grey");
      if(this.special){
        fill(0);
      }
      rect((width / 18 * this.x) + (height / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
    }
  }
}
