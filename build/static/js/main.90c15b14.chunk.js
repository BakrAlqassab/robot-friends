(this["webpackJsonprobot-friends"]=this["webpackJsonprobot-friends"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),i=n.n(s),o=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))}),a=(n(13),n(2)),h=n(3),l=n(5),b=n(4),j=(n(14),n(0));var d=function(e){var t=e.id,n=e.name,r=e.email;return Object(j.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200*200")}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:n}),Object(j.jsx)("p",{children:r})]})]})};var u=function(e){var t=e.robots,n=t.map((function(e,n){return Object(j.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}));return Object(j.jsx)("div",{children:n})};var O=function(e){var t=e.searchChange;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})};var f=function(e){return Object(j.jsx)("div",{style:{overflowY:"scroll",border:"3px solid black",height:"565px"},children:e.children})},v=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:" Ooops Someting went Wring"}),Object(j.jsx)("img",{alt:"robots",style:{width:"35rem",height:"32rem"},src:"error.png"})]}):this.props.children}}]),n}(r.Component),g=(n(16),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)("h1",{className:"f1",children:"Robot Friends"}),Object(j.jsx)(O,{searchChange:this.onSearchChange}),Object(j.jsx)(f,{children:Object(j.jsxs)(v,{children:[Object(j.jsx)(u,{robots:r}),";"]})})]}):Object(j.jsx)("h1",{children:" Loading ...."})}}]),n}(r.Component));i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)("div",{children:Object(j.jsx)(g,{})})}),document.getElementById("root")),o()}},[[17,1,2]]]);
//# sourceMappingURL=main.90c15b14.chunk.js.map