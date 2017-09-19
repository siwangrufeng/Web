/**
 * Created by Administrator on 2017\9\11 0011.
 */
$(function(){
    //点击全选
    $("#all").click(function(){
        if($(this).prop("checked")){
            $(".goods_every").addClass("goods_checked").find("input[type=checkbox]").prop("checked",true);
            $(".store1_title").find("input[type=checkbox]").prop("checked",true);
        }else{
            $(".goods_every").removeClass("goods_checked").find("input[type=checkbox]").prop("checked",false);
            $(".store1_title").find("input[type=checkbox]").prop("checked",false);
        }
    });
    //点击店铺选择
    $(".store1_title input").click(function () {
        if ($(this).prop("checked")){
            $(this).parents(".store1").find(".goods_every").addClass("goods_checked").find("input").prop("checked",true);
        }else{
            $(this).parents(".store1").find(".goods_every").removeClass("goods_checked").find("input").prop("checked",false);
        }
    });
    //点击每一项选择
    $(".every input").click(function () {
        if ($(".every input").prop("checked")){
            $(this).parents(".goods_every").addClass("goods_checked");
        }else{
            $(this).parents(".goods_every").removeClass("goods_checked");
        }
    });
    //右键点击
    var nums=1;

    $(".minus").click(function () {
        nums++;
        var price_sum=$(this).parents(".goods_quantity").siblings(".goods_sum").find(".money_sum").find("a");
        var price_every=$(this).parents(".goods_quantity").siblings(".goods_price").find("a");
        // alert(price_every.html())
        if (nums>1){
            $(this).siblings(".plus").css("color","#666666");
        }else if (nums<=1){
            nums=1;
            $(this).siblings(".plus").css({"color":"#E9E9E9","disabled":"disabled"})
        }
        $(this).siblings(".nums").val(nums);
        price_sum.html((price_every.html()*nums).toFixed(2));
    });
    //左键点击
    $(".plus").click(function () {
        nums--;
        var price_sum=$(this).parents(".goods_quantity").siblings(".goods_sum").find(".money_sum").find("a");
        var price_every=$(this).parents(".goods_quantity").siblings(".goods_price").find("a");
        if (nums<=1) {
            nums=1;
            $(this).css({"color": "#E9E9E9"});
        }
        $(this).siblings(".nums").val(nums);
        price_sum.html((price_every.html()*nums).toFixed(2));
    });








});