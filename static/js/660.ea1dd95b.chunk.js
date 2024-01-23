"use strict";(self.webpackChunkfrontend_water=self.webpackChunkfrontend_water||[]).push([[660],{3660:function(e,s,r){r.r(s),r.d(s,{default:function(){return g}});var a=r(5861),n=r(9439),i=r(4687),t=r.n(i),o=r(2791),d=r(4420),l=r(7689),c=r(5705),u=r(2969),p=r(8007),h=p.Ry().shape({email:p.Z_().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"Invalid email address").required("Email is required"),password:p.Z_().matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,"Password must include letters and numbers").min(8,"Password is too short").max(64,"Password is too long").required("Password is required"),repeatPassword:p.Z_().oneOf([p.iH("password"),null],"Passwords must match").required("Repeat password is required")}),w=r(9365),x=r(6351),m=r(9717),j=r(184),f={email:"",password:"",repeatPassword:""},v=function(){var e=(0,d.v9)(x.xU),s=(0,o.useState)(!1),r=(0,n.Z)(s,2),i=r[0],p=r[1],v=(0,o.useState)(!1),g=(0,n.Z)(v,2),P=g[0],y=g[1],E=(0,l.s0)(),k=(0,d.I0)(),Z=function(){var e=(0,a.Z)(t().mark((function e(s,r){var a,n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.setSubmitting,e.prev=1,e.next=4,k((0,m.rv)({email:s.email,password:s.password}));case 4:(n=e.sent).payload?setTimeout((function(){n.payload.successful&&E("/signin")}),3e3):console.error("Error during login:",n.error),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error during login:",e.t0);case 11:return e.prev=11,a(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(s,r){return e.apply(this,arguments)}}(),_=function(e){"password"===e?p(!i):"repeatPassword"===e&&y(!P)};return(0,j.jsx)(w.Ar,{className:"static-background",children:(0,j.jsx)(w.Aq,{children:(0,j.jsx)(w.B5,{children:(0,j.jsx)(w.hj,{children:(0,j.jsx)(c.J9,{initialValues:f,validationSchema:h,onSubmit:Z,children:function(s){var r=s.isSubmitting,a=s.errors,n=s.touched,t=s.values;return(0,j.jsxs)(w.bS,{children:[(0,j.jsx)(w.Dx,{children:"Sign Up"}),(0,j.jsxs)(w.kR,{children:[(0,j.jsx)(w.__,{htmlFor:"email",children:"Enter your email"}),(0,j.jsx)(c.gN,{as:w.II,type:"email",name:"email",placeholder:"E-mail",$hasError:n.email&&a.email,value:t.email,required:!0}),(0,j.jsx)(c.Bc,{name:"email",component:w.a9})]}),(0,j.jsxs)(w.kR,{children:[(0,j.jsx)(w.__,{htmlFor:"password",children:"Enter your password"}),(0,j.jsxs)(w.fv,{children:[(0,j.jsx)(c.gN,{as:w.II,type:i?"text":"password",name:"password",placeholder:"Password",$hasError:n.password&&a.password,value:t.password,required:!0}),(0,j.jsx)("span",{onClick:function(){return _("password")},children:i?(0,j.jsx)(w.tE,{children:(0,j.jsx)("svg",{children:(0,j.jsx)("use",{href:u.Z+"#icon-eye"})})}):(0,j.jsx)(w.tE,{children:(0,j.jsx)("svg",{children:(0,j.jsx)("use",{href:u.Z+"#icon-eye-slash"})})})})]}),(0,j.jsx)(c.Bc,{name:"password",component:w.a9})]}),(0,j.jsxs)(w.kR,{children:[(0,j.jsx)(w.__,{htmlFor:"repeatPassword",children:"Repeat password"}),(0,j.jsxs)(w.fv,{children:[(0,j.jsx)(c.gN,{as:w.II,type:P?"text":"password",name:"repeatPassword",placeholder:"Repeat password",$hasError:n.repeatPassword&&a.repeatPassword,value:t.repeatPassword,required:!0}),(0,j.jsx)("span",{onClick:function(){return _("repeatPassword")},children:P?(0,j.jsx)(w.tE,{children:(0,j.jsx)("svg",{children:(0,j.jsx)("use",{href:u.Z+"#icon-eye"})})}):(0,j.jsx)(w.tE,{children:(0,j.jsx)("svg",{children:(0,j.jsx)("use",{href:u.Z+"#icon-eye-slash"})})})})]}),(0,j.jsx)(c.Bc,{name:"repeatPassword",component:w.a9})]}),(0,j.jsx)(w.$d,{type:"submit",disabled:r||e,children:"Sign Up"}),(0,j.jsx)(w.H_,{to:"/signin",children:"Sign in"})]})}})})})})})};function g(){return(0,j.jsx)(v,{})}}}]);
//# sourceMappingURL=660.ea1dd95b.chunk.js.map