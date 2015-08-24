
//Enemy class

var Enemy = function(){

    // Loads the enemy image on the screen
    this.sprite = 'images/enemy-bug.png';

    //Sets the enemy initial location
    this.xPos = [-105, 655];
    this.yPos = [70, 150, 240];
    this.speedRange = [200, 300, 550];

    this.reset();
}

// Update the enemy's position, required method for game
Enemy.prototype.update = function(dt){

     var maxEnemyPos = this.xPos[1];
     if(this.x < maxEnemyPos){
        this.x = this.x + (this.speed * dt);
     }
     else{
        this.x = -105;
     }

    if(player.x >= this.x - 30 && player.x <= this.x + 30){
        if(player.y >= this.y - 30 && player.y <= this.y + 30){
            player.reset();
        }
    }

}

//Reset the enemy's position
Enemy.prototype.reset = function(){
    var minEnemyPos = this.xPos[0];
    this.x = minEnemyPos;
    this.y = this.yPos[Math.floor(Math.random() * this.yPos.length)];
    this.speed = Math.floor(Math.random() * (this.speedRange[2] - this.speedRange[0])) + this.speedRange[0];

}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Player class
var Player = function(){

    //Loads the player image on the screen
    this.sprite = 'images/char-princess-girl.png';

    //Set the player initial location
    this.x = 200;
    this.y = 400;
}

//Update the player's position 
Player.prototype.update = function(){
    if(this.ctlKey === 'left' && this.x > 0){ 

        this.x = this.x - 101;
     
    }else if(this.ctlKey === 'right' && this.x < 400){
        this.x = this.x + 101;
    
    }else if(this.ctlKey === 'up'){
        this.y = this.y - 83;
     
    }else if (this.ctlKey === 'down' && this.y < 400){
        this.y = this.y + 83;
    }
    this.ctlKey = null;
    
    //If player has reached water, reset
    if(this.y < 40){
        this.reset();
    }


}
// Reset the player's position
Player.prototype.reset = function(){
    this.x = 200;
    this.y = 400;

}

// Input handler for player
Player.prototype.handleInput = function(e){
    this.ctlKey = e;    
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


 // listens for key presses and sends the keys to 
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Instantiate enemies and player objects 
var enemyA = new Enemy();
var enemyB = new Enemy()
var enemyC = new Enemy();
var enemyD = new Enemy();
var allEnemies = [enemyA, enemyB, enemyC, enemyD];

var player = new Player();