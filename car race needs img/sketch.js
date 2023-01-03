var backgroundimage;
var road,roadImg;


function preload(){
   backgroundimage=loadImage("th.jpg") ;
   roadImg=loadImage("bg.jpg");
}
function setup(){
    createCanvas(800,800);
road=createSprite(500,700,1200,400);
road.addImage("racing",roadImg);
}
function draw(){
    background(backgroundimage);
    drawSprites();
    
}