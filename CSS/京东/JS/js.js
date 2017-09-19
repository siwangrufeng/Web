$(function(){
    var pic_size=$(".banner_ul1 li").length;
    for(var z=0;z<pic_size;z++){
        $(".banner_ul2").append("<li></li>");
    }
//当只有一张图片的时候 小圆点不显示，且左右箭头在鼠标滑入时候不显示
    if(pic_size<=1){
        $(".banner_ul2").hide();
        $(".banner_pic").mouseover(function(){
            $("#next,#prev").hide();
        });
    }
//初始状态
    $(".banner_ul2 li").first().addClass("cir_active");
    $(".banner_ul1 li:not(:first)").hide();
    $("#prev,#next").hide();
//小圆点点击
    $(".banner_ul2 li").click(function(){
        count=$(".banner_ul2 li").index(this);
        $(this).addClass("cir_active").siblings().removeClass("cir_active");
        $(".banner_ul1 li").eq($(".banner_ul2 li").index(this)).show().siblings().hide();
    });
//箭头点击
    var count=0;
    function publ(){
        $(".banner_ul1 li").each(function(){
            $(".banner_ul1 li").eq(count).show().siblings().hide();
            $(".banner_ul2 li").eq(count).addClass("cir_active").siblings().removeClass("cir_active");
        })
    }
    function prev(){
        count--;
        if (count==-1){
            count=pic_size-1;
        }
        publ();
    }
    function next(){
        count++;
        if (count==pic_size){
            count=0
        }
        publ()
    }
    $("#prev").click(function(){
        prev()
    }).mouseover(function(){
        $(this).css({"background-position":"0 0"})
    }).mouseout(function(){
        $(this).css({"background-position":"-84px 0"})
    });

    $("#next").click(function(){
        next()
    }).mouseover(function(){
        $(this).css({"background-position":"-42px 0"})
    }).mouseout(function(){
        $(this).css({"background-position":"-125px 0"})
    });
    function start(){
        a=setInterval(next,1500)
    }
    function stop(){
        clearInterval(a)
    }
    $(".banner_pic").mouseover(function(){
        $("#prev,#next").show();
        stop();
    }).mouseout(function(){
        $("#prev,#next").hide();
        start()
    });
    start();


    //滚轮控制顶部固定搜索框 左侧导航栏出现及变化
    $(window).scroll(function(){
        var x=$(".seckill").offset().top;
        var z=$("body").scrollTop();
        var y=$("#main4").offset().top;
        if (z>=x){
            $(".search_fix").fadeIn();
        }else {
            $(".search_fix").fadeOut();
        }
        if(z>=y-100){
            $(".suspension1").fadeIn();
        }else {
            $(".suspension1").fadeOut();
        }
        if(z>=y-100&&z<$("#dotted2").offset().top-250){
            $(".suspension1 li").eq(0).addClass("suspension1_first").siblings().removeClass();
        }else if(z>=$("#dotted2").offset().top-250&&z<$("#main7").offset().top-250){
            $(".suspension1 li").eq(1).addClass("suspension1_first").siblings().removeClass();
        }else if(z>=$("#main7").offset().top-250&&z<$("#main8").offset().top-250){
            $(".suspension1 li").eq(2).addClass("suspension1_first").siblings().removeClass();
        }else if(z>=$("#main8").offset().top-250&&z<$("#main9").offset().top-250){
            $(".suspension1 li").eq(3).addClass("suspension1_first").siblings().removeClass();
        }else if(z>=$("#main9").offset().top-250&&z<$("#main10").offset().top-250){
            $(".suspension1 li").eq(4).addClass("suspension1_first").siblings().removeClass();
        }else if(z>=$("#main10").offset().top-250&&z<$("#main12").offset().top-250){
            $(".suspension1 li").eq(5).addClass("suspension1_first").siblings().removeClass();
        }else if(z>=$("#main12").offset().top-250&&z<$("#main13").offset().top-250){
            $(".suspension1 li").eq(6).addClass("suspension1_first").siblings().removeClass();
        }else if(z>=$("#main13").offset().top-250&&z<$("#main14").offset().top-250){
            $(".suspension1 li").eq(7).addClass("suspension1_first").siblings().removeClass();
        }else if(z>=$("#main14").offset().top-250&&z<$("#main15").offset().top-250){
            $(".suspension1 li").eq(8).addClass("suspension1_first").siblings().removeClass();
        }else if(z>=$("#main15").offset().top-250&&z<$("#main17").offset().top-250){
            $(".suspension1 li").eq(9).addClass("suspension1_first").siblings().removeClass();
        } else if(z>=$("#main17").offset().top-250){
            $(".suspension1 li").eq(10).addClass("suspension1_first").siblings().removeClass();
        }
    });
    //鼠标点击左侧导航栏
    var lump_list=$(".suspension1 li").not(".suspension1_last");
    var box_list=$(".main100");
    lump_list.click(function(){
        //console.log(lump_list.index(this));
        //console.log(box_list.eq($(lump_list).index(this)).offset().top)
        //    $("body").animate({scrollTop:box_list.eq($(lump_list).index(this)).offset().top},500);
        $("body").animate({
            scrollTop:box_list.eq(lump_list.index(this)).offset().top
        },500)
        $(this).addClass("suspension1_first").siblings().removeClass("suspension1_first");
        });
    $(".suspension1_last").click(function(){
            $("body").animate({scrollTop:0},500);
        });
});
