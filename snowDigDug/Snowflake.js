class Snow{
  constructor() {
    this.x = random(width / 9 * 7);
    this.y = random(-50,-10);
    this.speed=random(5)+3;
    this.size=random(10);
  }
  
  show(){
    noStroke();
    fill(255,255,255);
    ellipse(this.x,this.y,this.size,this.size);
  }
  
  move(){
    this.y+=this.speed;
    if(this.y > (3 * height / 18)){
      if (this.y>(height / 18 *17-3) || snowBlockArray[floor(this.x / (width / 18))][(this.y - (3 * height / 18)) / (height / 18)].up){
        this.y=-10;
        this.x=random(width / 9 * 7);
        this.size=random(10);
      }
    }
  }
}

class RedSnow{
  constructor() {
    this.x = random(width / 9 * 7);
    this.y = random(-50,-10);
    this.speed=random(5)+3;
    this.size=random(10);
  }
  
  show(){
    noStroke();
    fill(255,0,0);
    ellipse(this.x,this.y,this.size,this.size);
  }
  
  move(){
    this.y+=this.speed;
    if (this.y>(width / 18 *17-3)){ // snowBlockArray[round(this.x)][ceil(this.y)].up == false
      this.y=-10;
      this.x=random(width / 9 * 7);
      this.size=random(10);
    }
  }
}
class GreenSnow{
  constructor() {
    this.x = random(width / 9 * 7);
    this.y = random(-50,-10);
    this.speed=random(5)+3;
    this.size=random(10);
  }
  
  show(){
    noStroke();
    fill(0,255,0);
    ellipse(this.x,this.y,this.size,this.size);
  }
  
  move(){
    this.y+=this.speed;
    if (this.y>(width / 18 *17-3)){ // snowBlockArray[round(this.x)][ceil(this.y)].up == false
      this.y=-10;
      this.x=random(width / 9 * 7);
      this.size=random(10);
    }
  }
}
