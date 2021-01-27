var Cat,CatImg;
var Mouse,MouseImg;
var background , backgroundImg;
var 

function preload() {

 backgroundImg = loadImage("garden.png");
MouseImg = loadImage("jerryOne.png,jerrytwo.png,jerrythree.png,jerryfour.png")



}

function setup(){
    

    createCanvas(800,400);
  
    background=createSprite(0,0,800,400);
    background.addImage(backgroundImg);

Mouse = createSprite(150,340,50,50);
Mouse.addImage(MouseImg);
cat = createSprite(100,340,20,50);
cat.addImage();


}

function draw() {



    background(255);






    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here;









}
 