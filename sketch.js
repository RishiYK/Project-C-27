const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1, backImage;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

var engine, world; 

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(650, 150, 400, 30)
	
	
	/*bob1 = new Bob(720, 500, 40)
	bob2 = new Bob(760, 500, 40)
	bob3 = new Bob(800, 500, 40)
	bob4 = new Bob(840, 500, 40)
	bob5 = new Bob(880, 500, 40)
	*/


	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	/*rope1 = new Rope(roof1.body, bob1.body, -160, 0)
	rope2 = new Rope(roof1.body, bob2.body, -80, 0)
	rope3 = new Rope(roof1.body, bob3.body, 0, 0)
	rope4 = new Rope(roof1.body, bob4.body, 80, 0)
	rope5 = new Rope(roof1.body, bob5.body, 160, 0)

	*/
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)




	Engine.run(engine);

}


function draw() {
	background("white")

	Engine.update(engine)

	roofObject.display();
	/*bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	*/ 

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
   
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -50, y: -45 })

	}
}

