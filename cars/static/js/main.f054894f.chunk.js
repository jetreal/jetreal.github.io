(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports={road:"road_road__2NGgH",lines:"road_lines__1xLvH",car:"road_car__35mJW",carName:"road_carName__1NIQK",finishLine:"road_finishLine__1CZBv"}},36:function(e,t,n){e.exports={"App-header":"header_App-header__29yGB"}},37:function(e,t,n){},39:function(e,t,n){e.exports={results:"results_results__RQbf_"}},41:function(e,t,n){e.exports=n(72)},46:function(e,t,n){},47:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(19),o=n.n(i),c=(n(46),n(47),n(14)),s=n(8),u=n(40),l=n(27),m=n(6),p="START_RACE",d="END_RACE",f="SET_STATE",h="CHANGE_POSITION",b={items:[{image:"bus"},{image:"bus"}],config:{image_path:"/rcrtng/tasks/cars",image_ext:"png"},buttonNames:{start:"start",again:"again"},started:!1},v=Object(s.c)({road:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var n=Object(m.a)({},e,t.data);return n.started=!0,Object(m.a)({},n);case h:var a=Object(m.a)({},e,t.data);return a.items=Object(l.a)(e.items),a.started=Object(m.a)({},e.started),a.items[0].coord<=1e3?(a.items[0].coord+=10,Object(m.a)({},a)):(a.items[0].isFinished=!0,a.started=!1,Object(m.a)({},a));case d:var r=Object(m.a)({},e,t.data);return r.items=Object(l.a)(e.items),r.items[0].coord=0,r.items[0].isFinished=!1,Object(m.a)({},r,r.items[0].coord);case f:var i=Object(m.a)({},e,t.data);return i.items.map(function(e,t){return e.coord=0,e.isFinished=!1,!1}),i;default:return e}}}),_=n(10),O=n.n(_),E=n(22),g=O.a.mark(k),j=O.a.mark(w),N=O.a.mark(C);function k(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.b)({type:h});case 2:case"end":return e.stop()}},g)}function w(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.c)(p,k);case 2:case"end":return e.stop()}},j)}function C(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([w()]);case 2:case"end":return e.stop()}},N)}var y=Object(u.a)(),x=Object(s.e)(v,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(s.a)(y));x.subscribe(function(){});y.run(C);var I=n(11),A=n(12),S=n(15),T=n(13),R=n(16),D=n(36),L=n.n(D),P=n(37),W=n.n(P),B=function(e){return r.a.createElement("button",{className:W.a.btn,onClick:e.handleClick},e.buttonName)},M=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(S.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).run=function(){n.idInt=setInterval(function(){n.props.onChangePosition(),n.props.road[0].coord>1e3&&(clearInterval(n.idInt),n.props.onAgainClick())},1e3)},n}return Object(R.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:L.a["App-header"]},r.a.createElement(B,{handleClick:this.run,buttonName:this.props.buttonNames.start}),r.a.createElement(B,{handleClick:this.props.onAgainClick,buttonName:this.props.buttonNames.again}),r.a.createElement("p",null,"Car Race"))}}]),t}(r.a.Component);function U(e){return{type:p,isMove:e}}function X(e){return{type:d,idInt:e}}function F(){return{type:h}}var G=Object(c.b)(function(e){return{buttonNames:e.road.buttonNames,road:e.road.items}},function(e){return{onStartClick:function(){e(U())},onAgainClick:function(t){e(X(t))},onChangePosition:function(){e(F())}}})(M),H=n(38),J=n(17),Q=n.n(J),V=function(e){function t(){return Object(I.a)(this,t),Object(S.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Q.a.road},r.a.createElement("div",{className:Q.a.finishLine}),r.a.createElement("div",{className:Q.a.car,style:{left:this.props.coord},onChange:this.props.onChangePosition},r.a.createElement("img",{src:"http://we.pena-app.ru"+this.props.image_path+"/"+this.props.name+"."+this.props.image_ext,alt:""})),r.a.createElement("div",{className:Q.a.lines},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",{className:Q.a.carName},r.a.createElement("p",null,this.props.name)),r.a.createElement("div",null),r.a.createElement("div",null)))}}]),t}(r.a.Component),K=n(39),Z=n.n(K),$=function(e){return r.a.createElement("div",{className:Z.a.results})},q=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(S.a)(this,Object(T.a)(t).call(this,e))).state={isMove:!0},n}return Object(R.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.idInt)}},{key:"componentWillMount",value:function(){var e=this;H.get("http://we.pena-app.ru/rcrtng/api/cars/").then(function(t){e.props.setInitialState(t.data)})}},{key:"renderRoads",value:function(){var e=this;return this.props.road.items.map(function(t,n){return r.a.createElement(V,{key:n,name:t.image,image_path:e.props.road.config.image_path,image_ext:e.props.road.config.image_ext,coord:t.coord})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderRoads(),r.a.createElement($,null))}}]),t}(r.a.Component),z=Object(c.b)(function(e){return{road:e.road}},function(e){return{setInitialState:function(t){e(function(e){return{type:f,data:e}}(t))},onChangePosition:function(){e(F())},onStartClick:function(t){e(U(t))},onAgainClick:function(t){e(X(t))}}})(q),Y=x;var ee=function(){return r.a.createElement(c.a,{store:Y},r.a.createElement("div",{className:"App"},r.a.createElement(G,null),r.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.f054894f.chunk.js.map