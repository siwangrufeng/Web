$(function () {
    //删除按钮单击事件
    $('.minus').click(function () {
        //获取num标签
        var $num=$(this).parent().find('.num');
        //获取num值，转换成int
        var num=parseInt($num.val());
        //num赋值
        $num.val(num-1);
        //判断num的值不能小于1
        if($num.val()<=1){
            $num.val(1);
        }
        TotalPrice();
    });
    //增加按钮单击事件
    $('.plus').click(function () {
        var $num=$(this).parent().find('.num');
        var num=parseInt($num.val());
        $num.val(num+1);
        if($num.val()<=1){
            $num.val(1);
        }
        TotalPrice();
    });
    //商品复选框按钮
    $(".goodsCheck").click(function () {
        //获取本店铺的所有商品
        var goods = $(this).parents(".shop-group-item").find(".goodsCheck");//这里parents换成closest更为合适
        //获取本店铺所有被选中的商品
        var goodsC = $(this).parents(".shop-group-item").find(".goodsCheck:checked");
        //获取本店铺的全选按钮
        var Shops = $(this).parents(".shop-group-item").find(".shopCheck");
        if (goods.length == goodsC.length) { //如果选中的商品等于所有商品
            Shops.prop('checked', true); //店铺全选按钮被选中
            //如果店铺被选中的数量等于所有店铺的数量
            if ($(".shopCheck").length == $(".shopCheck:checked").length) {
                $("#AllCheck").attr('checked', true); //全选按钮被选中
            } else {
                $("#AllCheck").attr('checked', false); //else全选按钮不被选中
            }
        } else { //如果选中的商品不等于所有商品
            Shops.attr('checked', false); //店铺全选按钮不被选中
            $("#AllCheck").attr('checked', false); //全选按钮也不被选中
        }
        TotalPrice();
    });

    // 点击店铺按钮
    $(".shopCheck").click(function() {
        if ($(this).prop("checked")) { //如果店铺按钮被选中
            //店铺内的所有商品按钮也被选中
            $(this).parents(".shop-group-item").find(".goods-check").prop('checked', true);
            //如果店铺被选中的数量等于所有店铺的数量
            if ($(".shopCheck").length == $(".shopCheck:checked").length) {
                $("#AllCheck").prop('checked', true); //全选按钮被选中
            } else {
                $("#AllCheck").prop('checked', false); //else全选按钮不被选中
            }
        } else { //如果店铺按钮不被选中
            //店铺内的所有商品也不被全选
            $(this).parents(".shop-group-item").find(".goods-check").prop('checked', false);
            $("#AllCheck").prop('checked', false); //全选按钮也不被选中
        }
        TotalPrice();
    });

    // 点击全选按钮
    $("#AllCheck").click(function() {
        if ($(this).prop("checked")) { //如果全选按钮被选中
            $(".goods-check").prop('checked', true); //所有按钮都被选中
        } else {
            $(".goods-check").prop('checked', false); //else所有按钮不全选
        }
        TotalPrice();
    });
    //计算
    function TotalPrice() {
        var allprice = 0; //总价
        $(".shop-group-item").each(function() { //循环每个店铺
            var oprice = 0; //店铺总价
            $(this).find(".goodsCheck").each(function() { //循环店铺里面的商品
                if ($(this).is(":checked")) { //如果该商品被选中
                    var num = parseInt($(this).parents(".shop-info").find(".num").val()); //得到商品的数量
                    var price = parseFloat($(this).parents(".shop-info").find(".price").text()); //得到商品的单价
                    var total = price * num; //计算单个商品的总价
                    oprice += total; //计算该店铺的总价
                }
                $(this).parents(".shop-group-item").find(".ShopTotal").text(oprice.toFixed(2)); //显示被选中商品的店铺总价
            });
            var oneprice = parseFloat($(this).find(".ShopTotal").text()); //得到每个店铺的总价
            allprice += oneprice; //计算所有店铺的总价
        });
        $("#AllTotal").text(allprice.toFixed(2)); //输出全部总价
    }
});