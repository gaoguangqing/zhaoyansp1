var GAME = GAME || {};
GAME.Background = function() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = 1E3;
    this.scrollPosition = 1500;

    var farBackgroundTexture = new PIXI.Texture.fromImage("img/farBackground.jpg");
    farBackgroundTexture.width = 940;
    farBackgroundTexture.height = 650;
    //farBackgroundTexture.scale.y = 1.1;

    // add at beginning
    //this.fakeBackground = new PIXI.Sprite( farBackgroundTexture );
    //fakeBackground.x = -200;
    //this.addChild( this.fakeBackground );

    this.farBackground = new GAME.BackgroundElement(farBackgroundTexture, 0, this);



    //this.rearSilhouette = new GAME.BackgroundElement(PIXI.Texture.fromFrame("03_rear_silhouette.png"), 358, this);
    var farTreeFirstTexture = new PIXI.Texture.fromImage("img/farTreeFirst.png");
    farTreeFirstTexture.width = 1023;
    farTreeFirstTexture.height = 178;
    this.farTreeFirst = new GAME.BackgroundElement(farTreeFirstTexture, 390, this);

    var farTreeSecondTexture = new PIXI.Texture.fromImage("img/farTreeSecond.png");
    farTreeSecondTexture.width = 1039;
    farTreeSecondTexture.height = 171;
    this.farTreeSecond = new GAME.BackgroundElement(farTreeSecondTexture, 460, this);

    var farTreeThirdTexture = new PIXI.Texture.fromImage("img/farTreeThird.png");
    farTreeThirdTexture.width = 1216;
    farTreeThirdTexture.height = 700;
    this.farTreeThird = new GAME.BackgroundElement(farTreeThirdTexture, -5, this);

    //this.rearSilhouette = new GAME.BackgroundElement(farTreeFirstTexture, 358, this);

    //this.rearCanopy = new GAME.BackgroundElement(PIXI.Texture.fromFrame("03_rear_canopy.png"), 0, this);
    //this.rearCanopy = new GAME.BackgroundElement(PIXI.Texture.fromImage("img/woodBottom.png"), 0, this);

    //this.tree1 = PIXI.Sprite.fromFrame("02_tree_1.png");
//    this.tree1 = new PIXI.Sprite.fromImage("img/treeFirst.png");
//    this.tree1.anchor.x = 0.5;
    //this.addChild(this.tree1);
    //this.tree2 = PIXI.Sprite.fromFrame("02_tree_2.png");
//    this.tree2 = new PIXI.Sprite.fromImage("img/treeFirst.png");
//
//    this.tree2.anchor.x = 0.5;
//    this.tree2.position.y = 50;
    //this.addChild(this.tree2);
    //this.farCanopy = new GAME.BackgroundElement(PIXI.Texture.fromFrame("02_front_canopy.png"), 0, this);
    this.vines = new GAME.Vines(this);
    //this.roofLeaves = new GAME.BackgroundElement(PIXI.Texture.fromFrame("00_roof_leaves.png"), 0, this);
    var bottomTexture  = new PIXI.Texture.fromImage("img/woodBottom.png");
    bottomTexture.width = 963;
    bottomTexture.height = 152;
    this.roofLeaves = new GAME.BackgroundElement(bottomTexture, 580, GAME.woodBottom);
    //GAME.woodBottom = new GAME.BackgroundElement(bottomTexture, 300, this);

    var treeFirstTexture  = new PIXI.Texture.fromImage("img/treeFirst.png");
    treeFirstTexture.width = 1097;
    treeFirstTexture.height = 700;
    //this.frontSilhouette = new GAME.BackgroundElement(PIXI.Texture.fromFrame("01_front_silhouette.png"), 424, this);
    this.frontSilhouette = new GAME.BackgroundElement(treeFirstTexture, -30, this);
    this.farBackground.speed = 0.4;
    this.farTreeFirst.speed = 0.5;
    this.farTreeSecond.speed = 0.6;
    this.farTreeThird.speed = 0.7;
    //this.rearSilhouette.speed = 0.6;
    //this.rearCanopy.speed = 0.6;
    //this.farCanopy.speed = 0.75;
    this.frontSilhouette.speed = 0.8;
    //GAME.woodBottom.speed = 1;
    this.roofLeaves.speed = 1.1;



};
GAME.Background.constructor = GAME.Background;
GAME.Background.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
GAME.Background.prototype.updateTransform = function() {
    this.scrollPosition = GAME.camera.x + 4E3;

//    var a = 1.5 * -this.scrollPosition / 2,
//        a = a % (this.width + 556),
//        a = a + (this.width + 556),
//        a = a - this.tree1.width / 2;
//
//    this.tree1.position.x = a - GAME.xOffset;
//
//    a = 1.5 * -(this.scrollPosition + this.width / 2) / 2;
//    a %= this.width + 556;
//    a += this.width + 556;
//    a -= this.tree2.width / 2;
//    this.tree2.position.x = a - GAME.xOffset;

    this.farBackground.setPosition(this.scrollPosition);

    this.farTreeFirst.setPosition(this.scrollPosition);
    this.farTreeSecond.setPosition(this.scrollPosition);
    this.farTreeThird.setPosition(this.scrollPosition);
    //this.rearSilhouette.setPosition(this.scrollPosition);
    //this.rearCanopy.setPosition(this.scrollPosition);
    //this.farCanopy.setPosition(this.scrollPosition);
    this.frontSilhouette.setPosition(this.scrollPosition);
    this.vines.setPosition(this.scrollPosition);
    this.roofLeaves.setPosition(this.scrollPosition);
    //GAME.woodBottom.setPosition(this.scrollPosition);
    PIXI.DisplayObjectContainer.prototype.updateTransform.call(this);

    //this.fakeBackground.position.x -= 10;
};
GAME.Vines = function(a) {
    this.vines = [];
    this.owner = a;
    for (var b = 0; 10 > b; b++) {
        //var c = new PIXI.Sprite.fromFrame("01_hanging_flower3.png");
        var c = new PIXI.Sprite.fromImage("img/visyak.png");
        c.offset = 100 * b + 50 * Math.random();
        c.speed = (1.5 + 0.25 * Math.random()) / 2;
        c.position.y = -200 * Math.random();
        a.addChild(c);
        c.position.x = 200;
        this.vines.push(c)
    }
    this.speed = 1
};
GAME.Vines.prototype.setPosition = function(a) {
    for (var b = 0; b < this.vines.length; b++) {
        var c = this.vines[b], d = -(a + c.offset) * c.speed, d = d % this.owner.width, d = d + this.owner.width;
        c.position.x = d
    }
};
GAME.Background.prototype.joyRideMode = function() {
};
GAME.Background.prototype.normalMode = function() {
};
GAME.BackgroundElement = function(a, b, c) {
    this.sprites = [];
    this.spriteWidth = a.width - 1;
    var d = Math.ceil(940 / this.spriteWidth);
    3 > d && (d = 3);
    for (var e = 0; e < d; e++) {
        var f = new PIXI.Sprite(a);
        f.position.y = b;
        c.addChild(f);
        this.sprites.push(f);
    }
    this.speed = 1
};
GAME.BackgroundElement.prototype.setPosition = function(a) {
    for (var b = this.spriteWidth, c = 0; c < this.sprites.length; c++) {
        var d = -a * this.speed,
            d = d + c * b,
            d = d % (b * this.sprites.length),
            d = d + 2 * b;
        this.sprites[c].position.x = Math.floor(d) - GAME.xOffset - 220;
    }
};