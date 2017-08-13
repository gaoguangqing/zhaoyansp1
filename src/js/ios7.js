// do it if ios7 safari


isSafary = !window.navigator.userAgent.match(/CriOS/i) && window.navigator.userAgent.match(/Safari/i);
isiPod = window.navigator.userAgent.match(/iPod/i);
isiPhone = window.navigator.userAgent.match(/iPhone/i);
isiPhoneIOS7 = (/(?:OS\s*[7]+_\d+(?:_\d+)?\s*)/i.test(window.navigator.userAgent) && !window.navigator.standalone) && (isiPhone || isiPod) && isSafary;

//overlay = document.getElementById("overlay");

allowScroll = false;

mainCanvas = document.getElementById("mainCanvas");
if( !isiPhoneIOS7 ){
    mainCanvas.style.display = "none";
}

//function checkIOS7(){
//
//    if( isiPhoneIOS7 ){
//        // 90, -90 land
//        // 0 - portrait
//        if( window.orientation == 90 || window.orientation == -90 ){
//            //overlay.style.display = "block";
//            allowScroll = true;
//
//        } else {
//            overlay.style.display = "none";
//        }
//
////        if( scrollUp == null ){
////            createScrollUp();
////        }
//    }
//}
//
//overlay.addEventListener('touchmove',function() {
//    if( window.innerHeight >= 320 ){
//        overlay.style.display = "none";
//        overlay.style.width = "0px";
//
//    } else {
//        overlay.style.display = "block";
//        overlay.style.width = "10000px";
//    }
//});
//
//function checkOverlay(){
//    if( window.innerHeight >= 320 ){
//        overlay.style.display = "none";
//    }
//}

//setInterval(checkOverlay, 100);

function createScrollUp(){
    //scrollUp = new PIXI.Prite.fromImage("img/scrollup.gif");
    //game.view.stage.addChild( scrollUp );
}

//
//(function(){
//    setTimeout(function(){
//        if(scrollY) return;
//        scrollTo(scrollX, 1);
//        setTimeout(function(){
//        if(scrollY == 1)
//            scrollTo(scrollX, 0);
//        }, 1);
//    }, 1);
//})();

