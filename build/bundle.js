!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(u,o){try{var a=t[u](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAdmins=t.FETCH_ADMINS=t.fetchCurrentUser=t.FETCH_CURRENT_USER=t.fetchUsers=t.FETCH_USERS=void 0,n(15);var u=t.FETCH_USERS="fetch_users",o=(t.fetchUsers=function(){return function(){var e=r(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/users");case 2:o=e.sent,t({type:u,payload:o});case 4:case"end":return e.stop()}},e,void 0)}));return function(t,n,r){return e.apply(this,arguments)}}()},t.FETCH_CURRENT_USER="fetch_current_user"),a=(t.fetchCurrentUser=function(){return function(){var e=r(regeneratorRuntime.mark(function e(t,n,r){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/current_user");case 2:u=e.sent,t({type:o,payload:u});case 4:case"end":return e.stop()}},e,void 0)}));return function(t,n,r){return e.apply(this,arguments)}}()},t.FETCH_ADMINS="fetch_admins");t.fetchAdmins=function(){return function(){var e=r(regeneratorRuntime.mark(function e(t,n,r){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/admins");case 2:u=e.sent,t({type:a,payload:u});case 4:case"end":return e.stop()}},e,void 0)}));return function(t,n,r){return e.apply(this,arguments)}}()}},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(14),a=r(o),i=n(17),l=r(i),c=n(18),s=r(c),f=n(19),d=r(f),p=n(21),h=r(p);t.default=[u({},a.default,{routes:[u({},l.default,{path:"/",exact:!0}),u({},s.default,{path:"/users"}),u({},d.default,{path:"/admins"}),u({},h.default)]})]},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(9),o=r(u),a=n(4),i=n(10),l=r(i),c=n(11),s=r(c),f=n(22),d=r(f),p=n(6),h=r(p),m=(0,o.default)();m.use("/api",(0,l.default)("http://react-ssr-api.herokuapp.com",{proxyReqOptDecorator:function(e){return e.headers["x-forwarded-host"]="localhost:3000",e}})),m.use(o.default.static("public")),m.get("*",function(e,t){var n=(0,d.default)(e),r=(0,a.matchRoutes)(h.default,e.path).map(function(e){var t=e.route.loadData;return t?t(n):null}).map(function(e){return e&&new Promise(function(t){e.then(t).catch(t)})});Promise.all(r).then(function(){var r={},u=(0,s.default)(e,n,r);if(r.url)return t.redirect(302,r.url);r.notFound&&t.status(404),t.send(u)})}),m.listen(3e3,function(){console.log("Express app running on port: 3000")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("express-http-proxy")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),o=r(u),a=n(12),i=n(5),l=n(2),c=n(4),s=n(13),f=r(s),d=n(3),p=n(6),h=r(p);t.default=function(e,t,n){var r=(0,a.renderToString)(o.default.createElement(l.Provider,{store:t},o.default.createElement(i.StaticRouter,{location:e.path,context:n},o.default.createElement("div",null,(0,c.renderRoutes)(h.default))))),u=d.Helmet.renderStatic();return"\n      <html>\n        <head>\n          "+u.title.toString()+"\n          "+u.meta.toString()+'\n          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n        </head>\n        <body>\n          <div id="root">'+r+"</div>\n        </body>\n        <script>\n          window.INITIAL_STATE = "+(0,f.default)(t.getState())+'\n        <\/script>\n        <script src="bundle.js"><\/script>\n      </html>\n    '}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),o=r(u),a=n(4),i=n(1),l=n(16),c=r(l),s=function(e){var t=e.route;return o.default.createElement("div",null,o.default.createElement(c.default,null),(0,a.renderRoutes)(t.routes))};t.default={loadData:function(e){return(0,e.dispatch)((0,i.fetchCurrentUser)())},component:s}},function(e,t){e.exports=require("babel-polyfill")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n(2),a=n(5),i=function(e){var t=e.auth;return u.default.createElement("nav",null,u.default.createElement("div",{className:"nav-wrapper"},u.default.createElement(a.Link,{to:"/",className:"brand-logo"},"React SSR"),u.default.createElement("ul",{className:"right"},u.default.createElement("li",null,u.default.createElement(a.Link,{to:"/users"},"Users")),u.default.createElement("li",null,u.default.createElement(a.Link,{to:"/admins"},"Admins")),u.default.createElement("li",null,t?u.default.createElement("a",{href:"/api/logout"},"Logout"):u.default.createElement("a",{href:"/api/auth/google"},"Login")))))},l=function(e){return{auth:e.auth}};t.default=(0,o.connect)(l)(i)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),s=n(3),f=n(29),d=r(f),p={marginTop:"200px"},h=function(e){function t(){u(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={showPopup:!1},e}return a(t,e),i(t,[{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"head",value:function(){return c.default.createElement(s.Helmet,null,c.default.createElement("title",null,"React SSR"),c.default.createElement("meta",{property:"og:title",content:"React SSR"}))}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"center-align",style:p},this.head(),c.default.createElement("h3",null,"This is a Welcome page"),c.default.createElement("p",null,"Check out these awesome features."),c.default.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return e.togglePopup()}},"Press me!"),this.state.showPopup?c.default.createElement(d.default,{text:"Welcome to React SSR",closePopup:function(){return e.togglePopup()}}):null)}}]),t}(l.Component);t.default={component:h}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.loadData=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(2),s=n(3),f=n(1),d={marginTop:"60px"},p=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.users,n=e.fetchUsers;0===t.length&&n()}},{key:"renderUsers",value:function(){var e=this.props.users;return 0===e.length?l.default.createElement("h4",{className:"center-align",style:d},"Loading..."):e.map(function(e){return l.default.createElement("li",{key:e.id},e.name)})}},{key:"head",value:function(){return l.default.createElement(s.Helmet,null,l.default.createElement("title",null,this.props.users.length+" Users Listed"),l.default.createElement("meta",{property:"og:title",content:"Users' Page"}))}},{key:"render",value:function(){return l.default.createElement("div",{className:"center-align",style:d},this.head(),l.default.createElement("h5",null,"Here's a list of users:"),l.default.createElement("ul",null,this.renderUsers()))}}]),t}(i.Component),h=function(e){return{users:e.users}},m=t.loadData=function(e){return(0,e.dispatch)((0,f.fetchUsers)())};t.default={loadData:m,component:(0,c.connect)(h,{fetchUsers:f.fetchUsers})(p)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.loadData=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),s=n(2),f=n(3),d=n(1),p=n(20),h=r(p),m={marginTop:"60px"},v=function(e){function t(){return u(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.admins,n=e.fetchAdmins;0===t.length&&n()}},{key:"renderAdmins",value:function(){var e=this.props.admins;return 0===e.length?c.default.createElement("h4",{className:"center-align",style:m},"Loading..."):e.map(function(e){return c.default.createElement("li",{key:e.id},e.name)})}},{key:"head",value:function(){return c.default.createElement(f.Helmet,null,c.default.createElement("title",null,this.props.admins.length+" Admins Listed"),c.default.createElement("meta",{property:"og:title",content:"Admins' Page"}))}},{key:"render",value:function(){return c.default.createElement("div",{className:"center-align",style:m},this.head(),c.default.createElement("h5",null,"Here's the list of admins (protected):"),c.default.createElement("ul",null,this.renderAdmins()))}}]),t}(l.Component),y=function(e){return{admins:e.admins}},_=t.loadData=function(e){return(0,e.dispatch)((0,d.fetchAdmins)())};t.default={loadData:_,component:(0,s.connect)(y,{fetchAdmins:d.fetchAdmins})((0,h.default)(v))}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(2),s=n(5);t.default=function(e){var t=function(t){function n(){return r(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),a(n,[{key:"render",value:function(){switch(this.props.auth){case!1:return l.default.createElement(s.Redirect,{to:"/"});case null:return l.default.createElement("h4",null,"Loading...");default:return l.default.createElement(e,this.props)}}}]),n}(i.Component),n=function(e){return{auth:e.auth}};return(0,c.connect)(n)(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,u.default.createElement("h3",{className:"center-align"},"Oops! Route not found!!")};t.default={component:o}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),o=n(23),a=r(o),i=n(24),l=r(i),c=n(25),s=r(c);t.default=function(e){var t=l.default.create({baseURL:"http://react-ssr-api.herokuapp.com",headers:{cookie:e.get("cookie")||""}});return(0,u.createStore)(s.default,{},(0,u.applyMiddleware)(a.default.withExtraArgument(t)))}},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),o=n(26),a=r(o),i=n(27),l=r(i),c=n(28),s=r(c),f=(0,u.combineReducers)({users:a.default,auth:l.default,admins:s.default});t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=t.type,u=t.payload;switch(n){case r.FETCH_USERS:return u.data;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1],n=t.type,u=t.payload;switch(n){case r.FETCH_CURRENT_USER:return u.data||!1;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=t.type,u=t.payload;switch(n){case r.FETCH_ADMINS:return u.data;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o={outer:{position:"fixed",width:"100%",height:"100%",top:"0",left:"0",right:"0",bottom:"0",margin:"auto",backgroundColor:"rgba(0,0,0, 0.5)",zIndex:"10"},inner:{position:"absolute",left:"30%",right:"30%",top:"30%",bottom:"30%",margin:"auto",background:"#ddd",textAlign:"center",border:"2px solid #4caf50",borderRadius:"5px"},header:{margin:"60px auto 40px"}};t.default=function(e){var t=e.text,n=e.closePopup;return u.default.createElement("div",{style:o.outer},u.default.createElement("div",{style:o.inner},u.default.createElement("h4",{style:o.header},t),u.default.createElement("button",{className:"btn waves-effect waves-light",onClick:n},"Close Me")))}}]);