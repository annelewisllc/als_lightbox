function getScript(e,a){var t=document.createElement("script");t.src=e;var n=document.getElementsByTagName("head")[0],o=!1;t.onload=t.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,a(),t.onload=t.onreadystatechange=null,n.removeChild(t))},n.appendChild(t)}function createCookieAls(e,a,t){if(t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3);var o="; expires="+n.toGMTString()}else var o="";document.cookie=e+"="+a+o+"; path=/"}function readCookieAls(e){for(var a=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var o=t[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(a))return o.substring(a.length,o.length)}return null}function eraseCookieAls(e){createCookie(e,"",-1)}function load_fancybox($){"function"==typeof $.fancybox?(load_fancybox_css($),execute_fancybox($)):getScript("//s3.amazonaws.com/annelewisllc/assets/fancybox/jquery.fancybox.pack.js",function(){"function"!=typeof $.fancybox||(load_fancybox_css($),execute_fancybox($))})}function load_fancybox_css($){if(!$('link[href$="jquery.fancybox.css"]').length){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.media="screen",e.href="//s3.amazonaws.com/annelewisllc/assets/fancybox/jquery.fancybox.css",e.id="als_fancybox_base_style_tag",document.getElementsByTagName("head")[0].appendChild(e)}}function execute_fancybox($){function e(e){return window.ga&&ga(function(a){var t=new window.gaplugins.Linker(a);e=t.decorate(e)}),e}var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.media="all",a.href="//annelewisllc.s3.amazonaws.com/assets/splash/css/als_fancybox_launch.css",document.getElementsByTagName("head")[0].appendChild(a);var t=window.addEventListener?"addEventListener":"attachEvent",n=window[t],o="attachEvent"==t?"onmessage":"message";n(o,function(e){"fancybox.close"==e.data&&jQuery.fancybox.close()},!1),$(document).ready(function($){$("body").prepend('<div id="als_lightbox" style="display:none;"></div>');var a=new Date,t=document.querySelector('script[data-id="als_fancybox_js"]'),n=t.getAttribute("data-max-width"),o=t.getAttribute("data-max-height"),c=e(t.getAttribute("data-iframe-url")),i=t.getAttribute("data-cookie-name"),s=t.getAttribute("data-cookie-duration"),r=t.getAttribute("data-start-date"),l=t.getAttribute("data-end-date"),d=t.getAttribute("data-test-mode");i||(i="fancybox_als"),s||(s=1),r||(r="January 1, 1970 00:00:00"),l||(l="January 1, 2038 00:00:00"),$("#als_lightbox").fancybox({openEffect:"fade",closeEffect:"fade",openSpeed:500,closeSpeed:250,margin:0,padding:0,closeBtn:!0,autoSize:!0,autoScale:!1,wrapCSS:"als_fancybox",scrollOutside:!0,scrolling:"no",maxHeight:o,maxWidth:n,height:"100%",width:"100%",href:c,type:"iframe",helpers:{overlay:{locked:!0,closeClick:!0}},tpl:{wrap:'<div class="als-fancybox-wrap fancybox-wrap" tabIndex="-1"><div class="als-fancybox-skin fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner als-fancybox-inner"></div></div></div></div>',closeBtn:'<a title="Close" class="fancybox-item als-fancybox-close fancybox-close" href="javascript:;"></a>'}}),(!readCookieAls(i)&&a>new Date(r)&&a<new Date(l)||d>=1)&&($("#als_lightbox").trigger("click"),createCookieAls(i,1,s))})}var enforceMinJQueryVersion="1.6",thisPageUsingOtherJSLibrary=!1;"undefined"==typeof jQuery||jQuery.fn.jquery<enforceMinJQueryVersion?("function"==typeof $&&(thisPageUsingOtherJSLibrary=!0),getScript("//code.jquery.com/jquery-latest.min.js",function(){"undefined"==typeof jQuery||(jQuery.noConflict(),function($){load_fancybox($)}(jQuery))})):load_fancybox($);
//# sourceMappingURL=./als_fancybox_launch-min.js.map