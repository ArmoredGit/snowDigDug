class SnowBlock {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.fill = true;
    this.up = true;
    this.down = true;
    this.left = true;
    this.right = true;
  }
  
  show(){
    if(this.y > 9){
      fill(85, 237, 237);
    } else if(this.y > 8){
      fill(171, 255, 255);
    } else if(this.y > 2){
      fill(214, 255, 255);
    } else{
      fill(255, 255, 255);
    }
    if(this.fill){
      rect(width / 18 * this.x, (height / 18 * this.y) + (3 * height / 18), width / 18, height / 18);
    }
  }
}
