(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/loading.e41ef816.gif"},16:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(7),r=c.n(n),s=c(2),i=c(3),l=c(5),u=c(0),o=function(e){var t=e.setplace,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),c=Object(s.a)(t,2),n=c[0],r=c[1],u=function(e){var t=e.target;r(Object(l.a)(Object(l.a)({},n),{},Object(i.a)({},t.name,t.value)))};return[n,u,function(){r(e)}]}({place:""}),n=Object(s.a)(c,3),r=n[0].place,o=n[1],d=n[2];return Object(u.jsx)("div",{children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),t((function(){return r})),d()},children:Object(u.jsxs)("div",{className:"flex md:flex-row flex-col justify-around",children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",name:"place",value:r,onChange:o,placeholder:"Ingresa un lugar",className:"w-96 outline-none bg-gray-100 text-center rounded-md py-2 mt-2"})}),Object(u.jsx)("div",{className:"text-white md:mx-2",children:Object(u.jsx)("button",{type:"submit",className:"w-full bg-green-500  rounded-md py-2 px-3 mt-2 mr-2",children:"Aceptar"})})]})})})},d=c(6),j=c.n(d),m=c(8),x=function(){var e=Object(m.a)(j.a.mark((function e(t){var c,a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/api.weatherstack.com/current?access_key=757b249e342efe42f0446d92194588fe&query=".concat(t||"Mexico"));case 2:return c=e.sent,e.next=5,c.json();case 5:return a=e.sent,n=a.location,r=a.current,e.abrupt("return",{location:n.name,temperature:r.temperature,image:r.weather_icons[0],description:r.weather_descriptions[0]});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=c(15).default,b=function(e){var t=function(e){var t=Object(a.useState)({loading:!0,data:{}}),c=Object(s.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){r({loading:!0,data:{}}),x(e).then((function(e){r({loading:!1,data:e})}))}),[e]),n}(e.place),c=t.data,n=t.loading;return Object(u.jsxs)("div",{children:[n&&Object(u.jsx)("img",{className:"img-fluid mx-auto",src:p,alt:""}),Object(u.jsxs)("div",{className:"py-5 text-center text-white",children:[Object(u.jsx)("h1",{className:"text-6xl",children:c.location}),Object(u.jsxs)("div",{className:"flex flex-row justify-center items-center",children:[Object(u.jsx)("h1",{className:"text-7xl my-5 mx-4",children:null!=c.temperature?"".concat(c.temperature,"\xb0"):""}),Object(u.jsx)("img",{src:c.image,alt:""})]}),Object(u.jsx)("p",{className:"text-2xl text-gray-200",children:c.description})]})]})},f=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(u.jsx)("div",{className:"w-full ",children:Object(u.jsx)("div",{className:"bg-blue-600  h-screen flex flex-column items-center",children:Object(u.jsxs)("div",{className:"container-fluid mx-auto ",children:[Object(u.jsx)(o,{setplace:n}),Object(u.jsx)(b,{place:c})]})})})};r.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.36cb84c8.chunk.js.map