"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[93],{9396:function(n,t,e){e.d(t,{Df:function(){return o},TP:function(){return p},tx:function(){return l},vW:function(){return s},zv:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="a542711b10b0d1e187ab79449890246f",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/trending/movie/day?api_key=".concat(i));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.toJSON());case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.toJSON());case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.toJSON());case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.toJSON());case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.toJSON());case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},7093:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return _}});var r,a,c,u,i,o=e(5861),s=e(9439),p=e(4687),f=e.n(p),l=e(7689),h=e(2791),v=e(5264),d=e(9396),g=e(9044),m=e(168),w=e(6088),Z=w.Z.ul(r||(r=(0,m.Z)(["\n  list-style-type: none;\n"]))),x=w.Z.li(a||(a=(0,m.Z)(["\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(2.5)})),b=w.Z.p(c||(c=(0,m.Z)(["\n  font-weight: 600;\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.fontSizes.mediumX}),(function(n){return n.theme.spacing(2.5)})),y=w.Z.p(u||(u=(0,m.Z)(["\n  font-size: ",";\n"])),(function(n){return n.theme.fontSizes.medium})),k=w.Z.img(i||(i=(0,m.Z)(["\n  width: ",";\n"])),(function(n){return n.theme.spacing(37.5)})),S=e(184);function _(){var n=(0,l.UO)().movieId,t=(0,h.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1],c=(0,h.useState)(!1),u=(0,s.Z)(c,2),i=u[0],p=u[1],m=(0,h.useState)(null),w=(0,s.Z)(m,2)[1];return(0,h.useEffect)((function(){function t(){return(t=(0,o.Z)(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,p(!0),t.next=4,(0,d.zv)(n);case 4:e=t.sent,a(e),w(null),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),v.Notify.failure("Oops, something went wrong. Please try again.");case 12:return t.prev=12,p(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,S.jsxs)(S.Fragment,{children:[i&&(0,S.jsx)(g.R,{}),(0,S.jsx)(Z,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,a=n.name,c=n.character;return(0,S.jsxs)(x,{children:[(0,S.jsx)(k,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available.jpg",alt:r}),(0,S.jsx)(b,{children:a}),(0,S.jsxs)(y,{children:["Character: ",c]})]},t)}))}),0===r.length&&(0,S.jsx)("div",{children:"Sorry, there is no information about the actors."})]})}},9044:function(n,t,e){e.d(t,{R:function(){return o}});e(2791);var r,a=e(5243),c=e(168),u=e(6088).Z.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n"]))),i=e(184);function o(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.g4,{height:"80",width:"80",radius:"9",color:"#00BFFF",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}}}]);
//# sourceMappingURL=93.1f8e7321.chunk.js.map