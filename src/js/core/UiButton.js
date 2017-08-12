var UiButton = function( src, x, y ){
    var container = new PIXI.DisplayObjectContainer();

    var texture = new PIXI.Texture.fromImage(src);
    var sprite = new PIXI.Sprite( texture );

    var scaleOnClick = 1.1;

    var scaleWidth = sprite.width * scaleOnClick;
    var scaleHeight = sprite.height * scaleOnClick;

    var differenceWidth = ( scaleWidth - sprite.width ) / 2;
    var differenceHeight = ( scaleHeight - sprite.height ) / 2;
    var spinningText;

    var defaultX = x;
    var defaultY = y;

    container.sprite = sprite;

    container.interactive = true;
    container.buttonMode = true;
    container.mousedown = container.touchstart = function(data){

        container.scale.x = scaleOnClick;
        container.scale.y = scaleOnClick;

        container.position.x = defaultX - differenceWidth;
        container.position.y = defaultY - differenceHeight;


        this.isdown = true;
        this.alpha = 1;
    };



    container.setPosition = function( newX, newY ){
        defaultX = newX;
        defaultY = newY;

        container.position.x = newX;
        container.position.y = newY;
    };

    container.addTitle = function( text ){
        spinningText = new PIXI.Text(text, {font: "bold 60px BadaBoom", fill: "#cc00ff", align: "center", stroke: "#FFFFFF", strokeThickness: 6});
        container.addChild( spinningText );
    };

    // set the mouseup and touchend callback..
    container.mouseup = container.touchend = container.mouseupoutside = container.touchendoutside = function(data){
        this.isdown = false;

        container.scale.x = 1;
        container.scale.y = 1;

        container.position.x = defaultX;
        container.position.y = defaultY;

        if( container.action ){
            container.action();
        }
    };

    // set the mouseover callback..
    container.mouseover = function(data){

        container.scale.x = scaleOnClick;
        container.scale.y = scaleOnClick;

        container.position.x = defaultX - differenceWidth;
        container.position.y = defaultY - differenceHeight;

        this.isOver = true;

        if(this.isdown)return;
    };

    // set the mouseout callback..
    container.mouseout = function(data){

        container.scale.x = 1;
        container.scale.y = 1;

        container.position.x = defaultX;
        container.position.y = defaultY;

        this.isOver = false;
        if(this.isdown)return
        //this.setTexture(textureButton)
    };

    container.addChild( sprite );

    container.position.x = x;
    container.position.y = y;

    return container;
};