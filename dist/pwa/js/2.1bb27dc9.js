(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"438d":function(t,e,a){},"638e":function(t,e,a){"use strict";var s=a("438d"),i=a.n(s);i.a},a9c3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh lpR fFf"}},[a("q-header",{attrs:{bordered:""}},[a("q-toolbar",[a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){t.menuOpen=!t.menuOpen}}}),a("q-toolbar-title",[a("q-icon",{staticClass:"q-pb-xs",attrs:{name:t.$router.currentRoute.meta.icon}}),t._v("\n        "+t._s(t.$router.currentRoute.meta.label)+"\n      ")],1)],1)],1),a("q-drawer",{staticClass:"menu",attrs:{bordered:"",side:"left",width:t.$q.screen.width>600?400:300},model:{value:t.menuOpen,callback:function(e){t.menuOpen=e},expression:"menuOpen"}},[a("q-scroll-area",{staticClass:"search-block"},[a("InfoContent")],1),a("div",{staticClass:"absolute-top",staticStyle:{height:"210px"}},[a("q-item-label",{staticClass:"text-center q-pa-sm",attrs:{header:""}},[a("h6",[a("span",[t._v("查詢/資訊欄")])])]),a("div",{staticClass:"text-subtitle1 text-center text-primary text-weight-bold",domProps:{textContent:t._s(t.nowDate)}}),a("SearchContent",{staticClass:"q-pa-md",on:{searchMap:function(e){var a;return(a=t.$refs.map).filterMap.apply(a,arguments)},clearMap:function(e){return t.$refs.map.clearMap()}}})],1)],1),a("q-page-container",[a("router-view",{ref:"map"})],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-select",{attrs:{options:t.cityBus,label:"縣市",color:"positive",rules:[function(t){return!!t||"請選擇縣市"}],"stack-label":"",clearable:"","use-input":"",outlined:"",dense:""},on:{filter:t.filterCity,input:function(e){return t.citySelected()}},scopedSlots:t._u([{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey",domProps:{textContent:t._s("查無縣市")}})],1)]},proxy:!0}]),model:{value:t.cityModel,callback:function(e){t.cityModel=e},expression:"cityModel"}}),a("q-select",{attrs:{options:t.districtBus,label:"地區","option-label":"AreaName","option-value":"AreaName",color:"positive",rules:[function(t){return!!t||"請選擇地區"}],disable:!t.cityModel||!t.cityModel.AreaList,"hide-bottom-space":"","map-options":"","emit-value":"","stack-label":"",clearable:"","use-input":"",outlined:"",dense:""},on:{filter:t.filterDistrict,input:function(e){return t.districtSelected(t.districtModel)}},scopedSlots:t._u([{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey",domProps:{textContent:t._s("查無地區")}})],1)]},proxy:!0}]),model:{value:t.districtModel,callback:function(e){t.districtModel=e},expression:"districtModel"}})],1)},r=[],n=a("2f62"),l={data(){return{cityModel:null,cityBus:[],districtModel:null,districtBus:[]}},computed:{...Object(n["d"])({city:t=>t.common.city.city}),loading(){return _.isEmpty(this.city)||!1}},methods:{citySelected(){this.districtModel=null,this.districtSelected()},districtSelected(t){t?this.$emit("searchMap",t,this.cityModel.label):this.$emit("clearMap")},filterCity(t,e){e(""!==t?()=>{this.cityBus=_.filter(this.city,(e=>e.label.match(t)||_.lowerCase(e.CityEngName).match(_.lowerCase(t))))}:()=>{this.cityBus=this.city})},filterDistrict(t,e){e(""!==t?()=>{this.districtBus=_.filter(this.cityModel.AreaList,(e=>e.AreaName.match(t)||_.lowerCase(e.AreaEngName).match(_.lowerCase(t))))}:()=>{this.districtBus=this.cityModel.AreaList})}}},c=l,p=a("2877"),d=a("ddd8"),m=a("66e5"),u=a("4074"),h=a("eebe"),f=a.n(h),b=Object(p["a"])(c,o,r,!1,null,null,null),x=b.exports;f()(b,"components",{QSelect:d["a"],QItem:m["a"],QItemSection:u["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.waiting?a("div",{staticClass:"text-grey-5 text-center"},[a("h5",{staticClass:"q-mb-sm",domProps:{textContent:t._s("請選擇縣市與地區")}}),a("q-icon",{attrs:{name:"search",size:"80px"}})],1):a("div",[a("q-list",{staticClass:"text-primary rounded-borders q-ma-md",attrs:{bordered:""}},[a("q-expansion-item",{attrs:{icon:"search","expand-icon-class":"text-primary",label:"進階搜尋"},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[a("q-card-section",{staticClass:"text-grey-9"},[a("q-input",{attrs:{prefix:"藥局搜索：",placeholder:"請輸入地址或藥局名稱",color:"positive",clearable:"",dense:""},model:{value:t.keyWord,callback:function(e){t.keyWord=e},expression:"keyWord"}}),a("div",{staticClass:"q-pt-md row"},[a("q-checkbox",{staticClass:"col-12",attrs:{label:"過濾已售完成人口罩",color:"secondary","keep-color":""},model:{value:t.adult_filter,callback:function(e){t.adult_filter=e},expression:"adult_filter"}}),a("q-checkbox",{staticClass:"col-12",attrs:{label:"過濾已售完兒童口罩",color:"positive","keep-color":""},model:{value:t.child_filter,callback:function(e){t.child_filter=e},expression:"child_filter"}})],1)],1)],1)],1),a("q-list",{staticClass:"rounded-borders",attrs:{separator:""}},[a("q-item-label",{staticClass:"row q-pt-xs",attrs:{header:""}},[a("q-btn",{attrs:{icon:"bar_chart",label:t.$q.screen.width>600?"口罩統計":void 0,color:"primary",size:"sm",unelevated:""},on:{click:function(e){t.showModal=!0}}}),a("q-space"),a("div",{staticClass:"self-center",domProps:{textContent:t._s("查詢結果 - 共"+t.statistics+"筆")}})],1),a("q-separator"),t._l(t.filterMapData,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.properties.id,staticClass:"block",attrs:{"active-class":" bg-grey-4 text-grey-9",active:e.properties.id==t.mapInfo.id,clickable:""},on:{click:function(a){return t.filterMap(e.properties)}}},[a("q-item-section",{staticClass:"q-pb-sm"},[a("q-item-label",{attrs:{lines:"1"}},[a("q-avatar",{staticClass:"q-mr-sm q-mb-xs",attrs:{icon:"medical_services",color:"positive","text-color":"white",size:"28px"}}),a("span",{staticClass:"text-positive text-bold text-subtitle1",domProps:{textContent:t._s(e.properties.name)}}),a("q-btn",{staticClass:"float-right",attrs:{icon:"bar_chart",color:"primary",size:"sm",unelevated:"",round:""},on:{click:function(e){t.showModal=!0}}})],1),a("q-item-label",[a("q-chip",{attrs:{color:e.properties.mask_adult?"secondary":"grey-5","text-color":"white",size:"12px"}},[t._v("\n              成人口罩： "+t._s(e.properties.mask_adult||"已售完")+"\n            ")]),a("q-chip",{attrs:{color:e.properties.mask_child?"light-green":"grey-5","text-color":"white",size:"12px"}},[t._v("\n              兒童口罩： "+t._s(e.properties.mask_child||"已售完")+"\n            ")])],1)],1),a("q-item-section",{staticClass:"q-pb-sm"},[a("q-item-label",{domProps:{textContent:t._s(e.properties.address)}}),a("q-item-label",{domProps:{textContent:t._s(e.properties.phone)}}),a("q-item-label",[t._v("\n            網站："),e.properties.website?a("a",{attrs:{href:e.properties.website,target:"_blank"},domProps:{textContent:t._s("點擊前往")}}):a("span",{staticClass:"text-grey-5",domProps:{textContent:t._s("無")}})]),a("q-item-label",[t._v("營業時間：\n            "),a("q-table",{staticClass:"no-shadow text-grey-8 q-my-xs",attrs:{data:t.timeHandle(e.properties.available),columns:t.OPENING_HOURS,"row-key":"week","rows-per-page-options":[0],"hide-bottom":"",bordered:"",dense:""},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"week",attrs:{props:e},domProps:{textContent:t._s(e.row.week)}}),a("q-td",{key:"morning",class:{"text-red":"X"==e.row.morning},attrs:{props:e},domProps:{textContent:t._s(e.row.morning)}}),a("q-td",{key:"after",class:{"text-red":"X"==e.row.after},attrs:{props:e},domProps:{textContent:t._s(e.row.after)}}),a("q-td",{key:"night",class:{"text-red":"X"==e.row.night},attrs:{props:e},domProps:{textContent:t._s(e.row.night)}})],1)]}}],null,!0)}),a("div",{staticClass:"text-red text-center",domProps:{textContent:t._s(e.properties.note)}})],1)],1)],1)})),0==t.filterMapData.length?a("div",{staticClass:"text-grey-5 text-center"},[a("h5",{staticClass:"q-mb-sm",domProps:{textContent:t._s("查無結果")}}),a("q-icon",{attrs:{name:"clear",size:"80px"}})],1):t._e()],2),a("StatisticsContent",{attrs:{prompt:t.showModal,filterTotal:t.filterMapData.length},on:{close:function(e){t.showModal=!1}}})],1)])},g=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{on:{hide:t.hide},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}},[a("q-card",{staticStyle:{"max-width":"800px"}},[a("q-toolbar",{staticClass:"q-px-md q-py-sm"},[a("q-toolbar-title",[a("q-icon",{attrs:{name:"bar_chart"}}),t._v("\n        口罩數量統計【"+t._s(t.position)+"】\n      ")],1),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{round:"",flat:"",color:"grey",icon:"clear"}})],1),a("q-card-section",{staticClass:"row"},t._l(t.statistics,(function(e,s){return a("div",{key:s,class:"text-"+e.color+" q-ma-lg text-center"},[a("div",{staticClass:"text-bold text-subtitle1",domProps:{textContent:t._s(e.label)}}),a("q-knob",{staticClass:"q-my-sm",attrs:{thickness:.3,"track-color":"grey-3",color:e.color,size:"90px","show-value":"",disable:""},model:{value:e.percentage,callback:function(a){t.$set(e,"percentage",a)},expression:"data.percentage"}}),a("div",{staticClass:"text-grey-9",domProps:{textContent:t._s("全台："+e.count+"個")}}),a("div",{staticClass:"text-grey-9",domProps:{textContent:t._s(t.position+"："+e.mapCount+"個")}})],1)})),0),a("q-separator"),Object.keys(t.mapInfo).length>0?a("q-card-section",{staticClass:"row"},t._l(t.statistics,(function(e,s){return a("div",{key:s,class:"text-"+e.color+" q-ma-lg text-center"},[a("div",{staticClass:"text-bold text-subtitle1",domProps:{textContent:t._s(e.label)}}),a("q-knob",{staticClass:"q-my-sm",attrs:{thickness:.3,"track-color":"grey-3",color:e.color,size:"90px","show-value":"",disable:""},model:{value:e.infoPercentage,callback:function(a){t.$set(e,"infoPercentage",a)},expression:"data.infoPercentage"}}),a("div",{staticClass:"text-grey-9",domProps:{textContent:t._s(t.position+"："+e.mapCount+"個")}}),a("div",{staticClass:"text-grey-9",domProps:{textContent:t._s(t.mapInfo.name+"："+e.InfoCount+"個")}})],1)})),0):t._e(),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"關閉"}})],1)],1)],1)},q=[],v={data(){return{toggle:!1,value:71}},computed:{...Object(n["d"])({mapData:t=>t.map.mapData,mapInfo:t=>t.map.mapInfo}),...Object(n["c"])({mapStatistics:"map/mapStatistics"}),position(){return _.isEmpty(this.mapData)?"尚未選擇":`${this.mapData[0].properties.county} ${this.mapData[0].properties.town}`},statistics(){let t=_.cloneDeep(this.mapStatistics);return _.forEach(t,((e,a)=>t[a]=_.assign(e,{percentage:_.floor(e.mapCount/e.count*100,2),infoPercentage:_.floor(e.InfoCount/e.mapCount*100,2)}))),t}},watch:{prompt(){!this.prompt||(this.toggle=!0)}},methods:{hide(){this.$emit("close")}},props:{prompt:{type:Boolean,default:!1},filterTotal:{type:Number,default:0}}},w=v,k=a("24e8"),M=a("f09f"),Q=a("65c6"),P=a("6ac5"),S=a("0016"),I=a("9c40"),O=a("a370"),D=a("3845"),$=a("eb85"),E=a("4b7e"),N=a("7f67"),j=Object(p["a"])(w,C,q,!1,null,null,null),B=j.exports;f()(j,"components",{QDialog:k["a"],QCard:M["a"],QToolbar:Q["a"],QToolbarTitle:P["a"],QIcon:S["a"],QBtn:I["a"],QCardSection:O["a"],QKnob:D["a"],QSeparator:$["a"],QCardActions:E["a"]}),f()(j,"directives",{ClosePopup:N["a"]});const T=[{name:"week",label:"星期",field:"week",align:"left",headerClasses:"bg-secondary text-white"},{name:"morning",label:"上午",field:"morning",align:"center",headerClasses:"bg-secondary text-white"},{name:"after",label:"下午",field:"after",align:"center",headerClasses:"bg-secondary text-white"},{name:"night",label:"晚上",field:"night",align:"center",headerClasses:"bg-secondary text-white"}];var A={data(){return{expanded:!0,showModal:!1,keyWord:"",adult_filter:!1,child_filter:!1,OPENING_HOURS:T}},components:{StatisticsContent:B},computed:{...Object(n["d"])({mapData:t=>t.map.mapData,mapInfo:t=>t.map.mapInfo}),...Object(n["c"])({mapStatistics:"map/mapStatistics"}),waiting(){return _.isEmpty(this.mapData)},filterMapData(){const t=_.filter(this.mapData,(t=>{if(this.adult_filter||this.child_filter||this.keyWord){const e=!this.adult_filter||!!t.properties.mask_adult,a=!this.child_filter||!!t.properties.mask_child,s=!this.keyWord||!(!t.properties.address.match(this.keyWord)&&!t.properties.name.match(this.keyWord));return e&&a&&s?t:null}return t}));return t},statistics(){return this.filterMapData.length}},watch:{mapData(t){!_.isEmpty(t)||this.onReset()},mapInfo(t){!_.isEmpty(t)||this.onReset()}},methods:{...Object(n["b"])({getMapInfo:"map/getMapInfo"}),filterMap(t){t===this.mapInfo||this.getMapInfo(t)},timeHandle(t){const e=_.split(t,"、"),a=[];return _.forEach(e,((t,e)=>{const s=_.find(a,(e=>e.week&&e.week==t.substring(0,3)));s?_.includes(t,"下午")?s.after=_.includes(t,"看診")?"O":"X":s.night=_.includes(t,"看診")?"O":"X":a.push({week:t.substring(0,3),morning:_.includes(t,"看診")?"O":"X",after:_.includes(t,"看診")?"O":"X",night:_.includes(t,"看診")?"O":"X"})})),a},onReset(){this.keyWord="",this.adult_filter=!1,this.child_filter=!1}}},z=A,R=a("1c1c"),W=a("3b73"),H=a("27f9"),X=a("8f8e"),L=a("0170"),Y=a("2c91"),G=a("cb32"),J=a("b047"),U=a("eaac"),F=a("bd08"),K=a("db86"),V=a("714f"),Z=Object(p["a"])(z,y,g,!1,null,null,null),tt=Z.exports;f()(Z,"components",{QIcon:S["a"],QList:R["a"],QExpansionItem:W["a"],QCardSection:O["a"],QInput:H["a"],QCheckbox:X["a"],QItemLabel:L["a"],QBtn:I["a"],QSpace:Y["a"],QSeparator:$["a"],QItem:m["a"],QItemSection:u["a"],QAvatar:G["a"],QChip:J["a"],QTable:U["a"],QTr:F["a"],QTd:K["a"]}),f()(Z,"directives",{Ripple:V["a"]});var et=a("bd4c"),at={data(){return{menuOpen:!1}},components:{SearchContent:x,InfoContent:tt},computed:{nowDate(){return et["a"].formatDate(Date.now(),"YYYY年MM月DD日 dddd HH:mm:ss").substring(0,16)}},methods:{...Object(n["b"])({getCity:"common/city/getCity",getMap:"map/getMap"})},async beforeMount(){this.$q.loading.show({message:"資料讀取中"}),await this.getCity(),await this.getMap(),this.$q.loading.hide()}},st=at,it=(a("638e"),a("4d5a")),ot=a("e359"),rt=a("9404"),nt=a("4983"),lt=a("09e3"),ct=Object(p["a"])(st,s,i,!1,null,"37c8a6e0",null);e["default"]=ct.exports;f()(ct,"components",{QLayout:it["a"],QHeader:ot["a"],QToolbar:Q["a"],QBtn:I["a"],QToolbarTitle:P["a"],QIcon:S["a"],QDrawer:rt["a"],QScrollArea:nt["a"],QItemLabel:L["a"],QPageContainer:lt["a"]})}}]);