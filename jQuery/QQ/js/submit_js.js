/**
 * Created by Administrator on 2017\9\29 0029.
 */
$(function(){
    if (!window.ActiveXObject && !!document.createElement("canvas").getContext) {
        $.getScript("http://im-img.qq.com/pcqq/js/200/cav.js?_=1428576021379",
            function () {
                var t = {
                    width: 1.5,
                    height: 1.5,
                    depth: 10,
                    segments: 12,
                    slices: 6,
                    xRange: 0.8,
                    yRange: 0.1,
                    zRange: 1,
                    ambient: "#525252",
                    diffuse: "#FFFFFF",
                    speed: 0.0012
                };
                var G = {
                    count: 2,
                    xyScalar: 1,
                    zOffset: 100,
                    ambient: "#025a78",
                    diffuse: "#0c5d74",
                    speed: 0.001,
                    gravity: 1200,
                    dampening: 0.95,
                    minLimit: 10,
                    maxLimit: null,
                    minDistance: 20,
                    maxDistance: 400,
                    autopilot: false,
                    draw: false,
                    bounds: CAV.Vector3.create(),
                    step: CAV.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1))
                };
                var m = "canvas";
                var E = "svg";
                var x = {
                    renderer: m
                };
                var i, n = Date.now();
                var L = CAV.Vector3.create();
                var k = CAV.Vector3.create();
                var z = document.getElementById("container");
                var w = document.getElementById("anitOut");
                var D, I, h, q, y;
                var g;
                var r;

                function C() {
                    F();
                    p();
                    s();
                    B();
                    v();
                    K(z.offsetWidth, z.offsetHeight);
                    o()
                }

                function F() {
                    g = new CAV.CanvasRenderer();
                    H(x.renderer)
                }

                function H(N) {
                    if (D) {
                        w.removeChild(D.element)
                    }
                    switch (N) {
                        case m:
                            D = g;
                            break
                    }
                    D.setSize(z.offsetWidth, z.offsetHeight);
                    w.appendChild(D.element)
                }

                function p() {
                    I = new CAV.Scene()
                }

                function s() {
                    I.remove(h);
                    D.clear();
                    q = new CAV.Plane(t.width * D.width, t.height * D.height, t.segments, t.slices);
                    y = new CAV.Material(t.ambient, t.diffuse);
                    h = new CAV.Mesh(q, y);
                    I.add(h);
                    var N, O;
                    for (N = q.vertices.length - 1; N >= 0; N--) {
                        O = q.vertices[N];
                        O.anchor = CAV.Vector3.clone(O.position);
                        O.step = CAV.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1));
                        O.time = Math.randomInRange(0, Math.PIM2)
                    }
                }

                function B() {
                    var O, N;
                    for (O = I.lights.length - 1; O >= 0; O--) {
                        N = I.lights[O];
                        I.remove(N)
                    }
                    D.clear();
                    for (O = 0; O < G.count; O++) {
                        N = new CAV.Light(G.ambient, G.diffuse);
                        N.ambientHex = N.ambient.format();
                        N.diffuseHex = N.diffuse.format();
                        I.add(N);
                        N.mass = Math.randomInRange(0.5, 1);
                        N.velocity = CAV.Vector3.create();
                        N.acceleration = CAV.Vector3.create();
                        N.force = CAV.Vector3.create()
                    }
                }

                function K(O, N) {
                    D.setSize(O, N);
                    CAV.Vector3.set(L, D.halfWidth, D.halfHeight);
                    s()
                }

                function o() {
                    i = Date.now() - n;
                    u();
                    M();
                    requestAnimationFrame(o)
                }

                function u() {
                    var Q, P, O, R, T, V, U, S = t.depth / 2;
                    CAV.Vector3.copy(G.bounds, L);
                    CAV.Vector3.multiplyScalar(G.bounds, G.xyScalar);
                    CAV.Vector3.setZ(k, G.zOffset);
                    for (R = I.lights.length - 1; R >= 0; R--) {
                        T = I.lights[R];
                        CAV.Vector3.setZ(T.position, G.zOffset);
                        var N = Math.clamp(CAV.Vector3.distanceSquared(T.position, k), G.minDistance, G.maxDistance);
                        var W = G.gravity * T.mass / N;
                        CAV.Vector3.subtractVectors(T.force, k, T.position);
                        CAV.Vector3.normalise(T.force);
                        CAV.Vector3.multiplyScalar(T.force, W);
                        CAV.Vector3.set(T.acceleration);
                        CAV.Vector3.add(T.acceleration, T.force);
                        CAV.Vector3.add(T.velocity, T.acceleration);
                        CAV.Vector3.multiplyScalar(T.velocity, G.dampening);
                        CAV.Vector3.limit(T.velocity, G.minLimit, G.maxLimit);
                        CAV.Vector3.add(T.position, T.velocity)
                    }
                    for (V = q.vertices.length - 1; V >= 0; V--) {
                        U = q.vertices[V];
                        Q = Math.sin(U.time + U.step[0] * i * t.speed);
                        P = Math.cos(U.time + U.step[1] * i * t.speed);
                        O = Math.sin(U.time + U.step[2] * i * t.speed);
                        CAV.Vector3.set(U.position, t.xRange * q.segmentWidth * Q, t.yRange * q.sliceHeight * P, t.zRange * S * O - S);
                        CAV.Vector3.add(U.position, U.anchor)
                    }
                    q.dirty = true
                }

                function M() {
                    D.render(I)
                }

                function J(O) {
                    var Q, N, S = O;
                    var P = function (T) {
                        for (Q = 0, l = I.lights.length; Q < l; Q++) {
                            N = I.lights[Q];
                            N.ambient.set(T);
                            N.ambientHex = N.ambient.format()
                        }
                    };
                    var R = function (T) {
                        for (Q = 0, l = I.lights.length; Q < l; Q++) {
                            N = I.lights[Q];
                            N.diffuse.set(T);
                            N.diffuseHex = N.diffuse.format()
                        }
                    };
                    return {
                        set: function () {
                            P(S[0]);
                            R(S[1])
                        }
                    }
                }

                function v() {
                    window.addEventListener("resize", j)
                }

                function A(N) {
                    CAV.Vector3.set(k, N.x, D.height - N.y);
                    CAV.Vector3.subtract(k, L)
                }

                function j(N) {
                    K(z.offsetWidth, z.offsetHeight);
                    M()
                }

                C();
            })
    } else {
        alert('调用cav.js失败');
    }
})



$(function () {

    if (!window.ActiveXObject && !!document.createElement("canvas").getContext) {
        $.getScript("http://im-img.qq.com/pcqq/js/200/cav.js?_=1428576021379",
            function () {
                var t = {
                    width: 1.5,
                    height: 1.5,
                    depth: 10,
                    segments: 12,
                    slices: 6,
                    xRange: 0.8,
                    yRange: 0.1,
                    zRange: 1,
                    ambient: "#525252",
                    diffuse: "#FFFFFF",
                    speed: 0.0012
                };
                var G = {
                    count: 2,
                    xyScalar: 1,
                    zOffset: 100,
                    ambient: "#025a78",
                    diffuse: "#0c5d74",
                    speed: 0.001,
                    gravity: 1200,
                    dampening: 0.95,
                    minLimit: 10,
                    maxLimit: null,
                    minDistance: 20,
                    maxDistance: 400,
                    autopilot: false,
                    draw: false,
                    bounds: CAV.Vector3.create(),
                    step: CAV.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1))
                };
                var m = "canvas";
                var E = "svg";
                var x = {
                    renderer: m
                };
                var i, n = Date.now();
                var L = CAV.Vector3.create();
                var k = CAV.Vector3.create();
                var z = document.getElementById("container1");
                var w = document.getElementById("anitOut1");
                var D, I, h, q, y;
                var g;
                var r;

                function C() {
                    F();
                    p();
                    s();
                    B();
                    v();
                    K(z.offsetWidth, z.offsetHeight);
                    o()
                }

                function F() {
                    g = new CAV.CanvasRenderer();
                    H(x.renderer)
                }

                function H(N) {
                    if (D) {
                        w.removeChild(D.element)
                    }
                    switch (N) {
                        case m:
                            D = g;
                            break
                    }
                    D.setSize(z.offsetWidth, z.offsetHeight);
                    w.appendChild(D.element)
                }

                function p() {
                    I = new CAV.Scene()
                }

                function s() {
                    I.remove(h);
                    D.clear();
                    q = new CAV.Plane(t.width * D.width, t.height * D.height, t.segments, t.slices);
                    y = new CAV.Material(t.ambient, t.diffuse);
                    h = new CAV.Mesh(q, y);
                    I.add(h);
                    var N, O;
                    for (N = q.vertices.length - 1; N >= 0; N--) {
                        O = q.vertices[N];
                        O.anchor = CAV.Vector3.clone(O.position);
                        O.step = CAV.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1));
                        O.time = Math.randomInRange(0, Math.PIM2)
                    }
                }

                function B() {
                    var O, N;
                    for (O = I.lights.length - 1; O >= 0; O--) {
                        N = I.lights[O];
                        I.remove(N)
                    }
                    D.clear();
                    for (O = 0; O < G.count; O++) {
                        N = new CAV.Light(G.ambient, G.diffuse);
                        N.ambientHex = N.ambient.format();
                        N.diffuseHex = N.diffuse.format();
                        I.add(N);
                        N.mass = Math.randomInRange(0.5, 1);
                        N.velocity = CAV.Vector3.create();
                        N.acceleration = CAV.Vector3.create();
                        N.force = CAV.Vector3.create()
                    }
                }

                function K(O, N) {
                    D.setSize(O, N);
                    CAV.Vector3.set(L, D.halfWidth, D.halfHeight);
                    s()
                }

                function o() {
                    i = Date.now() - n;
                    u();
                    M();
                    requestAnimationFrame(o)
                }

                function u() {
                    var Q, P, O, R, T, V, U, S = t.depth / 2;
                    CAV.Vector3.copy(G.bounds, L);
                    CAV.Vector3.multiplyScalar(G.bounds, G.xyScalar);
                    CAV.Vector3.setZ(k, G.zOffset);
                    for (R = I.lights.length - 1; R >= 0; R--) {
                        T = I.lights[R];
                        CAV.Vector3.setZ(T.position, G.zOffset);
                        var N = Math.clamp(CAV.Vector3.distanceSquared(T.position, k), G.minDistance, G.maxDistance);
                        var W = G.gravity * T.mass / N;
                        CAV.Vector3.subtractVectors(T.force, k, T.position);
                        CAV.Vector3.normalise(T.force);
                        CAV.Vector3.multiplyScalar(T.force, W);
                        CAV.Vector3.set(T.acceleration);
                        CAV.Vector3.add(T.acceleration, T.force);
                        CAV.Vector3.add(T.velocity, T.acceleration);
                        CAV.Vector3.multiplyScalar(T.velocity, G.dampening);
                        CAV.Vector3.limit(T.velocity, G.minLimit, G.maxLimit);
                        CAV.Vector3.add(T.position, T.velocity)
                    }
                    for (V = q.vertices.length - 1; V >= 0; V--) {
                        U = q.vertices[V];
                        Q = Math.sin(U.time + U.step[0] * i * t.speed);
                        P = Math.cos(U.time + U.step[1] * i * t.speed);
                        O = Math.sin(U.time + U.step[2] * i * t.speed);
                        CAV.Vector3.set(U.position, t.xRange * q.segmentWidth * Q, t.yRange * q.sliceHeight * P, t.zRange * S * O - S);
                        CAV.Vector3.add(U.position, U.anchor)
                    }
                    q.dirty = true
                }

                function M() {
                    D.render(I)
                }

                function J(O) {
                    var Q, N, S = O;
                    var P = function (T) {
                        for (Q = 0, l = I.lights.length; Q < l; Q++) {
                            N = I.lights[Q];
                            N.ambient.set(T);
                            N.ambientHex = N.ambient.format()
                        }
                    };
                    var R = function (T) {
                        for (Q = 0, l = I.lights.length; Q < l; Q++) {
                            N = I.lights[Q];
                            N.diffuse.set(T);
                            N.diffuseHex = N.diffuse.format()
                        }
                    };
                    return {
                        set: function () {
                            P(S[0]);
                            R(S[1])
                        }
                    }
                }

                function v() {
                    window.addEventListener("resize", j)
                }

                function A(N) {
                    CAV.Vector3.set(k, N.x, D.height - N.y);
                    CAV.Vector3.subtract(k, L)
                }

                function j(N) {
                    K(z.offsetWidth, z.offsetHeight);
                    M()
                }

                C();
            })
    } else {
        alert('调用cav.js失败');
    }

//状态鼠标经过效果
    $(".status_window").hover(function () {
        $(this).parents(".status").css("background", "rgba(197,203,209,.6)");
    }, function () {
        $(this).parents(".status").css("background", "transparent");
    }).click(function (event) {
        event.stopPropagation();
        $(".status_ul").show();
    });
    $(document).click(function () {
        $(".status_ul").hide();
    });


    //切换状态
    $(".status_li").click(function () {
        var index = $(".status_li").index($(this));
        $(".status_list1").eq(index).show().siblings().hide();
        $(".status_ul").hide();
    });

//点击账号小三角
    $(".triangle").click(function () {
        $(this).toggleClass("triangle1");
    });


    //点击关闭
    $(".close").click(function () {
        //window.close();
        $("body").hide()
    });

    //切换页面
    $(".setUp").click(function(){
        //$(".myQQ").css({"transform":"rotateY(360deg)","transition":"4s"});
        //setTimeout(function(){
        //    //$(".qqSet").show();
        //    $(".myQQ").css("z-index","-100");
        //    $(".qqSet").css({"transform":"rotateY(360deg)","transition":"3s","z-index":"100"});
        //},500);
    });
    $(".cancel").click(function(){
        //$(".qqSet").css({"transform":"rotateY(0deg)","transition":"2s"});
        //setTimeout(function(){
        //    $(".qqSet").css("z-index","-100");
        //    $(".myQQ").css({"transform":"rotateY(0deg)","transition":"2s","z-index":"1100"});
        //},500);
    });



    //密码输入框的简单判断
    // $(".passWord").propertychange(function () {
    //     var length=$(this).val().length;
    //     console.log(length)
    // })



    // $(".passWord").bind("input","propertychange",function () {
    //     var length=$(this).val().length;
    //动态获取value长度
    //     console.log(length);
    // });

    $("#logOn").on("submit",function (e) {
        var length=$(this).find(".password").val().length;
        if (length>16){
            e.preventDefault();
            alert("请输入8位以上16位数以内密码")
        }else if(length<8){
            e.preventDefault();
            alert("请输入8位以上16位数以内密码")
        }
    })

    //点击登录

});

