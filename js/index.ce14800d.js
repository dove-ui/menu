var VcMenu=function(e){function t(t){for(var i,r,u=t[0],a=t[1],l=t[2],c=0,d=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);h&&h(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={index:0},o={index:0},s=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aa97b":"fe017cbf","chunk-2f7196c8":"37a2ca75","chunk-74ae4cb7":"60402205"}[e]+".js"}function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={"chunk-2f7196c8":1,"chunk-74ae4cb7":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-2d0aa97b":"31d6cfe0","chunk-2f7196c8":"bf79bedd","chunk-74ae4cb7":"bf79bedd"}[e]+".css",o=a.p+i,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var l=s[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===i||c===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],c=l.getAttribute("data-href");if(c===i||c===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var i=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete r[e],h.parentNode.removeChild(h),n(s)},h.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){r[e]=0})));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var s=new Promise((function(t,n){i=o[e]=[t,n]}));t.push(i[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=u(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var l=window["webpackJsonpVcMenu"]=window["webpackJsonpVcMenu"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=c;return s.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("c31f")},"137e":function(e,t,n){},"474a":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"name":"@dove-ui/menu","version":"0.1.2","private":false,"types":"types/index.d.ts","main":"dist/index.umd.min.js","libraryName":"VcMenu","scripts":{"dev":"vue-cli-service serve","build:docs":"vue-cli-service build","build:lib":"vue-cli-service lint && vue-cli-service build --dest dist --target lib --name index src/index.js","lint":"vue-cli-service lint","open":"dev serve -o docs"},"files":["src","dist","types","screenshot.png"],"github":"https://github.com/mengdu/dove-ui/menu","website":"https://lanyueos.com","homepage":"https://mengdu.github.io/dove-ui/menu","repository":{"type":"https","url":"git+https://github.com/mengdu/dove-ui/menu"},"bugs":{"url":"https://github.com/mengdu/dove-ui/menu/issues"},"keywords":["menu","vue-menu"],"author":{"name":"lanyue","email":"lanyueos@qq.com"},"license":"MIT","devDependencies":{"@vue/cli-plugin-babel":"^4.0.0","@vue/cli-plugin-eslint":"^4.0.0","@vue/cli-service":"^4.0.0","babel-eslint":"^10.0.3","core-js":"^3.3.2","eslint":"^5.16.0","eslint-plugin-vue":"^5.0.0","less":"^3.10.3","less-loader":"^5.0.0","vue":"^2.6.10","vue-dotmd-loader":"^0.2.0","vue-router":"^3.1.3","vue-template-compiler":"^2.6.10"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"rules":{"no-console":[0]},"parserOptions":{"parser":"babel-eslint"}},"eslintIgnore":["**/*.md"],"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions"]}')},ab08:function(e,t,n){"use strict";n.r(t);n("c975"),n("d81d"),n("a434");var i=n("2909"),r=(n("b0c0"),n("9911"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{style:{width:e.width+"px",height:e.width+"px",display:"inline-block","vertical-align":"middle",color:e.color}},[n("svg",{staticClass:"m-icon-arrow",style:{transition:"all 0.3s ease",transform:"rotate("+e.rotate+")"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 35 35",fill:"currentColor"}},[n("path",{attrs:{d:"M9.4,13.9c-0.2,0.2-0.2,0.6,0,0.8l8.1,8.1l0,0l0,0l8.1-8.1c0.2-0.2,0.2-0.6,0-0.8l-1.3-1.3 c-0.2-0.2-0.6-0.2-0.8,0l-5.5,5.5c-0.2,0.2-0.6,0.2-0.8,0l-5.5-5.5c-0.2-0.2-0.6-0.2-0.8,0L9.4,13.9z"}})])])}),o=[],s=(n("a9e3"),{name:"m-icon-arrow",props:{width:[String,Number],direction:String,color:String},computed:{rotate:function(){switch(this.direction){case"left":return"90deg";case"right":return"-90deg";case"bottom":return"0deg";case"top":return"-180deg";default:return"0deg"}}}}),u=s,a=n("2877"),l=Object(a["a"])(u,r,o,!1,null,null,null),c=l.exports;n("d3b7"),n("25f0");function d(e){return"[object Array]"===Object.prototype.toString.call(e)}function h(e){return"[object Function]"===Object.prototype.toString.call(e)}function m(e,t){return h(t.label)?t.label(t):e.root.$scopedSlots.item?e.root.$scopedSlots.item(t):h(e.root.renderItem)?e.root.renderItem(t):t.label}var p={name:"VcMenuItem",componentName:"VcMenuItem",props:{menu:Object},data:function(){return{isHovered:!1,isOpen:!1}},computed:{root:function(){var e=this.$parent;while(e){if("VcMenu"===e.$options.componentName&&e.isRoot)return e;e=e.$parent}},isClicked:function(){return!!this.menu.name&&(!!this.root&&this.root.selected.indexOf(this.menu.name)>-1)},isFolder:function(){return d(this.menu.children)},showRow:function(){var e=this.$parent;while(e){if("VcMenu"!==e.$options.componentName&&e.isRoot)return!0;if(!1===e.isOpen)return!1;e=e.$parent}return!0}},watch:{"menu.open":function(){this.isOpen=!!this.menu.open},isOpen:function(){this.toggle()}},methods:{handleClick:function(){this.root.$emit("click-item",this.menu),h(this.menu.handle)&&this.menu.handle(this.menu),this.menu.name&&(this.isClicked||(this.root.addSelected(this.menu.name),this.root.$emit("selected",this.menu))),this.isFolder&&(this.isOpen=!this.isOpen,this.isOpen?this.root.$emit("open",this.menu):this.root.$emit("close",this.menu))},toggle:function(){var e=this.$refs.submenu?this.$refs.submenu.$el:null;if(!e)return!1;if(e.removeEventListener("transitionend",this.ontransitionend,!1),e.addEventListener("transitionend",this.ontransitionend,!1),this.isOpen){e.style.display=null,e.style.height="auto";var t=getComputedStyle(e).height;e.style.height=0,e.offsetHeight,e.style.height=t}else{var n=getComputedStyle(e).height;e.style.height=n,e.offsetHeight,e.style.height=0}},ontransitionend:function(){var e=this.$refs.submenu.$el;if(!e)return!1;e.style.height=null,this.isOpen||(e.style.display="none")},openParent:function(){var e=this.$parent,t=0;while(e){if("VcMenuItem"===e.$options.componentName?(e.isOpen=!0,t=0):t++,t>2)break;e=e.$parent}}},beforeCreate:function(){this.$options.components.VcMenu=n("ab08").default},created:function(){this.isOpen=!!this.menu.open},mounted:function(){this.isFolder&&!this.menu.group&&(this.isOpen||(this.$refs.submenu.$el.style.display="none")),this.isClicked&&this.root.openActive&&this.openParent()},render:function(e){var t=this,n=this.menu,i=this.isClicked,r=this.isHovered;if(n.hide)return null;if("line"===n.type)return e("li",{class:"vc-menu-line"},[e("div",{class:"vc-menu-line--row"})]);var o=e("div",{class:["vc-menu-item--row",i&&this.showRow&&"is-clicked",r&&"is-hovered"],on:{mouseover:function(){return t.isHovered=!0},mouseout:function(){return t.isHovered=!1},click:this.handleClick}}),s=e("div",{class:["vc-menu-item--label"],on:{mouseover:function(){return t.isHovered=!0},mouseout:function(){return t.isHovered=!1},click:this.handleClick}},[m(this,n),this.isFolder?e(c,{class:"vc-menu--dropdown",attrs:{direction:this.isOpen?"bottom":"left"}}):null]),u=null;u=n.link?e("a",{attrs:{href:n.link,target:n.target,title:n.title}},[[o,s]]):n.router?e("router-link",{attrs:{to:n.router,title:n.title}},[[o,s]]):[o,s];var a=n.group?e("div",{class:["vc-menu-group--label"]},[n.label]):null;return e("li",{class:[this.menu.group?"vc-menu-group":"vc-menu-item",{"is-open":this.isOpen}]},[n.group?a:u,this.isFolder?e("vc-menu",{ref:"submenu",attrs:{menus:n.children,"is-root":!1},style:{}}):null])}};t["default"]={name:"VcMenu",componentName:"VcMenu",components:{MenuItem:p},props:{menus:{type:Array,default:function(){return[]}},theme:String,currentActive:{type:Array,default:function(){return[]}},multiple:Boolean,renderItem:Function,isRoot:{type:Boolean,default:!0},openActive:Boolean},data:function(){return{selected:[]}},watch:{currentActive:function(e){this.selected=Object(i["a"])(e)}},methods:{addSelected:function(e){return-1===this.selected.indexOf(e)&&(this.multiple?this.selected.push(e):this.selected=[e],!0)},removeSelected:function(e){var t=this.selected.indexOf(e);t>-1&&this.selected.splice(t,1)}},created:function(){this.selected=Object(i["a"])(this.currentActive)},render:function(e){return e("ul",{class:["vc-menu",this.theme&&"vc-menu--"+this.theme,this.isRoot&&"is-root"]},[this.menus.map((function(t){return e("menu-item",{attrs:{menu:t}})}))])}}},c31f:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MainHeader"),n("div",{staticClass:"main-container"},[n("router-view")],1),n("MainFooter")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-header"},[n("div",{staticClass:"main-container clearfix"},[n("div",{staticClass:"f-left"},[n("navs",{attrs:{menus:e.navs}})],1),n("div",{staticClass:"f-right"},[n("navs",{attrs:{menus:e.outside}})],1)])])},u=[],a=(n("d81d"),n("2909"));n("d3b7"),n("25f0"),n("9911");function l(e){return"[object Function]"===Object.prototype.toString.call(e)}function c(e,t){return l(t.label)?t.label(t):e.$parent.$scopedSlots.item?e.$parent.$scopedSlots.item(t):l(e.$parent.renderItem)?e.$parent.renderItem(t):t.label}var d={props:{menu:Object},render:function(e){var t=this.menu,n=e("div",{class:"v-navs-item--label"},[c(this,t)]),i=null;return i=t.link?e("a",{attrs:{href:t.link,target:t.target,title:t.title}},[[n]]):t.router?e("router-link",{attrs:{to:t.router,title:t.title}},[[n]]):[n],e("li",{class:"v-navs-item"},[i])}},h={name:"VNavs",components:{NavItem:d},props:{menus:{type:Array,default:function(){return[]}},currentActive:{type:Array,default:function(){return[]}}},data:function(){return{actives:[]}},watch:{currentActive:function(e){this.actives=Object(a["a"])(e)}},created:function(){this.actives=Object(a["a"])(this.currentActive)},render:function(e){return e("ul",{class:"v-navs"},[this.menus.map((function(t){return e(d,{attrs:{menu:t}})}))])}},m=(n("f4b7"),h),p={components:{Navs:m},data:function(){return{navs:[{label:"Home",router:"/"},{label:"Live Demo",router:"/live-demo"},{label:"Docs",router:"/docs"}],outside:[{label:"Github",link:this.$root.pkg.github},{label:"About",link:this.$root.pkg.website}]}},created:function(){}},f=p,v=n("2877"),b=Object(v["a"])(f,s,u,!1,null,null,null),g=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-footer"},[n("div",{staticClass:"main-container"},[n("div",{staticClass:"line"}),n("ul",{staticClass:"nav-list"},[n("li",[e._v("©2020 "+e._s(e.$root.pkg.author.name))]),n("li",[n("a",{attrs:{href:e.$root.pkg.github}},[e._v("Github")])]),n("li",[n("a",{attrs:{href:e.$root.pkg.website}},[e._v("About me")])])])])])},w=[],k={},O=Object(v["a"])(k,y,w,!1,null,null,null),$=O.exports,j={name:"app",components:{MainHeader:g,MainFooter:$}},C=j,x=Object(v["a"])(C,r,o,!1,null,null,null),S=x.exports,_=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-demo-block"},[n("div",{staticClass:"demo"},[e._t("default")],2),e.params.hideCode?e._e():n("div",{staticClass:"code"},[e._t("code")],2)])}),M=[],A={props:{data:Object,params:{type:Object,default:function(){return{}}}}},E=A,N=Object(v["a"])(E,_,M,!1,null,null,null),I=N.exports;n("d351");I.install=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component(t.name||"DemoBlock",I)};var V=I,H=n("8c4f");i["a"].use(H["a"]);var P=new H["a"]({mode:"hash",routes:[{path:"/",component:function(){return n.e("chunk-2d0aa97b").then(n.bind(null,"1259"))}},{path:"/live-demo",component:function(){return n.e("chunk-2f7196c8").then(n.bind(null,"cd8b"))}},{path:"/docs",component:function(){return n.e("chunk-74ae4cb7").then(n.bind(null,"8d7e"))}}]}),F=P,L=n("ab08");n("137e");L["default"].install=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component(t.name||L["default"].name,L["default"])};var T=L["default"],B=n("9224");n("fa76"),n("e4cb"),n("581d"),n("474a");i["a"].use(V),i["a"].use(T),i["a"].config.productionTip=!1;var D=new i["a"]({render:function(e){return e(S)},router:F,data:function(){return{pkg:B}}}).$mount("#app");window.app=D},d351:function(e,t,n){},f4b7:function(e,t,n){}});
//# sourceMappingURL=index.ce14800d.js.map