var GAME = GAME || {};
GAME.LowFiBackground = function() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = 1E3;
    this.scrollPosition = 1500;

    var texture = PIXI.Texture.fromImage("img/iP4_BGtile.jpg");
    texture.height = 640;
    this.swoosh = new GAME.BackgroundElement(texture, 0, this);

    this.swoosh.speed = 0.7
};
GAME.LowFiBackground.constructor = GAME.LowFiBackground;
GAME.LowFiBackground.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
GAME.LowFiBackground.prototype.updateTransform = function() {
    this.scrollPosition = GAME.camera.x + 4E3;
    this.swoosh.setPosition(this.scrollPosition);
    PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
};