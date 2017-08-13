var GAME = GAME || {};
var enemyFrames;
GAME.Enemy = function() {
    this.position = new PIXI.Point;
    //this.view = new PIXI.Sprite(PIXI.Texture.fromFrame("spike_box.png"));
    this.view = new PIXI.Sprite(PIXI.Texture.fromImage("img/pre.png"));
    this.view.anchor.x = 0.5;
    this.view.anchor.y = 0.5;
    this.height = this.width = 150
};
GAME.Enemy.constructor = GAME.Enemy;
GAME.Enemy.prototype.reset = function() {
    //this.explosion && (this.view.removeChild(this.explosion), this.explosion.reset());
    this.view.width = 157
};
GAME.Enemy.prototype.hit = function() {
    //this.explosion || (this.explosion = new GAME.Explosion);
    //this.explosion.explode();
    //this.view.addChild(this.explosion);
    this.view.width = 0;

    // hide home button
    homeButton.visible = false;
    soundButton.visible = false;
};
GAME.Enemy.prototype.update = function() {
    this.view.position.x = this.position.x - GAME.camera.x;
    this.view.position.y = this.position.y
};