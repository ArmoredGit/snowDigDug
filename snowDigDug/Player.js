class Player  {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  
  show(){
    fill(0);
    rect((width / 18 * this.x) + (height / 144), (height / 18 * this.y) + (width / 144), (width / 18 * this.x) + (6 * width / 144), (height / 18 * this.y) + (6 * height / 144));
  }
  
  move(direction){
    
  }
}
