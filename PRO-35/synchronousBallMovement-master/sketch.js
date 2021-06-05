var database,player,form,game;
var gameState=0;
var playerCount,bg1,bg2,bg3,bg4;
var bg;
var allPlayers;
var p1,p2;
var cars;
var plr1,plr2,plr1left,plr1right,plr2left,plr2right,ground,coin;
var meteors,moon;
function preload(){
  bg1=loadImage("Bg1.png");
  bg2=loadImage("Bg2.png");
  bg3=loadImage("Bg3.png");
  bg4=loadImage("Bg4.png");
  plr1=loadImage("ImageCenter.png");
  plr1left=loadImage("ImageLeft.png");
  plr2left=loadImage("Image2Left.png");
  plr1right=loadImage("ImageRight.png");
  plr2right=loadImage("Image2Right.png");
  plr2=loadImage("Image2Center.png");
  ground=loadImage("BlackLine.png");
  coin=loadImage("Coin.png");
  meteors=loadImage("Meteors.png");
  Moon=loadImage("Moon.png");

  

}
function setup(){
  createCanvas(displayWidth-35,displayHeight-150);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
  //bg=createSprite(displayWidth-35/2,displayHeight-150/2,displayWidth,displayHeight);
  //bg.addImage("B1",bg1);
  //bg.visible=false;
}
function draw(){
 // background(0);
  if(playerCount===2){
    gameState=1;
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
}