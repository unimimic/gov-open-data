(function(e){function t(t){for(var c,o,u=t[0],i=t[1],s=t[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},a={app:0},r=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a7b":function(e,t,n){},"269f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(e,t,n,a,r,o){var u=Object(c["k"])("HelloWorld");return Object(c["g"])(),Object(c["c"])(u,{msg:"台灣空氣品質概況"})}var r=Object(c["o"])("data-v-67a109e8");Object(c["i"])("data-v-67a109e8");var o={class:"hello"},u={class:"newsArea form"},i=Object(c["e"])(" 測站 "),s=Object(c["e"])(" --- "),l={key:0};Object(c["h"])();var d=r((function(e,t,n,a,r,d){var b=Object(c["k"])("display");return Object(c["g"])(),Object(c["c"])("div",o,[Object(c["f"])("h1",null,Object(c["l"])(n.msg),1),Object(c["f"])("div",u,[i,Object(c["n"])(Object(c["f"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.selectedCounty=e}),onChange:t[2]||(t[2]=function(){return d.selectCountry&&d.selectCountry.apply(d,arguments)})},[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(r.Counties,(function(e){return Object(c["g"])(),Object(c["c"])("option",{key:e},Object(c["l"])(e),1)})),128))],544),[[c["m"],r.selectedCounty]]),s,Object(c["n"])(Object(c["f"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.selectedSiteName=e})},[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(d.getSiteNames,(function(e){return Object(c["g"])(),Object(c["c"])("option",{key:e},Object(c["l"])(e),1)})),128))],512),[[c["m"],r.selectedSiteName]])]),d.displayData?(Object(c["g"])(),Object(c["c"])("div",l,[Object(c["f"])(b,{msg:d.displayData},null,8,["msg"])])):Object(c["d"])("",!0)])})),b=(n("159b"),n("7db0"),n("caad"),n("2532"),n("bc3a")),f=n.n(b),p=Object(c["o"])("data-v-6d2a699a");Object(c["i"])("data-v-6d2a699a");var j={class:"b"},O=Object(c["e"])(" 空氣品質指標 "),m={class:"AQI"};Object(c["h"])();var y=p((function(e,t,n,a,r,o){return Object(c["g"])(),Object(c["c"])("div",null,[Object(c["f"])("h3",null,Object(c["l"])(n.msg.County)+"/"+Object(c["l"])(n.msg.SiteName),1),Object(c["f"])("div",j,[O,Object(c["f"])("b",m,Object(c["l"])(n.msg.AQI),1),Object(c["f"])("span",null,Object(c["l"])(n.msg.Status),1)])])})),v={name:"display",data:function(){return{}},props:{msg:Object}};n("bf15");v.render=y,v.__scopeId="data-v-6d2a699a";var h=v,g={name:"HelloWorld",components:{display:h},data:function(){return{rawdata:[],Counties:[],SiteNames:[],selectedCounty:"苗栗縣",selectedSiteName:"頭份"}},computed:{getSiteNames:function(){var e=this,t=[];return this.SiteNames.forEach((function(n){n.County===e.selectedCounty&&t.push(n.SiteName)})),t},displayData:function(){var e=this;return this.rawdata.find((function(t){return t.County===e.selectedCounty&t.SiteName===e.selectedSiteName}))}},methods:{selectCountry:function(){this.selectedSiteName=this.getSiteNames[0]}},props:{msg:String},created:function(){var e=this;f.a.get("/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json").then((function(t){e.rawdata=t.data.records,t.data.records.forEach((function(t){e.Counties.includes(t.County)||e.Counties.push(t.County)})),t.data.records.forEach((function(t){e.SiteNames.push({County:t.County,SiteName:t.SiteName})}))})).catch((function(e){console.log(e)}))}};n("e190");g.render=d,g.__scopeId="data-v-67a109e8";var S=g,C={name:"App",components:{HelloWorld:S}};n("c185");C.render=a;var N=C;Object(c["b"])(N).mount("#app")},"68b0":function(e,t,n){},bf15:function(e,t,n){"use strict";n("269f")},c185:function(e,t,n){"use strict";n("68b0")},e190:function(e,t,n){"use strict";n("0a7b")}});
//# sourceMappingURL=app.f6ed7733.js.map