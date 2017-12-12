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
        $("#pels").attr("src", pelspics[count]);
        $("#mediaddict").attr("src", mediapics[count]);
        $("#bandessentials").attr("src", bandpics[count]);
        $("#scrabble").attr("src", scrabblepics[count]);

    }, 1000);

    let selected = false,
        modal;
    $(document.body).on('click', '.modal-click', (e) => {
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

})