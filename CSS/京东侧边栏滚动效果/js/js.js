$(function () {
    $(window).scroll(function () {              //窗口滚动事件
        var $scroll = $("body").scrollTop();
        // document.title = $scroll;
        if ($scroll >= 700) {                      //窗口滚动条距离顶部700px时显示隐藏
            $('#asideNav').fadeIn();
        } else if($scroll <= 300 ){
            $('#asideNav').fadeOut();
        }

        //滚轮滚动，导航跟随移动
        $('.items').each(function () {
            var $itemsTop = $('.items').eq($(this).index()).offset().top + 380;   //匹配每一个元素的的顶部位移距离
            document.title = $itemsTop + "--" + $scroll;
            console.log($(this).index());
            if ($itemsTop > $scroll) {                                           //元素的顶部位移距离大于滚动条的距离
                $('#asideNav li').removeClass('active');
                $('#asideNav li').eq($(this).index()).addClass('active');
                return false;//中断循环    不中断的话会直接执行到最大下标
            }
        });
    });


    //获取每个内容元素的offset().top,点击导航菜单让对应的内容模块移动到对应的位置
    var $itemsList = $('#asideNav li').not(':last');  //获取除最后一位的所有li的集合
    $itemsList.click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        var $itemsTop = $('.items').eq($(this).index()).offset().top;
        //获取每个内容元素的Top值
        $('html,body').animate({
            scrollTop: $itemsTop
        })
    });
    //返回顶部
    $('.last').click(function () {
        $("html,body").animate({             //$('html,body')兼容问题chrome用body
            scrollTop: 0
        })
    });
});