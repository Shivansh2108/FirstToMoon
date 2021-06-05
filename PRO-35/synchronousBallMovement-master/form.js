class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
      this.message=createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
    display1(){
      this.message.position(displayWidth/2-100,100);
      this.message.html("Player Rank "+player.rank);
    }
    display(){
      this.title.html("First To Moon");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 60 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 50, displayHeight/2-40);
      this.reset.position(displayWidth-100,20);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        player.rank=0;
        Player.updateRank(player.rank);
        database.ref('/').update({
          players:''
        })
      })
    }
  }
  