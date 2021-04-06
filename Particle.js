class Particle{
    constructor(x, y, r) {
        var options = {
            'restitution':0.5
           
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r=r;
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
       
        pop();
      }
}