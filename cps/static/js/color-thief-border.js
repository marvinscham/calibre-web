const colorThief = new ColorThief();

function set_border_color(el) {
    try {
        col = colorThief.getColor(el);
        el.style.borderLeftColor = 'rgb(' + col + ')';
        el.classList.add("bordered");
    } catch (err) {
        // hehe
    }
}

function set_border_colors() {
    const imgs = document.querySelectorAll('.color_border:not(.bordered)');
    const arrayLength = imgs.length;

    if (arrayLength > 0) {
        for (var i = 0; i < arrayLength; i++) {
            if (imgs[i].complete) {
                set_border_color(imgs[i]);
            } else {
                imgs[i].addEventListener('load', function () {
                    set_border_color(imgs[i]);
                });
            }
        }
    }
}

set_border_colors();

var interval = window.setInterval(function () {
    set_border_colors();
}, 500);