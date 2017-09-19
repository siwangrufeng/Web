$(function () {
    //城市选择
    var city_json = '{"江苏":["南京","常州"],"河南":["南阳","安阳"]}';
    var city_obj = eval('(' + city_json + ')');
    for (var key in city_obj) {
        $(".province").append("<option value='" + key + "'>" + key + "</option>");
    }
    $(".province").change(function () {
        var now_province = $(this).val();
        $(".city").html('<option value="">请选择城市</option>');
        for (var k in city_obj[now_province]) {
            var now_city = city_obj[now_province][k];
            $(".city").append('<option value="' + now_city + '">' + now_city + '</option>');
        }
    });
    //var j=0;
    //$(".province").click(function(){
    //    j++;
    //    if(j%2==0){
    //        $(this).children("li").first().show().siblings().hide()
    //    }else {
    //        $(this).children("li").show()
    //    }
    //});
    //$(".province1").click(function(){
    //    $(this).show().siblings().remove();
    //    console.log($(".province .province1").index(this))
    //    $(".city").eq($(".province1").index(this)).show().siblings().hide()
    //})
    //获取时间
    $('#weather').leoweather({format: '<span id="colock">{年}年{月}月{日}日 星期{周} </span> <b>{城市} 天气</b> {天气} {夜间气温}℃ ~ {白天气温}℃'});


    //选项卡
    $(".tab_info_li:not(:first)").hide();
    $(".tab_nav ul li").mouseover(function () {
        $(this).addClass("tab_nav_active").siblings().removeClass("tab_nav_active");
        var tab_nav_index = $(".tab_nav ul li").index(this);
        $(".tab_info_li").eq(tab_nav_index).show().siblings().hide();
    });
    //序号颜色
    var number=$(".number").length;
    //alert(number)
    for (var i=0;i<number;i++){
        $(".number").eq(i).html(i+1);
    }
    $(".number:gt(2)").css({"background":"#F8F8F8","color":"#666666"});

        // 轮播
    //根据图片个数添加同样多的小圆点
    var pic_size=$(".banner_pic_ul li").length;
    for(var z=0;z<pic_size;z++){
        $(".banner_cir_ul").append("<li></li>");
    }
    //当只有一张图片的时候 小圆点不显示，且左右箭头在鼠标滑入时候不显示
    if(pic_size<=1){
        $(".banner_cir_ul").hide();
        $(".banner_pic").mouseover(function(){
            $("#next,#prev").hide();
        });
    }
    //初始状态
    $(".banner_cir_ul li").first().addClass("cir_active");
    $(".banner_pic_ul li:not(:first)").hide();
    //小圆点点击
    $(".banner_cir_ul li").click(function(){
        count=$(".banner_cir_ul li").index(this);
        $(this).addClass("cir_active").siblings().removeClass("cir_active");
        $(".banner_pic_ul li").eq($(".banner_cir_ul li").index(this)).show().siblings().hide();
    });
    //箭头点击
    var count=0;
    function publ(){
        $(".banner_pic_ul li").each(function(){
            $(".banner_pic_ul li").eq(count).show().siblings().hide();
            $(".banner_cir_ul li").eq(count).addClass("cir_active").siblings().removeClass("cir_active");
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
    });
    $("#next").click(function(){
        next()
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
});