$(() => {
    console.log('js connected');

    $('.left').hover(function(e) {
        $(e.target).addClass('magictime slideLeftReturn');
        setTimeout(function() {
            $(e.target).removeClass('magictime slideLeftReturn');
        }, 1000);
    });

    $('.right').hover(function(e) {
        $(e.target).addClass('magictime slideRightReturn');
        setTimeout(function() {
            $(e.target).removeClass('magictime slideRightReturn');
        }, 1000);
    });

    $('.intro').hover(function(e) {
    	$(e.target).addClass('animated rubberBand');
        setTimeout(function() {
            $(e.target).removeClass('animated rubberBand');
        }, 500);
    })

})
