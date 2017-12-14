$(() => {
    console.log('js connected');

    const mediapics = ["./images/mediaddict.png", "./images/twinpeaks.png", "./images/addshow.png", "./images/leaderboard.png"],
        pelspics = ["./images/pels.png", "./images/map.png", "./images/events.png", "./images/order.png"],
        bandpics = ["./images/band.png", "./images/mainpage.png", "./images/profile.png", "./images/explore.png"],
        scrabblepics = ["./images/scrabble.png", "./images/Instructions.png", "./images/inplay.png", "./images/Letters.png"];

    let count = 0;
    setInterval(function() {
        count++;
        if (count === 4) {
            count = 0;
        }
        $("#pels_image").attr("src", pelspics[count]);
        $("#media_image").attr("src", mediapics[count]);
        $("#band_image").attr("src", bandpics[count]);
        $("#scrabble_image").attr("src", scrabblepics[count]);

    }, 1000);

    let selected = false,
        modal;
    $(document.body).on('click', 'span', (e) => {
        if (!selected) {
            modal = "." + $(e.target).attr('id') + "_modal";
            console.log(modal);
            $(modal).show();
        }
        selected = true;
    })

    $('.close').on('click', (e) => {
        $(modal).hide();
        selected = false;
    })

    $('.project>img').css({
        "width": $(window).width() / 3,
        "height": ($(window).width() / 3) / 1.49495
    });

    $(window).resize(function() {
        $('.project>img').css({
            "width": $(window).width() / 3,
            "height": ($(window).width() / 3) / 1.49495
        });
    });

    $(window).on('scroll', (e) => {
        if (window.scrollY > $(window).height()) {
            $('.navbar').css({
                "position": "fixed",
                "top": 0,
                "z-index": 10
            });
        } else {
            $('.navbar').css("position", "static");
        }
    })

})