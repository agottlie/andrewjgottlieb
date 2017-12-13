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
        $("#pels").css("background-image", `url("` + pelspics[count] + `")`);
        $("#mediaddict").css("background-image", `url("` + mediapics[count] + `")`);
        $("#bandessentials").css("background-image", `url("` + bandpics[count] + `")`);
        $("#scrabble").css("background-image", `url("` + scrabblepics[count] + `")`);

    }, 1000);

    let selected = false,
        modal;
    $(document.body).on('click', '.project', (e) => {
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

    $('.project').css({
        "width": $(window).width() / 3,
        "height": ($(window).width() / 3) / 1.49495
    });

    $(window).resize(function() {
        $('.project').css({
            "width": $(window).width() / 3,
            "height": ($(window).width() / 3) / 1.49495
        });
    });

    //--------scrollmagic--------------


    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
            triggerElement: ".pin1",
            triggerHook: 0,
            reverse: true
        })
        .setPin(".pin1")
        .addTo(controller);

})