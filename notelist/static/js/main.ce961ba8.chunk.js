(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports={"note-list":"styles_note-list__1icKL"}},38:function(e,t,n){e.exports={"add-note":"addBtn_add-note__3EO_A"}},39:function(e,t,n){e.exports={"note-list-item":"renderNote_note-list-item__3_27D"}},40:function(e,t,n){e.exports={closeBtn:"closeBtn_closeBtn__1Gqpg"}},41:function(e,t,n){e.exports={editBtn:"editBtn_editBtn__2ctDK"}},42:function(e,t,n){e.exports={headerDiv:"header_headerDiv___YqXY"}},46:function(e,t,n){e.exports=n(81)},51:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(28),i=n.n(o),c=(n(51),n(18)),l=n(19),s=n(22),u=n(20),d=n(23),m=n(10),p=n(21),f=n(43),g=n(11),h=n(45),x=n(15),v="ADD_NOTE",E="REMOVE_ITEM",_="CHANGE_TEXT";var b=function(){try{var e=localStorage.getItem("notes");if(null===e)return;return JSON.parse(e)}catch(t){return}}()||["milk","oranges","chocolate","ice cream"],w=n(25),O="DISPLAY_ITEM_IMG";var j={works:[{_id:"1",title:"In the event of sinking",imgUrl:"url(/imgs/artworks/1.jpg)"},{_id:"2",title:"Refugees in a nutshell",imgUrl:"url(/imgs/artworks/2.jpg)"},{_id:"3",title:"Solidarity",imgUrl:"url(/imgs/artworks/3.jpg)"},{_id:"4",title:"The rehearsal",imgUrl:"url(/imgs/artworks/4.jpg)"}],numberOfClikedElements:0,show:!1},k=Object(g.c)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return null===t.text||""===t.text?e:[].concat(Object(x.a)(e.slice(0,Number(t.afterIndex)+1)),[t.text],Object(x.a)(e.slice(Number(t.afterIndex)+1)));case E:var n=Object(x.a)(e);return n.length>1&&(n=n.filter(function(e,n){return n!==Number(t.index)})),n;case _:if(null===t.valueText||""===t.valueText)return e;var a=Object(x.a)(e);return a[t.index]=t.valueText,a;default:return e}},artworks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n=Object(w.a)({},e);return n.numberOfClikedElements=[t.index],n.show=Object(w.a)({},e.show),!1===n.show&&(n.show=!0),Object(w.a)({},n);default:return e}}}),T=n(12),N=n.n(T),I=n(24),C=N.a.mark(D),y=N.a.mark(S),B=N.a.mark(R);function D(){var e,t;return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(I.b)();case 2:e=n.sent,t=JSON.stringify(e.notes),window.onbeforeunload=function(){localStorage.setItem("notes",t)},localStorage.clear();case 6:case"end":return n.stop()}},C)}function S(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)("ADD_NOTE",D);case 2:case"end":return e.stop()}},y)}function R(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([S()]);case 2:case"end":return e.stop()}},B)}var A=Object(h.a)(),X=Object(g.e)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(g.a)(A));X.subscribe(function(){!function(e){try{var t=JSON.stringify(e.notes);localStorage.setItem("notes",t)}catch(n){}}(X.getState())});A.run(R);var U=n(36),J=n.n(U),L=n(37),F=n.n(L),M=n(38),G=n.n(M),V=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{"data-index":e.index,className:G.a["add-note"],onClick:e.onAddButtonClick},"+ add note"))},Y=n(39),q=n.n(Y),K=n(40),W=n.n(K),H=function(e){return e.length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.onRemoveItem,"data-index":e.index,className:W.a.closeBtn},"X"))},P=n(41),$=n.n(P),z=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.onChangeText,"data-index":e.index,className:$.a.editBtn},"edit"))},Q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:q.a["note-list-item"]},r.a.createElement(H,{index:e.index,onRemoveItem:e.onRemoveItem,length:e.length}),e.note,r.a.createElement(z,{index:e.index,onChangeText:e.onChangeText})))},Z=n(42),ee=n.n(Z),te=function(e){return r.a.createElement("div",{className:ee.a.headerDiv},r.a.createElement("p",null,"shopping list"))},ne=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.notes),r.a.createElement("div",null,r.a.createElement(te,null),r.a.createElement("ul",{className:F.a["note-list"]},r.a.createElement(J.a,{transitionName:"fade",transitionEnterTimeout:500,transitionLeaveTimeout:500},this.props.notes.map(function(t,n){return r.a.createElement("li",{key:n},r.a.createElement(Q,{note:t,index:n,onRemoveItem:e.props.onRemoveItem,length:e.props.notes.length,onChangeText:e.props.onChangeText.bind(null,{notes:e.props.notes})}),r.a.createElement(V,{index:n,onAddButtonClick:e.props.onAddButtonClick}))}))))}}]),t}(r.a.Component),ae=Object(p.b)(function(e){return{notes:e.notes}},function(e){return{onAddButtonClick:function(t){var n=window.prompt("Note text:");e(function(e,t){return{type:v,text:e,afterIndex:t}}(n,t.target.dataset.index))},onRemoveItem:function(t){var n;e((n=t.currentTarget.dataset.index,{type:E,index:n}))},onChangeText:function(t,n){var a,r,o=window.prompt("Cange note:",t.notes[n.currentTarget.dataset.index]);e((a=o,r=n.currentTarget.dataset.index,{type:_,valueText:a,index:r}))}}})(ne),re=function(){return r.a.createElement("div",null,r.a.createElement(ae,null))},oe=X,ie=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:oe},r.a.createElement(f.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:re}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,2,1]]]);
//# sourceMappingURL=main.ce961ba8.chunk.js.map