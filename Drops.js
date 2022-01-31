class Drops {
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            friction: 0.1
        }
        this.r=r;
        this.rain = Bodies.circle(x,y,5,options);
     
       // this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.rain);

    }
    display() {
           
        var maxDrops = 100;
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

        //var pos = this.body.position;
       // var angle = this.body.angle;

        push();
       // translate(pos.x, pos.y);
       // rotate(angle);
        //imageMode(CENTER);
       // noStroke();
       // fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

};