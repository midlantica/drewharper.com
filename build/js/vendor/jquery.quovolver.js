/*
 * jQuery Quovolver v1.0 - http://sandbox.sebnitu.com/jquery/quovolver
 *
 * By Sebastian Nitu - Copyright 2009 - All rights reserved
 * 
 */
!function(i){i.fn.quovolver=function(t,e){t||(t=500),e||(e=6e3);var s=4*t;s>e&&(e=s);var n=i(this),h=i(this).filter(":first"),f=i(this).filter(":last"),r='<div id="quote_wrap"></div>';i(this).wrapAll(r),i(this).hide(),i(h).show(),i(this).parent().css({height:i(h).height()}),setInterval(function(){if(i(f).is(":visible"))var e=i(h),s=i(e).height();else var e=i(n).filter(":visible").next(),s=i(e).height();i(n).filter(":visible").fadeOut(t),setTimeout(function(){i(n).parent().animate({height:s},t)},t),i(f).is(":visible")?setTimeout(function(){i(h).fadeIn(2*t)},2*t):setTimeout(function(){i(e).fadeIn(t)},2*t)},e)}}(jQuery);