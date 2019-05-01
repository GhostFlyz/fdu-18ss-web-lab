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
var alpha = 0;

function startMove(iTarget) {
    var figcaption = document.getElementsByTagName("figcaption")[0];
    clearInterval(timer);//防止定时器叠加
    timer = setInterval(function () {
        var speed = 0;
        if (alpha > iTarget) {
            speed = -4;
        } else {
            speed = 4;
        }
        if (alpha == iTarget) {
            clearInterval(timer);
        } else {
            alpha += speed;
            figcaption.style.opacity = alpha/100;
        }
    }, 50)
}
