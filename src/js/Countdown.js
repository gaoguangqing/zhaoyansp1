Time = function() {
    this.DELTA_TIME = 1;
    this.lastTime = Date.now();
    this.frames = 0;
    this.speed = 1
};
Time.constructor = Time;
Time.prototype.update = function() {
    this.frames++;
    var a = Date.now();
    this.frames = 0;
    this.DELTA_TIME = 0.06 * (a - this.lastTime);
    this.DELTA_TIME *= this.speed;
    2.3 < this.DELTA_TIME && (this.DELTA_TIME = 2.3);
    this.lastTime = a
};
GAME.time = new Time;
var GAME = GAME || {};
GAME.Countdown = function() {
    PIXI.DisplayObjectContainer.call(this);
    this.three = PIXI.Sprite.fromFrame("3Get.png");
    this.two = PIXI.Sprite.fromFrame("2tricksy.png");
    this.one = PIXI.Sprite.fromFrame("1pixie.png");
    this.three.anchor.x = this.three.anchor.y = 0.5;
    this.two.anchor.x = this.two.anchor.y = 0.5;
    this.one.anchor.x = this.one.anchor.y = 0.5;
    this.three.alpha = 0;
    this.two.alpha = 0;
    this.one.alpha = 0;
    this.addChild(this.three);
    this.addChild(this.two);
    this.addChild(this.one);
    this.three.alpha = 0;
    this.two.alpha = 0;
    this.one.alpha = 0;
};
GAME.Countdown.constructor = GAME.Countdown;
GAME.Countdown.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
GAME.Countdown.prototype.startCountDown = function(a) {
    this.visible = !0;
    this.onComplete = a;
    this.three.alpha = 0;
    this.two.alpha = 0;
    this.one.alpha = 0;
    this.three.scale.x = this.three.scale.y = 2;
    this.two.scale.x = this.two.scale.y = 2;
    this.one.scale.x = this.one.scale.y = 2;
    TweenLite.to(this.three, 1 * time2, {alpha: 1,onComplete: $.proxy(this.onThreeShown, this)});
    TweenLite.to(this.three.scale, 1 * time2, {x: 1,y: 1,ease: Elastic.easeOut})
};
var time = 0.1, time2 = 0.5, delay = 0;
GAME.Countdown.prototype.onThreeShown = function() {
    TweenLite.to(this.three, 1 * time, {alpha: 0,ease: Sine.easeOut,delay: delay});
    TweenLite.to(this.three.scale, 1 * time, {x: 0.5,y: 0.5,ease: Cubic.easeOut,delay: delay});
    TweenLite.to(this.two, 1 * time2, {alpha: 1,onComplete: $.proxy(this.onTwoShown, this),delay: delay});
    TweenLite.to(this.two.scale, 1 * time2, {x: 1,y: 1,ease: Elastic.easeOut,delay: delay})
};
GAME.Countdown.prototype.onTwoShown = function() {
    TweenLite.to(this.two, 1 * time, {alpha: 0,delay: delay});
    TweenLite.to(this.two.scale, 1 * time, {x: 0.5,y: 0.5,ease: Cubic.easeOut,delay: delay});
    TweenLite.to(this.one, 1 * time2, {alpha: 1,onComplete: $.proxy(this.onOneShown, this),delay: delay});
    TweenLite.to(this.one.scale, 1 * time2, {x: 1,y: 1,ease: Elastic.easeOut,delay: delay})
};
GAME.Countdown.prototype.onOneShown = function() {
    TweenLite.to(this.one.scale, 1 * time, {x: 0.5,y: 0.5,ease: Cubic.easeOut,delay: delay});
    TweenLite.to(this.one, 1 * time, {alpha: 0,onComplete: $.proxy(this.onFinish, this),delay: delay});
    this.onComplete()
};
GAME.Countdown.prototype.onFinish = function() {
    this.visible = !1
};