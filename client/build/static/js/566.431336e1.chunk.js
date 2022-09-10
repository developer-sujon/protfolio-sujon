"use strict";(self.webpackChunkappname=self.webpackChunkappname||[]).push([[566],{783:function(e,t,n){var r=n(4165),a=n(5861),s=n(5671),i=n(3144),c=n(4569),o=n.n(c),u=n(2507),l=n(9384),d=n(4500),p=n(6877),f=n(6331),h=n(655);function v(){o().defaults.headers.common.Authorization="Bearer "+u.Z.getToken()}o().defaults.baseURL="/api/v1",o().defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var m=function(e){return h.Z.dispatch((0,p.zy)()),e},x=function(e){return h.Z.dispatch((0,p.zy)()),500===e.response.status?l.Z.errorMessage("Sorry, Something went wrong"):401===e.response.status?(l.Z.errorMessage(e.response.data.message),h.Z.dispatch((0,d.hf)()),h.Z.dispatch((0,f.c1)())):l.Z.errorMessage(e.response.data.message),!1},Z=function(){function e(){(0,s.Z)(this,e)}return(0,i.Z)(e,null,[{key:"getRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Z.dispatch((0,p.Pl)()),e.next=3,o().get(t,v()).then((function(e){return m(e)})).catch((function(e){return x(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"postRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Z.dispatch((0,p.Pl)()),e.next=3,o().post(t,n,v()).then((function(e){return m(e)})).catch((function(e){return h.Z.dispatch((0,p.zy)()),x(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Z.dispatch((0,p.Pl)()),e.next=3,o().patch(t,n,v()).then((function(e){return m(e)})).catch((function(e){return x(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"putRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Z.dispatch((0,p.Pl)()),e.next=3,o().put(t,n,v()).then((function(e){return m(e)})).catch((function(e){return x(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteRequest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Z.dispatch((0,p.Pl)()),e.next=3,o().delete(t,v()).then((function(e){return m(e)})).catch((function(e){return x(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=Z},6566:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(2791),a=n(9434);var s=n.p+"static/media/icon-education.db7a0a81ec25076ab30aa266d586b090.svg",i=n(4165),c=n(5861),o=n(5671),u=n(3144),l=n(655),d=n(783),p=n(8057),f=function(){function e(){(0,o.Z)(this,e)}return(0,u.Z)(e,null,[{key:"EducationDropDown",value:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t,n,r){var a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Education/EducationDropDown");case 2:if(a=e.sent,!(s=a.data)){e.next=7;break}return l.Z.dispatch((0,p.m4)(s)),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}(),h=f,v=n(3257),m=n(184),x=function(){(0,r.useEffect)((function(){h.EducationDropDown()}),[]);var e=(0,a.v9)((function(e){return e.Education})).EducationList;return(0,m.jsxs)("section",{className:"section",children:[(0,m.jsxs)("h2",{className:"title title--h2",children:[(0,m.jsx)("img",{className:"title-icon",src:s,alt:"EducationIcon"}),"Education"]}),(0,m.jsx)("div",{className:"timeline",children:e&&e.map((function(e){return(0,m.jsxs)("article",{className:"timeline__item",children:[(0,m.jsx)("h5",{className:"title title--h3 timeline__title",children:(0,v.Z)(null===e||void 0===e?void 0:e.Name)}),(0,m.jsx)("span",{className:"timeline__period",children:null===e||void 0===e?void 0:e.Date}),(0,m.jsx)("p",{className:"timeline__description",children:(0,v.Z)(null===e||void 0===e?void 0:e.Description)})]})}))})]})};var Z=n.p+"static/media/icon-experience.036bbfe5b6ece5e900a98d085878be51.svg",g=n(8705),k=function(){function e(){(0,o.Z)(this,e)}return(0,u.Z)(e,null,[{key:"ExperienceDropDown",value:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Experience/ExperienceDropDown");case 2:if(t=e.sent,!(n=t.data)){e.next=7;break}return l.Z.dispatch((0,g.m4)(n)),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),j=k,N=function(){(0,r.useEffect)((function(){j.ExperienceDropDown()}),[]);var e=(0,a.v9)((function(e){return e.Experience})).ExperienceList;return(0,m.jsxs)("section",{className:"section",children:[(0,m.jsxs)("h2",{className:"title title--h2",children:[(0,m.jsx)("img",{className:"title-icon",src:Z,alt:"ExperienceIcon"}),"Experience"]}),(0,m.jsx)("div",{className:"timeline",children:e&&e.map((function(e){return(0,m.jsxs)("article",{className:"timeline__item",children:[(0,m.jsx)("h5",{className:"title title--h3 timeline__title",children:(0,v.Z)(null===e||void 0===e?void 0:e.Name)}),(0,m.jsx)("span",{className:"timeline__period",children:null===e||void 0===e?void 0:e.Date}),(0,m.jsx)("p",{className:"timeline__description",children:(0,v.Z)(null===e||void 0===e?void 0:e.Description)})]})}))})]})},b=n(9639),w=n(4542),y=function(){function e(){(0,o.Z)(this,e)}return(0,u.Z)(e,null,[{key:"SkillDropDown",value:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t,n,r){var a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.getRequest("/Skill/SkillDropDown");case 2:if(a=e.sent,!(s=a.data)){e.next=7;break}return l.Z.dispatch((0,w.tO)(s)),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}(),_=y;var D=n.p+"static/media/icon-dev.ca8077e33cf78b946a3c1eee31edce37.svg",E=function(){(0,r.useEffect)((function(){_.SkillDropDown()}),[]);var e=(0,a.v9)((function(e){return e.Skill})).SkillList;return(0,m.jsxs)("section",{className:"section",children:[(0,m.jsxs)("h2",{className:"title title--h2",children:[(0,m.jsx)("img",{className:"title-icon",src:D,alt:"SkillsIcon"}),"Skills"]}),e&&e.map((function(e){return(0,m.jsx)("div",{className:"box-gray",style:{padding:"1rem 1.875rem"},children:(0,m.jsxs)("div",{className:"progress",children:[(0,m.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:(null===e||void 0===e?void 0:e.Percentage)+"%",zIndex:2},children:(0,m.jsxs)("div",{className:"progress-text",children:[(0,m.jsx)("span",{children:null===e||void 0===e?void 0:e.Name}),(0,m.jsxs)("span",{children:[null===e||void 0===e?void 0:e.Percentage,"%"]})]})}),(0,m.jsx)("div",{className:"progress-text",children:(0,m.jsx)("span",{children:null===e||void 0===e?void 0:e.Name})})]})})}))]})},R=function(){return(0,m.jsxs)("div",{className:"wrapper sticky-parent",children:[(0,m.jsx)(b.Z,{}),(0,m.jsxs)("div",{className:"content",children:[(0,m.jsx)("div",{className:"section mt-0",children:(0,m.jsx)("h1",{className:"title title--h1 title__separate",children:"Resume"})}),(0,m.jsx)(x,{}),(0,m.jsx)(N,{}),(0,m.jsx)(E,{})]})]})}},9639:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(2791),a=n(9434),s=n(4165),i=n(5861),c=n(5671),o=n(3144),u=n(655),l=n(783),d=n(9384),p=n(6331),f=n(2507),h=function(){function e(){(0,c.Z)(this,e)}return(0,o.Z)(e,null,[{key:"UserDetails",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.getRequest("/admin/SelectUser/devoloper.sujon@gmail.com");case 2:if(t=e.sent,!(n=t.data)){e.next=7;break}return u.Z.dispatch((0,p.Ky)(null===n||void 0===n?void 0:n[0])),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"UserUpdate",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.updateRequest("/user/UserUpdate",t);case 2:if(n=e.sent,!(r=n.data)){e.next=7;break}return d.Z.successMessage(r.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"UserChecgePassword",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.putRequest("/user/UserChangePassword",t);case 2:if(n=e.sent,!(r=n.data)){e.next=7;break}return d.Z.successMessage(r.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"SendRecoveryOtp",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.getRequest("/User/SendRecoveryOtp/".concat(t));case 2:if(n=e.sent,!(r=n.data)){e.next=8;break}return f.Z.setOtpEmail(t),d.Z.successMessage(r.message),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"VerifyRecoveryOtp",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.getRequest("/User/VerifyRecoveryOtp/".concat(f.Z.getOtpEmail(),"/").concat(t));case 2:n=e.sent,(r=n.data)&&(f.Z.setOtpCode(t),d.Z.successMessage(r.message));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"RecoveryResetPass",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.postRequest("/User/RecoveryResetPass/".concat(f.Z.getOtpEmail(),"/").concat(f.Z.getOtpCode()),t);case 2:if(n=e.sent,!(r=n.data)){e.next=7;break}return d.Z.successMessage(r.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=h,m=n(3257),x=n(184),Z=function(){(0,r.useEffect)((function(){v.UserDetails()}),[]);var e=(0,a.v9)((function(e){return e.Profile})).user;return(0,x.jsx)("aside",{className:"sidebar",children:(0,x.jsxs)("div",{className:"sticky-column is_stuck",style:{position:"fixed",top:"-24.531px",width:"200px"},children:[(0,x.jsx)("div",{className:"avatar-wrap",children:(0,x.jsx)("svg",{className:"avatar avatar--180",viewBox:"0 0 188 188",children:(0,x.jsx)("g",{className:"avatar__box",children:(0,x.jsx)("image",{xlinkHref:null===e||void 0===e?void 0:e.Image,height:"100%",width:"100%"})})})}),(0,x.jsxs)("div",{className:"text-center",children:[(0,x.jsx)("h3",{className:"title sidebar__user-name",children:(0,x.jsxs)("span",{className:"weight--500",children:[" ",(0,m.Z)(null===e||void 0===e?void 0:e.Name)," "]})}),(0,x.jsx)("div",{className:"badge badge--gray",children:(0,m.Z)(null===e||void 0===e?void 0:e.Post)}),(0,x.jsxs)("div",{className:"social",children:[(0,x.jsx)("a",{className:"social__link",href:null===e||void 0===e?void 0:e.Github,target:"_blank",children:(0,x.jsx)("i",{className:"font-icon icon-github"})}),(0,x.jsx)("a",{className:"social__link",href:null===e||void 0===e?void 0:e.Linkedin,target:"_blank",children:(0,x.jsx)("i",{className:"font-icon icon-linkedin2"})}),(0,x.jsx)("a",{className:"social__link",href:null===e||void 0===e?void 0:e.Twitter,target:"_blank",children:(0,x.jsx)("i",{className:"font-icon icon-twitter"})}),(0,x.jsx)("a",{className:"social__link",href:null===e||void 0===e?void 0:e.Facebook,target:"_blank",children:(0,x.jsx)("i",{className:"font-icon icon-facebook"})})]})]}),(0,x.jsxs)("ul",{className:"contact-block",children:[(0,x.jsxs)("li",{className:"contact-block__item","data-toggle":"tooltip","data-placement":"top",title:!0,"data-original-title":"Birthday",children:[(0,x.jsx)("i",{className:"font-icon icon-calendar2"}),null===e||void 0===e?void 0:e.Birthday]}),(0,x.jsxs)("li",{className:"contact-block__item","data-toggle":"tooltip","data-placement":"top",title:!0,"data-original-title":"Address",children:[(0,x.jsx)("i",{className:"font-icon icon-map-pin"}),(0,m.Z)(null===e||void 0===e?void 0:e.Address)]}),(0,x.jsx)("li",{className:"contact-block__item","data-toggle":"tooltip","data-placement":"top",title:!0,"data-original-title":"E-mail",children:(0,x.jsxs)("a",{href:"mailto:devoloper.sujon@gmail",children:[(0,x.jsx)("i",{className:"font-icon icon-mail"}),null===e||void 0===e?void 0:e.Email]})}),(0,x.jsxs)("li",{className:"contact-block__item","data-toggle":"tooltip","data-placement":"top",title:!0,"data-original-title":"Phone",children:[(0,x.jsx)("i",{className:"font-icon icon-smartphone"}),(0,x.jsx)("a",{href:"tel:".concat(null===e||void 0===e?void 0:e.Phone),children:null===e||void 0===e?void 0:e.Phone})]})]}),(0,x.jsxs)("a",{className:"btn",href:null===e||void 0===e?void 0:e.Cv,target:"_blank",children:[(0,x.jsx)("i",{className:"font-icon icon-download"})," Download CV",(0,x.jsx)("span",{style:{top:"-5.625px",left:"109.5px"}})]})]})})}},3257:function(e,t,n){var r=n(3540);t.Z=function(e){return(0,r.ZP)("".concat(e))}},9384:function(e,t,n){var r=n(5671),a=n(3144),s=n(6960),i=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"successMessage",value:function(e){return s.Z.success(e,{position:"bottom-center"})}},{key:"errorMessage",value:function(e){return s.Z.error(e,{position:"bottom-center"})}}]),e}();t.Z=i}}]);
//# sourceMappingURL=566.431336e1.chunk.js.map