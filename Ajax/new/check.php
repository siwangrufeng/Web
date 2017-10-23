<?php
    $username = $_GET['u'];   //后台得到绑定 路径上得到的用户名 $username是声明
    $pwd = $_GET['p'];   //后台得到绑定 路径上得到的密码
    if( $username == "admin" && $pwd == "123456"){ //判断如果同时符合
        echo 2;   //表示成功 数字可以自己定，一般都会认为2为成功
    }else{
        echo 1;   //表示失败
    }
?>