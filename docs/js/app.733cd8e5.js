(function(e){function t(t){for(var i,s,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)s=o[d],a[s]&&m.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"0821":function(e,t,n){},"0c72":function(e,t,n){"use strict";var i=n("2da2"),a=n.n(i);a.a},"2da2":function(e,t,n){},"4c6c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MyBeerApp",{attrs:{msg:"Welcome to your personal Beer Manager"}}),n("Card")],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("\n    "+e._s(e.msg)+"\n  ")])])},o=[],c=n("ecee"),l=n("c074"),u=n("ad3d"),d={name:"MyBeerApp",props:{msg:String}};c["c"].add(l["a"],l["g"],l["f"],l["e"],l["i"],l["b"],l["d"],l["c"],l["h"]),i["a"].component("font-awesome-icon",u["a"]);var m=d,p=(n("0c72"),n("2877")),v=Object(p["a"])(m,s,o,!1,null,"06b953c0",null),h=v.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"card"}},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"beer",size:"4x"}})],1),n("p",{attrs:{id:"instructions"}},[e._v("Gerencie sua manguaça nos botões abaixo")]),n("div",{staticClass:"buttons"},[n("div",{staticClass:"iconBox",on:{click:e.handleClick}},[n("font-awesome-icon",{attrs:{id:"addIcon",icon:"plus",size:"4x"}})],1),n("div",{staticClass:"iconBox",on:{click:e.handleClick}},[n("font-awesome-icon",{attrs:{id:"removeIcon",icon:"minus",size:"4x"}})],1)]),n("p",{staticClass:"quantity"},[e._v(" "+e._s(e.quantity))]),n("div",{staticClass:"flexCenter columnOrder"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],attrs:{type:"number",placeholder:"Insira o preço da palhaçada"},domProps:{value:e.price},on:{input:[function(t){t.target.composing||(e.price=t.target.value)},e.handlePrice]}}),e.showMaxPrice?n("p",[e._v(" Essa marvada ta cara demais, oxi, o máximo é 59,90 ")]):e._e(),n("div",{staticClass:"iconBox marginTop columnOrder",on:{click:e.hideResetAnimation}},[n("font-awesome-icon",{attrs:{id:"resetIcon",icon:"redo",size:"2x"}}),n("button",{staticClass:"resetButton",attrs:{id:"resetButton",hidden:"true"},on:{click:e.resetItems}},[e._v(" Resetar a palhaçada toda? ")])],1)]),e.price?n("p",{staticClass:"quantity"},[e._v(" $"+e._s(e.showPrice)+" golpes")]):e._e(),n("FormComponent",{attrs:{quantity:e.quantity}})],1)},g=[],b=(n("6b54"),n("06db"),n("59ad")),y=n.n(b),_=(n("a481"),n("6762"),n("2fdb"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"marginTop"},[n("div",{staticClass:"makeFlex columnOrder"},[n("div",{staticClass:"makeFlex"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.drinkQuantity,expression:"drinkQuantity"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.drinkQuantity=t.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",value:"null",hidden:""}},[e._v(" Qual a quantidade do copo? ")]),n("option",[e._v("20 ml ")]),n("option",[e._v("40 ml ")]),n("option",[e._v("190 ml ")]),n("option",[e._v("250 ml ")]),n("option",[e._v("300 ml ")]),n("option",[e._v("400 ml ")]),n("option",[e._v("500 ml ")])])]),n("div",[n("p",{staticClass:"makeFlex"},[e._v(" Escolha a quantidade de alcool na bebida  ")]),n("div",{staticClass:"makeFlex",staticStyle:{"flex-wrap":"wrap"}},e._l(e.beverages,function(t){return n("div",{key:t._id,staticClass:"makeFlex columnOrder centerAlign setWidth",on:{click:function(n){return e.setDrink(t._id)}}},[n("font-awesome-icon",{staticClass:"activateHover",attrs:{icon:t.beverageIcon,size:"2x"}}),n("span",[e._v(" "+e._s(t.beverageName)+" ")]),n("span",[e._v(" "+e._s(t.beverageLevel)+" ")])],1)}),0)])]),e.drinkQuantity&&e.selectedDrink?n("MyBeer",{staticClass:"makeFlex centerAlign columnOrder",attrs:{quantity:e.quantity,glass:e.drinkQuantity,beverage:e.selectedDrink,update:e.updateMyBeer}}):e._e()],1)}),x=[],w=(n("28a5"),n("7514"),n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("font-awesome-icon",{staticClass:"activateHover",attrs:{icon:e.beverage.icon,size:"2x"}}),n("p",[e._v(" Seu copo de "+e._s(e.beverage.name)+" possui "+e._s(e.glass)+" e um volume de "+e._s(e.beverage.showLevel)+" de álcool ")]),""!=e.minUnit?n("p",[e._v(" Você bebeu entre "+e._s(e.minUnit)+" e "+e._s(e.maxUnit)+" unidades de álcool, \n        você estará completamente sem traços de álcool no sangue entre "+e._s(e.minTimeToSoberUp)+" e "+e._s(e.maxTimeToSoberUp)+" horas.\n    ")]):e._e(),""!=e.minUnit?n("p",[e._v(" Isso quer dizer que após "+e._s(e.maxTimeToSoberUp)+" o bafômetro, provavelmente não te pega mais xD ")]):e._e(),n("p",[e._v(" Dez minutos depois do primeiro gole, 50% do álcool ingerido vai pra corrente sanguínea. ")])],1)}),k=[],C={name:"MyBeer",props:{glass:String,beverage:{name:String,icon:String,level:[],cupSize:Number},update:Boolean,quantity:Number},watch:{beverage:function(){this.updateInfo()},update:function(){this.updateInfo()}},data:function(){return{minUnit:"",maxUnit:"",maxTimeToSoberUp:null,minTimeToSoberUp:null}},methods:{updateInfo:function(){this.minUnit=(this.beverage.cupSize*this.beverage.level[0]/1e3*this.quantity).toFixed(2),this.maxUnit=(this.beverage.cupSize*this.beverage.level[1]/1e3*this.quantity).toFixed(2),this.minTimeToSoberUp=this.minUnit.length>4?this.minUnit.substring(0,2):this.minUnit.substring(0,1),this.maxTimeToSoberUp=this.maxUnit.length>4?this.maxUnit.substring(0,2):this.maxUnit.substring(0,1)}}},I=C,S=Object(p["a"])(I,w,k,!1,null,null,null),q=S.exports;n("0821");var B={name:"FormComponent",props:{quantity:Number},watch:{quantity:function(){0===this.quantity&&(this.drinkQuantity=null),this.updateMyBeer=!this.updateMyBeer}},data:function(){return{drinkQuantity:null,alcoholLevel:"",selectedDrink:null,updateMyBeer:!0,beverages:[{_id:0,beverageName:"Cerveja",beverageIcon:"beer",beverageLevel:"3.8% ~ 7%"},{_id:1,beverageName:"Vodka",beverageIcon:"glass-martini-alt",beverageLevel:"30% ~ 40%"},{_id:2,beverageName:"Whisky",beverageIcon:"glass-whiskey",beverageLevel:"40% ~ 60%"},{_id:3,beverageName:"Vinho",beverageIcon:"wine-glass-alt",beverageLevel:"9% ~ 12%"},{_id:4,beverageName:"Cachaça",beverageIcon:"cocktail",beverageLevel:"30% ~ 40%"},{_id:5,beverageName:"Outros",beverageIcon:"glass-cheers",beverageLevel:"0% ~ 0%"}]}},components:{MyBeer:q},methods:{setDrink:function(e){var t=this.beverages.find(function(t){return t._id===e}),n=t.beverageLevel.split("~");this.selectedDrink={icon:t.beverageIcon,level:n.map(function(e){return y()(e.trim().replace("%",""))}),name:t.beverageName,cupSize:y()(this.drinkQuantity.split(" ml")[0]),quantity:this.quantity,showLevel:t.level}}}},T=B,P=Object(p["a"])(T,_,x,!1,null,null,null),L=P.exports;n("4c6c");var M={name:"Card",data:function(){return{quantity:0,price:null,showPrice:"",resetForm:!0,showMaxPrice:!1,hideResetButton:!0}},methods:{handleClick:function(e){if(this.getIconName(e)){var t=document.getElementById(e.path[1].id||e.path[0].id||e.path[0].firstChild.id);t.id.includes("add")?(t.classList.add("startRotateCounterClockwise"),setTimeout(function(){return t.classList.remove("startRotateCounterClockwise")},500),this.quantity++):this.quantity>0&&(t.classList.add("startRotateClockwise"),setTimeout(function(){return t.classList.remove("startRotateClockwise")},500),this.quantity--),this.handlePrice()}},getIconName:function(e){return!!(e.path[1].id||e.path[0].id||e.path[0].firstChild.id)},handlePrice:function(){if(this.price>59.9){var e=59.9*this.quantity;this.showPrice=e.replace(".",","),this.price=59.9,this.showMaxPrice=!this.showMaxPrice}else{var t=this.quantity*y()(this.price);t&&(t.toString().includes(".")?this.showPrice=t.toString().replace(".",",").substring(0,5):t.toString().includes(",")?this.showPrice=t.toString().substring(0,5):this.showPrice=t.toString(),this.showMaxPrice=!1)}},hideResetAnimation:function(){var e=document.getElementById("resetIcon"),t=document.getElementById("resetButton"),n=!1;e.classList.forEach(function(e){return n="hideResetAnimation"===e}),n?(e.classList.remove("hideResetAnimation"),t.toggleAttribute("hidden")):(e.classList.add("hideResetAnimation"),t.toggleAttribute("hidden"))},resetItems:function(){var e=document.getElementById("resetIcon");setTimeout(function(){return document.getElementById("resetButton").setAttribute("hidden","true")}),setTimeout(function(){return e.classList.remove("hideResetAnimation")}),setTimeout(function(){return e.classList.add("startRotateReset")}),setTimeout(function(){return e.classList.remove("startRotateReset")},500),this.quantity=0,this.price=null,this.showPrice="",this.showMaxPrice=!1,this.hideResetButton=!0,this.resetForm=!0}},components:{FormComponent:L}},U=M,O=Object(p["a"])(U,f,g,!1,null,null,null),R=O.exports;n("a0d8");var A={name:"app",components:{MyBeerApp:h,Card:R}},N=A,j=(n("034f"),Object(p["a"])(N,a,r,!1,null,null,null)),E=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(E)}}).$mount("#app")},"64a9":function(e,t,n){},a0d8:function(e,t,n){}});
//# sourceMappingURL=app.733cd8e5.js.map