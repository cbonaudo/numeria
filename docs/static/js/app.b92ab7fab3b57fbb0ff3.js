webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[this._m(0),this._v(" "),e("div",{attrs:{id:"app"}},[e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("p",[this._v("\n      Numeria "),e("button",[this._v("Counter")]),e("button",[this._v("Find the number")]),e("button",[this._v("Settings")])])])}]};var s=n("VU/8")({name:"App"},i,!1,function(t){n("fDCc")},null,null).exports,u=n("/ocq");function a(t){return 2===t[3]?"Deux":1===t[0]?"Mille cent onze":1===t[1]?"Cent onze":1===t[2]?"Onze":"Un"}var o={name:"Counter",data:function(){return{figures:[0,0,0,1],translatedNumber:"Un",increment:function(t){this.figures.splice(t,1,this.figures[t]+1),this.translatedNumber=a(this.figures)},decrement:function(t){this.figures.splice(t,1,this.figures[t]-1),this.translatedNumber=a(this.figures)}}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t._m(0),t._v(" "),n("h1",[t._v("Counter")]),t._v(" "),n("div",[n("p",[t._v(t._s(t.translatedNumber))])]),t._v(" "),n("div",[n("span",t._l(t.figures,function(e,r){return n("button",{key:r,on:{click:function(e){t.increment(r)}}},[t._v("\n        ^\n      ")])}))]),t._v(" "),n("div",t._l(t.figures,function(e,r){return n("span",{key:r},[t._v(t._s(e)+" ")])})),t._v(" "),n("div",[n("span",t._l(t.figures,function(e,r){return n("button",{key:r,on:{click:function(e){t.decrement(r)}}},[t._v("\n        v\n      ")])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"counter_sidebar"},[e("button",[this._v("Reset")]),e("br"),e("button",[this._v("Random Number")]),e("br"),e("button",[this._v("Change Color")])])}]};var v=n("VU/8")(o,c,!1,function(t){n("oUjI")},"data-v-e41882aa",null).exports;r.a.use(u.a);var l=new u.a({routes:[{path:"/",name:"Counter",component:v}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:l,components:{App:s},template:"<App/>"})},fDCc:function(t,e){},oUjI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b92ab7fab3b57fbb0ff3.js.map