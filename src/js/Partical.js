Partical = function() {
    PIXI.Sprite.call(this, PIXI.Texture.fromImage("img/particle.png"));
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;

    this.speed = new PIXI.Point
};
Partical.constructor = Partical;
Partical.prototype = Object.create(PIXI.Sprite.prototype);
