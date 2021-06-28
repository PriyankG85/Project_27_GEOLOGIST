class Hammer {
    constructor(x,y)
    {
        var option={
            'restitution' : 0.5,
            'friction': 1.0,
            'density': 2
        }
        this.Hammer=Bodies.rectangle(x,y,100,30,option);
        World.add(world,this.Hammer);
        
        this.width=100;
        this.height=30;
    }

    display()
    {
        var pos=this.Hammer.position;
        var angle=this.Hammer.angle;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();     
    }
}