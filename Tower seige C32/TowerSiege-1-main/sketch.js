const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground, ground2
var shooter,string
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31
var background_image
var Image_load=('Morning.png','Evening.png')

function preload(){
    Time_bg()
}
function setup (){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,500,300,10)
    ground2 = new Ground(1000,220,200,10)

    shooter = new Shooter(100,350,50,50)

    string = new String(shooter.body,{x:100,y:350})

    box = new Box(500,400,40,30)
    box2 = new Box(540,400,40,30)
    box3 = new Box(580,400,40,30)
    box4 = new Box(620,400,40,30)
    box5 = new Box(660,400,40,30)
    box6 = new Box(700,400,40,30)
    box7 = new Box(520,360,40,30)
    box8 = new Box(560,360,40,30)
    box9 = new Box(600,360,40,30)
    box10 = new Box(640,360,40,30)
    box11 = new Box(680,360,40,30)
    box12 = new Box(540,320,40,30)
    box13 = new Box(580,320,40,30)
    box14 = new Box(620,320,40,30)
    box15 = new Box(660,320,40,30)
    box16 = new Box(560,280,40,30)
    box17 = new Box(600,280,40,30)
    box18 = new Box(640,280,40,30)
    box19 = new Box(580,240,40,30)
    box20 = new Box(620,240,40,30)
    box21 = new Box(600,200,40,30)
    box22 = new Box(940,40,40,30)
    box23 = new Box(980,40,40,30)
    box24 = new Box(1020,40,40,30)
    box25 = new Box(1060,40,40,30)
    box26 = new Box(960,0,40,30)
    box27 = new Box(1000,0,40,30)
    box28 = new Box(1040,0,40,30)
    box29 = new Box(980,-40,40,30)
    box30 = new Box(1020,-40,40,30)
    box31 = new Box(1000,-80,40,30)
    
    
}

function draw(){
    if(background_image){
        background(background_image);
    }
    Engine.update(engine);

    ground.display()
    ground2.display()

    string.display()

    shooter.display()
    
    box.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box30.display()
    box31.display()


    
}

function mouseDragged(){
    Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    string.fly()
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.setPosition(shooter.body,{x:100,y:350})
        string.attach(shooter.body)
    }
}

async function Time_bg(){
    var APIanswer= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var APIanswerjson = await APIanswer.json()
    var Datetime = APIanswerjson.datetime
    console.log(Datetime)
    var hour = Datetime.slice(11,13)
    console.log(hour)
    if(hour>=06&&hour<=17){
       Image_load='Morning.png' 
    }
    else{
        Image_load='Evening.png' 
    }
    background_image=loadImage(Image_load)
}
