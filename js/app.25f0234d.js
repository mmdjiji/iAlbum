(function(e){function t(t){for(var s,n,r=t[0],l=t[1],c=t[2],h=0,u=[];h<r.length;h++)n=r[h],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);_&&_(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},i={app:0},o=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/iAlbum/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var _=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4381:function(e,t,a){"use strict";a("accc")},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("a2e7"),i=function(){var e=this,t=e._self._c;return t("div",[t("div",{class:["content-container",e.sidebar_shown_on_pc_mode?"":"side-hidden-screen"]},[t("ContentView",{attrs:{base_name:e.contentAlbumName,album_friendly_name:e.contentFriendlyName,sidebar_shown_pc:e.sidebar_shown_on_pc_mode},on:{"should-show-sidebar":(t,a)=>"mobile"===a?e.sidebar_shown_on_mobile_mode=t:e.sidebar_shown_on_pc_mode=t,"preview-photo":(t,a,s,i,o,n)=>e.previewPhoto(t,a,s,i,o,n)}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.sidebar_shown_on_mobile_mode,expression:"sidebar_shown_on_mobile_mode"}],staticClass:"sidebar-mobile-mask",on:{click:function(t){e.sidebar_shown_on_mobile_mode=!1}}}),t("div",{class:["sidebar-container",e.sidebar_shown_on_pc_mode?"":"side-hidden-screen",e.sidebar_shown_on_mobile_mode?"sidebar-mobile-shown":""]},[t("Sidebar",{ref:"sidebar",on:{"switch-album":(e,t)=>{this.contentAlbumName=e,this.contentFriendlyName=t},"should-show-sidebar":(t,a)=>"mobile"===a?e.sidebar_shown_on_mobile_mode=t:e.sidebar_shown_on_pc_mode=t}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview_shown,expression:"preview_shown"}],staticClass:"preview-container"},[t("Preview",{attrs:{current_photo_filename:e.preview_filename,image_list:e.preview_imagelist,index:e.preview_index,current_album_name:e.preview_album_name,catalog_name:e.contentFriendlyName,current_photo:e.preview_current_obj,password:e.preview_password},on:{"hide-preview":function(t){e.preview_shown=!1}}})],1)])},o=[],n=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"padding-left":"10px","padding-right":"10px",height:"100%","overflow-y":"auto"},on:{scroll:e.handleScroll}},[t("div",{class:["navbar",e.shouldShowSemiTransparentNavBar?"":"large"]},[t("div",{staticClass:"nav-title"},[e._v(" 照片 ")]),t("div",{staticClass:"left-button-group"},[t("span",{staticClass:"hidden-btn",on:{click:()=>{this.raise_event_show_sidebar(!1,"mobile"),this.raise_event_show_sidebar(!1,"pc")}}},[t("IconBase",{attrs:{"icon-color":"#5555ff"}},[t("IconSideBar")],1)],1)]),t("div",{staticClass:"right-button-group"},[t("span",{on:{click:function(t){return e.logout()}}},[t("IconBase",{attrs:{"icon-color":"#5555ff",height:"21"}},[t("IconExit")],1)],1)])]),t("div",{staticClass:"title1 navtitle",style:{marginTop:"50px",opacity:1-e.shouldShowSemiTransparentNavBar}},[e._v(" 照片 ")]),t("div",{staticClass:"listview normal-menu-ui",staticStyle:{"margin-top":"5px"}},[t("a",{directives:[{name:"show",rawName:"v-show",value:e.show_banner,expression:"show_banner"}],class:e.selected("_default"),on:{click:function(t){return e.switch_album("_default","最近项目")}}},[t("span",[e._v("最近项目")])])]),t("div",{staticClass:"title2"},[e._v(" 我的相册 ")]),t("div",{staticClass:"listview"},e._l(e.album_list,(function(a){return t("a",{key:a.name,class:["album-prev",e.selected(a.name)],on:{click:function(t){return e.switch_album(a.name,a.friendly_name)}}},[t("div",{staticStyle:{position:"relative"}},[t("div",{staticClass:"list_img",style:{backgroundImage:`url(/api/${a.name}/${a.preview||"preview.jpg"})`}}),t("span",{staticStyle:{"margin-left":"27px"}},[e._v(e._s(a.friendly_name))])])])})),0)])},r=[];a("f33e"),a("bfe0"),a("9b91"),a("8e9e"),a("3849"),a("b41b"),a("6058"),a("3504"),a("f6e1"),a("f221");function l(){let e={},t=location.href.split("?")[1];return"undefined"==typeof t||t.split("&").forEach((function(t){var a=t.split("=");e[a[0]]=a[1]})),e}function c(e){return new Promise((t,a)=>{fetch(`/api/${e}.json`).then((function(e){if(e.ok)return t(e.json());throw new Error("Network response was not ok: url")})).catch((function(t){console.error("HTTP Request: /GET "+e+" [FAILED]",t),a(t)}))})}function _(e,t){if(32!==e.length||32!==t.length)throw new Error("Both MD5 strings must be 32 characters long.");var a=Array(32).fill(0);for(let s=0;s<32;s++){let i=Number.parseInt(e[s],16),o=Number.parseInt(t[s],16);a[s]=(i^o).toString(16)}return a.join("")}function h(e,t){const a=new Blob([e],{type:"text/plain"}),s=document.createElement("a");s.href=URL.createObjectURL(a),s.download=t,s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)}function u(){const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0"),n=String(e.getSeconds()).padStart(2,"0");return`${t}${a}${s}_${i}${o}${n}`}function d(e=".txt"){return new Promise((t,a)=>{const s=document.createElement("input");s.type="file",s.accept=e,s.addEventListener("change",(function(e){const s=e.target.files[0];if(s){const e=new FileReader;e.onload=function(e){const a=e.target.result;t(a)},e.onerror=function(e){a(e.target.error)},e.readAsText(s)}else a(new Error("No file selected."))})),s.click()})}var p={parse_args:l,get_json:c,md5_transform:_,download_text_as_file:h,get_current_time_f:u,get_file_content:d},m=function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height}},[t("g",{attrs:{fill:e.iconColor}},[e._t("default")],2)])},w=[],v={name:"IconBase.vue",props:{width:{type:[Number,String],default:25},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}},f=v,g=(a("b979"),a("0ab7")),b=Object(g["a"])(f,m,w,!1,null,"107806a9",null),y=b.exports,C=function(){var e=this,t=e._self._c;return t("path",{attrs:{d:"M3.06641 17.998L19.9609 17.998C22.0117 17.998 23.0273 16.9824 23.0273 14.9707L23.0273 3.04688C23.0273 1.03516 22.0117 0.0195312 19.9609 0.0195312L3.06641 0.0195312C1.02539 0.0195312 0 1.02539 0 3.04688L0 14.9707C0 16.9922 1.02539 17.998 3.06641 17.998ZM3.08594 16.4258C2.10938 16.4258 1.57227 15.9082 1.57227 14.8926L1.57227 3.125C1.57227 2.10938 2.10938 1.5918 3.08594 1.5918L19.9414 1.5918C20.9082 1.5918 21.4551 2.10938 21.4551 3.125L21.4551 14.8926C21.4551 15.9082 20.9082 16.4258 19.9414 16.4258ZM7.44141 16.7285L8.97461 16.7285L8.97461 1.29883L7.44141 1.29883ZM5.56641 5.21484C5.85938 5.21484 6.12305 4.95117 6.12305 4.66797C6.12305 4.375 5.85938 4.12109 5.56641 4.12109L3.4668 4.12109C3.17383 4.12109 2.91992 4.375 2.91992 4.66797C2.91992 4.95117 3.17383 5.21484 3.4668 5.21484ZM5.56641 7.74414C5.85938 7.74414 6.12305 7.48047 6.12305 7.1875C6.12305 6.89453 5.85938 6.65039 5.56641 6.65039L3.4668 6.65039C3.17383 6.65039 2.91992 6.89453 2.91992 7.1875C2.91992 7.48047 3.17383 7.74414 3.4668 7.74414ZM5.56641 10.2637C5.85938 10.2637 6.12305 10.0195 6.12305 9.72656C6.12305 9.43359 5.85938 9.17969 5.56641 9.17969L3.4668 9.17969C3.17383 9.17969 2.91992 9.43359 2.91992 9.72656C2.91992 10.0195 3.17383 10.2637 3.4668 10.2637Z","fill-opacity":"0.85"}})},S=[],k={},x=Object(g["a"])(k,C,S,!1,null,null,null),L=x.exports,N=function(){var e=this,t=e._self._c;return t("g",[t("path",{attrs:{d:"M3.02734 20.9375L13.3984 20.9375C15.4199 20.9375 16.4258 19.9219 16.4258 17.8809L16.4258 3.06641C16.4258 1.03516 15.4199 0 13.3984 0L3.02734 0C1.01562 0 0 1.03516 0 3.06641L0 17.8809C0 19.9219 1.01562 20.9375 3.02734 20.9375ZM1.57227 17.8516L1.57227 3.0957C1.57227 2.11914 2.09961 1.57227 3.11523 1.57227L13.3203 1.57227C14.3359 1.57227 14.8535 2.11914 14.8535 3.0957L14.8535 17.8516C14.8535 18.8281 14.3359 19.3652 13.3203 19.3652L3.11523 19.3652C2.09961 19.3652 1.57227 18.8281 1.57227 17.8516Z","fill-opacity":"0.85"}}),t("path",{attrs:{d:"M9.04297 13.1348L21.9141 13.1348C23.3594 13.1348 24.5605 11.9238 24.5605 10.4688C24.5605 9.01367 23.3594 7.80273 21.9141 7.80273L9.04297 7.80273C7.58789 7.80273 6.39648 9.01367 6.39648 10.4688C6.39648 11.9238 7.58789 13.1348 9.04297 13.1348Z",fill:"aliceblue"}}),t("path",{attrs:{d:"M9.04297 11.2402L19.0723 11.2402L20.5273 11.1816L19.8438 11.8457L18.2617 13.3203C18.1055 13.457 18.0273 13.6621 18.0273 13.8477C18.0273 14.2578 18.3203 14.5605 18.7109 14.5605C18.9258 14.5605 19.082 14.4824 19.2285 14.3359L22.4121 11.0352C22.6074 10.8398 22.6758 10.6641 22.6758 10.4688C22.6758 10.2637 22.6074 10.0977 22.4121 9.90234L19.2285 6.60156C19.082 6.45508 18.9258 6.36719 18.7109 6.36719C18.3203 6.36719 18.0273 6.66016 18.0273 7.07031C18.0273 7.26562 18.1055 7.4707 18.2617 7.60742L19.8438 9.0918L20.5371 9.75586L19.0723 9.6875L9.04297 9.6875C8.63281 9.6875 8.28125 10.0488 8.28125 10.4688C8.28125 10.8887 8.63281 11.2402 9.04297 11.2402Z","fill-opacity":"0.85"}})])},$=[],j={},I=Object(g["a"])(j,N,$,!1,null,null,null),O=I.exports,E={name:"Sidebar",components:{IconSideBar:L,IconBase:y,IconExit:O},data:()=>({album_list:[],selected_album_name:"_default",show_banner:!0,shouldShowSemiTransparentNavBar:!1}),async mounted(){const e=await p.parse_args();if(e.i){const t=await this.getAlbumList();for(const a of t)if(a.name===e.i){this.switch_album(a.name,a.friendly_name);break}}},methods:{raise_event_show_sidebar(e,t){this.$emit("should-show-sidebar",e,t)},switch_album(e,t){this.$emit("switch-album",e,t),this.selected_album_name=e,window.innerWidth<=1200&&this.raise_event_show_sidebar(!1,"mobile")},selected(e){return e===this.selected_album_name?"selected":""},handleScroll:function(e){console.log(e.srcElement.scrollTop),e.srcElement.scrollTop>=30?this.shouldShowSemiTransparentNavBar=!0:this.shouldShowSemiTransparentNavBar=!1},async getAlbumList(){return this.album_list=await p.get_json("meta"),this.album_list},logout(){localStorage.removeItem("key"),location.reload()}}},F=E,P=Object(g["a"])(F,n,r,!1,null,"2882a7ac",null),B=P.exports,M=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{height:"100%","overflow-y":"auto"},on:{scroll:e.handleScroll}},[t("div",{staticClass:"cnav",staticStyle:{"pointer-events":"none"}},[t("div",{class:["title","left",e.sidebar_shown_pc?"":"sidebar-hidden"]},[t("span",{staticClass:"title-text"},[e._v(e._s(e.album_friendly_name))])]),t("div",{staticClass:"title right"},[t("span",{staticStyle:{color:"#eee","margin-right":"10px"}},[e._v(e._s(e.photo_count)+"张图片")]),t("span",{staticStyle:{"pointer-events":"auto"}},[t("button",{on:{click:function(t){e.menu_more_is_shown=!e.menu_more_is_shown}}},[e._v("...")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.menu_more_is_shown,expression:"menu_more_is_shown"}],staticClass:"context-menu-mask",staticStyle:{"pointer-events":"auto"},on:{click:function(t){e.menu_more_is_shown=!1}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.menu_more_is_shown,expression:"menu_more_is_shown"}],class:["context-menu",e.menu_more_is_shown?"shown":"hidden"],staticStyle:{"pointer-events":"auto",top:"56px",right:"20px"}},[t("a",{attrs:{"aria-disabled":e.current_zoom_scale>=2},on:{click:function(t){e.current_zoom_scale<2&&(e.current_zoom_scale++,e.menu_more_is_shown=!1)}}},[e._v("放大")]),t("a",{attrs:{"aria-disabled":e.current_zoom_scale<=-6},on:{click:function(t){e.current_zoom_scale>-6&&(e.current_zoom_scale--,e.menu_more_is_shown=!1)}}},[e._v("缩小")]),t("a",{attrs:{"aria-disabled":0==e.current_zoom_scale},on:{click:function(t){0!=e.current_zoom_scale&&(e.current_zoom_scale=0,e.menu_more_is_shown=!1)}}},[e._v("默认缩放 (当前："+e._s(e.current_zoom_scale)+")")]),t("hr",{directives:[{name:"show",rawName:"v-show",value:"_fav"===e.base_name,expression:"base_name === '_fav'"}]}),t("a",{directives:[{name:"show",rawName:"v-show",value:"_fav"===e.base_name,expression:"base_name === '_fav'"}],on:{click:function(t){return e.exportFavClick()}}},[e._v("导出个人收藏")]),t("a",{directives:[{name:"show",rawName:"v-show",value:"_fav"===e.base_name,expression:"base_name === '_fav'"}],on:{click:function(t){return e.importFavClick()}}},[e._v("导入个人收藏")])])]),t("div",{staticClass:"back left",staticStyle:{"line-height":"45px",left:"18px",top:"0"},on:{click:function(t){return e.raise_event_show_sidebar(!0,"mobile")}}},[t("i",{staticClass:"larrow",staticStyle:{"border-color":"white"}}),t("span",{staticClass:"backtext"},[e._v("照片")])]),t("div",{class:["back","left","sidebar-hidden-left",e.sidebar_shown_pc?"":"sidebar-hidden"],staticStyle:{"line-height":"45px",left:"18px",top:"0"},on:{click:function(t){return e.raise_event_show_sidebar(!0,"pc")}}},[t("span",{staticClass:"backtext"},[t("IconBase",{attrs:{"icon-color":"white"}},[t("IconSideBar")],1)],1)])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.unlocked,expression:"!unlocked"}],staticClass:"password-container"},[t("PasswordInput",{ref:"password_input",attrs:{hint:e.hint},on:{"submit-password":t=>e.checkPassword(t)}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.unlocked,expression:"unlocked"}]},e._l(e.photo_list,(function(a,s){return t("div",{key:s,class:["photo","box","scale-ratio-ratio-"+e.current_zoom_scale],style:{backgroundImage:`url('${e.get_thumbnail_image(a.al,a.name)}')`,backgroundPosition:"center"},attrs:{"photo-name":a.name}},[t("div",{staticClass:"photo-mask",staticStyle:{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"},on:{click:function(t){return e.raise_event_show_preview(a.name,e.photo_list,s,a.al,a,e.password)}}})])})),0)])},z=[],A=(a("cfff"),a("eacf"),a("6c84"),a("7f5e"),function(){var e=this,t=e._self._c;return t("path",{attrs:{d:"M0 6.49414C0 10.6543 3.48633 14.7461 8.99414 18.2617C9.19922 18.3887 9.49219 18.5254 9.69727 18.5254C9.90234 18.5254 10.1953 18.3887 10.4102 18.2617C15.9082 14.7461 19.3945 10.6543 19.3945 6.49414C19.3945 3.03711 17.0215 0.595703 13.8574 0.595703C12.0508 0.595703 10.5859 1.45508 9.69727 2.77344C8.82812 1.46484 7.34375 0.595703 5.53711 0.595703C2.37305 0.595703 0 3.03711 0 6.49414ZM1.57227 6.49414C1.57227 3.89648 3.25195 2.16797 5.51758 2.16797C7.35352 2.16797 8.4082 3.31055 9.0332 4.28711C9.29688 4.67773 9.46289 4.78516 9.69727 4.78516C9.93164 4.78516 10.0781 4.66797 10.3613 4.28711C11.0352 3.33008 12.0508 2.16797 13.877 2.16797C16.1426 2.16797 17.8223 3.89648 17.8223 6.49414C17.8223 10.127 13.9844 14.043 9.90234 16.7578C9.80469 16.8262 9.73633 16.875 9.69727 16.875C9.6582 16.875 9.58984 16.8262 9.50195 16.7578C5.41016 14.043 1.57227 10.127 1.57227 6.49414Z","fill-opacity":"0.85"}})}),T=[],Z={},J=Object(g["a"])(Z,A,T,!1,null,null,null),K=J.exports,H=function(){var e=this,t=e._self._c;return t("path",{attrs:{d:"M9.69727 18.5254C9.90234 18.5254 10.1953 18.3887 10.4102 18.2617C15.9082 14.7461 19.3945 10.6543 19.3945 6.49414C19.3945 3.03711 17.0215 0.595703 13.9551 0.595703C12.0508 0.595703 10.5859 1.65039 9.69727 3.26172C8.82812 1.66016 7.34375 0.595703 5.43945 0.595703C2.37305 0.595703 0 3.03711 0 6.49414C0 10.6543 3.48633 14.7461 8.99414 18.2617C9.19922 18.3887 9.49219 18.5254 9.69727 18.5254Z","fill-opacity":"0.85"}})},W=[],D={},R=Object(g["a"])(D,H,W,!1,null,null,null),U=R.exports,V=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pwdi"},[t("div",{staticStyle:{position:"relative",height:"100%",width:"100%",margin:"0 auto"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true || password_dialog_shown"}],staticClass:"dialog"},[t("div",{staticClass:"title"},[e._v(" 加密相册 ")]),t("div",{staticClass:"ctnt"},[e.passwordErrorMsgShown?t("div",[t("p",{staticStyle:{color:"red"}},[e._v("答案错误")])]):t("div",[t("p",[e._v(e._s(e.hint))])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordEntered,expression:"passwordEntered"}],ref:"pi",attrs:{type:"text",placeholder:"在此输入答案"},domProps:{value:e.passwordEntered},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitPassword()},input:function(t){t.target.composing||(e.passwordEntered=t.target.value)}}}),t("div",{staticStyle:{"padding-top":"25px","text-align":"center"}},[t("button",{staticClass:"primary",staticStyle:{width:"100px"},attrs:{disabled:!e.password_dialog_shown},on:{click:function(t){return e.submitPassword()}}},[e._v("确定")])])])])])])},q=[];a("a9fa");const G=a("63bb");var Y={name:"PasswordInput",data:()=>({passwordErrorMsgShown:!1,passwordEntered:"",password_dialog_shown:!0,showInput:!0}),methods:{async submitPassword(){if(this.password_dialog_shown){if(""===this.passwordEntered)return this.$refs.pi.focus();this.password_dialog_shown=!1,this.$emit("submit-password",G(this.passwordEntered))}},refresh(){this.passwordErrorMsgShown=!1,this.passwordEntered="",this.password_dialog_shown=!0,this.showInput=!0},feedback(e){e||(this.password_dialog_shown=!0,this.passwordEntered="",this.passwordErrorMsgShown=!0)}},props:["hint"],watch:{password_dialog_shown(){}},mounted(){this.$refs.pi.focus()}},Q=Y,X=Object(g["a"])(Q,V,q,!1,null,"019b3094",null),ee=X.exports;const te=50;var ae={name:"Content",components:{IconSideBar:L,IconBase:y,IconHeart:K,IconHeartFilled:U,PasswordInput:ee},props:["base_name","album_friendly_name","sidebar_shown_pc"],data(){return{page_count:0,current_page_to_load:0,photo_count:0,photo_list:[],initial_scroll_height:0,response_load_new:!0,fav_content_cache:{},fav_page_cache:null,menu_more_is_shown:!1,current_zoom_scale:0,secret:!1,unlocked:!0,hint:"",password:""}},computed:{album_get_meta_json_name(){return this.base_name+"/_meta"},album_get_image_at_current_page_json_name(){return this.base_name+"/_page_"+String(this.current_page_to_load)}},watch:{base_name(){this.initialize()}},created(){},async mounted(){this.initialize()},methods:{async checkPassword(e){try{const t=await p.get_json(this.base_name+`/${e}/probe`);if(t){const t=JSON.parse(localStorage.getItem("key")||"{}");return t[this.base_name]=e,localStorage.setItem("key",JSON.stringify(t)),this.$refs.password_input.feedback(!0),this.password=e,this.unlocked=!0,!0}return this.password="",this.$refs.password_input.feedback(!1),!1}catch(t){return console.log(t),this.$refs.password_input.feedback(!1),!1}},raise_event_show_sidebar(e,t){this.$emit("should-show-sidebar",e,t)},raise_event_show_preview(e,t,a,s,i,o){this.$emit("preview-photo",e,t,a,s,i,o)},async load_image(){if(this.response_load_new)if(this.response_load_new=!1,setTimeout(()=>{this.response_load_new=!0},1e3),this.current_page_to_load>=this.page_count)this.response_load_new=!0;else{if(this.album_get_meta_json_name.startsWith("_fav")){let e=Math.min(this.photo_list.length+te,this.fav_page_cache.length);for(let t=this.photo_list.length;t<e;t++)this.photo_list.push(this.fav_page_cache[t])}else this.photo_list.push(...await p.get_json(this.album_get_image_at_current_page_json_name)),this.applyFavoriteWithPhotos();this.current_page_to_load++,this.response_load_new=!0}},get_thumbnail_image(e,t){return`/api/${e}/${this.password}_cache/${t}`},async initialize(){if(this.base_name){if(this.current_page_to_load=0,this.photo_list=[],this.response_load_new=!0,this.initial_scroll_height=0,this.photo_count=this.page_count=0,this.album_get_meta_json_name.startsWith("_fav")){if(null==this.fav_page_cache||0==this.current_page_to_load){this.fav_page_cache=[],this.loadAllFavoriteItems();for(let e in this.fav_content_cache)for(let t in this.fav_content_cache[e])this.fav_page_cache.push(this.fav_content_cache[e][t])}this.photo_count=this.fav_page_cache.length}else{const e=await p.get_json(this.album_get_meta_json_name);if(this.photo_count=e.count,this.secret=e.secret,this.hint=e.hint,this.unlocked=!0,this.password="",!0===e.secret){const e=JSON.parse(localStorage.getItem("key")||"{}");if(void 0===e[this.base_name])this.$refs.password_input.refresh(),this.unlocked=!1;else{const t=await this.checkPassword(e[this.base_name]);!1===t&&(this.$refs.password_input.refresh(),this.unlocked=!1)}}}if(this.page_count=Math.ceil(this.photo_count/te),this.page_count>0){const e=await p.parse_args();e.i?setTimeout(()=>{this.load_image()},10):this.load_image()}}},handleScroll:function(e){0===this.initial_scroll_height&&(this.initial_scroll_height=e.srcElement.scrollHeight/10),e.srcElement.offsetHeight+e.srcElement.scrollTop>=e.srcElement.scrollHeight-this.initial_scroll_height&&this.load_image()},isFavorite(e){return e.fav},getFavoriteStorageKey(e){return`${e.al}/${e.name}`},getFavoriteLocalStorageKey(e){return"fav_"+e.al},getFavoriteLocalStorageAllKeys(){let e=[];for(let t=0,a=localStorage.length;t<a;++t){let a=localStorage.key(t);a.startsWith("fav_")&&e.push(a)}return e},loadAllFavoriteItems(){this.fav_content_cache={};let e=this.getFavoriteLocalStorageAllKeys();for(let t=0;t<e.length;t++)this.fav_content_cache[e[t]]=JSON.parse(localStorage.getItem(e[t]))},applyFavoriteWithPhotos(){this.loadAllFavoriteItems();for(let e=0;e<this.photo_list.length;e++){let t=this.getFavoriteStorageKey(this.photo_list[e]),a=this.getFavoriteLocalStorageKey(this.photo_list[e]);"undefined"!=typeof this.fav_content_cache[a]&&("undefined"!=typeof this.fav_content_cache[a][t]&&(this.photo_list[e].fav=!0))}this.$forceUpdate()},saveFavoriteState(e){let t=this.getFavoriteStorageKey(e),a=this.getFavoriteLocalStorageKey(e);"undefined"==typeof this.fav_content_cache[a]&&(this.fav_content_cache[a]={}),e.fav?this.fav_content_cache[a][t]=e:delete this.fav_content_cache[a][t];let s=window.localStorage;"undefined"!==typeof s?s.setItem(a,JSON.stringify(this.fav_content_cache[a])):alert("您的浏览器不支持localStorage，无法使用此功能！")},switchFavState(e){e.fav=!e.fav,this.$forceUpdate(),this.saveFavoriteState(e)},exportFavClick(){this.menu_more_is_shown=!1;let e=this.getFavoriteLocalStorageAllKeys();console.log("export fav:",e);let t={};for(let s=0;s<e.length;s++)t[e[s]]=localStorage.getItem(e[s]);let a="export_"+p.get_current_time_f()+".json";p.download_text_as_file(JSON.stringify(t),a)},async importFavClick(){function e(e){if("undefined"===typeof e)throw new Error("object is undefined")}this.menu_more_is_shown=!1;try{let t=await p.get_file_content(".json");t=JSON.parse(t),console.log(t);let a=Object.keys(t);console.log(a);for(let s=0;s<a.length;s++){let i=JSON.parse(t[a[s]]),o=Object.keys(i);for(let t=0;t<o.length;t++){let a=i[o[t]];e(a["al"]),e(a["name"]),e(a["h"]),e(a["w"]),e(a["ct"])}}for(let e=0;e<a.length;e++){let s=t[a[e]];console.log("Import favorite: ",a[e],s),window.localStorage.setItem(a[e],s)}this.initialize()}catch(t){console.log(t),alert("选择的文件无法识别！")}}}},se=ae,ie=(a("a66c"),Object(g["a"])(se,M,z,!1,null,"478a3704",null)),oe=ie.exports,ne=function(){var e=this,t=e._self._c;return t("div",{class:e.showNavBar?"preview-with-navbar":"preview-hidden-navbar",staticStyle:{width:"100%",height:"100%"}},[t("span",{staticStyle:{position:"absolute",top:"45%","text-align":"center",color:"#888",display:"block",width:"100%"}},[e._v("正在加载图片...")]),t("div",{staticClass:"preview-photo-base preview-bg",style:e.preview_cache_img_style}),t("div",{staticClass:"preview-photo-high-res preview-bg",style:e.preview_img_style}),t("div",{staticClass:"preview-mask",on:{click:()=>{e.showNavBar=!e.showNavBar}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showNavBar,expression:"showNavBar"}],staticClass:"navbar",staticStyle:{width:"100% !important"}},[t("div",{staticClass:"nav-title"},[e._v(" "+e._s(e.photo_name)+" ")]),t("div",{staticClass:"left-button-group",on:{click:function(t){return e.raise_hide_preview()}}},[t("i",{staticClass:"larrow"}),t("span",{staticClass:"backtext"},[e._v(e._s(""===e.catalog_name?"相册列表":e.catalog_name))])]),t("div",{staticClass:"right-button-group"},[t("a",{on:{click:function(t){return e.downloadPhoto()}}},[e._v("下载")])])])])},re=[],le=(a("8f6b"),{name:"Preview",props:["current_album_name","current_photo_filename","image_list","index","catalog_name","current_photo","password"],data:()=>({showNavBar:!0,preview_img_style:{},preview_cache_img_style:{}}),computed:{photo_name(){return this.current_photo_filename.replace(/\.[a-z|A-Z|0-9]*$/g,"")},thumbnail_path(){return`/api/${this.current_album_name}/${this.password}_cache/${this.current_photo_filename}`},photo_path(){return`/api/${this.current_album_name}/${this.password||"raw"}/${this.current_photo_filename}`}},methods:{raise_hide_preview(){this.$emit("hide-preview")},thumbnail_path_at_index(e){return`/api/${this.image_list[e].al}/_cache/${this.image_list[e].name}`},photo_path_at_index(e){return`/api/${this.image_list[e].al}/raw/${this.image_list[e].name}`},downloadPhoto(){window.open(this.photo_path)},getBackgroundSize(){let e=this.current_photo.h,t=this.current_photo.w,a=window.innerHeight,s=window.innerWidth,i=t/e,o=s/a,n=i-o;const r="auto 100%",l="100% auto";return i>1?o>1?n>0?l:r:l:o>1?r:n>0?l:r}},watch:{current_photo(){this.preview_img_style={backgroundImage:"url('"+this.photo_path+"')",backgroundSize:this.getBackgroundSize()},this.preview_cache_img_style={backgroundImage:"url('"+this.thumbnail_path+"')",backgroundSize:this.getBackgroundSize()}}},mounted(){}}),ce=le,_e=Object(g["a"])(ce,ne,re,!1,null,"ef08ca46",null),he=_e.exports,ue={name:"App",components:{Sidebar:B,ContentView:oe,Preview:he},data:()=>({activeName:"ialbum",sidebar_shown_on_mobile_mode:!1,sidebar_shown_on_pc_mode:!0,password_input_shown:!1,preview_shown:!1,preview_filename:"",preview_imagelist:[],preview_index:0,preview_album_name:"",preview_current_obj:"",preview_password:"",contentAlbumName:"_default",contentFriendlyName:"最近项目"}),methods:{previewPhoto(e,t,a,s,i,o){this.preview_filename=e,this.preview_index=a,this.preview_imagelist=t,this.preview_album_name=s,this.preview_current_obj=i,this.preview_password=o,this.preview_shown=!0},initialize(){this.$refs.sidebar.getAlbumList()}},async mounted(){window.innerWidth<=500&&(this.sidebar_shown_on_mobile_mode=!0),this.initialize()}},de=ue,pe=(a("4381"),Object(g["a"])(de,i,o,!1,null,null,null)),me=pe.exports;s["a"].config.productionTip=!1,new s["a"]({render:e=>e(me)}).$mount("#app")},"5b1b":function(e,t,a){},"6c84":function(e,t,a){},"7f5e":function(e,t,a){},"8e9e":function(e,t,a){},"8f6b":function(e,t,a){},"9b91":function(e,t,a){},a66c:function(e,t,a){"use strict";a("d3a5")},a9fa:function(e,t,a){},accc:function(e,t,a){},b979:function(e,t,a){"use strict";a("5b1b")},bfe0:function(e,t,a){},d3a5:function(e,t,a){},eacf:function(e,t,a){},f33e:function(e,t,a){}});
//# sourceMappingURL=app.25f0234d.js.map