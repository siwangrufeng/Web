$(function(){
    //location部分开始
    var location=document.getElementById("location");
    var location_search=document.getElementById("location_search");
    var body_box=document.getElementById("body_box");
    location.onclick=function(){
        location_search.style.display="block";
        location.style.background="white";
        location.style.borderLeft="1px solid #E5E5E5";
        location.style.borderRight="1px solid #E5E5E5";
        location.style.height="32px";
        location.zIndex=10;
    };
    //location部分结束
    //banner部分开始
    var banner=document.getElementById("banner");
    var banner_pic=document.getElementById("banner_pic");
    var banner_cir=document.getElementById("banner_cir");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var pic_list=banner_pic.getElementsByTagName("li");
    var cir_list=banner_cir.getElementsByTagName("li");
    for (i=0;i<cir_list.length;i++){
        cir_list[i].a=i;
        cir_list[i].onmouseover=function(){
            for (z=0;z<cir_list.length;z++){
                cir_list[z].className="";
                pic_list[z].className="";
            }
            this.className="banner_cir_active";
            pic_list[this.a].className="banner_pic_active";
            count=this.a;
        }
    }
    var count=0;
    function banner_next(){
        count++;
        if (count==cir_list.length){
            count=0;
        }
        for (z=0;z<cir_list.length;z++){
            cir_list[z].className="";
            pic_list[z].className="";
        }
        cir_list[count].className="banner_cir_active";
        pic_list[count].className="banner_pic_active";
    }
    next.onclick=function(){
        banner_next()
    };
    function banner_prev(){
        count--;
        if (count==-1){
            count=cir_list.length-1
        }
        for (z=0;z<cir_list.length;z++){
            cir_list[z].className="";
            pic_list[z].className="";
        }
        cir_list[count].className="banner_cir_active";
        pic_list[count].className="banner_pic_active";
    }
    prev.onclick=function(){
        banner_prev()
    };
    function start(){
        a=setInterval(banner_next,1500)
    }
    function stop(){
        clearInterval(a);
    }
    banner.onmouseover=function(){
        stop()
    };
    banner.onmouseout=function(){
        start()
    };
    start();
    //banner部分结束
    //限时抢购部分轮播开始
    var hot_buy_banner=document.getElementById("hot_buy_banner");
    var hot_buy_prev=document.getElementById("hot_buy_prev");
    var hot_buy_next=document.getElementById("hot_buy_next");
    hot_buy_prev.onclick=function(){

    };








    //限时抢购部分轮播结束

    //公共样式阴影效果开始
    var public_nav_list_ul=document.getElementById("public_nav_list_ul");
    var public_nav_list_ul_li=public_nav_list_ul.getElementsByTagName("li");
    var public_nav_list=document.getElementById("public_nav_list");
    for (i=0;i<public_nav_list_ul_li.length;i++){
        public_nav_list_ul_li[i].onmouseover=function(){
            for(z=0;z<public_nav_list_ul_li.length;z++){
                public_nav_list_ul_li[z].style.opacity=0.6;
                public_nav_list_ul_li[z].style.transition="0.3s";
            }
            this.style.opacity=1;
        };
        public_nav_list_ul_li[i].style.transition="0.3s";
    }
    public_nav_list.onmouseout=function(){
        for(j=0;j<public_nav_list_ul_li.length;j++){
            public_nav_list_ul_li[j].style.opacity=1;
            public_nav_list_ul_li[j].style.transition="0.3s";
        }
    };

    //公共样式阴影效果结束
});