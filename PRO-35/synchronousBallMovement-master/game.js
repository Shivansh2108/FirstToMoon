class Game{
    constructor(){

    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState=data.val();
        })
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    p1=createSprite(displayWidth/4 ,displayHeight-250,100,100);
    p1.addImage(plr1);
    p1.visible=false;
    p1.scale=0.25;
    p2=createSprite((3*displayWidth)/4 ,displayHeight-250,100,100);
    p2.addImage(plr2);
    p2.scale=0.25;
    p2.visible=false;
    cars=[p1,p2];
    
    }
    play(){
        form.hide();
        
        strokeWeight(3);
        stroke("yellow");
        fill ("blue");
        textSize(30);
        text("Game Started",displayWidth/2-80,100);
        text("Now Reach The Moon First",displayWidth/2-140,150);
       
        //bg.visible=true; 
        Player.getPlayerInfo();
        if(allPlayers!=undefined){
         background(0);
         p2.visible=true;
        p1.visible=true;
        // image(bg1, 0,-displayHeight*4,displayWidth, displayHeight*5);
         var index=0;
         var x=200;
         var y=200;
        
         for(var plr in allPlayers){
            
            index = index + 1 ;
           // x = allPlayers[plr].x;
            y = displayHeight - allPlayers[plr].y ;
            //position the cars a little away from each other in x direction
           // x = x + 200;
            //use data form the database to display the cars in y direction
          // y = displayHeight - allPlayers[plr].distance;
            cars[index-1].x =displayWidth/4 +((3*((index-1)*displayWidth))/8);
           cars[index-1].y = y;
          
            textAlign(CENTER);
            textSize(20);
            text(allPlayers[plr].name, cars[index - 1].x, cars[index - 1].y + 75);
            if (index === player.index){
              cars[index - 1].shapeColor = "red";
              camera.position.x = displayWidth/2;
              camera.position.y =cars[index-1].y;
            }
         }
        }
      /*  if(keyDown(LEFT_ARROW)){
            player.x=player.x-5;

        }
        if(keyDown(RIGHT_ARROW)){
            player.x=player.x+5;

        }*/
        if(keyDown(UP_ARROW)||keyDown("space")){
            player.y=player.y-5;

        }
        player.update();
        //add gameOver when player hits the bottom edge
        drawSprites();
    }
}