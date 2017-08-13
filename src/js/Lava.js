var GAME = GAME || {};
GAME.Lava = function(a) {
    this.textures = [
        PIXI.Texture.fromImage("img/lava1.png"),
        PIXI.Texture.fromImage("img/lava2.png"),
        PIXI.Texture.fromImage("img/lava3.png"),
        PIXI.Texture.fromImage("img/lava4.png"),
        PIXI.Texture.fromImage("img/lava5.png"),
        PIXI.Texture.fromImage("img/lava7.png"),
        PIXI.Texture.fromImage("img/lava6.png"),
        PIXI.Texture.fromImage("img/lava8.png"),
        PIXI.Texture.fromImage("img/lava6.png"),
        PIXI.Texture.fromImage("img/lava7.png"),
        PIXI.Texture.fromImage("img/lava5.png"),
        PIXI.Texture.fromImage("img/lava4.png"),
        PIXI.Texture.fromImage("img/lava3.png"),
        PIXI.Texture.fromImage("img/lava2.png"),
        PIXI.Texture.fromImage("img/lava1.png")


//        PIXI.Texture.fromFrame("lava_slosh_01.png"),
//        PIXI.Texture.fromFrame("lava_slosh_02.png"),
//        PIXI.Texture.fromFrame("lava_slosh_03.png"),
//        PIXI.Texture.fromFrame("lava_slosh_04.png"),
//        PIXI.Texture.fromFrame("lava_slosh_05.png"),
//        PIXI.Texture.fromFrame("lava_slosh_06.png"),
//        PIXI.Texture.fromFrame("lava_slosh_07.png"),
//        PIXI.Texture.fromFrame("lava_slosh_08.png"),
//        PIXI.Texture.fromFrame("lava_slosh_07.png"),
//        PIXI.Texture.fromFrame("lava_slosh_06.png"),
//        PIXI.Texture.fromFrame("lava_slosh_05.png"),
//        PIXI.Texture.fromFrame("lava_slosh_04.png"),
//        PIXI.Texture.fromFrame("lava_slosh_03.png"),
//        PIXI.Texture.fromFrame("lava_slosh_02.png"),
//        PIXI.Texture.fromFrame("lava_slosh_01.png")
    ];
    //console.log(this.textures);
    var scale = 4;
    var b = this.textures[0];
    this.sprites = [];
    //this.spriteWidth = b.width * scale - 1;
    this.spriteWidth = b.width * scale;
    var c = 8;
    3 > c && (c = 3);
    //console.log(c);
    for (var d = 0; d < c; d++) {
        var e = new PIXI.Sprite(b);
        e.position.y = 525;
        e.scale.x = scale;
        e.scale.y = 4;
        a.addChild(e);
        this.sprites.push(e)
    }
    this.speed = 1;
    this.count = this.offset = 0
};
GAME.Lava.prototype.setPosition = function(a) {
    var b = this.spriteWidth, c = this.count % this.textures.length, c = Math.floor(c);
    this.offset += 2.5;
    a += this.offset;
    this.count += 0.3;
    for (var d = 0; d < this.sprites.length; d++) {
        var e = -a * this.speed,
            e = e + d * b,
            e = e % (b * this.sprites.length),
            e = e + 2 * b;
        this.sprites[d].setTexture(this.textures[c]);
        this.sprites[d].position.x = Math.floor(e) + 600 - GAME.xOffset;
    }
};