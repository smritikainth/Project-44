//all variables
var forest, forestimg;
var gem, gemimg;
var princess, princessimg;
var warriorimg;
var branches, branchesimg;



function preload() {

//loading gem gif
gemimg=loadAnimation("frame0.gif","frame1.gif","frame2.gif","frame3.gif","frame4.gif","frame5.gif","frame6.gif","frame7.gif");

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
