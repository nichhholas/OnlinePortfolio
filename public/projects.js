$( document ).ready(function() {      
    var is_mobile = false;
    console.log(isMobileDevice())

    if( isMobileDevice()) {
        is_mobile = true;       
    }

    // now i can use is_mobile to run javascript conditionally

    if (is_mobile == true) {
        //Conditional script here
        alert("Best viewed on computer")
        // $.hide("flip-card-back")
        let classList = document.getElementsByClass("flip-card-back")
        for(var element in classList){
        	element.style.display="none"
        }
    }
 });


function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
