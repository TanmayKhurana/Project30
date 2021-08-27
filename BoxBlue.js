class BoxBlue{
    constructor(x,y,w,h){
        var r_options={
            isStatic:0
        }

        this.r = Bodies.rectangle(x,y,w,h, r_options);
        this.w = w
        this.h = h
 	    World.add(world, this.r);

    }
    display(){
        console.log(this.r.speed)
        if(this.r.speed<10){
            var pos = this.r.position
            push()
            translate(pos.x, pos.y)
            rectMode(CENTER)
        fill("blue");rect(0, 0, this.w, this.h)
        pop()
        }else{
            World.remove(world, this.r)
            this.visibility = this.visibility-10
        }
    }
}