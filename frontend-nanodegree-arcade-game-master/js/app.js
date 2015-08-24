
var Enemy = function(){
    this.sprite = 'images/enemy-bug.png';
    this.xPos = [-105, 655];
    this.yPos = [70, 150, 240];
    this.speedRange = [200, 300, 550];

    this.reset();
}

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

Enemy.prototype.reset = function(){
    var minEnemyPos = this.xPos[0];
    this.x = minEnemyPos;
    this.y = this.yPos[Math.floor(Math.random() * this.yPos.length)];
    this.speed = Math.floor(Math.random() * (this.speedRange[2] - this.speedRange[0])) + this.speedRange[0];

}

Enemy.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


var Player = function(){
    this.sprite = 'images/char-princess-girl.png';
    this.x = 200;
    this.y = 400;
}

Player.prototype.update = function(){
    if(this.ctlKey === 'left' && this.x > 0){ 
        this.x = this.x - 101;
     
    }else if(this.ctlKey === 'right' && this.x != 400){
        this.x = this.x + 101;
    
    }else if(this.ctlKey === 'up'){
        this.y = this.y - 83;
     
    }else if (this.ctlKey === 'down' && this.y != 400){
        this.y = this.y + 83;
    }
    this.ctlKey = null;
    
    //If player has reached water, reset
    if(this.y < 40){
        this.reset();
    }


}

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 400;

}

Player.prototype.handleInput = function(e){
    this.ctlKey = e;    
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

var enemyA = new Enemy();
var enemyB = new Enemy()
var enemyC = new Enemy();
var enemyD = new Enemy();
var allEnemies = [enemyA, enemyB, enemyC, enemyD];

var player = new Player();