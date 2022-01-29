class ground{

constructor(x, y, w, h){
this.x = x;
this.y = y;
this.w = y;
this.h = h;

var ground_options={
isStatic: true
}

this.body = Bodies.rectangle(x, y, w, h, ground_options);
World.add(world, this.body);

}

display(){
    var pos = this.body.position;
    push();
    translate(position.x, position.y);
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
}

}