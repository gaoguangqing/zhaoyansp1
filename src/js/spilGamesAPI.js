var pauseGame = function(){
    console.log("pause");
};
//if( game && game.steve ){
//    isLandscape = false;
//    game.steve.view.stop();
//}
var resumeGame = function(){
    console.log("pause");
};
//if( game && game.steve ){
//    isLandscape = true;
//    game.steve.view.play();
//}

//if( GameAPI ){
//    GameAPI.loadAPI(function(API){
//        GameAPI.GameBreak.request(fnPause, fnResume);
//    });
//}


//
var moreGamesAction = function(){
    console.log("moreGames works");
};

var logoSrc = "";
var logoAction = function(){
    console.log("logo action works");
};

var IS_SHOW_SPLASH_SCREEN = false;

var splashScreenAction = function(){
    console.log( "splashScreenAction" );
};

var SPIL_GAMES_API = null;

function iniSpilGamesApi(){
    GameAPI.loadAPI (function (apiInstance) {

        SPIL_GAMES_API = apiInstance;

        // The API is ready for use.
        // It can be accessed by using the 'apiInstance' variable
        // For example: apiInstance.Branding.getLogo();
        console.log('GameAPI version ' + apiInstance.version + ' loaded!');
        // getLogo example

        // SPLASH SCREEN
        // getSplashScreen example
        var splashScreenData = apiInstance.Branding.getSplashScreen();

        if (splashScreenData.show) {
            IS_SHOW_SPLASH_SCREEN = true;
            // Creates a DOM element and use the values returned by the call
            var splashScreen = document.createElement('div');

            splashScreen.setAttribute('id', 'splash-screen');
            splashScreen.style.display = "none";
            // Dispatches the splash screen action when clicked
            splashScreen.addEventListener('click', splashScreenData.action);
            splashScreenAction = splashScreenData.action;


            //var splashScreenText = document.createElement('p');
            //splashScreenText.innerText = 'Splash Screen';
            //splashScreenText.setAttribute('class', 'splash_screen_text');

            //splashScreen.appendChild(splashScreenText);
            document.body.appendChild(splashScreen);
        } else {
            console.log("splashScreenData failed");
        }

        //


        // getLogo example
        var logoData = apiInstance.Branding.getLogo();

        // Shows the logo only when it is configured; otherwise, ignore it.
        if (logoData.image) {
            // Creates a DOM element and uses the values returned by the call
            var logo = document.createElement('img');

            logo.src = logoData.image;
            logo.style.display = "none";
            logoSrc = logoData.image;
            logoAction = logoData.action;
            //logo.addEventListener('click', logoData.action);

            document.body.appendChild(logo);
        }


        // mode games
        // Gets links from the API every time
        var links = apiInstance.Branding.getLinks();
        console.log( links );
        for (var linkName in links) {

            // Ad-hoc handling of each linkName value
            switch (linkName) {

                // Add the 'more_games' button only if it is detected
                case 'more_games':
                    var moreButton = document.createElement('a');
                    moreButton.innerText = 'More Games';
                    moreButton.addEventListener('click', links[linkName].action);
                    moreGamesAction = links[linkName].action;
                    moreButton.style.display = "none";
                    document.body.appendChild(moreButton);
                    break;

                // You can handle different required links in different ways
                // by adding an extra case - break clause.
                // Then, we look for any default buttons we may handle
                default:
                    if (window.console && console.log) {
                        console.log("This game does not handle the link: " + linkName);
                    }
                    break;
            }
        }


        onReady();
    });

}
