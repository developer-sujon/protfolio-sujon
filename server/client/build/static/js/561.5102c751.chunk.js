"use strict";(self.webpackChunkappname=self.webpackChunkappname||[]).push([[561],{783:function(e,t,n){var r=n(4165),u=n(5861),a=n(5671),s=n(3144),c=n(4569),i=n.n(c),o=n(2507),l=n(9384),p=n(4500),f=n(6877),d=n(6331),Z=n(5202);function h(){i().defaults.headers.common.Authorization="Bearer "+o.Z.getToken()}i().defaults.baseURL="/api/v1",i().defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var v=function(e){return Z.Z.dispatch((0,f.zy)()),e},k=function(e){return Z.Z.dispatch((0,f.zy)()),500===e.response.status?l.Z.errorMessage("Sorry, Something went wrong"):401===e.response.status?(l.Z.errorMessage(e.response.data.message),Z.Z.dispatch((0,p.hf)()),Z.Z.dispatch((0,d.c1)())):l.Z.errorMessage(e.response.data.message),!1},m=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"getRequest",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z.Z.dispatch((0,f.Pl)()),e.next=3,i().get(t,h()).then((function(e){return v(e)})).catch((function(e){return k(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"postRequest",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z.Z.dispatch((0,f.Pl)()),e.next=3,i().post(t,n,h()).then((function(e){return v(e)})).catch((function(e){return Z.Z.dispatch((0,f.zy)()),k(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateRequest",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z.Z.dispatch((0,f.Pl)()),e.next=3,i().patch(t,n,h()).then((function(e){return v(e)})).catch((function(e){return k(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"putRequest",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z.Z.dispatch((0,f.Pl)()),e.next=3,i().put(t,n,h()).then((function(e){return v(e)})).catch((function(e){return k(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteRequest",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z.Z.dispatch((0,f.Pl)()),e.next=3,i().delete(t,h()).then((function(e){return v(e)})).catch((function(e){return k(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=m},2273:function(e,t,n){var r=n(4165),u=n(5861),a=n(5671),s=n(3144),c=n(5202),i=n(783),o=n(9384),l=n(4542),p=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"SkillList",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n,u){var a,s,o,p,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.getRequest("/Skill/SkillList/".concat(t,"/").concat(n,"/").concat(u));case 2:if(a=e.sent,!(s=a.data)){e.next=8;break}return c.Z.dispatch((0,l.m4)(null===(o=s[0])||void 0===o?void 0:o.Data)),c.Z.dispatch((0,l.TP)(null===(p=s[0])||void 0===p||null===(f=p.Total[0])||void 0===f?void 0:f.count)),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"SkillSingle",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){var n,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.getRequest("/Skill/SkillSingle/".concat(t));case 2:if(n=e.sent,!(u=n.data)){e.next=7;break}return c.Z.dispatch((0,l._m)(null===u||void 0===u?void 0:u[0])),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"SkillCreate",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){var n,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.postRequest("/Skill/SkillCreate",t);case 2:return n=e.sent,(u=n.data)&&o.Z.successMessage(u.message),e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"SkillUpdate",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n){var u,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.updateRequest("/Skill/SkillUpdate/".concat(t),n);case 2:if(u=e.sent,!(a=u.data)){e.next=7;break}return o.Z.successMessage(a.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"SkillDelete",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.deleteRequest("/Skill/SkillDelete/".concat(t));case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=p},3561:function(e,t,n){n.r(t);var r=n(2791),u=n(7022),a=n(9743),s=n(2677),c=n(2144),i=n(3855),o=n(6157),l=n(9434),p=n(6871),f=n(557),d=n(9384),Z=n(2273),h=n(184);t.default=function(){var e=(0,p.UO)().id;(0,r.useEffect)((function(){Z.Z.SkillSingle(e)}),[e]);var t,n=(0,p.s0)(),v=(0,l.v9)((function(e){return e.Skill})).Skill,k=(0,r.useRef)();return(0,h.jsx)(u.Z,{fluid:!0,children:(0,h.jsx)(a.Z,{className:"justify-content-center",children:(0,h.jsx)(s.Z,{children:(0,h.jsx)(c.Z,{className:"w-90",children:(0,h.jsxs)(c.Z.Body,{children:[(0,h.jsx)("h4",{children:"Update Skill"}),(0,h.jsx)("hr",{}),(0,h.jsx)(i.Z,{onSubmit:function(r){var u=t.value,a=k.value;r.preventDefault(),f.Z.isEmpty(u)?d.Z.errorMessage("Skill Name is Required"):f.Z.isEmpty(a)?d.Z.errorMessage("Skill Percentage is Required"):Z.Z.SkillUpdate(e,{Name:u,Percentage:a}).then((function(e){e&&n("/Skill-list")}))},children:(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(s.Z,{md:4,className:"p-2",children:(0,h.jsxs)(i.Z.Group,{controlId:"Name",children:[(0,h.jsx)(i.Z.Label,{children:"Skill Name"}),(0,h.jsx)(i.Z.Control,{defaultValue:null===v||void 0===v?void 0:v.Name,ref:function(e){return t=e},placeholder:"Skill Name",className:"form-control animated fadeInUp",type:"text"},Date.now())]})}),(0,h.jsx)(s.Z,{md:4,className:"p-2",children:(0,h.jsxs)(i.Z.Group,{children:[(0,h.jsx)(i.Z.Label,{children:"Skill Percentage"}),(0,h.jsx)(i.Z.Control,{defaultValue:null===v||void 0===v?void 0:v.Percentage,ref:function(e){return k=e},className:"form-control animated fadeInUp",type:"number"},Date.now())]})}),(0,h.jsx)(s.Z,{className:"p-2",children:(0,h.jsx)(o.Z,{type:"submit",variant:"success",className:"w-100 animated fadeInUp float-end mb-0 mt-4",children:"Update"})})]})})]})})})})})}},557:function(e,t,n){var r=n(5671),u=n(3144),a=function(){function e(){(0,r.Z)(this,e)}return(0,u.Z)(e,null,[{key:"isEmpty",value:function(e){return e.length<=0}},{key:"isEmail",value:function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}},{key:"isMobile",value:function(e){return/(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/.test(e)}}]),e}();t.Z=a},9384:function(e,t,n){var r=n(5671),u=n(3144),a=n(6960),s=function(){function e(){(0,r.Z)(this,e)}return(0,u.Z)(e,null,[{key:"successMessage",value:function(e){return a.Z.success(e,{position:"bottom-center"})}},{key:"errorMessage",value:function(e){return a.Z.error(e,{position:"bottom-center"})}}]),e}();t.Z=s}}]);
//# sourceMappingURL=561.5102c751.chunk.js.map