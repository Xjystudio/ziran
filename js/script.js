!function(r){function t(){n=!0}function a(t){setTimeout(function(){n=!1,t&&t()},200)}var e=r("#search-form-wrap"),n=!1,i=(r("#nav-search-btn").on("click",function(){n||(t(),e.addClass("on"),a(function(){r(".search-form-input").focus()}))}),r(".search-form-input").on("blur",function(){t(),e.removeClass("on"),a()}),r("body").on("click",function(){r(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(t){t.stopPropagation();var t=r(this),a=t.attr("data-url"),e=encodeURIComponent(a),n="article-share-box-"+t.attr("data-id"),i=t.attr("data-title"),t=t.offset();if(r("#"+n).length){if((o=r("#"+n)).hasClass("on"))return void o.removeClass("on")}else{var n=['<div id="'+n+'" class="article-share-box">','<input class="article-share-input" value="'+a+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?text='+encodeURIComponent(i)+"&url="+e+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+e+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+e+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://www.linkedin.com/shareArticle?mini=true&url='+e+'" class="article-share-linkedin" target="_blank" title="LinkedIn"></a>',"</div>","</div>"].join(""),o=r(n);r("body").append(o)}r(".article-share-box.on").hide(),o.css({top:t.top+25,left:t.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){r(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault(),t.stopPropagation(),window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")}),r(".article-entry").each(function(t){r(this).find("img").each(function(){var t;r(this).parent().hasClass("fancybox")||r(this).parent().is("a")||((t=this.alt)&&r(this).after('<span class="caption">'+t+"</span>"),r(this).wrap('<a href="'+this.src+'" data-fancybox="gallery" data-caption="'+t+'"></a>'))}),r(this).find(".fancybox").each(function(){r(this).attr("rel","article"+t)})}),r.fancybox&&r(".fancybox").fancybox(),r("#container")),o=!1;r("#main-nav-toggle").on("click",function(){o||(o=!0,i.toggleClass("mobile-nav-on"),setTimeout(function(){o=!1},200))}),r("#wrap").on("click",function(){!o&&i.hasClass("mobile-nav-on")&&i.removeClass("mobile-nav-on")})}(jQuery);