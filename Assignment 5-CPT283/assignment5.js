//fade image//

$(document) .ready (function() {

    $('#image') .fadeOut(10) .delay(25) .fadeIn(500);
}); 

 
/* $(document) .ready (function() {
    $('#detail') .click(function() {
        $('#bullets') .show();

    });

 });*/

/* Details*/
$(document) .ready (function() {
    $('#bullets') .hide();
    $('#detail') .click(function(event) {
        $('#bullets') .toggle();

    });

}); 
/*Map*/
$(document) .ready (function() {
    $('.map') .click(function() {
        $('.map') .animate({
            marginleft: '350px',
            width: '350px',
        }, "linear");
        
    });

}); 

/*Kitchen*/
$(document) .ready (function() {
    $('.kitchen') .click(function() {
        $('.kitchen') .animate({
            marginright: '450px',
            width: '400px',
        }, "slow");
        
    });

}); 
/*Book button*/
$(document) .ready (function() {
    $('#book') .show();
    $('#book') .click(function(event) {
        $('#contact') .toggle("slow", function(){
            alert("Only a few spots left!")
        });

    });

}); 