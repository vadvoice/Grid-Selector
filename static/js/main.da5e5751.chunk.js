(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),i=n.n(r),d=(n(14),n(6)),o=n(4),s=n(8),u=n(9),x=(n(15),n(0)),l=[],j=function(e){var t=e.cellData,n=Object(u.a)(e,["cellData"]),c=t.active?{background:"#04D4F0"}:{};return Object(x.jsx)("div",Object(s.a)({style:c},n))};function f(){var e="Grid-row-cell",t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=Object(c.useState)({rowIndex:0,idx:0,active:!1}),a=Object(o.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(!1),u=Object(o.a)(s,2),f=u[0],v=u[1],b=Object(c.useState)(t.map((function(e,t){return function(e){var t=e.columnAmount,n=void 0===t?10:t,c=e.rowIdx,a=void 0===c?0:c;return Array(n).fill().map((function(e,t){return{rowIndex:a,idx:t,active:!1}}))}({columnAmount:12,rowIdx:t})}))),w=Object(o.a)(b,2),h=w[0],O=w[1],p=Object(c.useRef)(),m=Object(c.useRef)();return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("div",{className:"Grid",ref:m,onMouseMove:function(e){f&&l.includes("MOUSE_TRACK")&&function(e,t,n,c){e>n&&(n=e+n,n-=e=n-e,c=t+c,c-=t=c-t);var a=Math.sqrt(Math.pow(n-e,2)+Math.pow(c-t,2)),r=180*Math.atan((c-t)/(n-e))/Math.PI;p.current.style.top=t+"px",p.current.style.left=e+"px",p.current.style.transform="rotate(".concat(r,"deg)"),p.current.style.width="".concat(a,"px")}(30*r.idx,30*r.rowIndex,e.clientX-10,e.clientY-100)},children:[Object(x.jsx)("div",{className:"Grid-cursor-straight",style:{display:f?"block":"none"},ref:p}),Object(x.jsxs)("header",{className:"Grid-header",children:[Object(x.jsx)("div",{className:"Grid-header-weekdayBlank"}),Array(12).fill().map((function(e,t){return Object(x.jsx)("div",{className:"Grid-header-timecell",children:t+1},"timeslot-".concat(t))}))]}),h.map((function(n,c){return Object(x.jsxs)("div",{className:"Grid-row",children:[Object(x.jsx)("div",{className:"Grid-row-weekday",children:t[c]}),n.map((function(t){return Object(x.jsx)(j,{className:e,cellData:t,onMouseDown:function(e){return function(e,t){var n=t.rowIndex,c=t.idx,a=t.active,r=Object(d.a)(h),o=r[n],s=o[c];s.active=!s.active,r.splice(n,1,o),i({rowIndex:n,idx:c,active:!a}),O(r),l.includes("MOUSE_TRACK")&&v(!0)}(0,t)},onMouseUp:function(n){return function(t,n){if(t.target.className===e){var c=!!r.active,a=Object(d.a)(h),i=n.rowIndex-r.rowIndex;a.forEach((function(e,t){e.forEach((function(e){i>=0&&(t>=r.rowIndex&&t<=n.rowIndex&&e.idx>=r.idx&&e.idx<=n.idx||r.rowIndex<=t&&n.rowIndex>=t&&r.idx>=e.idx&&n.idx<=e.idx)&&(e.active=c),i<0&&(t>=n.rowIndex&&t<=r.rowIndex&&e.idx>=n.idx&&e.idx<=r.idx||r.rowIndex>=t&&n.rowIndex<=t&&r.idx<=e.idx&&n.idx>=e.idx)&&(e.active=c)}))})),O(a),v(!1)}}(n,t)}},"".concat(t.rowIndex,"_").concat(t.idx))}))]},c)}))]})})}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.da5e5751.chunk.js.map