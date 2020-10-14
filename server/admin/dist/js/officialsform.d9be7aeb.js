(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["officialsform"],{"436b":function(e,t,s){"use strict";var i=s("5b87"),n=s.n(i);n.a},"5b87":function(e,t,s){},7039:function(e,t,s){var i=s("23e7"),n=s("d039"),a=s("057f").f,r=n((function(){return!Object.getOwnPropertyNames(1)}));i({target:"Object",stat:!0,forced:r},{getOwnPropertyNames:a})},f71f:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"officials-form"}},[s("h2",[e._v("Add Officials")]),s("cv-form",{on:{submit:function(t){return t.preventDefault(),e.addItem(t)}}},[s("body",[s("cv-text-input",{attrs:{label:"Name","invalid-message":"",placeholder:"Enter the name of the official"},model:{value:e.instance.name,callback:function(t){e.$set(e.instance,"name",t)},expression:"instance.name"}},[e.showInvalid.name?s("template",{slot:"invalid-message"},[e._v(" Required field ")]):e._e()],2),s("cv-text-input",{attrs:{label:"Title","invalid-message":"",placeholder:"Enter the title of the official"},model:{value:e.instance.title,callback:function(t){e.$set(e.instance,"title",t)},expression:"instance.title"}},[e.showInvalid.title?s("template",{slot:"invalid-message"},[e._v(" Required field ")]):e._e()],2),s("cv-text-input",{attrs:{label:"Email Address",placeholder:"Provide an email address for the official"},model:{value:e.instance.email_address,callback:function(t){e.$set(e.instance,"email_address",t)},expression:"instance.email_address"}},[e._v(" >")]),s("cv-text-input",{attrs:{label:"Phone Number",placeholder:"Provide an phone number for the official"},model:{value:e.instance.phone_number,callback:function(t){e.$set(e.instance,"phone_number",t)},expression:"instance.phone_number"}},[e._v(" >")]),s("cv-text-input",{attrs:{label:"URL",placeholder:"Provide the URL of the official's web site"},model:{value:e.instance.website_url,callback:function(t){e.$set(e.instance,"website_url",t)},expression:"instance.website_url"}},[e._v(" >")])],1),e.errorTitle?s("cv-toast-notification",{attrs:{kind:"error",title:e.errorTitle,"sub-title":e.errorSubTitle,"close-aria-label":e.closeAriaLabel,"low-contrast":e.lowContrast},on:{close:e.doClose}}):e._e(),e.successTitle?s("cv-toast-notification",{attrs:{kind:"success",title:e.successTitle,"sub-title":e.successSubTitle,"close-aria-label":e.closeAriaLabel,"low-contrast":e.lowContrast},on:{close:e.doClose}}):e._e(),s("cv-button",{attrs:{kind:"primary"}},[e._v("Add")]),s("cv-button",{staticStyle:{float:"right"},attrs:{kind:"secondary"},on:{click:e.doReset}},[e._v("Reset")])],1)],1)},n=[],a=(s("b0c0"),s("7039"),s("d3b7"),s("5530")),r=(s("96cf"),s("1da1")),l={name:"officials-form",data:function(){return{instance:{name:"",title:"",email_address:"",phone_number:"",website_url:""},disabled:!1,visible:!1,status:"",invalidStatusMessage:!1,showInvalid:{name:!1,title:!1},errorTitle:!1,errorSubTitle:"",successTitle:!1,successSubTitle:"",closeAriaLabel:"Custom close aria label",lowContrast:!0}},methods:{doReset:function(){this.errorTitle=!1,this.errorSubTitle=!1,this.successTitle=!1,this.successSubTitle=!1,this.instance.name="",this.instance.title="",this.instance.email_address="",this.instance.phone_number="",this.instance.website_url=""},doClose:function(){this.successTitle?this.doReset():(this.errorTitle=!1,this.errorSubTitle=!1,this.successTitle=!1,this.successSubTitle=!1)},formInvalidator:function(){for(var e=!1,t=Object.getOwnPropertyNames(this.showInvalid),s=0;s<t.length;s+=1){var i=t[s],n=!this.instance[i];this.showInvalid[i]=n,e=e||n}return e},okStatus:function(e){return e.status>=200&&e.status<300?(this.successTitle=e.statusText,this.successSubTitle="HTTP Status Code: ".concat(e.status),!0):(this.errorTitle=e.statusText,this.errorSubTitle="HTTP Status Code: ".concat(e.status),!1)},removeEmptyColumns:function(e){for(var t=Object.getOwnPropertyNames(e),s=0;s<t.length;s+=1){var i=t[s];""===e[i]&&delete e[i]}},addItem:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.formInvalidator()){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,s=Object(a["a"])({},e.instance),e.removeEmptyColumns(s),t.next=7,fetch("/api/v1/officials",{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json; charset=UTF-8"}});case 7:if(i=t.sent,!e.okStatus(i)){t.next=11;break}return t.next=11,i.json();case 11:t.next=18;break;case 13:t.prev=13,t.t0=t["catch"](2),e.errorTitle=t.t0,e.errorSubTitle="",console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[2,13]])})))()}}},o=l,c=(s("436b"),s("2877")),u=Object(c["a"])(o,i,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=officialsform.d9be7aeb.js.map