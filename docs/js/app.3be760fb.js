(function(e){function t(t){for(var i,r,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)r=s[d],o[r]&&p.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},"0821":function(e,t,n){},"4c6c":function(e,t,n){},"547d":function(e,t,n){"use strict";var i=n("f221"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MyBeerApp",{attrs:{msg:"Welcome to your personal Beer Manager"}}),n("Card"),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"credits"},[n("p",[e._v("\n    Icons made by\n    "),n("a",{attrs:{href:"https://www.freepik.com/",title:"Freepik"}},[e._v("Freepik")]),e._v("\n    from "),n("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")]),e._v("\n    is licensed by "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[e._v("CC 3.0 BY")])])])}],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},s=[],c=n("ecee"),l=n("c074"),u=n("ad3d"),d={name:"MyBeerApp",props:{msg:String}};c["c"].add(l["a"],l["g"],l["f"],l["e"],l["i"],l["b"],l["d"],l["c"],l["h"]),i["a"].component("font-awesome-icon",u["a"]);var p=d,m=(n("547d"),n("2877")),h=Object(m["a"])(p,r,s,!1,null,"7de69665",null),v=h.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"card"}},[e.showOptions?e._e():n("div",[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"beer",size:"4x"}})],1),n("p",{attrs:{id:"instructions"}},[e._v("Gerencie sua manguaça nos botões abaixo")]),n("div",{staticClass:"buttons"},[n("div",{staticClass:"iconBox",on:{click:e.handleClick}},[n("font-awesome-icon",{class:{startRotateCounterClockwise:e.counterClockWiseRotate},attrs:{id:"addIcon",icon:"plus",size:"4x"}})],1),n("div",{staticClass:"iconBox",on:{click:e.handleClick}},[n("font-awesome-icon",{class:{startRotateClockwise:e.clockWiseRotate},attrs:{id:"removeIcon",icon:"minus",size:"4x"}})],1)]),n("p",{staticClass:"quantity"},[e._v(" "+e._s(e.quantity))]),n("div",{staticClass:"flexCenter columnOrder"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],attrs:{type:"number",placeholder:"Insira o preço da palhaçada"},domProps:{value:e.price},on:{input:[function(t){t.target.composing||(e.price=t.target.value)},e.handlePrice]}}),e.showMaxPrice?n("p",[e._v(" "+e._s(e.errorMsg))]):e._e(),n("div",{staticClass:"iconBox marginTop columnOrder",on:{click:e.hideResetAnimationF}},[n("font-awesome-icon",{class:{startRotateReset:e.toggleRotateAnimation,hideResetAnimation:e.toggleResetAnimation},attrs:{id:"resetIcon",icon:"redo",size:"2x"}}),n("button",{staticClass:"resetButton",attrs:{id:"resetButton",hidden:e.hideResetButton},on:{click:e.resetItems}},[e._v(" Resetar a palhaçada toda? ")])],1)]),e.price?n("p",{staticClass:"quantity"},[e._v(" $"+e._s(e.showPrice))]):e._e()]),n("div",{staticClass:"makeFlex centerAlign marginTop"},[n("button",{on:{click:function(t){e.showOptions=!e.showOptions}}},[e._v(e._s(e.showOptions?e.goBack:e.otherOpt))])]),n("FormComponent",{attrs:{hidden:!e.showOptions,quantity:e.quantity}})],1)},g=[],b=(n("a481"),n("6b54"),n("06db"),n("59ad")),_=n.n(b),y=(n("6762"),n("2fdb"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"marginTop"},[n("div",{staticClass:"makeFlex columnOrder"},[n("div",{staticClass:"makeFlex"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.drinkQuantity,expression:"drinkQuantity"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.drinkQuantity=t.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",value:"null",hidden:""}},[e._v(" Qual a quantidade do copo? ")]),n("option",[e._v("20 ml ")]),n("option",[e._v("40 ml ")]),n("option",[e._v("190 ml ")]),n("option",[e._v("250 ml ")]),n("option",[e._v("300 ml ")]),n("option",[e._v("400 ml ")]),n("option",[e._v("500 ml ")])])]),n("div",[n("p",{staticClass:"makeFlex"},[e._v(" Escolha a quantidade de alcool na bebida  ")]),n("div",{staticClass:"makeFlex",staticStyle:{"flex-wrap":"wrap"}},e._l(e.beverages,function(t){return n("div",{key:t._id,staticClass:"makeFlex columnOrder centerAlign setWidth",on:{click:function(n){return e.setDrink(t._id)}}},[n("font-awesome-icon",{staticClass:"activateHover",attrs:{icon:t.beverageIcon,size:"2x"}}),n("span",[e._v(" "+e._s(t.beverageName)+" ")]),n("span",[e._v(" "+e._s(t.beverageLevel)+" ")])],1)}),0)])]),e.drinkQuantity&&e.selectedDrink?n("MyBeer",{staticClass:"makeFlex centerAlign columnOrder",attrs:{quantity:e.quantity,glass:e.drinkQuantity,beverage:e.selectedDrink,update:e.updateMyBeer}}):e._e()],1)}),w=[],k=(n("28a5"),n("7514"),n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("font-awesome-icon",{staticClass:"myBeer",attrs:{icon:e.beverage.icon,size:"2x"}}),n("p",[e._v(" Seu copo de "+e._s(e.beverage.name)+" possui "+e._s(e.glass)+" e um volume de "+e._s(e.beverage.showLevel)+" de álcool ")]),""!=e.minUnit?n("p",[e._v(" Você bebeu entre "+e._s(e.minUnit)+" e "+e._s(e.maxUnit)+" unidades de álcool, \n        você estará completamente sem traços de álcool no sangue entre "+e._s(e.minTimeToSoberUp)+" e "+e._s(e.maxTimeToSoberUp)+" horas.\n    ")]):e._e(),""!=e.minUnit?n("p",[e._v(" Isso quer dizer que após "+e._s(e.maxTimeToSoberUp)+" horas o bafômetro, provavelmente não te pega mais xD ")]):e._e(),n("p",[e._v(" Dez minutos depois do primeiro gole, 50% do álcool ingerido vai pra corrente sanguínea. ")])],1)}),x=[],C={name:"MyBeer",props:{glass:String,beverage:{name:String,icon:String,level:[],cupSize:Number},update:Boolean,quantity:Number},watch:{beverage:function(){this.updateInfo()},update:function(){this.updateInfo()}},data:function(){return{minUnit:"",maxUnit:"",maxTimeToSoberUp:null,minTimeToSoberUp:null}},methods:{updateInfo:function(){this.minUnit=(this.beverage.cupSize*this.beverage.level[0]/1e3*this.quantity).toFixed(2),this.maxUnit=(this.beverage.cupSize*this.beverage.level[1]/1e3*this.quantity).toFixed(2),this.minTimeToSoberUp=this.minUnit.length>4?this.minUnit.substring(0,2):this.minUnit.substring(0,1),this.maxTimeToSoberUp=this.maxUnit.length>4?this.maxUnit.substring(0,2):this.maxUnit.substring(0,1)}}},R=C,O=Object(m["a"])(R,k,x,!1,null,null,null),B=O.exports;n("0821");var S={name:"FormComponent",props:{quantity:Number},watch:{quantity:function(){0===this.quantity&&(this.drinkQuantity=null),this.updateMyBeer=!this.updateMyBeer}},data:function(){return{drinkQuantity:null,alcoholLevel:"",selectedDrink:null,updateMyBeer:!0,beverages:[{_id:0,beverageName:"Cerveja",beverageIcon:"beer",beverageLevel:"3.8% ~ 7%"},{_id:1,beverageName:"Vodka",beverageIcon:"glass-martini-alt",beverageLevel:"30% ~ 40%"},{_id:2,beverageName:"Whisky",beverageIcon:"glass-whiskey",beverageLevel:"40% ~ 60%"},{_id:3,beverageName:"Vinho",beverageIcon:"wine-glass-alt",beverageLevel:"9% ~ 12%"},{_id:4,beverageName:"Cachaça",beverageIcon:"cocktail",beverageLevel:"30% ~ 40%"},{_id:5,beverageName:"Outros",beverageIcon:"glass-cheers",beverageLevel:"0% ~ 0%"}]}},components:{MyBeer:B},methods:{setDrink:function(e){var t=this.beverages.find(function(t){return t._id===e}),n=t.beverageLevel.split("~");this.selectedDrink={icon:t.beverageIcon,level:n.map(function(e){return _()(e.trim().replace("%",""))}),name:t.beverageName,cupSize:_()(this.drinkQuantity.split(" ml")[0]),quantity:this.quantity,showLevel:t.beverageLevel}}}},q=S,M=Object(m["a"])(q,y,w,!1,null,null,null),T=M.exports;n("4c6c");var P={name:"Card",data:function(){return{quantity:0,price:null,showPrice:"",resetForm:!0,showMaxPrice:!1,hideResetButton:!0,errorMsg:"",toggleResetAnimation:!1,clockWiseRotate:!1,counterClockWiseRotate:!1,toggleRotateAnimation:!1,showOptions:!1,otherOpt:"Mais opções",goBack:"Voltar"}},methods:{handleClick:function(e){var t=this;if(this.getIconName(e)){var n=e.path[1].id||e.path[0].id||e.path[0].firstChild.id;n.includes("add")?(this.counterClockWiseRotate=!0,setTimeout(function(){return t.counterClockWiseRotate=!1},500),this.quantity++):this.quantity>0&&(this.clockWiseRotate=!0,setTimeout(function(){return t.clockWiseRotate=!1},500),this.quantity--),this.handlePrice()}},getIconName:function(e){return!!(e.path[1].id||e.path[0].id||e.path[0].firstChild.id)},handlePrice:function(){if(this.price>59.9){var e=59.9*this.quantity;this.showPrice=e,this.price=59.9,this.errorMsg="Essa marvada ta cara demais, oxi, o máximo é 59,90",this.showMaxPrice=!0,this.showPrice=e}else if(this.price<=0)this.errorMsg="Que diabo de pinga barata é essa??!!",this.showMaxPrice=!0,this.price=null,this.showPrice="";else{var t=this.quantity*_()(this.price);t&&(t.toString().includes(".")?this.showPrice=t.toString().replace(".",",").substring(0,5):t.toString().includes(",")?this.showPrice=t.toString().substring(0,5):this.showPrice=t.toString()),this.showMaxPrice=!1}},hideResetAnimationF:function(){this.hideResetAnimation=!this.hideResetAnimation,this.hideResetButton=!this.hideResetButton},resetItems:function(){var e=this;setTimeout(function(){return e.hideResetAnimation=!1}),setTimeout(function(){return e.hideResetButton=!0}),setTimeout(function(){return e.toggleRotateAnimation=!e.toggleRotateAnimation}),setTimeout(function(){return e.toggleRotateAnimation=!e.toggleRotateAnimation},500),this.quantity=0,this.price=null,this.showPrice="",this.showMaxPrice=!1,this.resetForm=!0}},components:{FormComponent:T}},A=P,F=Object(m["a"])(A,f,g,!1,null,null,null),I=F.exports;n("a0d8");var U={name:"app",components:{MyBeerApp:v,Card:I}},N=U,j=(n("034f"),Object(m["a"])(N,o,a,!1,null,null,null)),z=j.exports,L=n("9483");Object(L["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(z)}}).$mount("#app")},"64a9":function(e,t,n){},a0d8:function(e,t,n){},f221:function(e,t,n){}});
//# sourceMappingURL=app.3be760fb.js.map