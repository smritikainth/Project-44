//all variables
var forest, forestimg;
var gem, gemimg;
var princess, princessimg;
var warriorimg;
var branches, branchesimg;



function preload() {

//loading gem gif
gemimg=loadAnimation("gem frames/frame0.gif","gem frames/frame1.gif","gem frames/frame2.gif","gem frames/frame3.gif","gem frames/frame4.gif","gem frames/frame5.gif","gem frames/frame6.gif","gem frames/frame7.gif");

//loading forest image
forestimg=loadImage("forest.jpg");

}


function setup() {
  createCanvas(1600,400);

//background sprite
forest=createSprite(750,200,10,10);
forest.addImage(forestimg);

//scale forest
forest.scale=2;
 
// creating gem sprite
 gem=createSprite(200,300,10,10)
 gem.addAnimation("gem",gemimg);

 //scale gem
 gem.scale= 0.1;
}



function draw() {
background("white");


drawSprites();
}