
/*
三个技术攻关点
1) 能够获得当前屏幕的大小document.documentElement.clientWidth
2) 设定html的fontSize,即rem
3) 如何在屏幕大小变化时,重新计算
*/
(function(win,doc){

    var fresh = function() {
        var html = doc.documentElement;
        var w = html.clientWidth;
        html.style.fontSize = (w/10) + 'px';
    }

    if(document.readyState === "complete") {
        fresh();
    } else {
        document.addEventListener( "DOMContentLoaded", fresh, false );
    }

    win.addEventListener('resize' , fresh , false);

})(window,document)
