  
class Rope {
    constructor(body1, body2, OffsetX , OffsetY){
        this.OffsetX = OffsetX;
        this.OffsetY = OffsetY;
        var options ={
            bodyA : body1,
            bodyB: body2,
            length:300,
           pointB:{x: OffsetX, y: OffsetY } 
    
        }
    this.rope = Constraint.create(options)
    World.add(world, this.rope);
    
    }
    display(){
        var point1= this.rope.bodyA.position
        var point2 = this.rope.bodyB.position
        strokeWeight(4);
        var roofAttachPointX = point1.x 
        var roofAttachPointY = point1.y 

        var roofAttach2PointX = point2.x + this.OffsetX
        var roofAttach2PointY = point2.y + this.OffsetY

    line(roofAttachPointX, roofAttachPointY, roofAttach2PointX, roofAttach2PointY)
    
    }
    }