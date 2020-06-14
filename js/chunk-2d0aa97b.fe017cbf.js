(window["webpackJsonpVcMenu"]=window["webpackJsonpVcMenu"]||[]).push([["chunk-2d0aa97b"],{1259:function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("div",{staticClass:"readme"},[n("div",{staticClass:"title"},[t._v("README.md")]),n("div",{staticClass:"content"},[n("Readme")],1)])])},a=[],l=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"v-docs"},[n("div",{staticClass:"markdown-body"},[n("h1",[t._v("Menu")]),n("p",[t._v("A menu component for vue.")]),n("pre",{staticClass:"language language-js",attrs:{"data-lang":"js"}},[n("code",{domProps:{innerHTML:t._s('<span class="hljs-keyword">import</span> VcMenu <span class="hljs-keyword">from</span> <span class="hljs-string">\'@dove-ui/menu\'</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'@dove-ui/menu/dist/index.css\'</span>\n\nVue.use(VcMenu) <span class="hljs-comment">// VcMenu</span>\n')}})]),n("pre",{staticClass:"language language-html",attrs:{"data-lang":"html"}},[n("code",{domProps:{innerHTML:t._s('<span class="hljs-tag">&lt;<span class="hljs-name">vc-menu</span> <span class="hljs-attr">:menus</span>=<span class="hljs-string">"menus"</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">"dark"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vc-menu</span>&gt;</span>\n')}})]),t._m(0),n("h3",[t._v("Menu Attributes")]),t._m(1),n("h3",[t._v("Menu Events")]),t._m(2),n("h3",[t._v("Menu Slot-scopes")]),t._m(3),t._m(4),n("pre",{staticClass:"language language-html",attrs:{"data-lang":"html"}},[n("code",{domProps:{innerHTML:t._s(' <span class="hljs-tag">&lt;<span class="hljs-name">vc-menu</span> <span class="hljs-attr">:menus</span>=<span class="hljs-string">"menus"</span> <span class="hljs-attr">:current-active</span>=<span class="hljs-string">"[\'item4\']"</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">"dark"</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- before vue 2.6.0\n  &lt;template slot-scope="menu" slot="item"&gt;\n    &lt;img :src="logo" alt="" style="vertical-align:middle;width:12px;margin-right:5px;"&gt;\n    &lt;span&gt;{{menu.label}}&lt;/span&gt;\n  &lt;/template&gt; --&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- vue 2.6.0+ --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:item</span>=<span class="hljs-string">"menu"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"logo"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"vertical-align:middle;width:12px;margin-right:5px;"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{menu.label}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"font-size: 12px;margin-left:10px;opacity:0.5;"</span>&gt;</span>{{menu.description}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vc-menu</span>&gt;</span>\n')}})]),n("h3",[t._v("MenuItem")]),t._m(5)])])},r=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("img",{attrs:{src:"screenshot.png",alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Attribute")]),n("th",[t._v("Description")]),n("th",[t._v("Type")]),n("th",[t._v("Accepted Values")]),n("th",[t._v("Default")])])]),n("tbody",[n("tr",[n("td",[t._v("menus")]),n("td",[t._v("Menus object")]),n("td",[n("a",{attrs:{href:"#MenuItem"}},[t._v("MenuItem[]")])]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("theme")]),n("td",[t._v("Menu theme")]),n("td",[t._v("string")]),n("td",[n("code",[t._v("dark")]),t._v("/"),n("code",[t._v("light")])]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("current-active")]),n("td",[t._v("Selected items")]),n("td",[t._v("any[]")]),n("td",[t._v("—")]),n("td",[t._v("[]")])]),n("tr",[n("td",[t._v("multiple")]),n("td",[t._v("Multiple selection")]),n("td",[t._v("boolean")]),n("td",[t._v("true/false")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("render-item")]),n("td",[t._v("Custom item render")]),n("td",[t._v("function")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("open-active")]),n("td",[t._v("Auto open selected")]),n("td",[t._v("function")]),n("td",[t._v("true/false")]),n("td",[t._v("—")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Description")]),n("th",[t._v("Values")])])]),n("tbody",[n("tr",[n("td",[t._v("selected")]),n("td",[t._v("Selected item")]),n("td",[n("a",{attrs:{href:"#MenuItem"}},[t._v("MenuItem")])])]),n("tr",[n("td",[t._v("open")]),n("td",[t._v("Open submenu item")]),n("td",[n("a",{attrs:{href:"#MenuItem"}},[t._v("MenuItem")])])]),n("tr",[n("td",[t._v("close")]),n("td",[t._v("Close submenu item")]),n("td",[n("a",{attrs:{href:"#MenuItem"}},[t._v("MenuItem")])])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Description")]),n("th",[t._v("Values")])])]),n("tbody",[n("tr",[n("td",[t._v("item")]),n("td",[t._v("Custom item render")]),n("td",[n("a",{attrs:{href:"#MenuItem"}},[t._v("MenuItem")])])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("strong",[t._v("Custom item render")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Type")]),n("th",[t._v("Attribute")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("string/function")]),n("td",[t._v("menus[].label")]),n("td",[t._v("item label")])]),n("tr",[n("td",[t._v("MenuItem[]")]),n("td",[t._v("menus[].children")]),n("td",[t._v("submen")])]),n("tr",[n("td",[t._v("boolean")]),n("td",[t._v("menus[].group")]),n("td",[t._v("item is group")])]),n("tr",[n("td",[t._v("boolean")]),n("td",[t._v("menus[].open")]),n("td",[t._v("open submenu")])]),n("tr",[n("td",[t._v("string")]),n("td",[t._v("menus[].name")]),n("td",[t._v("unique item name")])]),n("tr",[n("td",[t._v("string/object")]),n("td",[t._v("menus[].router")]),n("td",[t._v("router-link#to")])]),n("tr",[n("td",[t._v("function")]),n("td",[t._v("menus[].hanlde")]),n("td",[t._v("item click handle function")])]),n("tr",[n("td",[t._v("string")]),n("td",[t._v("menus[].link")]),n("td",[t._v("link url")])]),n("tr",[n("td",[t._v("string")]),n("td",[t._v("menus[].target")]),n("td",[t._v("link tergat")])]),n("tr",[n("td",[t._v("string")]),n("td",[t._v("menus[].title")]),n("td",[t._v("title")])]),n("tr",[n("td",[t._v("string")]),n("td",[t._v("menus[].type")]),n("td",[n("code",[t._v("line")]),t._v(" Divider line")])]),n("tr",[n("td",[t._v("string")]),n("td",[t._v("menus[].hide")]),n("td",[t._v("hidden item")])])])])}],p={components:{},mixins:[]},c=p,d=n("2877"),i=Object(d["a"])(c,l,r,!1,null,null,null),m=i.exports,v={components:{Readme:m}},u=v,_=Object(d["a"])(u,e,a,!1,null,null,null);s["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0aa97b.fe017cbf.js.map