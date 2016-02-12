var img;
var t = 0;

function setup() {
  createCanvas(1200,700)
  
  var x =random(0,1200)
  var y =random(0,350)
  img = loadImage('forest2.png')
}

function draw() {
  background(0)



 
                                             ////light
 noStroke()
 fill(255,255,0,100)
 ellipse(mouseX,mouseY,300,300)
 fill(255,255,0,70)
 ellipse(mouseX,mouseY,400,400)
 
 
 
 

 
  
  
 
                             /////////////////////////FOREST
  
  //tree 1
  
   stroke(0)
 strokeWeight(30)
 fill(0)
curve(0,1,0,24,65,100,200,100)
  
  fill(0)
 quad(60,700,60,0,150,0,150,700) 
 noFill()
 stroke(0)
  strokeWeight(50)
 curve(200,552,125,603,200,720,359,600)
 curve(0,552,85,603,0,750,-10,600)
 

 
 strokeWeight(20)
 curve(260,397,140,230,235,150,500,400 )
 curve(260,397,140,286,235,150,500,400 )
 strokeWeight(10)
 line(182,173,206,170)
 
 strokeWeight(50)
 
 
 //tree2
 push()
  translate(200,0)
  fill(0)
 rect(60,0,20,700) 
 noFill()
 stroke(0)
  strokeWeight(40)
 curve(200,552,55,603,150,720,359,600)
 curve(0,552,85,603,0,750,-10,600)
 pop()
 
 strokeWeight(20)
curve(150,0,180,0,265,100,300,100)
curve(150,0,180,0,265,80,300,100)

curve(150,0,180,0,265,100,300,100)
curve(450,200,300,260,365,176,400,180)
  
  
 //tree 3
 push()
  translate(400,0)
  fill(0)
 quad(60,700,60,0,150,0,150,700) 
 noFill()
 stroke(0)
  strokeWeight(50)
 curve(200,552,125,603,200,720,359,600)
 curve(0,552,85,603,0,750,-10,600)
 
 strokeWeight(20)
 curve(450,200,300,260,365,176,400,180)
 
 
 
  strokeWeight(20)
curve(150,0,180,0,265,100,300,100)
curve(150,0,180,0,265,80,300,100)

curve(150,0,180,0,265,100,300,100)
curve(450,200,300,260,365,176,400,180)
 pop()
 
 
 
//tree4
 push()
  translate(600,0)
  fill(0)
 rect(55,0,40,700) 
 noFill()
 stroke(0)
  strokeWeight(20)
 curve(200,552,55,603,150,720,359,600)
 curve(0,552,85,603,0,750,-10,600)
 pop()
 
 //tree 5
 push()
  translate(900,0)
  fill(0)
 quad(60,700,60,0,150,0,150,700) 
 noFill()
 stroke(0)
  strokeWeight(50)
 curve(200,552,125,603,200,720,359,600)
 curve(0,552,85,603,0,750,-10,600)
 
 
 pop()
 
  //tree 1
   push()
  translate(1100,0)
  fill(0)
 quad(60,700,60,0,150,0,150,700) 
 noFill()
 stroke(0)
  strokeWeight(50)
 curve(200,552,125,603,200,720,359,600)
 curve(0,552,85,603,0,750,-10,600)
  pop()
  
 
  
  
  noStroke()
   fill(255,255,255);
 
  fill(0);
  image(img,0,0);
  t = t+1;
  
  
   //EYES 
  if(t%100<90)
 
    fill(255,255,0);
  else
    fill(0);

  ellipse(385,30,10,10)
  ellipse(405,30,10,10)
  fill(0);
   ellipse(385,30,5,5)
  ellipse(405,30,5,5)
  
  
  //bat eyes
   if(t%100<25)
    fill(255,255,0);
    else
    fill(0);
   ellipse(589,293,5,5)
  ellipse(596,293,5,5)
  fill(0);
   ellipse(589,293,2,2)
  ellipse(596,293,2,2)
  
 //deer eyes
   if(t%100<70)
    fill(255,255,0);
    else
    fill(0);
   ellipse(365,351,10,5)
  ellipse(389,351,10,5)
  fill(0);
   ellipse(365,351,5,5)
  ellipse(389,351,5,5) 
  
  
   //mouse eyes
   if(t%100<20)
    fill(255,255,0);
    else
    fill(0);
   ellipse(613,663,8,5)
  ellipse(625,663,8,5)
  fill(0);
   ellipse(613,663,3,3)
  ellipse(625,663,3,3)
  
  //deer eyes
   if(t%100<40)
    fill(255,255,0);
    else
    fill(0);
   ellipse(836,486,12,8)
  ellipse(870,486,12,8)
  fill(0);
    ellipse(836,486,7,10)
  ellipse(870,486,7,10)
}
