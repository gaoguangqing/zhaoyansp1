    var ratio;
    var offsetX;
    var offsetY;
    var holder;
    var loaderView =  document.getElementById("loader");
    var loaderText = document.getElementById("loaderText");
    var loaderPepperElement = document.getElementById("loaderPepper");
    var loadInterval;
    var loadCount = 0;
    var gameMode = 0;

    var countdown;
    var logo;
    var black;
    var interactive = true;
    $(document).ready(iniSpilGamesApi);

    //$(window).resize(resize);
    window.onorientationchange = resize;

    var GAME_MODE = {TITLE:0, COUNT_DOWN:1, PLAYING:2, GAME_OVER:3, INTRO:4};

    var windowWidth = 960;
    var windowHeight = 640;

    var isAdding = false;
    var loader;
    var game;

    var mouseX = 0;
    var mouseY = 0;

    var stressTest;
    var pixiLogo;

    var soundButton;
    var homeButton;
    var buttonContainer;
    var restartButton;
    var moreGamesButtonGameOver;

    var stats;

    var woodBottom;
    var splashScreenLand;

    var pepperLogo;
    var scoreBackground;
    var addSteve;

    var landscape;

    // credits
    var creditsArt;
    var creditsArtName;

    var creditsCode;
    var creditsCodeName;
    var creditsBackButton;

    window.isLandscape = true;
    var landscapeBackground;

    var scrollUp = null;
    var scrollUpImage;

    var pausePopup;
    var pauseButton;

    var yourScoreValue = 0;
    var yourScore;
    var yourBestScoreValue = 0;
    var yourBestScore;

    // spil
    var spilBottom;
    var splashImage;
    var blackSplash;

    var splashWasShown = false;
    var scrollCanvas;

    function onReady()
    {
        //document.getElementById("loaderBanner").src = logoSrc;

        scrollUpImage = document.getElementById("scrollup");

        //stressTest = new PIXI.StressTest(onStressTestComplete);
        $(loaderView).fadeIn();

        loadInterval = setInterval(function(){

            loadCount++;
            loadCount %=4;

            if(loadCount == 0)
            {
                loaderText.src = "img/loader0001.png";
            }
            else if(loadCount == 1)
            {
                loaderText.src = "img/loader0002.png";
            }
            else if(loadCount == 2)
            {
                loaderText.src = "img/loader0003.png";
            }
            else if(loadCount == 3)
            {
                loaderText.src = "img/loader0003.png";
            }
            //console.log("!!!")
        }, 100);

        onStressTestComplete();

        resize();


    }

    function onStressTestComplete()
    {
        //console.log( "stressTest.result: " + stressTest.result );
        //GAME.lowMode = stressTest.result < 30;
        GAME.lowMode = false;

        //alert( stressTest.result );

        ///GAME.lowMode = true;

        //interactive = false;
        interactive = true;
        holder = document.getElementById("holder");
        holder.style.display = "none";
        document.body.scroll = "no";
        // TODO LOADING IMAGE AT START BREAKS!
        loader = new PIXI.AssetLoader([
            "img/loader0001.png",
            "img/loader0002.png",
            "img/loader0003.png",

            "img/logo.png",

            "img/SplashAssets.json",

            "img/iP4_BGtile.jpg",
            "img/blackSquare.jpg",

            "img/WorldAssets.png",
            "img/WorldAssets.json",

            "img/smuve.jpg",

            "img/buttonPlay0001.png",
            "img/creditsButton0001.png",
            "img/moreGamesButton0001.png",
            "img/homeButton.png",

            "img/playButton.png",
            "img/pauseButton.png",

            //
            "img/farBackground.jpg",
            "img/farTreeFirst.png",
            "img/farTreeSecond.png",
            "img/farTreeThird.png",
            "img/treeFirst.png",
            "img/woodBottom.png",
            "img/land.png",

            "img/visyak.png",
            "img/scoreBackground.png",

            "img/scorePopupBackground.png",

            "img/particle.png",

            "img/itemLight.png",
            "img/itemPepper.png",
            "img/itemPepperTwo.png",
            "img/itemPepperThree.png",
            "img/itemPepperFour.png",
            "img/itemPepperFive.png",
            "img/itemPepperSix.png",

            "img/rivers.png",
            "img/restartButton.png",

            "img/lava1.png",
            "img/lava2.png",
            "img/lava3.png",
            "img/lava4.png",
            "img/lava5.png",
            "img/lava6.png",
            "img/lava7.png",
            "img/lava8.png",



            "img/animation/pepperRun/pepperRun0001.png",
            "img/animation/pepperRun/pepperRun0002.png",
            "img/animation/pepperRun/pepperRun0003.png",
            "img/animation/pepperRun/pepperRun0004.png",
            "img/animation/pepperRun/pepperRun0005.png",
            "img/animation/pepperRun/pepperRun0006.png",
            "img/animation/pepperRun/pepperRun0007.png",
            "img/animation/pepperRun/pepperRun0008.png",
            "img/animation/pepperRun/pepperRun0009.png",
            "img/animation/pepperRun/pepperRun0010.png",
            "img/animation/pepperRun/pepperRun0011.png",
            "img/animation/pepperRun/pepperRun0012.png",
            "img/animation/pepperRun/pepperRun0013.png",
            "img/animation/pepperRun/pepperRun0014.png",
            "img/animation/pepperRun/pepperRun0015.png",
            "img/animation/pepperRun/pepperRun0016.png",
            "img/animation/pepperRun/pepperRun0017.png",
            "img/animation/pepperRun/pepperRun0018.png",
            "img/animation/pepperRun/pepperRun0019.png",
            "img/animation/pepperRun/pepperRun0020.png",
            "img/animation/pepperRun/pepperRun0021.png",
            "img/animation/pepperRun/pepperRun0022.png",
            "img/animation/pepperRun/pepperRun0023.png",
            "img/animation/pepperRun/pepperRun0024.png",
            "img/animation/pepperRun/pepperRun0025.png",
            "img/animation/pepperRun/pepperRun0026.png",
            "img/animation/pepperRun/pepperRun0027.png",
            "img/animation/pepperRun/pepperRun0028.png",
            "img/animation/pepperRun/pepperRun0029.png",


            "img/animation/pepperFly/pepperFly0001.png",
            "img/animation/pepperFly/pepperFly0002.png",
            "img/animation/pepperFly/pepperFly0003.png",
            "img/animation/pepperFly/pepperFly0004.png",
            "img/animation/pepperFly/pepperFly0005.png",
            "img/animation/pepperFly/pepperFly0006.png",
            "img/animation/pepperFly/pepperFly0007.png",
            "img/animation/pepperFly/pepperFly0008.png",
            "img/animation/pepperFly/pepperFly0009.png",
            "img/animation/pepperFly/pepperFly0010.png",
            "img/animation/pepperFly/pepperFly0011.png",
            "img/animation/pepperFly/pepperFly0012.png",

            "img/animation/pepperDie/pepperDie0001.png",
            "img/animation/pepperDie/pepperDie0002.png",
            "img/animation/pepperDie/pepperDie0003.png",
            "img/animation/pepperDie/pepperDie0004.png",
            "img/animation/pepperDie/pepperDie0005.png",
            "img/animation/pepperDie/pepperDie0006.png",
            "img/animation/pepperDie/pepperDie0007.png",
            "img/animation/pepperDie/pepperDie0008.png",
            "img/animation/pepperDie/pepperDie0009.png",
            "img/animation/pepperDie/pepperDie0010.png",
            "img/animation/pepperDie/pepperDie0011.png",
            "img/animation/pepperDie/pepperDie0012.png",
            "img/animation/pepperDie/pepperDie0013.png",
            "img/animation/pepperDie/pepperDie0014.png",
            "img/animation/pepperDie/pepperDie0015.png",
            "img/animation/pepperDie/pepperDie0016.png",

            "img/scrollup.gif",

            "img/pauseBackground.png",

            // spil
            //"img/zibbo.gif"
            "img/spil/A10_200x62.png",
            "img/spil/Splash_Image.png",

        ]);
        loader.onProgress = function(){
            var loader = 100 - this.loadCount;
            if( loader < 0 ){
                loader = 0;
            }

            loaderPepperElement.style.width = loader * 2 + "px";
        };

        loader.onComplete = function(){
            $(loaderView).fadeOut('slow', function(){
                init();
                holder.style.display="block";
                clearInterval(loadInterval);


                showSplash();

            });
        };

        loader.load();

        // TODO : NEED IT BUT COMMENT - RETURN IT
        resize();
    }

    function showSplash(){


        function start(){
            this.game.view.stage.removeChild( splashImage );
            splashImage = null;
            splashWasShown = true;

//            spilBottom.style.display = "block";
        }

        if( IS_SHOW_SPLASH_SCREEN ){
            TweenLite.to(blackSplash, 0.3, {alpha:0, delay : 3});
            TweenLite.to(splashImage, 0.3, {alpha:0, delay : 3});
            setTimeout(function(){
                start();
            }, 3300);
        } else {
            blackSplash.alpha = 0;
            splashImage.alpha = 0;
            start();
        }


    }

    function showCredits(){
        creditsArt.visible = true;
        creditsArtName.visible = true;

        creditsCode.visible = true;
        creditsCodeName.visible = true;
        creditsBackButton.visible = true;

        pepperLogo.visible = false;
        buttonContainer.visible = false;
    }

    function hideCredits(){
        creditsArt.visible = false;
        creditsArtName.visible = false;

        creditsCode.visible = false;
        creditsCodeName.visible = false;
        creditsBackButton.visible = false;

        pepperLogo.visible = true;
        buttonContainer.visible = true;
    }

    function jump(){
        if(game.isPlaying)game.steve.jump();
    }

    function init()
    {
        GAME.woodBottom = new PIXI.DisplayObjectContainer();

        gameMode =  GAME_MODE.INTRO;
        interactive = false;

        game = new GAME.RprEngine();
        window.game = game;

        holder.appendChild(game.view.renderer.view);
        game.view.renderer.view.style.position = "absolute";
        //game.view.renderer.context.webkitImageSmoothingEnabled = false
        game.view.renderer.view.webkitImageSmoothingEnabled = false;
        //stats = new Stats();

//        holder.appendChild( stats.domElement );
//        stats.domElement.style.position = "absolute";
//        stats.domElement.style.top = "0px";

        if(GAME.lowMode)
        {
            setInterval(update, 1000/30);
        }
        else
        {
            requestAnimFrame(update);
        }

        game.onGameover = onGameover;
        $(game.view.renderer.view).mousedown(function(event){
            event.preventDefault();

            jump();
        });

        $(game.view.renderer.view).mouseup(function(event){
            event.preventDefault();

            if(game.isPlaying)game.steve.fall();
        });

        game.view.renderer.view.addEventListener("touchstart", onTouchStart, true);
        game.view.renderer.view.addEventListener("touchend", onTouchEnd, true);

        document.onkeydown = function (e) {
            e = e || window.event;
            // use e.keyCode
            e.preventDefault();
            if( e.keyCode == 32 ) {
                jump();
            }
        };

        document.onkeyup = function (e) {
            e = e || window.event;
            // use e.keyCode
            e.preventDefault();
            if( e.keyCode == 32 ) {
                if(game.isPlaying)game.steve.fall();
            }
        };

        // SHOW LAND
        //this.game.segmentManager.reset();
        splashScreenLand = new PIXI.DisplayObjectContainer();
        var firstLand = new PIXI.Sprite.fromImage("img/land.png");
        splashScreenLand.addChild( firstLand );
        var secondLand = new PIXI.Sprite.fromImage("img/land.png");
        secondLand.position.x = secondLand.width;
        splashScreenLand.addChild( secondLand );
        //this.game.view.stage.addChild( splashScreenLand );
        splashScreenLand.position.y = 555;
        game.view.hud.addChild( splashScreenLand );

        //document.addEventListener("touchmove", onTouchMove, true);
        black = new PIXI.Sprite.fromImage("img/blackSquare.jpg");
        showBlack();

        //countdown = new GAME.Countdown();
        //game.view.hud.addChild(countdown);

        buttonContainer = new PIXI.DisplayObjectContainer();

        pepperLogo = new PIXI.Sprite.fromImage("img/logo.png");
        buttonContainer.addChild( pepperLogo );
        //pepperLogo.visible = false;

        var startButton = new UiButton("img/buttonPlay0001.png", 150, 290);
        startButton.action = function(){

            if( splashImage && splashImage.alpha != 0 ){
                return;
            }

            //console.log("Start");
            if( GAME.fakeBackground ){
                //setTimeout(function(){
                    //GAME.fakeBackground.visible = false;
                //}, 500);

            }
            startGame();
        };
        buttonContainer.addChild( startButton );

        var creditsButton = new UiButton("img/creditsButton0001.png", 150, 450);
        creditsButton.action = function(){

            if( splashImage && splashImage.alpha != 0 ){
                return;
            }

            showCredits();
        };
        buttonContainer.addChild( creditsButton );

        var moreGamesButton = new UiButton("img/moreGamesButton0001.png", 150, 380);
        moreGamesButton.action = function(){

            if( splashImage && splashImage.alpha != 0 ){
                return;
            }

            showMoreGames();
        };
        buttonContainer.addChild( moreGamesButton );
        //

        this.game.view.stage.addChild( buttonContainer );

        var marginTop = 90;

        soundButton = getPauseButton();

        this.game.view.stage.addChild( soundButton );

        //soundButton

        homeButton = new UiButton("img/homeButton.png", marginTop, marginTop);
        homeButton.visible = false;
        homeButton.action = function(){
            showHomeScreen();
        };
        //showHomeScreen
        this.game.view.stage.addChild( homeButton );

        restartButton = new UiButton("img/restartButton.png", 100, 100);
        restartButton.visible = false;
        //restartButton.sprite.scale.x = restartButton.scale.x = 1.2;
        restartButton.action = function(){
            restartGame();
        };
        this.game.view.stage.addChild( restartButton );

        moreGamesButtonGameOver = new UiButton("img/moreGamesButton0001.png", 150, 380);
        moreGamesButtonGameOver.visible = false;
        moreGamesButtonGameOver.action = function(){
            showMoreGames();
        };
        this.game.view.stage.addChild( moreGamesButtonGameOver );


        this.game.view.stage.addChild( GAME.woodBottom );


        // SCORE
        scoreBackground = new PIXI.Sprite.fromImage("img/scorePopupBackground.png");
        scoreBackground.visible = false;
        this.game.view.stage.addChild(scoreBackground);

        var font = "bold 30px BadaBoom";
        var scoreMarginLeft = 105;
        yourScore = new PIXI.Text( yourScoreValue , {font: font, fill: "#3DE7F7", align: "right", wordWrap : true, wordWrapWidth : 200});
        yourScore.position.x = scoreMarginLeft;
        yourScore.position.y = 103;
        scoreBackground.addChild( yourScore );

        yourBestScore = new PIXI.Text( yourBestScoreValue , {font: font, fill: "#3DE7F7", align: "right", wordWrap : true, wordWrapWidth : 200});
        yourBestScore.position.x = scoreMarginLeft;
        yourBestScore.position.y = 203;
        scoreBackground.addChild( yourBestScore );

        // credits
        var font = "bold 50px BadaBoom";
        //var marginTop = 53;

        creditsArt = new PIXI.Text("Art: ", {font: font, fill: "#3DE7F7", align: "right", wordWrap : true, wordWrapWidth : 200});
        creditsArtName = new PIXI.Text("Pavel Frolov", {font: font, fill: "#FFF39C", align: "right", wordWrap : true, wordWrapWidth : 400});
        //creditsArt.visible = false;
        this.game.view.stage.addChild(creditsArt);
        this.game.view.stage.addChild(creditsArtName);

        creditsCode = new PIXI.Text("Code: ", {font: font, fill: "#3DE7F7", align: "right", wordWrap : true, wordWrapWidth : 200});
        creditsCodeName = new PIXI.Text("Oleh Smazhnov", {font: font, fill: "#FFF39C", align: "right", wordWrap : true, wordWrapWidth : 600});
        //creditsArt.visible = false;
        this.game.view.stage.addChild(creditsCode);
        this.game.view.stage.addChild(creditsCodeName);

        creditsBackButton = new UiButton("img/homeButton.png", 100, 100);
        creditsBackButton.action = function(){
            hideCredits();
        };

        this.game.view.stage.addChild(creditsBackButton);

        //hideCredits();
        creditsArt.visible = false;
        creditsArtName.visible = false;

        creditsCode.visible = false;
        creditsCodeName.visible = false;
        creditsBackButton.visible = false;


        // pause popup
        pausePopup = new PIXI.Sprite.fromImage("img/pauseBackground.png");

        this.game.view.stage.addChild(pausePopup);

        var pauseHomeButton = new UiButton("img/homeButton.png", marginTop, marginTop);
        pauseHomeButton.setPosition( 65, 80 );
        //pauseHomeButton.visible = false;
        pauseHomeButton.action = function(){
            pausePopup.visible = false;
            isLandscape = true;
            game.steve.view.play();
            showHomeScreen();
        };

        pausePopup.addChild( pauseHomeButton );

        pauseButton = getPauseButton();
        pauseButton.setPosition( 155, 78 );
        pauseButton.visible = true;
        pauseButton.switchOn = false;
        pauseButton.sprite.texture = pauseButton.soundOffTexture;
        pausePopup.addChild( pauseButton );

        pausePopup.visible = false;

        // Landscape
        landscapeBackground = new PIXI.Sprite.fromImage("img/blackSquare.jpg");
        landscapeBackground.visible = false;
        this.game.view.stage.addChild(landscapeBackground);

        landscape = new PIXI.Sprite.fromImage("img/rivers.png");
        landscape.visible = false;
        this.game.view.stage.addChild(landscape);


//        spilBottom = document.createElement("img");
//        spilBottom.src = logoSrc;
//        spilBottom.className = "logoBottom";
//        spilBottom.style.position = "absolute";
//        spilBottom.style.display = "none";
//        spilBottom.addEventListener('click', logoAction);
//
//        document.body.appendChild(spilBottom);


        spilBottom = new PIXI.Sprite.fromImage("img/spil/A10_200x62.png");
        spilBottom.interactive = true;
        spilBottom.buttonMode = true;
        spilBottom.mousedown = spilBottom.touchstart = function(data){
//          window.open("http://bbs.82java.com", "_blank");
        };
        this.game.view.stage.addChild( spilBottom );
//

        blackSplash = new PIXI.Sprite.fromImage("img/blackSquare.jpg");
        this.game.view.stage.addChild( blackSplash );


        createSplashImage();




        checkOrientation();

        // change orientation
        window.addEventListener("orientationchange", function() {
            checkOrientation();
        }, false);

        resize();

        scrollCanvas = document.getElementsByTagName("canvas")[1];




        if( isiPhoneIOS7 ){


             setInterval(function(){
                 window.scrollTo(-1, 0);

                 if( scrollCanvas ){
                     // portrait
                     if( window.orientation == 0 ){
                         scrollCanvas.style.top = "0px";
                         scrollUpImage.style.display = "none";
                     } else {
                         if( window.innerHeight == 320 ){
                             scrollCanvas.style.top = "0px";
                             scrollUpImage.style.display = "none";

                             if( game.view.renderer.view.style.height != "320px" ){
                                 resize();
                             }

                         } else if( window.innerHeight < 320 ){
                             scrollUpImage.style.display = "block";
                             if( !splashWasShown ){
                                 scrollUpImage.children[1].style.display = "block";
                                 scrollUpImage.children[0].style.display = "none";
                                 setTimeout(function(){
                                     scrollUpImage.children[1].style.display = "none";
                                     scrollUpImage.children[0].style.display = "block";
                                     splashWasShown = true;
                                 }, 3000);
                             }
                         }
                     }
                 }

             }, 100);
         }

    }

    function createSplashImage(){

        splashImage = new PIXI.Sprite.fromImage("img/spil/Splash_Image.png");
        //splashImage.width = 640;
        //splashImage.height = 480;
        splashImage.interactive = true;
        splashImage.buttonMode = true;
        splashImage.mousedown = splashImage.touchstart = function(data){
//          window.open("http://bbs.82java.com", "_blank");
//            splashScreenAction();
        };
        this.game.view.stage.addChild( splashImage );
    }

    function getPauseButton(){
        var soundButton = new UiButton("img/pauseButton.png", 100, 90);
        soundButton.visible = false;

        soundButton.switchOn = true;
        soundButton.soundOnTexture = new PIXI.Texture.fromImage("img/pauseButton.png");
        soundButton.soundOffTexture = new PIXI.Texture.fromImage("img/playButton.png");

        soundButton.action = function(){
            // change image
            if( soundButton.switchOn ){
                soundButton.switchOn = false;
                //audioElement.pause();


                SPIL_GAMES_API.GameBreak.request(pauseGame, resumeGame);

                pausePopup.visible = true;

                window.soundButton.visible = false;
                homeButton.visible = false;

                isLandscape = false;
                game.steve.view.stop();

                soundButton.sprite.texture = soundButton.soundOffTexture;

                window.soundButton.sprite.texture = soundButton.soundOnTexture;
                window.soundButton.switchOn = true;

            } else {
                soundButton.switchOn = true;

                //audioElement.play();
                isLandscape = true;
                game.steve.view.play();

                window.soundButton.visible = true;
                homeButton.visible = true;

                pausePopup.visible = false;

                soundButton.sprite.texture = soundButton.soundOnTexture;

                pauseButton.sprite.texture = soundButton.soundOffTexture;
                pauseButton.switchOn = false;
            }
            // change status
        };

        return soundButton;
    }

    function showHomeScreen(){

        game.isHomeScreen = true;

        splashScreenLand.visible = true;
        buttonContainer.visible = true;

        homeButton.visible = false;
        soundButton.visible = false;

        //game.gameover();
        showBlack();
        game.segmentManager.stop();
        game.view.hideHud();

        game.steve.view.visible = false;
        game.steve.level = 0;
        //game.steve.isDead = true;
        game.isPlaying = false;
        game.steve.isFlying = false;
        game.view.score.hide();

        // reset value
        game.score = game.pickupCount = 0;




        game.steve.position.x = 200;
        //game.steve.normalMode();
        GAME.camera.x = game.steve.position.x - 100;

        //game.view.game.removeChild(game.steve.view);
        addSteve = true;

        TweenLite.to(pepperLogo, 0.3, {alpha:1});
        //pepperLogo.alpha = 1;


    }

    function showBlack(){
        game.view.hud.addChild(black);
        TweenLite.to(black, 0.3, {alpha:0.75, delay:0.5});
    }

    function onIntroFaded()
    {
        interactive = true;
    }

    function onGameover()
    {
        gameMode = GAME_MODE.GAME_OVER;
        interactive = false;
    }

    function showGameover()
    {
        onGameoverShown();
    }

    function onGameoverShown()
    {
        interactive = true;

        if( gameMode == GAME_MODE.GAME_OVER ){

            pausePopup.visible = false;

            restartButton.visible = true;
            scoreBackground.visible = true;
            moreGamesButtonGameOver.visible = true;

            yourScoreValue = game.view.score.score;

            yourScore.setText(yourScoreValue);

            if( yourScoreValue > yourBestScoreValue ){
                yourBestScoreValue = yourScoreValue;
            }
            yourBestScore.setText( yourBestScoreValue );

            game.view.score.hide();

            //soundButton.visible = false;
            homeButton.visible = false;
        }
    }

    function onTouchStart(event)
    {
        event.preventDefault();
        jump();
    }

    function onCountdownComplete()
    {
        interactive = true;
        gameMode = GAME_MODE.PLAYING;

    }

    function onTouchEnd(event)
    {
        event.preventDefault();
        if(game.isPlaying)game.steve.fall();
    }

    function restartGame(){


        game.steve.isDead = false;
        //game.steve.normalMode();
        //game.steve.normalMode();
        game.steve.rotationSpeed = 0;

        game.view.game.removeChild(game.steve.view);
        game.steve = new GAME.Steve;

        game.steve.position.x = 200;

        GAME.camera.x = game.steve.position.x - 100;
        game.reset();
        var restart = true;
        startGame( restart );
        //game.view.zoom = 0;
        //TweenLite.to(game.view, 0.5, {zoom: 0,ease: Cubic.easeIn})
    }

    function showMoreGames(){
//      window.open("http://bbs.82java.com", "_blank");
        //moreGamesAction();
    }

    function startGame( isRestart ){

        game.isHomeScreen = false;

        interactive = false;
        if( addSteve ){

            //game.steve = new GAME.Steve;
            addSteve = false;
            game.steve.position.x = 200;
            game.steve.view.visible = true;
            //game.steve.isDead = false;
        }


        if( isRestart ){
            game.restart();
        } else {
            game.start();
        }


        gameMode = GAME_MODE.COUNT_DOWN;
        if(black)TweenLite.to(black, 0.2, {alpha:0});

        //game.view.hud.removeChild( splashScreenLand );
        splashScreenLand.visible = false;

        // logo
        TweenLite.to(pepperLogo, 0.3, {alpha:0, onComplete:function(){
            //logo.visible = false;
            //logo.setTexture(PIXI.Texture.fromFrame("gameOver.png"));
            game.view.showHud();

            // wat???
            if( black.parent != undefined ){
                game.view.hud.removeChild(black);
            }

            //countdown.startCountDown(onCountdownComplete);
            interactive = true;
        }});



        //pepperLogo

        buttonContainer.visible = false;

        homeButton.visible = true;
        soundButton.visible = true;

        restartButton.visible = false;
        scoreBackground.visible = false;
        moreGamesButtonGameOver.visible = false;
    }

    function resize()
    {
        // 90, -90 land
        // 0 - portrait
        if( window.orientation == 0 ){
            var width = window.innerWidth;
            var height = window.innerHeight;
        } else {
            var width = $(window).width();
            var height = $(window).height();
        }

        //alert( window.innerWidth + " " + $(window).width() );

        var ratio = height / windowHeight;

        //alert();

        if(game)
        {
            var view = game.view.renderer.view;
            //view.style.width = 600 * ratio +"px"
            view.style.height = windowHeight * ratio + "px";

            var newWidth = ( width / ratio );

            view.style.width = width + "px";


            if( isiPhoneIOS7 ){
                var img = scrollUpImage.children[1],
                    imageScale = 1,
                    newImageHeight = parseInt( view.style.height );

                if( img.height > newImageHeight ){
                    imageScale = newImageHeight / img.height;
                }
                img.height = newImageHeight;
                img.style.left = parseInt( view.style.width ) / 2 - ( img.width * imageScale ) / 2 + "px";
            }



            //windowHeight = windowHeight * ratio;

            if(black)
            {
                black.scale.x = newWidth/16;
                black.scale.y = windowHeight/16;
            }

            if( landscapeBackground ){
                landscapeBackground.scale.x = newWidth / 16;
                landscapeBackground.scale.y = windowHeight / 16;
            }

            game.view.resize(newWidth , windowHeight);

            buttonContainer.position.x = newWidth / 2 - 280;
            buttonContainer.position.y = 50;

            restartButton.setPosition( newWidth / 2 - 110, GAME.height / 2 + 100 );
            homeButton.setPosition( newWidth - 230, homeButton.position.y );
            soundButton.setPosition( newWidth - 130, soundButton.position.y );

            if( game.view.score.scoreText ){

                game.view.score.scoreBackground.position.x = newWidth / 2 - 179;
                game.view.score.scoreBackground.position.y = 5;

                game.view.score.scoreText.position.x = newWidth / 2 - 110;
                game.view.score.scoreText.position.y = 53;

                game.view.score.scoreValue.position.x = newWidth / 2 - 10;
                game.view.score.scoreValue.position.y = 53;
            }


            scoreBackground.position.x = newWidth / 2 - scoreBackground.texture.width / 2;
            scoreBackground.position.y = windowHeight / 2 - scoreBackground.texture.height / 2 - 120;

            moreGamesButtonGameOver.setPosition( newWidth / 2 - 105, GAME.height / 2 + 20 );

            //alert( "newWidth: " + newWidth );
            landscape.position.x = newWidth / 2 - landscape.width / 2;
            landscape.position.y = windowHeight / 2 - landscape.height / 2;

            // credits
            var creditsMarginX = GAME.width / 2 - 250;
            var creditsNameMarginX = GAME.width / 2 - 90;

            // art
            creditsArt.position.x = creditsMarginX
            creditsArt.position.y = 100;

            creditsArtName.position.x = creditsNameMarginX;
            creditsArtName.position.y = 100;

            // code
            creditsCode.position.x = creditsMarginX;
            creditsCode.position.y = 200;

            creditsCodeName.position.x = creditsNameMarginX;
            creditsCodeName.position.y = 200;


            creditsBackButton.setPosition( GAME.width / 2 - 50, 300 );

            // pause popup
            pausePopup.position.x = GAME.width / 2 - pausePopup.width / 2;
            pausePopup.position.y = windowHeight / 2 - pausePopup.height / 2;

//            spilBottom.style.bottom = "5px";
//            spilBottom.style.right = "5px";

//            spilBottom.style.top = windowHeight - spilBottom.height - 30 + "px";
            spilBottom.position.x = GAME.width - spilBottom.width - 10;
            spilBottom.position.y = windowHeight - spilBottom.height - 10;

            //spilBottom.width *= ratio;

            // do it onload
            if( window.orientation == 0 ){
                landscape.visible = true;
            }

            //scrollUpImage.style.left = width / 2 - 85 + "px";
            document.getElementById("scrollup").children[0].style.left = width / 2 - 85 + "px";
//            checkIOS7();

            blackSplash.width = GAME.width;
            blackSplash.height = windowHeight;

            if( window.orientation == 0 ){
                var newSplashWidth = GAME.width * 1.3,
                    prop =  newSplashWidth / splashImage.width;
                splashImage.width = newSplashWidth;
                splashImage.height *= prop;
            }
            splashImage.position.x = GAME.width / 2 - splashImage.width / 2;
            splashImage.position.y = windowHeight / 2 - splashImage.height / 2;
        }

        GAME.width = (width /ratio);
        GAME.height = windowHeight;
        loaderView.style.left = width / 2 - 216 + "px";
        loaderView.style.top = height / 2 - 200 + "px";




        //renderer.resize(width, height);
    }

    function update()
    {
        //stats.begin();


        game.update();
        if(!GAME.lowMode)
        {
            requestAnimFrame(update);
        }

        //stats.end();
    }

    /*
     *  little time class!
     */
    var Time = function()
    {
        this.deltaTime = 1;
        this.lastTime = 0;
    };

    Time.constructor = Time;

    Time.prototype.update = function()
    {
        var currentTime =  Date.now();
        var passedTime = currentTime - this.lastTime;

        if(passedTime > 100){
            passedTime = 100;
        }

        ///this.DELTA_TIME = passedTime ;

//			1 = 17  // 60??
        this.DELTA_TIME = (passedTime * 0.06);
        //console.log(this.DELTA_TIME);
//		trace(DELTA_TIME);
        // 60 ---> 1
        // 30 ---> 2
        this.lastTime = currentTime;
    };

// create an instance!



