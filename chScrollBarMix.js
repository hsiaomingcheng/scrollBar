//所有 開跟鎖 scrollBar功能(123在VS code 上測試commit push)
var chScrollBarMix = {
    checkDevice: function(){
        /*檢查是否為移動裝置*/
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        var device = isAndroid || isiOS;

        return device;
    },
    scrollBarW: function(){
        /*算出scrollBar寬度*/
        var a = window.innerWidth,
            b = document.documentElement.clientWidth;
            
        return a - b;
    },
    lockScroll: function(){
        var checkDevice = chScrollBarMix.checkDevice();

        var body       = document.body,
            html       = document.documentElement,
            checkBar   = chScrollBarMix.scrollBarW(),
            scrollBarW = (checkBar) + 'px';

        var distance  = -( html.scrollTop + body.scrollTop);

        if ( checkDevice === false ) {

            if ( checkBar != 0 ) {
                //pc
                body.style.paddingRight = scrollBarW;
                body.style.overflowY = 'hidden';
            }else {
                //pc(safari)
                body.style.paddingRight = ''
                body.style.overflowY = 'hidden';
            }
            
        }else {
            //行動裝置
            setTimeout(function(){
                body.style.position = 'fixed';
                body.style.overflowY = 'hidden';
                body.style.top = distance;
            },500);
        }

        return distance;
    },
    unlockScroll: function(){
        document.body.style.position = '';
        document.body.style.overflowY = '';
        document.body.style.paddingRight = '';
        document.body.style.top = '';
    }
}