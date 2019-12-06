class SmallSnow {
  constructor() {
    this.x = random(width / 9 * 7);
    this.y = random(-20,-10);
    this.speed=random(5)+3;
    this.size=random(5);
  }
  
  show(){
    noStroke();
    fill(255,255,255);
    ellipse(this.x,this.y,this.size,this.size);
  }
  
  move(){
    this.y+=this.speed;
    if (this.y>(width / 18 *17)){
      this.y=-10;
      this.x=random(width / 9 * 7);
      this.size=random(5);
    }
  }
}

class BigSnow {
  constructor() {
    this.x = random(width / 9 * 7);
    this.y = random(-20,-10);
    this.speed=random(5)+3;
    this.size=random(5)+5;
  }
  
  show(){
    noStroke();
    fill(255,255,255);
    ellipse(this.x,this.y,this.size,this.size);
  }
  
  move(){
    this.y+=this.speed;
    if (this.y>(width / 18 *17)){ // snowBlockArray[round(this.x)][ceil(this.y)].up == false
      this.y=-10;
      this.x=random(width / 9 * 7);
      this.size=random(5);
    }
  }
}
