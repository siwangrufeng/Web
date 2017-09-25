/**
 * Created by Administrator on 2017\9\11 0011.
 */
$(function(){
    //全部商品数量
    var allnum=$(".every_check").length;
    $(".head").find("span").html(allnum);


    //点击全选
    $(".all").click(function(){
        if($(this).prop("checked")){
            $(".goods_every").addClass("goods_checked").find("input[type=checkbox]").prop("checked",true);
            $(".store1_title").find("input[type=checkbox]").prop("checked",true);
        }else{
            $(".goods_every").removeClass("goods_checked").find("input[type=checkbox]").prop("checked",false);
            $(".store1_title").find("input[type=checkbox]").prop("checked",false);
        }
        numcheck();
        price4();
    });

    //点击店铺选择

    $(".store1_check").click(function () {
        if ($(this).prop("checked")){
            $(this).parents(".store1").find(".goods_every").addClass("goods_checked").find("input").prop("checked",true);
            if($(".store1_check").length==$(".store1_check:checked").length){
                $(".all").prop("checked",true)
            }else {
                $(".all").prop("checked",false)
            }
        }else{
            $(this).parents(".store1").find(".goods_every").removeClass("goods_checked").find("input").prop("checked",false);
            $(".all").prop("checked",false);
        }
        price3($(this));
        numcheck();
        price4()
    });


    //点击每一项选择
    $(".every_check").click(function () {
        var a=$(this).parents(".store1").find(".every_check");//店铺商品数
        var b=$(this).parents(".store1").find(".every_check:checked");//店铺内被选中的商品数
        var c=$(this).parents(".store1").find(".store1_check");
        //店铺全选按钮
         if ($(this).prop("checked")){
        $(this).parents(".goods_every").addClass("goods_checked");
    }else{
        $(this).parents(".goods_every").removeClass("goods_checked");
    }
        if (a.length== b.length){
            c.prop("checked",true);
            if($(".store1_check").length==$(".store1_check:checked").length){
                $(".all").prop("checked",true)
            }else {
                $(".all").prop("checked",false)
            }
        } else {
            c.prop("checked",false)
        }
        price2($(this));
        numcheck();
        price4()
    });
    //右键点击

    $(".minus").click(function () {
        var nums=$(this).siblings(".nums").val();
        if (nums>=1){
            $(this).siblings(".plus").css("color","#666666");
            nums ++;
        }
        $(this).siblings(".nums").val(parseInt(nums));
        price1($(this));
        if ($(this).parents(".goods_every").find(".every_check").prop("checked")){
        price2($(this).parents(".goods_every").find(".every_check"))
        }
        price4()
    });

    //左键点击
    $(".plus").click(function () {
        var nums=$(this).siblings(".nums").val();
        if (nums<=2) {
            $(this).css({"color": "#E9E9E9"});
            // nums=2;
            nums = 1;
        } else {
            nums --;
        }
        $(this).siblings(".nums").val(nums);
        price1($(this));
        if ($(this).parents(".goods_every").find(".every_check").prop("checked")){
            price2($(this).parents(".goods_every").find(".every_check"))
        }
        price4()
    });


    //商品价格
    function price1(btn) {
        var unit_price=btn.parents(".goods_every").find(".goods_price a").html();
        var nums=btn.siblings(".nums").val();
        var price1=btn.parents(".store1_goods_cont").find(".unit_price");
        price1.html((unit_price*nums).toFixed(2))
    }
    //店铺商品价格
    function price2(d) {
        if (d.prop("checked")){
            var sum=0;
            d.parents(".store1_goods").find(".every_check").each(function () {
                if ($(this).prop("checked")){
                    var price= $(this).parents(".goods_every").find(".unit_price").html();
                    sum=(parseFloat(sum)+parseFloat(price)).toFixed(2);

                }
                $(this).parents(".store1_cont").find(".subtotal").html(sum)

            })
        }else {
            d.parents(".store1").find(".subtotal").html("")
        }

    }
//点击店铺全选时
    function price3(c) {
        if(c.prop("checked")){
            var sum=0;
            c.parents(".store1").find(".every_check").each(function () {
                if($(this).prop("checked")){
                    var price= $(this).parents(".goods_every").find(".unit_price").html();
                    sum=(parseFloat(sum)+parseFloat(price)).toFixed(2);
                }
                $(this).parents(".store1").find(".subtotal").html(sum)
            });
        } else {
            c.parents(".store1").find(".subtotal").html("")
        }
    }

//选中商品数量
    function numcheck() {
        var num=0;
        $(".every_check").each(function () {
            if($(this).prop("checked")){
                num++
            }
        });
        $(".all_nums").find("span").html(num);
    }

//所有选中商品价格
    function price4(e) {
        var num=0;
        $(".subtotal").each(function () {
            if($(this).html()==""){
                i=0;
            }else {
                i=parseFloat($(this).html());
                console.log(i)
            }
            num=num+i;
        });
        $(".all_price").find("span").html(num.toFixed(2));

    }



});