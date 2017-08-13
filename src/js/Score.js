var GAME = GAME || {};
GAME.Score = function() {
    PIXI.DisplayObjectContainer.call(this);
    this.ratio = 0;

    this.setScore(0);

    this.score = 0;

    this.scoreText = null;
    this.scoreValue = null;
    this.scoreBackground = null;
};
GAME.Score.constructor = PIXI.Score;
GAME.Score.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
GAME.Score.prototype.setScore = function(a) {
    // #3DE7F7 blue
    // #FFF39C
    this.score = a;

    if( this.stage != null && this.scoreText == null ){
        var font = "bold 30px BadaBoom";
        var marginTop = 53;

        this.scoreBackground = new PIXI.Sprite.fromImage("img/scoreBackground.png");
        this.scoreBackground.position.x = GAME.width / 2 - 179;
        this.scoreBackground.position.y = 5;
        this.scoreBackground.visible = false;

        this.scoreText = new PIXI.Text("Score: ", {font: font, fill: "#3DE7F7", align: "right", wordWrap : true, wordWrapWidth : 200}); //, stroke: "#FFFFFF", strokeThickness: 6 align: "center"
        this.scoreText.position.x = GAME.width / 2 - 110;
        this.scoreText.position.y = marginTop;
        this.scoreText.visible = false;

        this.scoreValue = new PIXI.Text("", {font: font, fill: "#FFF39C", align: "right", wordWrap : true, wordWrapWidth : 200}); //, stroke: "#FFFFFF", strokeThickness: 6 align: "center"
        this.scoreValue.position.x = GAME.width / 2 - 10;
        this.scoreValue.position.y = marginTop;
        this.scoreValue.visible = false;

        this.stage.addChild( this.scoreBackground );
        this.stage.addChild( this.scoreText );
        this.stage.addChild( this.scoreValue );

    }

    if( this.scoreText != null ){
        this.scoreValue.setText( a );
    }

    if( game && game.isPlaying  ){
        this.scoreText.visible = true;
        this.scoreValue.visible = true;
        this.scoreBackground.visible = true;
    }

    if( !window.isLandscape ){
        this.hide();
    }
};
GAME.Score.prototype.jump = function() {
    //this.ratio = 2.2;
};

GAME.Score.prototype.hide = function(){
    this.scoreText.visible = false;
    this.scoreValue.visible = false;
    this.scoreBackground.visible = false;
};
