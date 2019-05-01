window.onload = function () {
    var figcaption = document.getElementsByTagName("figcaption")[0];

    for (var i = 0; i <= 6; i++) {
        var imgs = document.getElementsByTagName("img");
        imgs[i].onclick = function () {
            imgs[1].src=this.getAttribute("src").replace(/small/, "medium");
            imgs[1].title=this.title;
            figcaption.innerHTML=this.title;
        }
    }

    figcaption.onmouseover = function () {
        startMove(80);
    }
    figcaption.onmouseout = function () {
        startMove(0);
    }
}

var timer = null;
var opacity = 0;

function startMove(Target) {
    var figcaption = document.getElementsByTagName("figcaption")[0];
    clearInterval(timer);
    timer = setInterval(function () {
        var speed = 0;
        if (opacity > Target) {
            speed = -4;
        } else {
            speed = 4;
        }
        if (opacity == Target) {
            clearInterval(timer);
        } else {
            opacity += speed;
            figcaption.style.opacity = opacity/100;
        }
    }, 50)
}
