$(function() {
    // 不要登陆，删除提示登陆信息的按钮的事件
    $('#cbb_noLogin').click(function() {
        $('#cbb_requestLogin').slideUp(300);
    });
    // 鼠标移动到图片上，动画显示 第一张图片
    $('#cbb_xmcn_one').mouseenter(function() {
        $('#cbb_xmcn_one>img').addClass('animated bounce');
        $('#cbb_xmcn_one>p').addClass('animated tada');
    });
    $('#cbb_xmcn_one').mouseleave(function() {
        $('#cbb_xmcn_one>img').removeClass('animated bounce');
        $('#cbb_xmcn_one>p').removeClass('animated tada');
    });
    // 第二章图片
    $('#cbb_xmcn_two').mouseenter(function() {
        $('#cbb_xmcn_two>img').addClass('animated bounce');
        $('#cbb_xmcn_two>p').addClass('animated tada');
    });
    $('#cbb_xmcn_two').mouseleave(function() {
        $('#cbb_xmcn_two>img').removeClass('animated bounce');
        $('#cbb_xmcn_two>p').removeClass('animated tada');
    });
    // 第三章图片
    $('#cbb_xmcn_three').mouseenter(function() {
        $('#cbb_xmcn_three>img').addClass('animated bounce');
        $('#cbb_xmcn_three>p').addClass('animated tada');
    });
    $('#cbb_xmcn_three').mouseleave(function() {
        $('#cbb_xmcn_three>img').removeClass('animated bounce');
        $('#cbb_xmcn_three>p').removeClass('animated tada');
    });


    // 点击li，让当前的li有边框
    $('#cbb_choose_main_btn>ul>li').click(function() {
        $(this).addClass('cbb_current').siblings('li').removeClass('cbb_current');
        // $('#cbb_choose_main_btn>ul>li:eq(2)').removeClass('cbb_current');
    });
    // 点击选择颜色，让点击的有边框，没有点击的消失边框
    $('#cbb_choose_main_color>ul>li').click(function() {
        $(this).addClass('cbb_current').siblings('li').removeClass('cbb_current');
    });

    // logo鼠标划过的动画
    $('#cbb_logo').mouseenter(function() {
        $('#cbb_logo>.cbb_logo_img').animate({ 'left': '55px' }, 'fast');
        $('#cbb_logo>.cbb_mi_home').animate({ 'left': '0px' }, 'fast');
    });
    $('#cbb_logo').mouseleave(function() {
        $('#cbb_logo>.cbb_logo_img').animate({ 'left': '0px' }, 'fast');
        $('#cbb_logo>.cbb_mi_home').animate({ 'left': '-55px' }, 'fast');
    });





    // 向下滑动，判断cbb_choose_main的投拍值，若等于0 ，让cbb_biji固定在屏幕上方
    // $(window).scroll(function() {
    //     var cbb_main_top = $('#cbb_choose_main').offset().top - $(document).scrollTop();
    //     if (cbb_main_top <= 0) {
    //         $('#cbb_biji').css({ 'position': 'fixed', 'top': '0px' });
    //     } else {
    //         $('#cbb_biji').css({ 'position': '' });
    //     }
    // });


    $(window).scroll(function() {
        var cbb_main_top = $('#cbb_biji').offset().top - $(document).scrollTop();
        if (cbb_main_top <= 0) {
            $('#cbb_biji').css({ 'position': 'fixed', 'top': '0px' });
        }
        if ($(document).scrollTop() < 140) {
            $('#cbb_biji').css({ 'position': '' });
        }
    });









    // 判断滚轮滚动的距离，来让动画显示 判断当cbb_bgimg_01的top为0的时候，滚轮滚动了多远的距离
    $(window).scroll(function() {
        // var cbb_dhxianshi = $('.cbb_pro_list').offset().top - $(document).scrollTop();
        // if (cbb_dhxianshi <= 0) {
        //     console.log($(document).scrollTop());
        // }
        if ($(document).scrollTop() >= 870) {
            $('#cbb_bzqc_one').addClass('animated bounceInLeft');
            $('#cbb_bzqc_two').addClass('animated bounceInRight');
            $('#cbb_bzqc_three').addClass('animated bounceInRight');
        }
    });
});