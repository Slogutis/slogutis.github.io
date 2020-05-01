(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js13').attr('src', (dpi>1) ? 'images/photo5863877214272074446-400.jpg' : 'images/photo5863877214272074446-200.jpg');
$('.js14').attr('src', (dpi>1) ? 'images/photo5863877214272074447-400.jpg' : 'images/photo5863877214272074447-200.jpg');
$('.js15').attr('src', (dpi>1) ? 'images/photo5863877214272074450-400.jpg' : 'images/photo5863877214272074450-200.jpg');
$('.js16').attr('src', (dpi>1) ? 'images/photo5863877214272074454-400.jpg' : 'images/photo5863877214272074454-200.jpg');
$('.js').attr('src', (dpi>1) ? 'images/photo5863877214272074456-400.jpg' : 'images/photo5863877214272074456-200.jpg');
$('.js2').attr('src', (dpi>1) ? 'images/sh-ar_qnat_alsnt_alnbwyt-_als-wdyt-400.png' : 'images/sh-ar_qnat_alsnt_alnbwyt-_als-wdyt-200.png');
$('.js3').attr('src', (dpi>1) ? 'images/sh-ar_qnat_alqran_alkrym-_als-wdyt-400.png' : 'images/sh-ar_qnat_alqran_alkrym-_als-wdyt-200.png');
$('.js4').attr('src', (dpi>1) ? 'images/photo5863877214272074453-400.jpg' : 'images/photo5863877214272074453-200.jpg');
$('.js5').attr('src', (dpi>1) ? 'images/photo5863877214272074457-400.jpg' : 'images/photo5863877214272074457-200.jpg');
$('.js6').attr('src', (dpi>1) ? 'images/photo5863877214272074449-400.jpg' : 'images/photo5863877214272074449-200.jpg');
$('.js7').attr('src', (dpi>1) ? 'images/photo5863877214272074445-400.jpg' : 'images/photo5863877214272074445-200.jpg');
$('.js8').attr('src', (dpi>1) ? 'images/photo5863877214272074452-400.jpg' : 'images/photo5863877214272074452-200.jpg');
$('.js9').attr('src', (dpi>1) ? 'images/photo5863877214272074455-400.jpg' : 'images/photo5863877214272074455-200.jpg');
$('.js10').attr('src', (dpi>1) ? 'images/photo5863877214272074458-410.jpg' : 'images/photo5863877214272074458-205.jpg');
$('.js11').attr('src', (dpi>1) ? 'images/photo5863877214272074448-400.jpg' : 'images/photo5863877214272074448-200.jpg');
$('.js12').attr('src', (dpi>1) ? 'images/photo5863877214272074451-400.jpg' : 'images/photo5863877214272074451-200.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});