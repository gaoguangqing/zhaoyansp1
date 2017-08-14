var GAME = GAME || {};
GAME.Steve = function() {
    this.position = new PIXI.Point;
    //this.runningFrames = [PIXI.Texture.fromFrame("characterRUNscaled_01.png"), PIXI.Texture.fromFrame("characterRUNscaled_02.png"), PIXI.Texture.fromFrame("characterRUNscaled_03.png"), PIXI.Texture.fromFrame("characterRUNscaled_04.png"), PIXI.Texture.fromFrame("characterRUNscaled_05.png"), PIXI.Texture.fromFrame("characterRUNscaled_06.png"), PIXI.Texture.fromFrame("characterRUNscaled_07.png"), PIXI.Texture.fromFrame("characterRUNscaled_08.png"), PIXI.Texture.fromFrame("characterRUNscaled_09.png")];

    this.runningFrames = [
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0001.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0002.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0003.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0004.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0005.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0006.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0007.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0008.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0009.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0010.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0011.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0012.png"),
        PIXI.Texture.fromImage("img/animation/pepperRun/pepperRun0013.png")
    ];

    //this.flyingFrames = [PIXI.Texture.fromFrame("characterFLATflying_01.png"), PIXI.Texture.fromFrame("characterFLATflying_02.png"), PIXI.Texture.fromFrame("characterFLATflying_03.png")];

    this.flyingFrames = [
        PIXI.Texture.fromImage("img/animation/pepperFly/pepperFly0001.png"),
        PIXI.Texture.fromImage("img/animation/pepperFly/pepperFly0002.png"),
        PIXI.Texture.fromImage("img/animation/pepperFly/pepperFly0003.png")
    ];

    var textureDie16 = PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0016.png");

    this.crashFrames = [
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0001.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0002.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0003.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0004.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0005.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0006.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0007.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0008.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0009.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0010.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0011.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0012.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0013.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0014.png"),
        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0015.png"),
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16,
        textureDie16
//        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0017.png"),
//        PIXI.Texture.fromImage("img/animation/pepperDie/pepperDie0018.png")
    ];
    this.view = new PIXI.MovieClip(this.flyingFrames);
    //this.view.animationSpeed = 0.23;
    this.view.animationSpeed = 0.8;
    this.view.play();
    this.view.anchor.x = 0.5;
    this.view.anchor.y = 0.5;
    this.ground = this.position.y = 477;
    this.gravity = 0.3;
    this.baseSpeed = 8;
    this.speed = new PIXI.Point(this.baseSpeed, 0);
    this.activeCount = 0;
    this.isFlying = false;
    this.accel = 0;
    this.width = 26;
    this.height = 37;
    this.onGround = false;
    this.rotationSpeed = 0;
    this.joyRiding = false;
    this.level = 1;
    this.realAnimationSpeed = 0.7
};
GAME.Steve.constructor = GAME.Steve;
GAME.Steve.prototype.update = function() {
    if( window.isLandscape ){
        this.isDead ? this.updateDieing() : this.updateRunning();
    }
};
GAME.Steve.prototype.joyrideMode = function() {
    this.joyRiding = !0;
    TweenLite.to(this.speed, 0.3, {x: 20,ease: Cubic.easeIn});
    this.realAnimationSpeed = 0.92
};
GAME.Steve.prototype.normalMode = function() {
    this.joyRiding = !1;
    TweenLite.to(this.speed, 0.6, {x: this.baseSpeed,ease: Cubic.easeOut});
    this.realAnimationSpeed = 0.23
};
GAME.Steve.prototype.updateRunning = function() {
    //this.view.animationSpeed = this.realAnimationSpeed * GAME.time.DELTA_TIME * this.level;
    this.isActive && (this.isFlying = !0);
    this.isFlying ? (this.accel = 0.6, this.speed.y -= this.accel * GAME.time.DELTA_TIME, 0 < this.speed.y && (this.speed.y -= 0.3 * GAME.time.DELTA_TIME)) : 0 > this.speed.y && (this.speed.y += 0.05 * GAME.time.DELTA_TIME);
    this.speed.y += this.gravity * GAME.time.DELTA_TIME;
    8 < this.speed.y && (this.speed.y = 8);
    -9 > this.speed.y && (this.speed.y = -9);
    this.position.x += this.speed.x * GAME.time.DELTA_TIME * this.level;
    this.position.y += this.speed.y * GAME.time.DELTA_TIME;
    this.onGround != this.onGroundCache && (this.onGroundCache = this.onGround, this.view.textures = this.onGround ? this.runningFrames : this.flyingFrames);
    GAME.camera.x = this.position.x - 100;
    this.view.position.x = this.position.x - GAME.camera.x;
    this.view.position.y = this.position.y - GAME.camera.y;
    this.view.rotation += 0.1 * (0.05 * this.speed.y - this.view.rotation);

    //console.log( this.position.x );

};
GAME.Steve.prototype.updateDieing = function() {
    // me addd
    this.view.animationSpeed = 0.1;

    this.speed.x *= 0.999;
    this.onGround && (this.speed.y *= 0.99);
    this.speed.y += 0.1;
    this.accel += 0.1 * (0 - this.accel) * GAME.time.DELTA_TIME;
    this.speed.y += this.gravity * GAME.time.DELTA_TIME;
    this.position.x += this.speed.x * GAME.time.DELTA_TIME;
    this.position.y += this.speed.y * GAME.time.DELTA_TIME;
    GAME.camera.x = this.position.x - 100;
    this.view.position.x = this.position.x - GAME.camera.x;
    this.view.position.y = this.position.y - GAME.camera.y;
//    this.view.rotation = 5 > this.speed.x ? this.view.rotation +
//        this.rotationSpeed * (this.speed.x / 5) * GAME.time.DELTA_TIME : this.view.rotation + this.rotationSpeed * GAME.time.DELTA_TIME
};
GAME.Steve.prototype.jump = function() {
    this.isDead && 5 > this.speed.x && (this.isDead = !1, this.speed.x = 10);
    this.position.y != this.ground ? this.isFlying = !0 : (this.isActive = !0, this.activeCount = 0)
};
GAME.Steve.prototype.die = function() {
    this.isDead ||
    (
        TweenLite.to(GAME.time, 0.5, {speed: 0.1,ease: Cubic.easeOut,onComplete: function() {
            TweenLite.to( GAME.time, 2, { speed: 1,delay: 1 });
        }}),
        this.isDead = true,
        this.bounce = 0,
        this.speed.x = 15,
        this.speed.y = -15,
        this.rotationSpeed = 0.3,
        //this.view.stop(),
        //this.view.setTexture(this.crashFrames[0])
        this.view.textures = this.crashFrames
    );
};
GAME.Steve.prototype.boil = function() {
    this.isDead || (this.isDead = !0)
};
GAME.Steve.prototype.fall = function() {
    this.isFlying = this.isActive = false;
};