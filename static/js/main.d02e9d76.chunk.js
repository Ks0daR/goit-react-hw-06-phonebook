(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={list:"Contacts_list__14-hX",Title:"Contacts_Title__2D9jM",TitleDark:"Contacts_TitleDark__1mLx0 Contacts_Title__2D9jM"}},14:function(e,t,n){e.exports={Layout:"Layout_Layout__1VOhB",LayoutDark:"Layout_LayoutDark__EKXRb Layout_Layout__1VOhB"}},25:function(e,t,n){e.exports={search:"FilterForm_search__3Xshf"}},29:function(e,t,n){e.exports=n(49)},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),o=n.n(c),u=n(8),l=n.n(u),m=n(1),i=n(2),s=n(4),_=Object(i.b)("theme/toggleTheme"),b=Object(i.c)(!0,Object(s.a)({},_,(function(e){return!e}))),h=n(26),f=n(3),p=n(20),E=Object(i.b)("phoneBook/add",(function(e,t){return{payload:{contactInfo:{id:Object(p.v4)(),name:e,number:t}}}})),d=Object(i.b)("phoneBook/remove"),k=Object(i.b)("phoneBook/filtered"),D=Object(i.b)("phoneBook/clearValue"),O=Object(i.c)([],(a={},Object(s.a)(a,E.type,(function(e,t){var n=t.payload;return[].concat(Object(h.a)(e),[n.contactInfo])})),Object(s.a)(a,d.type,(function(e,t){var n=t.payload;return e.filter((function(e){return n!==e.id}))})),a)),j=Object(i.c)("",(r={},Object(s.a)(r,D.type,(function(e,t){return""})),Object(s.a)(r,k.type,(function(e,t){return t.payload})),r)),v=Object(f.combineReducers)({contactsBase:O,filter:j}),I=Object(i.a)({reducer:{theme:b,contacts:v}}),g=(n(48),n(6)),y=n.n(g),B={onToggle:_},T=Object(m.b)((function(e){return{theme:e.theme}}),B)((function(e){var t=e.theme,n=e.onToggle;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:y.a.Header},o.a.createElement("h1",{className:t?y.a.Title:y.a.TitleDark},"Phone Book")),o.a.createElement("button",{className:t?y.a.Button:y.a.ButtonDark,type:"button",onClick:function(){return n()}},t?"Dark":"Light"),o.a.createElement("p",{className:t?null:y.a.TextDark},"Active theme ",t?"Light":"Dark"))})),L=n(14),C=n.n(L),F=Object(m.b)((function(e){return{theme:e.theme}}))((function(e){var t=e.children,n=e.theme;return o.a.createElement("div",{className:n?C.a.Layout:C.a.LayoutDark},o.a.createElement(T,null),t)})),N=n(21),S=n(22),V=n(27),H=n(23),x=n(28),w=n(5),M=n.n(w),R=function(e){function t(){var e,n;Object(N.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(V.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},n.getInputValue=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(s.a)({},a,r))},n.hendleSubmit=function(e){e.preventDefault(),n.checkedDoubleInput(n.state.name)?alert("".concat(n.state.name," \u0435\u0441\u0442\u044c \u0432 \u043a\u043d\u0438\u0433\u0435")):(n.props.getInfo(n.state),n.setState({name:"",number:""}))},n.checkedDoubleInput=function(e){return n.props.contacts.some((function(t){return t.name===e}))},n}return Object(x.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=this.props.theme;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:M.a.Form,onSubmit:this.hendleSubmit},o.a.createElement("label",null,o.a.createElement("h3",{className:a?M.a.Title:M.a.TitleDark},"Name:"),o.a.createElement("input",{value:t,placeholder:"Enter name...",name:"name",onChange:this.getInputValue}),o.a.createElement("h3",{className:a?M.a.title:M.a.TitleDark},"Phone number:"),o.a.createElement("input",{value:n,name:"number",onChange:this.getInputValue,placeholder:"Enter phone..."}),o.a.createElement("br",null),o.a.createElement("button",{className:a?M.a.Submit:M.a.SubmitDark,type:"submit"},"Add contact"),o.a.createElement("br",null))))}}]),t}(c.Component),z=Object(m.b)((function(e){return{theme:e.theme,contacts:e.contacts.contactsBase}}),(function(e){return{getInfo:function(t){var n=t.name,a=t.number;return e(E(n,a))}}}))(R),P=n(24),A=n(7),X=n.n(A);var Z=Object(m.b)((function(e,t){var n=e.theme,a=e.contacts,r=t.id,c=a.contactsBase.find((function(e){return e.id===r}));return Object(P.a)({theme:n},c)}),(function(e,t){return{onRemove:function(){return e(d(t.id))}}}))((function(e){var t=e.name,n=e.number,a=e.theme,r=e.onRemove;return o.a.createElement("li",{className:a?X.a.ListElement:X.a.ListElementDark},t," ",n,o.a.createElement("button",{type:"button",className:a?X.a.Button:X.a.ButtonDark,onClick:r},"Delete"))})),J=n(10),Q=n.n(J),W=Object(m.b)((function(e){var t=e.contacts,n=t.contactsBase,a=t.filter,r=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return{theme:e.theme,elements:r}}))((function(e){var t=e.elements,n=e.theme;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:n?Q.a.Title:Q.a.TitleDark},"Contacts"),o.a.createElement("ul",{className:Q.a.list},t.length>0?t.map((function(e){var t=e.id;return o.a.createElement(Z,{key:t,id:t})})):null))})),K=n(25),Y=n.n(K);var q={onSearchQuery:k,onClearValue:D},G=Object(m.b)((function(e){return{filterValue:e.contacts.filter,contacts:e.contacts.contactsBase}}),q)((function(e){var t=e.filterValue,n=e.contacts,a=e.onClearValue,r=e.onSearchQuery;return 1===n.length&&a(),o.a.createElement("label",{className:Y.a.search},n.length>1&&o.a.createElement("input",{value:t,onChange:function(e){return r(e.target.value)}}))})),U=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(z,null),o.a.createElement(G,null),o.a.createElement(W,null))},$=function(){return o.a.createElement(F,null,o.a.createElement(U,null))};l.a.render(o.a.createElement(m.a,{store:I},o.a.createElement($,null)),document.getElementById("root"))},5:function(e,t,n){e.exports={Form:"InputForm_Form__bb-wE",Submit:"InputForm_Submit__3WzIE",SubmitDark:"InputForm_SubmitDark__FvoF5 InputForm_Submit__3WzIE",Title:"InputForm_Title__hE7js",TitleDark:"InputForm_TitleDark__2Zc3E"}},6:function(e,t,n){e.exports={Header:"Header_Header__1OsM8",Title:"Header_Title__2YF19",TitleDark:"Header_TitleDark__3CZ8- Header_Header__1OsM8",Button:"Header_Button__2LPRp",ButtonDark:"Header_ButtonDark__2ma62 Header_Button__2LPRp",TextDark:"Header_TextDark__3FIZM"}},7:function(e,t,n){e.exports={ListElement:"ContactIlstItem_ListElement__-fhFz",ListElementDark:"ContactIlstItem_ListElementDark__M_ar4 ContactIlstItem_ListElement__-fhFz",Button:"ContactIlstItem_Button__2NVuV",ButtonDark:"ContactIlstItem_ButtonDark__Crcm5 ContactIlstItem_Button__2NVuV"}}},[[29,1,2]]]);
//# sourceMappingURL=main.d02e9d76.chunk.js.map