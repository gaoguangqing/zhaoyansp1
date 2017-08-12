var GAME = GAME || {};
var pickupTextures;
GAME.Pickup = function() {
    pickupTextures || (pickupTextures = [
        PIXI.Texture.fromImage("img/itemPepper.png"),
        PIXI.Texture.fromImage("img/itemPepperTwo.png"),
        PIXI.Texture.fromImage("img/itemPepperThree.png"),
        PIXI.Texture.fromImage("img/itemPepperFour.png"),
        PIXI.Texture.fromImage("img/itemPepperFive.png"),
        PIXI.Texture.fromImage("img/itemPepperSix.png")
    ]);
    this.position = new PIXI.Point;
    this.view = new PIXI.DisplayObjectContainer;
    this.clip = new PIXI.Sprite(pickupTextures[Math2.randomInt(0, pickupTextures.length - 1)]);
    this.clip.anchor.x = 0.5;
    this.clip.anchor.y = 0.5;

    //this.clip.scale.x = this.clip.scale.y = 3;

    this.shine = PIXI.Sprite.fromImage("img/itemLight.png");
    this.shine.anchor.x = this.shine.anchor.y = 0.5;
    this.shine.scale.x = this.shine.scale.y = 0.7;
    this.shine.alpha = 0.5;
    GAME.lowMode || this.view.addChild(this.shine);
    this.view.addChild(this.clip);
    this.height = this.width = 100;
    this.count = 300 * Math.random()
};
GAME.Pickup.constructor = GAME.Pickup;
GAME.Pickup.prototype.reset = function() {
};
GAME.Pickup.prototype.update = function() {
    this.view.scale.x = this.view.scale.y = 1.5;

    this.isPickedUp ? (
        this.view.scale.x = 1 - this.ratio,
        this.view.scale.y = 1 - this.ratio,
        this.position.x = this.pickupPosition.x + (this.steve.position.x - this.pickupPosition.x) * this.ratio,
        this.position.y = this.pickupPosition.y + (this.steve.position.y - this.pickupPosition.y) * this.ratio) : (this.count += 0.1 * GAME.time.DELTA_TIME, this.clip.scale.x = 0.75 + 0.1 * Math.sin(this.count), this.clip.scale.y = 0.75 - 0.1 * Math.cos(this.count), this.clip.rotation = 0.2 * Math.sin(1.5 * this.count),
        this.shine.rotation =
        0.2 * this.count);
    this.view.position.x = this.position.x - GAME.camera.x;
    this.view.position.y = this.position.y
};