import '../css/common.css'
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


// if (process.env.NODE_ENV === "development") {
//     if (window.location.href.indexOf('.html') == -1) {
//         import ('../../pages/index')
//     } else {
//         var arr = window.location.href.split("?")[0].split('/');
//         var str = '../../pages/' + arr.pop().split('.')[0];
//         import(str)

//     }

// }