const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var divisions;
var plinkos;
var divHeight=300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    ground= new Ground(240,380,630,10);
    d1= new Division(0,height-divHeight/2,10,2000);
    d2= new Division(80,height-divHeight/2,10,divHeight);
    d3= new Division(160,height-divHeight/2,10,divHeight);
    d4= new Division(240,height-divHeight/2,10,divHeight);
    d5= new Division(320,height-divHeight/2,10,divHeight);
    d6= new Division(400,height-divHeight/2,10,divHeight);
    d7= new Division(480,height-divHeight/2,10,2000);
    p1= new Plinko(40,125,10,10);
    p2= new Plinko(90,125,10,10);
    p3= new Plinko(140,125,10,10);
    p4= new Plinko(190,125,10,10);
    p5= new Plinko(240,125,10,10);
    p6= new Plinko(290,125,10,10);
    p7= new Plinko(340,125,10,10);
    p8= new Plinko(390,125,10,10);
    p9= new Plinko(440,125,10,10);
    p10= new Plinko(15,225,10,10);
    p11= new Plinko(65,225,10,10);
    p12= new Plinko(115,225,10,10);
    p13= new Plinko(165,225,10,10);
    p14= new Plinko(215,225,10,10);
    p15= new Plinko(265,225,10,10);
    p16= new Plinko(315,225,10,10);
    p17= new Plinko(365,225,10,10);
    p18= new Plinko(415,225,10,10);
    p19= new Plinko(465,225,10,10);
    p20= new Plinko(40,325,10,10);
    p21= new Plinko(90,325,10,10);
    p22= new Plinko(140,325,10,10);
    p23= new Plinko(190,325,10,10);
    p24= new Plinko(240,325,10,10);
    p25= new Plinko(290,325,10,10);
    p26= new Plinko(340,325,10,10);
    p27= new Plinko(390,325,10,10);
    p28= new Plinko(440,325,10,10);
    p29= new Plinko(15,425,10,10);
    p30= new Plinko(65,425,10,10);
    p31= new Plinko(115,425,10,10);
    p32= new Plinko(165,425,10,10);
    p33= new Plinko(215,425,10,10);
    p34= new Plinko(265,425,10,10);
    p35= new Plinko(315,425,10,10);
    p36= new Plinko(365,425,10,10);
    p37= new Plinko(415,425,10,10);
    p38= new Plinko(465,425,10,10);
    
    
    
}

function draw() {
  background(0);
  Engine.update(engine);  
  
 
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();
  p11.display();
  p12.display();
  p13.display();
  p15.display();
  p14.display();
  p16.display();
  p17.display();
  p18.display();
  p19.display();
  p20.display();
  p21.display();
  p22.display();
  p23.display();
  p24.display();
  p25.display();
  p26.display();
  p27.display();
  p28.display();
  p29.display();
  p30.display();
  p30.display();
  p31.display();
  p32.display();
  p33.display();
  p34.display();
  p35.display();
  p36.display();
  p37.display();
  p38.display();
 
  if(frameCount%30===0){
    particles.push(new Particle(random(120,160),10,10));
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display()
  }
  drawSprites();
}
