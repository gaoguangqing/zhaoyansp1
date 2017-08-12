// 90, -90 land
// 0 - portrait

function checkOrientation(){
    // Announce the new orientation number
    //alert(window.orientation);
    if( window.orientation == 0 ){
        // portrait
        //var width = window.innerWidth;
        //var height = window.innerHeight;

        //alert( window.innerWidth );
        landscapeBackground.visible = true;
        landscape.visible = true;
        window.isLandscape = false;


        window.scrollTo(0, 0);

        if( window.innerHeight !== window.outerHeight ){
            resize();
        }
        //landscape.position.x = width / 2 - landscape.width / 2;
        //landscape.position.y = height / 2 - landscape.height / 2;

    } else {
        // landscape
        landscape.visible = false;
        window.isLandscape = true;
        landscapeBackground.visible = false;
    }
}

//var canvas = document.getElementById("mainCanvas");

//function hideMobileBrowser () {
//    var htmlStyle = document.documentElement.style;
//
//    // Ensure the page is tall enough to scroll
//    htmlStyle.minHeight = "9001px";
//
//    // Force a scroll, hiding the address bar
//    window.scrollTo(-1, 0);
//
//    // Wait until the address bar has been scrolled away... A more
//    // sophisticated version might repeatedly check on a rapid
//    // interval rather than waiting a full half a second
//    window.setTimeout(function () {
//        htmlStyle.minHeight = "";
//        // Resize the canvas to the new viewport size
//        //canvas.width = window.innerWidth;
//        //canvas.height = window.innerHeight;
//
//        var ratio = window.devicePixelRatio;
//        canvas.width = Math.ceil(ratio*window.innerWidth);
//        canvas.height = Math.ceil(ratio*window.innerHeight);
//        canvas.style.webkitTransformOrigin = "top left";
//        canvas.style.webkitTransform = "scale(" + (1/ratio) + ")";
//
//    }, 500);
//}
//window.addEventListener("orientationchange", hideMobileBrowser, false);
//window.addEventListener("DOMContentLoaded", function () {
//    hideMobileBrowser();
//}, false);


