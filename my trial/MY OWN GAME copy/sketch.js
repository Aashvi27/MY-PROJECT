var shape1, shape2,shape3,shape4, shape5, shape6;
var hurdle1,hurdle2,hurdle3,hurdle4,hurdle5;
var basket, basketimg;
var ground;


function preload()
{

basketimg = loadImage("PIC/basket.png");
hurdle1 = loadImage("PIC/O1.png");
hurdle2 = loadImage("PIC/O2.png");
hurdle3 = loadImage("PIC/O3.png");
hurdle4 = loadImage("PIC/O4.png");
hurdle5 = loadImage("PIC/O5.png");

shape1 = loadImage("PIC/S1.png");
shape2 = loadImage("PIC/S2.png");
shape3 = loadImage("PIC/S3.png");
shape4 = loadImage("PIC/S4.png");
shape5 = loadImage("PIC/S5.png");
shape6 = loadImage("PIC/S6.png");

}

function setup()
 {
  createCanvas(1400,650);
  
  
 
}


function draw() 
{
 background(255);

  
 
  

  
  drawSprites();
 
}

