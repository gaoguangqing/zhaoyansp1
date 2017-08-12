var GAME = GAME || {};
GAME.Splash = function() {
    this.textures = [
        PIXI.Texture.fromFrame("lavaFrame_01.png"),
        PIXI.Texture.fromFrame("lavaFrame_02.png"),
        PIXI.Texture.fromFrame("lavaFrame_03.png"),
        PIXI.Texture.fromFrame("lavaFrame_04.png"),
        PIXI.Texture.fromFrame("lavaFrame_05.png"),
        PIXI.Texture.fromFrame("lavaFrame_06.png"),
        PIXI.Texture.fromFrame("lavaFrame_07.png"),
        PIXI.Texture.fromFrame("lavaFrame_08.png"),
        PIXI.Texture.fromFrame("lavaFrame_09.png"),
        PIXI.Texture.fromFrame("lavaFrame_10.png"),
        PIXI.Texture.fromFrame("lavaFrame_11.png"),
        PIXI.Texture.fromFrame("lavaFrame_12.png")];
    PIXI.MovieClip.call(this, this.textures);
    this.anchor.x = 0.5;
    this.anchor.y = 1;
    this.scale.x = this.scale.y = 2;
    this.animationSpeed = 0.3;
    this.visible = !1;
    this.realPosition;
};
GAME.Splash.constructor = GAME.Splash;
GAME.Splash.prototype = Object.create(PIXI.MovieClip.prototype);
GAME.Splash.prototype.splash = function(a) {
    this.realPosition = a.x;
    this.position.y = 620;
    this.gotoAndPlay(0);
    this.visible = !0
};
GAME.Splash.prototype.updateTransform = function() {
    this.visible && (PIXI.MovieClip.prototype.updateTransform.call(this), this.position.x = this.realPosition - GAME.camera.x, this.currentFrame > this.textures.length - 1 && (this.stop(), this.visible = !1))
};