class SmallSnow {
  constructor() {
    this.x = random(900);
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
    if (this.y>900){
      this.y=-10;
      this.x=random(900);
      this.size=random(5);
    }
  }
}

class BigSnow {
  constructor() {
    this.x = random(900);
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
    if (this.y>900){
      this.y=-10;
      this.x=random(900);
      this.size=random(5);
    }
  }
}
