function Particle(x, y, w, h, c){
  this.c = c;
  this.r;
  this.g;
  this.b;
  this.rad = 10;
  this.position = createVector(x,y);
  this.velocity = p5.Vector.random2D();
  //console.log(this.velocity.heading())
  //size is controlled through
  this.w = w * 4;
  this.h = h * 4;
  //for(var i = 0; i < cat.length; i++){
  //this.cat[i] = cat[i];
  //this.rate[i] = rate[i];
  //}
//this.m = new PVector;
this.setColour = function(){
  //sets colour of the circle
  if(this.c == 1){
    this.r = 293;
    this.g = 46;
    this.b = 86;
  }else if(this.c == 2){
    this.r = 104;
    this.g = 37;
    this.b = 92;
  }else{
    this.r = 0;
    this.g = 70;
    this.b = 92;
  }
}

this.show = function(){
  this.setColour();
  noStroke();
  fill(this.r, this.g, this.b);
  ellipse(this.position.x, this.position.y, this.w, this.h);
}

this.moveVector = function(){
this.position.add(this.velocity);
//this.velocity.heading(2,1);
//this.position.add(this.acceleration);
if (this.position.x > width - 100) {
      this.position.x = 100;
    }
    else if (this.position.x < 100) {
      this.position.x = width - 100;
    }

    if (this.position.y > height - 100 ) {
      this.position.y = 100;
    }
    else if (this.position.y < 100) {
      this.position.y = height -100;
    }
 }


}
