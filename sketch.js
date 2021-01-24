var ground;
var plinko = [];
var particles = [];
var divisions = [];
var divisionHeight = 200;

function setup() {
  createCanvas(450,650);

  engine = Matter.Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, outerWidth, 20)

  for(var k = 0; k <= width; k = k + 90){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 50; j <= width - 50; j = j + 50){
    plinko.push(new Plinko(j, 75));
  }
  for (var j = 24; j <= width - 10; j = j + 50){
    plinko.push(new Plinko(j, 175));
  }
  for (var j = 50; j <= width - 15; j = j + 50){
    plinko.push(new Plinko(j,275));
  }
  for (var j = 24; j <= width - 10; j = j + 50){
    plinko.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");  

  Matter.Engine.update(engine);
  ground.display();

  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  if(frameCount % 20 === 0){
    particles.push (new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  
  for (var k = 0; k < plinko.length; k++){
    plinko[k].display();
  }

  noFill();
  strokeWeight(10)
  stroke("cyan");
  rect(width/2, height/2, width, height)
}