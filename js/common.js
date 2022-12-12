$(document).ready(function() {


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});
 
setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    	return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        	$('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".sandwich").click(function() {
		$(this).toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
	});

	$('.tabs-design a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-design").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);

	}); 


	$('.tabs-inner a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().parent().siblings().find(".tab-pane-inner").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);

	}); 

	$('.easyzoom').easyZoom();

	{
		if ($(window).width() < 992) { 
			$(".footer__title").click(function() {
				$(this).toggleClass("active");
				$(this).next(".footer__content").slideToggle(200);
			});
		}
	}

	//слайдер

	$('.slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});


	$('.list-advantages').liMarquee();


	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


/*run string*/
!function(t){var o={init:function(o){var e={direction:"left",loop:-1,scrolldelay:0,scrollamount:50,circular:!0,drag:!0,runshort:!0,hoverstop:!0,inverthover:!1,xml:!1};return o&&t.extend(e,o),this.each(function(){var o="mouseenter",s="mouseleave";e.inverthover&&(o="mouseleave",s="mouseenter");var i=e.loop,n=t(this).addClass("str_wrap"),r=!1,l=function(){n.off("mouseleave"),n.off("mouseenter"),n.off("mousemove"),n.off("mousedown"),n.off("mouseup"),t(".str_move",n).length||n.wrapInner(t("<div>").addClass("str_move"));var l=t(".str_move",n).addClass("str_origin"),a=l.clone().removeClass("str_origin").addClass("str_move_clone"),f=0;e.hoverstop||n.addClass("noStop");var c=function(){a.clone().css({left:"100%",right:"auto",width:l.width()}).appendTo(l),a.css({right:"100%",left:"auto",width:l.width()}).appendTo(l)},h=function(){a.clone().css({top:"100%",bottom:"auto",height:l.height()}).appendTo(l),a.css({bottom:"100%",top:"auto",height:l.height()}).appendTo(l)};if("left"==e.direction){if(n.height(l.outerHeight()),l.width()>n.width()){var u=-l.width();e.circular&&!e.xml&&(c(),u=-(l.width()+(l.width()-n.width()))),e.xml&&l.css({left:n.width()});var d=n.width(),v=0,p=function(){var t=Math.abs(u),o=t/e.scrollamount*1e3;return 0!=parseFloat(l.css("left"))&&(t+=n.width(),o=(t-(n.width()-parseFloat(l.css("left"))))/e.scrollamount*1e3),o},m=!1,$=function(){0!=i&&l.stop(!0).animate({left:u},p(),"linear",function(){t(this).css({left:n.width()}),-1==i||i--,m=setTimeout($,e.scrolldelay)})};e.inverthover||$(),e.hoverstop&&(n.on(o,function(){t(this).addClass("str_active"),clearTimeout(m),l.stop(!0)}).on(s,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),$()}),e.drag?n.on("mousedown",function(o){e.inverthover&&l.stop(!0);var s,i,a,f=o.clientX;return v=(d=l.position().left)-(o.clientX-n.offset().left),t(this).on("mousemove",function(t){r=!0,i=(a=t.clientX)>f?1:-1,f=a,(s=v+(t.clientX-n.offset().left))<-l.width()&&i<0&&(s=0,v=(d=l.position().left)-(t.clientX-n.offset().left)),s>0&&i>0&&(s=-l.width(),v=(d=l.position().left)-(t.clientX-n.offset().left)),l.stop(!0).css({left:s})}).on("mouseup",function(){t(this).off("mousemove"),e.inverthover&&l.trigger("mouseenter"),setTimeout(function(){r=!1},50)}).on("click",function(){if(r)return!1}),!1}):n.addClass("no_drag"))}else if(e.runshort){l.css({left:n.width()});var d=n.width(),v=0,g=function(){return f=(l.width()+l.position().left)/e.scrollamount*1e3},w=function(){var o=-l.width();l.animate({left:o},g(),"linear",function(){t(this).css({left:n.width()}),-1==i||i--,setTimeout(w,e.scrolldelay)})};e.inverthover||w(),e.hoverstop&&(n.on(o,function(){t(this).addClass("str_active"),l.stop(!0)}).on(s,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),w()}),e.drag?n.on("mousedown",function(o){return e.inverthover&&l.stop(!0),v=(d=l.position().left)-(o.clientX-n.offset().left),t(this).on("mousemove",function(t){l.stop(!0).css({left:v+(t.clientX-n.offset().left)})}).on("mouseup",function(){e.inverthover&&l.trigger("mouseenter"),t(this).off("mousemove")}),!1}):n.addClass("no_drag"))}else n.addClass("str_static")}if("right"==e.direction){if(n.height(l.outerHeight()),n.addClass("str_right"),l.css({left:-l.width(),right:"auto"}),l.width()>n.width()){var u=n.width();l.css({left:0}),e.circular&&!e.xml&&(c(),u=l.width());var _=0;g=function(){var t=n.width(),o=t/e.scrollamount*1e3;return 0!=parseFloat(l.css("left"))&&(o=((t=l.width()+n.width())-(l.width()+parseFloat(l.css("left"))))/e.scrollamount*1e3),o};var w=function(){0!=i&&l.animate({left:u},g(),"linear",function(){t(this).css({left:-l.width()}),-1==i||i--,setTimeout(w,e.scrolldelay)})};e.inverthover||w(),e.hoverstop&&(n.on(o,function(){t(this).addClass("str_active"),l.stop(!0)}).on(s,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),w()}),e.drag?n.on("mousedown",function(o){e.inverthover&&l.stop(!0);var s,i,r,a=o.clientX;return _=(d=l.position().left)-(o.clientX-n.offset().left),t(this).on("mousemove",function(t){i=(r=t.clientX)>a?1:-1,a=r,(s=_+t.clientX-n.offset().left)<-l.width()&&i<0&&(s=0,_=(d=l.position().left)-(t.clientX-n.offset().left)),s>0&&i>0&&(s=-l.width(),_=(d=l.position().left)-(t.clientX-n.offset().left)),l.stop(!0).css({left:s})}),!1}).on("mouseup",function(){e.inverthover&&l.trigger("mouseenter"),t(this).off("mousemove")}):n.addClass("no_drag"))}else if(e.runshort){var _=0,g=function(){return f=(n.width()-l.position().left)/e.scrollamount*1e3},w=function(){var o=n.width();l.animate({left:o},g(),"linear",function(){t(this).css({left:-l.width()}),-1==i||i--,setTimeout(w,e.scrolldelay)})};e.inverthover||w(),e.hoverstop&&(n.on(o,function(){t(this).addClass("str_active"),l.stop(!0)}).on(s,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),w()}),e.drag?n.on("mousedown",function(o){return e.inverthover&&l.stop(!0),_=(d=l.position().left)-(o.clientX-n.offset().left),t(this).on("mousemove",function(t){l.stop(!0).css({left:_+t.clientX-n.offset().left})}),!1}).on("mouseup",function(){e.inverthover&&l.trigger("mouseenter"),t(this).off("mousemove")}):n.addClass("no_drag"))}else n.addClass("str_static")}if("up"==e.direction){if(n.addClass("str_vertical"),l.height()>n.height()){var C=-l.height();e.circular&&!e.xml&&(h(),C=-(l.height()+(l.height()-n.height()))),e.xml&&l.css({top:n.height()});var _=0;g=function(){var t=Math.abs(C),o=t/e.scrollamount*1e3;return 0!=parseFloat(l.css("top"))&&(t+=n.height(),o=(t-(n.height()-parseFloat(l.css("top"))))/e.scrollamount*1e3),o};var w=function(){0!=i&&l.animate({top:C},g(),"linear",function(){t(this).css({top:n.height()}),-1==i||i--,setTimeout(w,e.scrolldelay)})};e.inverthover||w(),e.hoverstop&&(n.on(o,function(){t(this).addClass("str_active"),l.stop(!0)}).on(s,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),w()}),e.drag?n.on("mousedown",function(o){e.inverthover&&l.stop(!0);var s,i,r,a=o.clientY;return _=(strMoveTop=l.position().top)-(o.clientY-n.offset().top),t(this).on("mousemove",function(t){i=(r=t.clientY)>a?1:-1,a=r,(s=_+t.clientY-n.offset().top)<-l.height()&&i<0&&(s=0,_=(strMoveTop=l.position().top)-(t.clientY-n.offset().top)),s>0&&i>0&&(s=-l.height(),_=(strMoveTop=l.position().top)-(t.clientY-n.offset().top)),l.stop(!0).css({top:s})}),!1}).on("mouseup",function(){e.inverthover&&l.trigger("mouseenter"),t(this).off("mousemove")}):n.addClass("no_drag"))}else if(e.runshort){l.css({top:n.height()});var _=0,g=function(){return f=(l.height()+l.position().top)/e.scrollamount*1e3},w=function(){var o=-l.height();l.animate({top:o},g(),"linear",function(){t(this).css({top:n.height()}),-1==i||i--,setTimeout(w,e.scrolldelay)})};e.inverthover||w(),e.hoverstop&&(n.on(o,function(){t(this).addClass("str_active"),l.stop(!0)}).on(s,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),w()}),e.drag?n.on("mousedown",function(o){return e.inverthover&&l.stop(!0),_=(strMoveTop=l.position().top)-(o.clientY-n.offset().top),t(this).on("mousemove",function(t){l.stop(!0).css({top:_+t.clientY-n.offset().top})}),!1}).on("mouseup",function(){e.inverthover&&l.trigger("mouseenter"),t(this).off("mousemove")}):n.addClass("no_drag"))}else n.addClass("str_static")}if("down"==e.direction){if(n.addClass("str_vertical").addClass("str_down"),l.css({top:-l.height(),bottom:"auto"}),l.height()>n.height()){var C=n.height();e.circular&&!e.xml&&(h(),C=l.height()),e.xml&&l.css({top:-l.height()});var _=0;g=function(){var t=n.height(),o=t/e.scrollamount*1e3;return 0!=parseFloat(l.css("top"))&&(o=((t=l.height()+n.height())-(l.height()+parseFloat(l.css("top"))))/e.scrollamount*1e3),o};var w=function(){0!=i&&l.animate({top:C},g(),"linear",function(){t(this).css({top:-l.height()}),-1==i||i--,setTimeout(w,e.scrolldelay)})};e.inverthover||w(),e.hoverstop&&(n.on(o,function(){t(this).addClass("str_active"),l.stop(!0)}).on(s,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),w()}),e.drag?n.on("mousedown",function(o){e.inverthover&&l.stop(!0);var s,i,r,a=o.clientY;return _=(strMoveTop=l.position().top)-(o.clientY-n.offset().top),t(this).on("mousemove",function(t){i=(r=t.clientY)>a?1:-1,a=r,(s=_+t.clientY-n.offset().top)<-l.height()&&i<0&&(s=0,_=(strMoveTop=l.position().top)-(t.clientY-n.offset().top)),s>0&&i>0&&(s=-l.height(),_=(strMoveTop=l.position().top)-(t.clientY-n.offset().top)),l.stop(!0).css({top:s})}),!1}).on("mouseup",function(){e.inverthover&&l.trigger("mouseenter"),t(this).off("mousemove")}):n.addClass("no_drag"))}else if(e.runshort){var _=0,g=function(){return f=(n.height()-l.position().top)/e.scrollamount*1e3},w=function(){var o=n.height();l.animate({top:o},g(),"linear",function(){t(this).css({top:-l.height()}),-1==i||i--,setTimeout(w,e.scrolldelay)})};e.inverthover||w(),e.hoverstop&&(n.on(o,function(){t(this).addClass("str_active"),l.stop(!0)}).on(s,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),w()}),e.drag?n.on("mousedown",function(o){return e.inverthover&&l.stop(!0),_=(strMoveTop=l.position().top)-(o.clientY-n.offset().top),t(this).on("mousemove",function(t){l.stop(!0).css({top:_+t.clientY-n.offset().top})}),!1}).on("mouseup",function(){e.inverthover&&l.trigger("mouseenter"),t(this).off("mousemove")}):n.addClass("no_drag"))}else n.addClass("str_static")}};e.xml?t.ajax({url:e.xml,dataType:"xml",success:function(o){for(var s=t(o).find("text"),i=s.length,r=0;r<i;r++){var a=s.eq(r).text(),f=t("<span>").text(a).appendTo(n);("left"==e.direction||"right"==e.direction)&&(f.css({display:"inline-block",textAlign:"right"}),r>0&&f.css({width:n.width()+f.width()})),("down"==e.direction||"up"==e.direction)&&(f.css({display:"block",textAlign:"left"}),r>0&&f.css({paddingTop:n.height()}))}l()}}):l(),n.data({ini:l})})},update:function(){var o=t(this),e=t(".str_origin",o),s=t(".str_move_clone",o);e.stop(!0),s.remove(),o.data("ini")()}};t.fn.liMarquee=function(e){return o[e]?o[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Метод "+e+" в jQuery.liMarquee не существует"):o.init.apply(this,arguments)}}(jQuery);


	// Select the HTML5 video
const video = document.querySelector("#video")
// set the pause button to display:none by default
document.querySelector(".fa-pause").style.display = "none"
// update the progress bar
video.addEventListener("timeupdate", () => {
    let curr = (video.currentTime / video.duration) * 100
    if(video.ended){
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
    }
    document.querySelector('.inner').style.width = `${curr}%`
})
// pause or play the video
const play = (e) => {
    // Condition when to play a video
    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        $(".play-btn").addClass("playing")
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
         $(".play-btn").removeClass("playing")
        video.pause()
    }
}
// trigger fullscreen
const fullScreen = (e) => {
    e.preventDefault()
    video.requestFullscreen()
}
// download the video
const download = (e) => {
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.src 
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
// rewind the current time
const rewind = (e) => {
    video.currentTime = video.currentTime - ((video.duration/100) * 5)
}
// forward the current time
const forward = (e) => {
    video.currentTime = video.currentTime + ((video.duration/100) * 5)
}