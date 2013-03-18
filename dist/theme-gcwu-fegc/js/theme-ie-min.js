/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-rc1-development Build: 2013-03-18 04:34 PM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-fegc",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,gridsmenu:null,menu:null,init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");b.gridsmenu=pe.main.find(".module-menu-section");var j=pe.menu.navcurrent(b.menubar,b.bcrumb),i=j.parents("div.mb-sm"),e,h=pe.mobile,d=(h?["gcwu-wmms"]:["gcwu-wmms","gcwu-sig"]),k,g,f=pe.print;if(!pe.svg||pe.svgfix){e=d.length;while(e--){k=document.getElementById(d[e]);if(k!==null){g=k.getElementsByTagName("object")[0];g.parentNode.innerHTML=g.parentNode.innerHTML.replace(/<object[\s\S]*?\/object>/i,(f?g.innerHTML:g.innerHTML.replace(".png","-w.png")))}}}if(i.length!==0){i.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){j=pe.menu.navcurrent(pe.secnav,b.bcrumb);i=j.parents("ul");i.prev().children("a").addClass("nav-current")}if(b.gridsmenu.length!==0){j=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var v,I="",e,m,P=pe.dic.get("%settings"),z,r,f,l,N,S="",t='<a data-role="button" data-iconpos="notext"',B=' data-rel="popup" data-position-to="window"',o=t+B,C='<div data-role="popup" data-overlay-theme="a"',E='<div data-role="header"',R=E+"><h1>",A=' data-theme="c" class="ui-corner-all">',p=E+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',O=t+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",L=o+' data-icon="back" class="ui-btn-left"',J=">"+pe.dic.get("%back")+"</a>",Q="</div></div>",n='<ul data-role="listview"',w="",G,k,s,q,F,g,d,M,u,H,D,y=c(document),K,j,x;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");r=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");v=C+' id="jqm-wb-mb">'+R+e+"</h1>"+O+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){D=b.bcrumb[0];K=D.getElementsByTagName("a")[0].href;v+='<section><div id="jqm-mb-location-text">'+D.innerHTML+"</div></section>"}else{v+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){I+="<section><div><h2>"+r.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){I+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}v+='<div id="jqm-mb-menu"></div></nav></div></div></div>';S+=v;b.menu=I;w+=o+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){m=pe.dic.get("%search");f=b.search[0];l=f.innerHTML;f=f.getElementsByTagName("input");u=f.length;while(u--){f[u].setAttribute("data-role","none")}N=C+' id="jqm-wb-search">'+R+m+"</h1>"+O+'</div><div data-role="content"><div>'+l.substring(l.indexOf("<form"))+"</div></div></div>";S+=N;w+=o+' data-icon="search" href="#jqm-wb-search">'+m+"</a>"}j='<div data-role="header"><div class="ui-title"></div><map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof K!=="undefined"){j+=t+' href="'+K+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=t+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(w.length!==0){j+=w}j+=o+' href="#popupSettings" data-icon="gear">'+P+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(j);b.title[0].className+=" ui-bar-b";q=b.gcnb.find('li[id*="-lang"]');z=C+' id="popupSettings"'+A;z+=p+P+"</h1>"+O+"</div>";z+=h+n+">";if(q.length!==0){z+='<li><a href="#popupLanguages"'+B+">"+pe.dic.get("%languages")+"</a></li>"}z+='<li class="ui-corner-bottom"><a href="#popupAbout"'+B+">"+pe.dic.get("%about")+"</a></li>";z+="</ul>"+Q;if(q.length!==0){z+=C+' id="popupLanguages"'+A;z+=p+pe.dic.get("%languages")+"</h1>"+L+' href="#popupSettings"'+J+O+"</div>";z+=h+n+">";if(q.filter('[id*="-lang-current"]').length===0){z+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}H=q.get();u=H.length;M=u;while(M--){D=H[M];k=D.childNodes[0];z+="<li"+(M===0?' class="ui-corner-bottom"':"");if(D.id.indexOf("-lang-current")!==-1){z+='><a href="javascript:;" class="ui-disabled">'+D.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{z+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}z+="</ul>"+Q}z+=C+' id="popupAbout"'+A;z+=p+pe.dic.get("%about")+"</h1>"+L+' href="#popupSettings"'+J+O+"</div>";z+=h;z+='<div class="site-app-title"><div class="ui-title">'+b.title.text()+"</div></div>";D=pe.main.find("#gcwu-date-mod").children();if(D.length!==0){d=D[1];if(d.getElementsByTagName("time").length===0){z+='<div class="app-version">'+D[0].innerHTML+" "+d.innerHTML+"</div>"}}z+=n+' data-inset="true">';G=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(M=0,u=G.length;M!==u;M+=1){k=G[M];z+='<li><a href="'+k.href+'">'+k.innerHTML+"</a></li>"}G=b.sft.find(".gcwu-col-head a").get();for(M=0,u=G.length;M!==u;M+=1){k=G[M];D=k.innerHTML;d=D.toLowerCase();z+="<li"+(M===(u-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+D+"</a></li>"}z+="</ul>"+Q;pe.bodydiv.append(S+z)}else{q=document.getElementById("gcwu-lang");if(q!==null){H=q.getElementsByTagName("li");F='<div data-role="navbar"><ul>';for(M=0,u=H.length;M<u;M+=1){D=H[M];k=D.getElementsByTagName("a")[0];F+='<li><a href="'+k.href+'"'+(D.hasAttribute("lang")?' lang="'+D.getAttribute("lang")+'"':"")+' data-theme="a">'+k.innerHTML+"</a></li>"}F+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=F;q=document.getElementById("gcwu-other-lang");if(q!==null){q.parentNode.removeChild(q)}}d=document.getElementById("gcwu-tc");if(d!==null){H=d.getElementsByTagName("li");s='<ul class="ui-grid-a">';for(M=0,u=H.length;M<u;M+=1){D=H[M];k=D.getElementsByTagName("a")[0];s+='<li class="ui-block-'+(M%2!==0?"b":"a")+'"><a href="'+k.href+'"'+(D.hasAttribute("lang")?' lang="'+D.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+k.innerHTML+"</a></li>"}s+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=s}x=document.getElementById("wmms");if(x!==null){pe.footer[0].getElementsByTagName("footer")[0].appendChild(x.cloneNode(true));x.parentNode.removeChild(x)}}y.on("pagecreate",function(){var W=b.gcnb.find("#gcwu-mnavbar"),Y=pe.bodydiv.find("#jqm-mb-menu"),X,V,T,U;if(W.length!==0){W.removeClass("wb-hide");if(Y.length!==0){Y.append(b.menu);W.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){Y.trigger("create");X=Y.find(".ui-controlgroup");V=X.get();u=V.length;while(u--){D=V[u];U=D.getElementsByTagName("li")[0];if(U.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&U.className.indexOf("ui-corner-top")===-1){U.className+=" ui-corner-top"}T=X.eq(u).find(".ui-btn").get();D=T[T.length-1];if(D.className.indexOf("ui-corner-bottom")===-1){D.className+=" ui-corner-bottom"}}})}}function i(aa,Z,ad,ac){var ab;c.mobile.showPageLoadingMsg();ab=c.mobile.transitionHandlers.simultaneous("pop",Z,ad,ac);ab.done(function(){c.mobile.hidePageLoadingMsg()});return ab}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});y.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));