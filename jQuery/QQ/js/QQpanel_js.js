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
        $(this).find(".iconfont").toggleClass("f_l_t_rotate");
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
    }).click(function (event) {
        event.stopPropagation()
    })
    ;




    //群组数量
    $(".q_g_t_num").each(function () {
        var num=$(this).parents(".qq_group_type").siblings(".qq_group_list").find("li").length;
        $(this).html(num);
    });

    //控制QQ群点击放大 hover效果
    $(".qq_group_type").click(function () {
        $(this).siblings(".qq_group_list").toggleClass("qq_group_list1");
        $(this).find(".iconfont").toggleClass("f_l_t_rotate");
    }).mouseover(function () {
        $(this).css("background", "rgb(211,220,230)");
        $(this).siblings(".qq_group_list").find(".qq_group_list_li").css("background", "#e1eaf6");
    }).mouseout(function () {
        $(this).css("background", "#e1eaf6");
    });
    $(".qq_group_list_li").mouseover(function (event) {
        event.stopPropagation();
        $(this).css("background", "rgb(211,220,230)");
        $(this).parents(".g_c_li").css("background", "#e1eaf6")
    }).mouseout(function () {
        $(this).css("background", "#e1eaf6");
    }).click(function (event) {
        event.stopPropagation();
        $(this).addClass("qq_group_list_li2").siblings().removeClass("qq_group_list_li2");
    });


    //群 多人聊天 直播间选项卡切换
    $(".g_type li").click(function () {
        $(this).addClass("g_type_li").siblings().removeClass("g_type_li");
        var index=$(".g_type li").index(this);
        $(".group_cont").eq(index).show().siblings().hide();
    });


    //切换最近联系人 我的好友 我的群组 我的空间
    $(".tab_ul li").click(function () {
        $(this).addClass("tab_li").siblings().removeClass("tab_li");
        var index=$(".tab_ul li").index(this);
        $(".board").eq(index).show().siblings().hide();

        $(".slider").css("left",72*index+"px");
    })


});


