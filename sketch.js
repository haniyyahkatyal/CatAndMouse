var bg ;
var canvas , together;
var cat , mouse ;
var cat1 , cat2, cat3, mouse1, mouse2, mouse3 ;


function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");

    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);;
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("catSitting", cat1);
    cat.scale=0.2;

    mouse=createSprite(250,600);
    mouse.addAnimation("mouseStanding",mouse1);
    mouse.scale=0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catHappy", cat3);
        cat.changeAnimation("catHappy");
        cat.x=300;
        cat.scale=0.3;
        mouse.addAnimation("mouseLast",mouse3);
        mouse.changeAnimation("mouseLast");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
    cat.velocityX=-4;
    cat.addAnimation("catRunning",cat2);
    cat.changeAnimation("catRunning");
    
      mouse.addAnimation("mouseTeasing", mouse2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 150;

      
  }

}
