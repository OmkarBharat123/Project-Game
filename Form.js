class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder", "Enetr your name");
        this.playButton = createButton("Play");
        this.titleImg = createImg("./aseets/d6t48qs-b65e19c1-995f-4701-a350-b2bab425ea7e.png", "game title");
        this.greeting = createElement("h3");

    }

    setElementsPosition() {
        this.titleImg.position(500, 30);
        this.input.position(width / 2 - 150, height / 2 - 90);
        this.playButton.position(width / 2 + 700, height / 2 + 350);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
      
      }
    
      setElementsStyle() {
        this.titleImg.class("gameTitle");
        this.playButton.class("customButton");
        this.input.class("inputText");
       
      }

      hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
      
      }

      handleMousePressed(){     
        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          var message = `
          Hello ${this.input.value()}
          </br>wait for another player to join...`;
          this.greeting.html(message);
          playerCount+=1;
          player.name = this.input.value();
          player.index=playerCount;
          player.updateCount(playerCount);
        })
      }

      display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
      }

}