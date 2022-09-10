"use strict";(self.webpackChunkappname=self.webpackChunkappname||[]).push([[234],{4778:function(e,t,n){var r=n(4165),a=n(5861),s=n(5671),c=n(3144),i=n(655),o=n(783),u=n(9385),l=function(){function e(){(0,s.Z)(this,e)}return(0,c.Z)(e,null,[{key:"BlogDropDown",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Blog/BlogDropDown");case 2:if(s=e.sent,!(c=s.data)){e.next=7;break}return i.Z.dispatch((0,u.Yc)(c)),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"BlogSingle",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Blog/BlogSingle/".concat(t));case 2:if(n=e.sent,!(a=n.data)){e.next=7;break}return i.Z.dispatch((0,u.sD)(null===a||void 0===a?void 0:a[0])),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=l},783:function(e,t,n){var r=n(4165),a=n(5861),s=n(5671),c=n(3144),i=n(4569),o=n.n(i),u=n(2507),l=n(9384),d=n(4500),p=n(6877),f=n(6331),h=n(655);function v(){o().defaults.headers.common.Authorization="Bearer "+u.Z.getToken()}o().defaults.baseURL="/api/v1",o().defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var m=function(e){return h.Z.dispatch((0,p.zy)()),e},Z=function(e){return h.Z.dispatch((0,p.zy)()),500===e.response.status?l.Z.errorMessage("Sorry, Something went wrong"):401===e.response.status?(l.Z.errorMessage(e.response.data.message),h.Z.dispatch((0,d.hf)()),h.Z.dispatch((0,f.c1)())):l.Z.errorMessage(e.response.data.message),!1},x=function(){function e(){(0,s.Z)(this,e)}return(0,c.Z)(e,null,[{key:"getRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Z.dispatch((0,p.Pl)()),e.next=3,o().get(t,v()).then((function(e){return m(e)})).catch((function(e){return Z(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"postRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Z.dispatch((0,p.Pl)()),e.next=3,o().post(t,n,v()).then((function(e){return m(e)})).catch((function(e){return h.Z.dispatch((0,p.zy)()),Z(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Z.dispatch((0,p.Pl)()),e.next=3,o().patch(t,n,v()).then((function(e){return m(e)})).catch((function(e){return Z(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"putRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Z.dispatch((0,p.Pl)()),e.next=3,o().put(t,n,v()).then((function(e){return m(e)})).catch((function(e){return Z(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Z.dispatch((0,p.Pl)()),e.next=3,o().delete(t,v()).then((function(e){return m(e)})).catch((function(e){return Z(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=x},6234:function(e,t,n){n.r(t);var r=n(2791),a=n(9434),s=n(3504),c=n(9603),i=n(2134),o=n(3257),u=n(4778),l=n(9639),d=n(184);t.default=function(){(0,r.useEffect)((function(){u.Z.BlogDropDown()}),[]);var e=(0,a.v9)((function(e){return e.Blog})).BlogList;return(0,d.jsxs)("div",{className:"wrapper sticky-parent",children:[(0,d.jsx)(l.Z,{}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("div",{className:"section mt-0",children:(0,d.jsx)("h1",{className:"title title--h1 title__separate",children:"Blog"})}),(0,d.jsx)("div",{className:"news-grid section",children:e&&e.map((function(e){return(0,d.jsxs)("article",{className:"news-item box",children:[(0,d.jsxs)("div",{className:"news-item__image-wrap overlay overlay--45",children:[(0,d.jsx)("div",{className:"news-item__date",children:(0,c.ZP)(e.createdAt,"dS mmm")}),(0,d.jsxs)("div",{className:"view-blog",children:[(0,d.jsx)(i.Zju,{})," ",e.View]}),(0,d.jsx)(s.rU,{className:"news-item__link",to:"/blog/".concat(e._id)}),(0,d.jsx)("img",{className:"cover ls-is-cached lazyloaded",src:e.Image,alt:"blogImage"})]}),(0,d.jsxs)("div",{className:"news-item__caption",children:[(0,d.jsx)("h3",{className:"title title--h3",children:(0,o.Z)(e.Title)}),(0,d.jsx)("p",{children:(0,o.Z)(e.Description)})]})]})}))})]})]})}},9639:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(2791),a=n(9434),s=n(4165),c=n(5861),i=n(5671),o=n(3144),u=n(655),l=n(783),d=n(9384),p=n(6331),f=n(2507),h=function(){function e(){(0,i.Z)(this,e)}return(0,o.Z)(e,null,[{key:"UserDetails",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.getRequest("/admin/SelectUser/devoloper.sujon@gmail.com");case 2:if(t=e.sent,!(n=t.data)){e.next=7;break}return u.Z.dispatch((0,p.Ky)(null===n||void 0===n?void 0:n[0])),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"UserUpdate",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.updateRequest("/user/UserUpdate",t);case 2:if(n=e.sent,!(r=n.data)){e.next=7;break}return d.Z.successMessage(r.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"UserChecgePassword",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.putRequest("/user/UserChangePassword",t);case 2:if(n=e.sent,!(r=n.data)){e.next=7;break}return d.Z.successMessage(r.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"SendRecoveryOtp",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.getRequest("/User/SendRecoveryOtp/".concat(t));case 2:if(n=e.sent,!(r=n.data)){e.next=8;break}return f.Z.setOtpEmail(t),d.Z.successMessage(r.message),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"VerifyRecoveryOtp",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.getRequest("/User/VerifyRecoveryOtp/".concat(f.Z.getOtpEmail(),"/").concat(t));case 2:n=e.sent,(r=n.data)&&(f.Z.setOtpCode(t),d.Z.successMessage(r.message));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"RecoveryResetPass",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.postRequest("/User/RecoveryResetPass/".concat(f.Z.getOtpEmail(),"/").concat(f.Z.getOtpCode()),t);case 2:if(n=e.sent,!(r=n.data)){e.next=7;break}return d.Z.successMessage(r.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=h,m=n(3257),Z=n(184),x=function(){(0,r.useEffect)((function(){v.UserDetails()}),[]);var e=(0,a.v9)((function(e){return e.Profile})).user;return(0,Z.jsx)("aside",{className:"sidebar",children:(0,Z.jsxs)("div",{className:"sticky-column is_stuck",style:{position:"fixed",top:"-24.531px",width:"200px"},children:[(0,Z.jsx)("div",{className:"avatar-wrap",children:(0,Z.jsx)("svg",{className:"avatar avatar--180",viewBox:"0 0 188 188",children:(0,Z.jsx)("g",{className:"avatar__box",children:(0,Z.jsx)("image",{xlinkHref:null===e||void 0===e?void 0:e.Image,height:"100%",width:"100%"})})})}),(0,Z.jsxs)("div",{className:"text-center",children:[(0,Z.jsx)("h3",{className:"title sidebar__user-name",children:(0,Z.jsxs)("span",{className:"weight--500",children:[" ",(0,m.Z)(null===e||void 0===e?void 0:e.Name)," "]})}),(0,Z.jsx)("div",{className:"badge badge--gray",children:(0,m.Z)(null===e||void 0===e?void 0:e.Post)}),(0,Z.jsxs)("div",{className:"social",children:[(0,Z.jsx)("a",{className:"social__link",href:null===e||void 0===e?void 0:e.Github,target:"_blank",children:(0,Z.jsx)("i",{className:"font-icon icon-github"})}),(0,Z.jsx)("a",{className:"social__link",href:null===e||void 0===e?void 0:e.Linkedin,target:"_blank",children:(0,Z.jsx)("i",{className:"font-icon icon-linkedin2"})}),(0,Z.jsx)("a",{className:"social__link",href:null===e||void 0===e?void 0:e.Twitter,target:"_blank",children:(0,Z.jsx)("i",{className:"font-icon icon-twitter"})}),(0,Z.jsx)("a",{className:"social__link",href:null===e||void 0===e?void 0:e.Facebook,target:"_blank",children:(0,Z.jsx)("i",{className:"font-icon icon-facebook"})})]})]}),(0,Z.jsxs)("ul",{className:"contact-block",children:[(0,Z.jsxs)("li",{className:"contact-block__item","data-toggle":"tooltip","data-placement":"top",title:!0,"data-original-title":"Birthday",children:[(0,Z.jsx)("i",{className:"font-icon icon-calendar2"}),null===e||void 0===e?void 0:e.Birthday]}),(0,Z.jsxs)("li",{className:"contact-block__item","data-toggle":"tooltip","data-placement":"top",title:!0,"data-original-title":"Address",children:[(0,Z.jsx)("i",{className:"font-icon icon-map-pin"}),(0,m.Z)(null===e||void 0===e?void 0:e.Address)]}),(0,Z.jsx)("li",{className:"contact-block__item","data-toggle":"tooltip","data-placement":"top",title:!0,"data-original-title":"E-mail",children:(0,Z.jsxs)("a",{href:"mailto:devoloper.sujon@gmail",children:[(0,Z.jsx)("i",{className:"font-icon icon-mail"}),null===e||void 0===e?void 0:e.Email]})}),(0,Z.jsxs)("li",{className:"contact-block__item","data-toggle":"tooltip","data-placement":"top",title:!0,"data-original-title":"Phone",children:[(0,Z.jsx)("i",{className:"font-icon icon-smartphone"}),(0,Z.jsx)("a",{href:"tel:".concat(null===e||void 0===e?void 0:e.Phone),children:null===e||void 0===e?void 0:e.Phone})]})]}),(0,Z.jsxs)("a",{className:"btn",href:null===e||void 0===e?void 0:e.Cv,target:"_blank",children:[(0,Z.jsx)("i",{className:"font-icon icon-download"})," Download CV",(0,Z.jsx)("span",{style:{top:"-5.625px",left:"109.5px"}})]})]})})}},3257:function(e,t,n){var r=n(3540);t.Z=function(e){return(0,r.ZP)("".concat(e))}},9384:function(e,t,n){var r=n(5671),a=n(3144),s=n(6960),c=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"successMessage",value:function(e){return s.Z.success(e,{position:"bottom-center"})}},{key:"errorMessage",value:function(e){return s.Z.error(e,{position:"bottom-center"})}}]),e}();t.Z=c}}]);
//# sourceMappingURL=234.a998e43b.chunk.js.map