class Player  {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  
  show(){
    fill(0);
    stroke(255);
    rect((width / 18 * this.x) + (height / 144), (3 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
    stroke(0);
  }
  
  move(direction){
    //direction is 1 == up,2 == right,3 == down,4 == left
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
    } else if(this.y > 13) {
      this.y = 13;
    } 
    
    //rock limits
    
    //romoving snow
    if(round((this.y * 100)) % 100 == 50){
      snowBlockArray[round(this.x)][floor(this.y)].fill = false;
      snowBlockArray[round(this.x)][floor(this.y)].down = false;
      snowBlockArray[round(this.x)][ceil(this.y)].fill = false;
      snowBlockArray[round(this.x)][ceil(this.y)].up = false;
    } else if(round((this.x * 100)) % 100 == 50){
      snowBlockArray[floor(this.x)][round(this.y)].fill = false;
      snowBlockArray[floor(this.x)][round(this.y)].right = false;
      snowBlockArray[ceil(this.x)][round(this.y)].fill = false;
      snowBlockArray[ceil(this.x)][round(this.y)].left = false;
    }
  }
}
