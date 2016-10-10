!function t(e,n,r){function o(s,a){if(!n[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return o(n?n:t)},c,c.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=t("./components/map"),i=r(o),s=t("./components/religions_chart"),a=r(s);(0,i.default)(),(0,a.default)(),new Vue({el:"#acn_reports"})},{"./components/map":2,"./components/religions_chart":3}],2:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){Vue.component("map",{template:"#map-template",props:["posts","items"],data:{country:""},ready:function(){var t=this,e=document.querySelector(".map__info"),n=this,r=document.querySelectorAll("img.inject-me");(0,l.default)(r,{},function(){d3.select(".map svg g").selectAll("g").on("mouseleave",function(){var t=this;d3.select(t).style("fill","").style("webkit-box-shadow","10px 5px 5px #fff"),e.style.opacity=0});var r=d3.select(".map svg #map-g").selectAll("g");r.on("click",function(){window.location="/report/"+this.getAttribute("id").toLowerCase().replace(" ","-")}),r.on("mousemove",function(){var r=this,i=n.posts.filter(function(t){return t.meta_country==r.getAttribute("id")});o({"#FF362F":"Persecution"},"#FF362F","Persecution");console.log("translations",t.countriesTranslation);var a=i.meta_situation?i.meta_situation:"",l=t.countriesTranslation[this.getAttribute("id").replace("-"," ")];d3.select(e).select(".map__info_country").text(l+a),(0,s.default)(null).then(function(t){e.style.opacity=1,e.style.top=t.top-60+"px",e.style.left=t.left-300+"px"}),d3.select(this).style("transition","all 300ms ease"),d3.select(this).style("fill","#536D7F")})})},methods:{search:function(){var t=this;this.country.length>2?this.items=this.posts.filter(function(e){return e.meta_country.toLowerCase().indexOf(t.country.toLowerCase())!=-1}):this.items=[]}}})};var i=t("../lib/get_mouse_position"),s=r(i),a=t("svg-injector"),l=r(a)},{"../lib/get_mouse_position":4,"svg-injector":6}],3:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){Vue.component("religions-chart",{template:'<div id="religions-chart" style="width: 100%; height: 400px; margin: 0 auto"></div>',props:["religions","colors"],ready:function(){function t(t,e,n,r){var o={},i=r?Highcharts.Color(t).brighten(.2).get():Highcharts.Color(t).get();return o.color=i,o.name=e,o.y=parseFloat(n),o}function e(e,n){var r=e[n],i=r.color,s=t(r.color,r.name,r.percent);if(r.sub&&Object.keys(r.sub).length>0)o=o.concat(Object.keys(r.sub).map(function(e){return t(i,r.sub[e].name,r.sub[e].percent,!0)}));else{var a=t(i,r.name,r.percent,!0);o=o.concat([a])}return s}var n=this.religions,r=(this.colors,[]),o=[];console.log(n),r=Object.keys(n).map(function(t){return e(n,t)}),$("#religions-chart").highcharts({chart:{type:"pie",backgroundColor:"rgba(255, 255, 255, 0)",style:{fontFamily:"Roboto Condensed"}},title:{text:""},yAxis:{title:{text:""}},plotOptions:{pie:{shadow:!1,center:["50%","50%"]}},tooltip:{valueSuffix:"%"},series:[{name:"",data:r,size:"60%",dataLabels:{formatter:function(){return this.y>5?this.point.name:null},color:"#ffffff",distance:-30}},{name:"",data:o,size:"80%",innerSize:"60%",dataLabels:{formatter:function(){return this.y>1?"<b>"+this.point.name+":</b> "+this.y+"%":null}}}]})}})};var o=t("hex-rgba");r(o)},{"hex-rgba":5}],4:[function(t,e,n){"use strict";function r(t,e){var n=t?t:document,r=new Promise(function(t,e){$(n).on("mousemove",function(e){return t({left:e.pageX,top:e.pageY})})});return r}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},{}],5:[function(t,e,n){"use strict";e.exports=function(t,e){var e=e||100,t=t.replace("#",""),n=parseInt(t.substring(0,2),16),r=parseInt(t.substring(2,4),16),o=parseInt(t.substring(4,6),16);return"rgba("+n+", "+r+" ,"+o+", "+e/100+")"}},{}],6:[function(t,e,n){!function(t,r){"use strict";function o(t){t=t.split(" ");for(var e={},n=t.length,r=[];n--;)e.hasOwnProperty(t[n])||(e[t[n]]=1,r.unshift(t[n]));return r.join(" ")}var i="file:"===t.location.protocol,s=r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),a=Array.prototype.forEach||function(t,e){if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;var n,r=this.length>>>0;for(n=0;n<r;++n)n in this&&t.call(e,this[n],n,this)},l={},u=0,c=[],f=[],p={},d=function(t){return t.cloneNode(!0)},m=function(t,e){f[t]=f[t]||[],f[t].push(e)},h=function(t){for(var e=0,n=f[t].length;e<n;e++)!function(e){setTimeout(function(){f[t][e](d(l[t]))},0)}(e)},g=function(e,n){if(void 0!==l[e])l[e]instanceof SVGSVGElement?n(d(l[e])):m(e,n);else{if(!t.XMLHttpRequest)return n("Browser does not support XMLHttpRequest"),!1;l[e]={},m(e,n);var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState){if(404===r.status||null===r.responseXML)return n("Unable to load SVG file: "+e),i&&n("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),n(),!1;if(!(200===r.status||i&&0===r.status))return n("There was a problem injecting the SVG: "+r.status+" "+r.statusText),!1;if(r.responseXML instanceof Document)l[e]=r.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var t;try{var o=new DOMParser;t=o.parseFromString(r.responseText,"text/xml")}catch(e){t=void 0}if(!t||t.getElementsByTagName("parsererror").length)return n("Unable to parse SVG file: "+e),!1;l[e]=t.documentElement}h(e)}},r.open("GET",e),r.overrideMimeType&&r.overrideMimeType("text/xml"),r.send()}},v=function(e,n,r,i){var l=e.getAttribute("data-src")||e.getAttribute("src");if(!/\.svg/i.test(l))return void i("Attempted to inject a file with a non-svg extension: "+l);if(!s){var f=e.getAttribute("data-fallback")||e.getAttribute("data-png");return void(f?(e.setAttribute("src",f),i(null)):r?(e.setAttribute("src",r+"/"+l.split("/").pop().replace(".svg",".png")),i(null)):i("This browser does not support SVG and no PNG fallback was defined."))}c.indexOf(e)===-1&&(c.push(e),e.setAttribute("src",""),g(l,function(r){if("undefined"==typeof r||"string"==typeof r)return i(r),!1;var s=e.getAttribute("id");s&&r.setAttribute("id",s);var f=e.getAttribute("title");f&&r.setAttribute("title",f);var d=[].concat(r.getAttribute("class")||[],"injected-svg",e.getAttribute("class")||[]).join(" ");r.setAttribute("class",o(d));var m=e.getAttribute("style");m&&r.setAttribute("style",m);var h=[].filter.call(e.attributes,function(t){return/^data-\w[\w\-]*$/.test(t.name)});a.call(h,function(t){t.name&&t.value&&r.setAttribute(t.name,t.value)});var g,v,y,b,w,x={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(x).forEach(function(t){g=t,y=x[t],v=r.querySelectorAll("defs "+g+"[id]");for(var e=0,n=v.length;e<n;e++){b=v[e].id,w=b+"-"+u;var o;a.call(y,function(t){o=r.querySelectorAll("["+t+'*="'+b+'"]');for(var e=0,n=o.length;e<n;e++)o[e].setAttribute(t,"url(#"+w+")")}),v[e].id=w}}),r.removeAttribute("xmlns:a");for(var A,_,j=r.querySelectorAll("script"),k=[],S=0,O=j.length;S<O;S++)_=j[S].getAttribute("type"),_&&"application/ecmascript"!==_&&"application/javascript"!==_||(A=j[S].innerText||j[S].textContent,k.push(A),r.removeChild(j[S]));if(k.length>0&&("always"===n||"once"===n&&!p[l])){for(var M=0,F=k.length;M<F;M++)new Function(k[M])(t);p[l]=!0}var T=r.querySelectorAll("style");a.call(T,function(t){t.textContent+=""}),e.parentNode.replaceChild(r,e),delete c[c.indexOf(e)],e=null,u++,i(r)}))},y=function(t,e,n){e=e||{};var r=e.evalScripts||"always",o=e.pngFallback||!1,i=e.each;if(void 0!==t.length){var s=0;a.call(t,function(e){v(e,r,o,function(e){i&&"function"==typeof i&&i(e),n&&t.length===++s&&n(s)})})}else t?v(t,r,o,function(e){i&&"function"==typeof i&&i(e),n&&n(1),t=null}):n&&n(0)};"object"==typeof e&&"object"==typeof e.exports?e.exports=n=y:"function"==typeof define&&define.amd?define(function(){return y}):"object"==typeof t&&(t.SVGInjector=y)}(window,document)},{}]},{},[1]);