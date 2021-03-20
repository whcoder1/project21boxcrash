var canvas;
var music;
var box1,box2,box3,box4,box5;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,600);
   
    //create 4 different surfaces
box1= createSprite(150,580,50,20);
box1.shapeColor="red";

box2=createSprite(250,580,50,20);
box2.shapeColor="blue";
box3=createSprite(350,580,50,20);
box3.shapeColor="green";
box4=createSprite(450,580,50,20);
box4.shapeColor="yellow";
    //create box sprite and give velocity
box5=createSprite(150,180,20,20);
box5.shapeColor="white";
box5.velocityX=9;
box5.velocityY=7;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box5.bounceOff(edges)
//box5.bounceOff(edges);
if(    isTouching(box5,box1)){
    
    box5.shapeColor=box1.shapeColor
    bounceOff(box5,box1)
    box5.velocityX=0;
    box5.velocityY=0;
    music.stop();

}
if(  isTouching(box5,box2) ){
    music.loop()
    box5.shapeColor=box2.shapeColor
    bounceOff(box5,box2)
    
}
if(  isTouching(box5,box3)){
    music.loop()
    box5.shapeColor=box3.shapeColor
    bounceOff(box5,box3)
   
}
if(  isTouching(box5,box4)){
    music.loop()
    box5.shapeColor=box4.shapeColor
    bounceOff(box5,box4) 
    
}

drawSprites();

    //add condition to check if box touching surface and make it box
}

function isTouching(p1,p2)
{
if(p1.x-p2.x<p1.width/2+p2.width/2 && 
    p2.x-p1.x<p1.width/2+p2.width/2 &&
     p1.y-p2.y<p1.height/2+p2.height/2 &&
      p2.y-p1.y<p1.height/2+p2.height/2)
{
    return true
}
else 
{
    return false
}
}
function bounceOff(p1,p2)
{
   if(p1.x-p2.x<p1.width/2+p2.width/2 && 
    p2.x-p1.x<p1.width/2+p2.width/2 )
   {
   p1.velocityX=p1.velocityX*-1;
   p2.velocityX=p2.velocityX*-1
   }
   if( 
   
    p1.y-p2.y<p1.height/2+p2.height/2 &&
      p2.y-p1.y<p1.height/2+p2.height/2)
      {
        p1.velocityY=p1.velocityY*-1;
        p2.velocityY=p2.velocityY*-1
      }
   
   
}