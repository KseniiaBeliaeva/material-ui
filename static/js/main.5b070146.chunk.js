(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){e.exports=a(342)},342:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(15),l=a.n(i),c=a(120),s=a(114),o=a(115),u=a(116),m=a(121),h=a(117),p=a(122),d=a(16),f=a(17),b=a(119),E=a.n(b),v=Object(d.withStyles)({root:{margin:"50px auto",padding:"50px",maxWidth:400},form:{display:"flex",alignItems:"baseline",justifyContent:"space-evenly"}})(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",exercises:[]},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;return a.setState(Object(s.a)({},n,r))},a.handleCreate=function(e){e.preventDefault(),a.state.title&&a.setState(function(e){var t=e.exercises,a=e.title;return{exercises:[].concat(Object(c.a)(t),[{title:a,id:Date.now()}]),title:""}})},a.handleDelete=function(e){return a.setState(function(t){return{exercises:t.exercises.filter(function(t){return t.id!==e})}})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.exercises,i=this.props.classes;return r.a.createElement(f.g,{className:i.root},r.a.createElement(f.i,{variant:"display3",align:"center"},"Exercises"),r.a.createElement("form",{onSubmit:this.handleCreate,className:i.form},r.a.createElement(f.h,{name:"title",label:"Exercises",value:a,onChange:this.handleChange,margin:"normal"}),r.a.createElement(f.a,{type:"submit",color:"primary",variant:"contained"},"Create")),r.a.createElement(f.c,null,n.map(function(t){var a=t.id,n=t.title;return r.a.createElement(f.d,{key:a},r.a.createElement(f.f,{primary:n}),r.a.createElement(f.e,null,r.a.createElement(f.b,{color:"primary",onClick:function(){return e.handleDelete(a)}},r.a.createElement(E.a,null))))})))}}]),t}(n.Component)),y=a(38),g=Object(d.createMuiTheme)({palette:{primary:y.orange}});l.a.render(r.a.createElement(d.MuiThemeProvider,{theme:g},r.a.createElement(v,null)),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.5b070146.chunk.js.map