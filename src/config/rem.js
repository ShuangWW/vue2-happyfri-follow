// rem布局，自调用函数(function(){})()
(function(doc,win){
    var docEl = doc.documentElement,                                            //获取Element对象
    //当设备的方向变化（设备横向持或纵向持）此事件被触发。绑定此事件时，
    //注意现在当浏览器不支持orientationChange事件的时候我们绑定了resize 事件。
    //总来的来就是监听当然窗口的变化，一旦有变化就需要重新设置根字体的值
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function(){
        var clientWidth = docEl.clientWidth;//获取页面可见区域宽度
        if(!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth/320) + 'px';
    }
    if(!doc.addEventListener) return;                       // addEventListener(指定事件名,事件触发时执行的函数，事件是否在捕获或冒泡阶段执行)
    win.addEventListener(resizeEvt,recalc,false)            // 窗口大小改变事件
    doc.addEventListener('DOMContentLoaded',recalc,false)   // dom加载完毕事件
})(document,window)