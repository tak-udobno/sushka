$(window).on('load', function() {
    setInterval(function(){
        function caltucateTime() {
            const now = Date.now();
            const today = new Date().setHours(23,59,59);
            const dif = today - now;
            const hours = Math.floor(dif / (1000 * 60 * 60));
            const minutes = Math.floor((dif - hours * 1000 * 60 * 60)/ (1000 * 60));
            const seconds = Math.floor((dif - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);

            return {hours: hours, minutes: minutes, seconds: seconds};
        }

        function transformTime(time) {
            const result = {};

            for (let key in time) {
                const item = time[key];

                result[key] = item >= 10 ? item : '0' + item;
            }

            return result;
        }

        function renderTime(time) {
            const className = 'timer-item__how_';

            for (let key in time) {
                $('.' + className + key).html(time[key]);
            }
        }

        let time = caltucateTime();

        time = transformTime(time);

        renderTime(time);
    }, 1000);

    $('.video-play').click(function(){
        $(this).remove();

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('video', {
                videoId: 'vPjlFA4jeDA',
                events: {
                    onReady: start,
                }
            });

            function start() {
                $('#video').show();
                player.playVideo();
            }
        }

        onYouTubeIframeAPIReady();
    });

    $('.ba-slider').bxSlider({
        auto: true,
    });

    $('.captions-item').click(function(){
        const id = $(this).attr('data-title');

        $('.wrapper-content').hide();

        $('.wrapper-content[data-content=' + id +']').show();
    });

    $('.close').click(function(){
        $('.wrapper-content').hide();

        $('.wrapper-content[data-content=main]').show();
    });
});

$(document).ready(function() {
    $(".to_form").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $('#form_scroll').offset().top
        }, 700);
    });
});