class Chain {
    constructor(o1, o2){
        var options = {
            bodyA: o1, 
            bodyB: o2,
            stiffness:0.04,
            length:10,  
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain);
    }
    display(){
    var pos = this.chain.bodyA.position;
    var pos1 = this.chain.bodyB.position;
        line(pos.x, pos.y,
             pos1.x, pos1.y);
    }
}