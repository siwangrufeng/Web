//window.onload=function() {
//    var banner_cont=document.getElementById("banner_pic");
//    var bann=document.getElementById("banner_ul1");
//    var circ=document.getElementById("banner_ul2");
//    var bann_list=bann.getElementsByTagName("li");
//    var circ_list=circ.getElementsByTagName("li");
//    for(i=0;i<circ_list.length;i++){
//        circ_list[i].a=i;
//        circ_list[i].onclick=function(){
//            for(z=0;z<circ_list.length;z++){
//                circ_list[z].className="";
//                bann_list[z].className="";
//            }
//            this.className="banner_dot";
//            bann_list[this.a].className="banner_pic_1";
//            count=this.a;
//        }
//    }
//    var count=0;
//    function next_auto(){
//        count++;
//        if (count==circ_list.length){
//            count=0;
//        }
//        for(z=0;z<circ_list.length;z++){
//            circ_list[z].className="";
//            bann_list[z].className="";
//        }
//        circ_list[count].className="banner_dot";
//        bann_list[count].className="banner_pic_1"
//    }
//    function start(){
//        a=setInterval(next_auto,1000);
//    }
//    function stop(){
//        clearInterval(a);
//    }
//    banner_cont.onmouseover=function(){
//        stop();
//    };
//    banner_cont.onmouseout=function(){
//        start()
//    };
//    start()
//
//
//
//};
$(function () {
    var banner_cont = document.getElementById("banner_pic");
    var bann = document.getElementById("banner_ul1");
    var circ = document.getElementById("banner_ul2");
    var bann_list = bann.getElementsByTagName("li");
    var circ_list = circ.getElementsByTagName("li");

    function banner(j, g) {
        for (i = 0; i < j.length; i++) {
            j[i].a = i;
            j[i].onclick = function () {
                for (z = 0; z < j.length; z++) {
                    j[z].className = "";
                    g[z].className = "";
                }
                this.className = "active";
                g[this.a].className = "active";
                count = this.a;
            }
        }
        var count = 0;

        function next_auto() {
            count++;
            if (count == j.length) {
                count = 0;
            }
            for (z = 0; z < j.length; z++) {
                j[z].className = "";
                g[z].className = "";
            }
            j[count].className = "active";
            g[count].className = "active"
        }

        function start() {
            a = setInterval(next_auto, 1000);
        }

        function stop() {
            clearInterval(a);
        }

        banner_cont.onmouseover = function () {
            stop();
        };
        banner_cont.onmouseout = function () {
            start()
        };
        start();
    }

    banner(circ_list, bann_list);
    var radio_left_trailer_right_ul = document.getElementById("radio_left_trailer_right_ul");
    var radio_left_trailer_predict_list = radio_left_trailer_right_ul.getElementsByTagName("li");

    function auto() {
        var count = 0;
        function radio_predict_auto() {
            count++;
            if (count == radio_left_trailer_predict_list.length) {
                count = 0;
            }
            for (z = 0; z < radio_left_trailer_predict_list.length; z++) {
                radio_left_trailer_predict_list[z].className = "";

            }
            radio_left_trailer_predict_list[count].className = "active";

        }

        setInterval(radio_predict_auto, 1500);

    }

    auto();
    //轮播结束

});

$(function () {
    //直播开始
    $(".radio_left_top").mouseenter(function () {
        var a=$(this).children("a").children("img");
        a.css({"transform": "scale(1.2)", "transition": "0.3s"});
        setTimeout(function () {  //延时调用，500ms之后调用该函数
            //alert(1)
            a.css("transform", "scale(1)");
        }, 300)
    });
    $(".radio_left_list_cont").mouseenter(function () {
        //alert(1)
        var b=$(this).children("a").children("img");
        $(this).siblings(".radio_left_list_cont").children("a").children("img").hide();
        b.show();
        b.css({"transform": "scale(1.2)", "transition": "0.3s"});
        setTimeout(function () {
            b.css("transform", "scale(1)");
        }, 300)
    })
});
