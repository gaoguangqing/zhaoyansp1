var GAME = GAME || {};
GAME.PowerBar = function() {
    PIXI.DisplayObjectContainer.call(this);

    this.frame = PIXI.Sprite.fromImage("img/power0002.png");
    this.addChild(this.frame);

    this.barBaseTexture = new PIXI.Texture.fromImage("img/power0001.png");
    this.barTexture = new PIXI.Texture( this.barBaseTexture );

    this.bar = new PIXI.Sprite( this.barTexture );
    this.addChild(this.bar);

    this.position.x = 0;

};
GAME.PowerBar.constructor = GAME.PowerBar;
GAME.PowerBar.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);