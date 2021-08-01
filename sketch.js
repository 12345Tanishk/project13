var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var edges;
var leaf;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
edges = createEdgeSprites();
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
 createApples();
 createLeaf();
 rabbit.collide(edges);
  drawSprites();
}
function createApples (){
  if (frameCount % 150 == 0){
    apple =createSprite(random(50,350),40,10,10);
    apple.velocityY=3;
    apple.addImage(appleImg);
    apple.scale=0.1;
    apple.y=Math.round(random(10,70));
    apple.depth=rabbit.depth;
    rabbit.depth++;
    }
  }
  function createLeaf (){
   if (frameCount % 100 == 0){
      leaf =createSprite(random(50,350),100,10,10);
      leaf.velocityY=3;
      leaf.addImage(leafImg);
      leaf.scale=0.1;
      leaf.y=Math.round(random(10,70));
      leaf.depth=rabbit.depth;
      rabbit.depth++;
    }
  }
    var select_sprites = Math.round(random(1,2));
    if (frameCount % 80 == 0){
      if (select_sprites == 1){
        createApples();
      }
      else{
         createLeaf();
      }
    }