window.onload = function() {
    // 网上下载的轮播图的js部分
    function $(id) {
        return document.getElementById(id);
    }
    var buttonGroup = $("buttonGroup"),
        buttons = buttonGroup.getElementsByTagName('span'),
        list = $("list"),
        imgs = list.getElementsByTagName('img'),
        flag = 0,
        container = $("container"),
        timer;

    function render(index) {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = "0";
            imgs[i].style.zindex = "1";
        }
        imgs[index].style.zindex = "2";
        imgs[index].style.opacity = "1";
    }

    function bt_listen(event) {
        if (event.target && event.target.tagName.toLowerCase() == 'span') {
            var index = event.target.getAttribute('index');
            flag = index;
            render(flag);
            showButton();
        }
    }

    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].className = buttons[i].className.replace(/\s*on/, "");
        }
        buttons[flag].className += " on";
    }

    function play() {
        timer = setInterval(function() {
            if (flag == 4) {
                flag = 0;
            } else {
                flag++;
            }
            render(flag);
            showButton();
        }, 3000);
    }

    function stop() {
        clearInterval(timer);
    }

    function start() {
        buttonGroup.addEventListener('click', bt_listen, false);
        container.addEventListener('mouseenter', stop, false);
        container.addEventListener('mouseleave', play, false);
        play();
    }
    start();
}