/**
 * Created by Administrator on 2017\10\12 0012.
 */
$(function () {
    //新消息数字显示；

    $(".chat_tips span").each(function () {
        if ($(this).html() > 0) {
            $(this).parent(".chat_tips").show()
        } else {
            $(this).parent(".chat_tips").hide()
        }
    });


    //好友列表点击三角形效果
    $(".friend_list li").click(function () {
        $(this).find(".iconfont").toggleClass("f_l_t_rotate").siblings().removeClass("f_l_t_rotate");
        $(this).find(".iconfont").addClass("f_l_t_color").siblings().removeClass("f_l_t_color");
    });

    //好友列表鼠标经过背景变色阻止冒泡
    $(".friend_list_li").mouseover(function () {
            $(this).css("background", "rgb(211,220,230)");
            $(this).find(".f_l_detailed li").css("background", "#e1eaf6");
        }).mouseout(function () {
        $(this).css("background", "#e1eaf6");
        }).click(function () {
            $(this).find(".f_l_detailed").toggleClass("f_l_detailed1");
        });

    $(".f_l_detailed li").mouseover(function (event) {
        event.stopPropagation();
        $(this).css("background", "rgb(211,220,230)");
        $(this).parents(".friend_list_li").css("background", "#e1eaf6")
    }).mouseout(function () {
        $(this).css("background", "#e1eaf6");
    });


});


