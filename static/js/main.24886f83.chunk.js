(this["webpackJsonp2021-vote-web-app"]=this["webpackJsonp2021-vote-web-app"]||[]).push([[0],{45:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var o,i=t(0),a=t.n(i),r=t(28),c=t.n(r),d=(t(45),t(2)),s=t(3),l=t(27),p=t(26),u=t(7),b=t.n(u),v={jinny:t.p+"static/media/jinny_profile.7349a196.png",owl:t.p+"static/media/owl_profile.75b5bbe4.png"},j=b()().second(0).millisecond(0),f={user:{id:"jinny",nick_name:"jinny",profile_url:v.jinny},vote:[{author:{id:"owl",nick_name:"\ubd80\uc5c9\ub2d8",profile_url:v.owl},open_date:j.subtract(96,"hour").valueOf(),close_date:j.subtract(72,"hour").valueOf(),vote_id:"ca23065fe7",vote_name:"\uc2e0\uaddc \ud504\ub85c\uc81d\ud2b8\uc758 \ud68c\uc758 \ucc38\uc11d\uc5ec\ubd80 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",vote_options:[{option_id:"ca23065fe7-item1",option_value:"\ucc38\uc11d",selected_ids:["jinny","owl","user1","user2","user3","user4","user5","user6","user7"]},{option_id:"ca23065fe7-item2",option_value:"\ubbf8\ucc38\uc11d",selected_ids:["user8"]}]},{author:{id:"owl",nick_name:"\ubd80\uc5c9\ub2d8",profile_url:v.owl},open_date:j.subtract(48,"hour").valueOf(),close_date:j.add(24,"hour").valueOf(),vote_id:"a830191fde",vote_name:"\uba39\uace0\uc2f6\uc740 \ud68c\uc2dd \uba54\ub274\ub294?",vote_options:[{option_id:"a830191fde-item1",option_value:"\uae40\uce58\ucc0c\uac1c",selected_ids:["jinny"]},{option_id:"a830191fde-item2",option_value:"\ub41c\uc7a5\ucc0c\uac1c",selected_ids:["owl","user1","user2"]},{option_id:"a830191fde-item3",option_value:"\ubd80\ub300\ucc0c\uac1c",selected_ids:["user3"]}]},{author:{id:"jinny",nick_name:"jinny",profile_url:v.jinny},open_date:j.valueOf(),close_date:j.add(120,"hour").valueOf(),vote_id:"a830191fdi",vote_name:"\ub0b4\uc77c \uc624\uc804 \ud68c\uc758 \uc2dc\uac04 \ud22c\ud45c\ud569\ub2c8\ub2e4.",vote_options:[{option_id:"a830191fdi-item1",option_value:"\uc624\uc804 9\uc2dc",selected_ids:["user3","user4","user5","user6","user7","user8"]},{option_id:"a830191fdi-item2",option_value:"\uc624\uc804 10\uc2dc",selected_ids:["owl","user1","user2"]},{option_id:"a830191fdi-item3",option_value:"\uc624\uc804 11\uc2dc",selected_ids:[]}]},{author:{id:"jinny",nick_name:"jinny",profile_url:v.jinny},open_date:j.add(240,"hour").valueOf(),close_date:j.add(264,"hour").valueOf(),vote_id:"b830191fdi",vote_name:"\ud504\ub85c\uadf8\ub7a8\uc5d0 \ub300\ud55c \ub9cc\uc871\ub3c4 \uc870\uc0ac",vote_options:[{option_id:"b830191fdi-item1",option_value:"\ub9e4\uc6b0 \ub9cc\uc871",selected_ids:[]},{option_id:"b830191fdi-item2",option_value:"\ub9cc\uc871",selected_ids:[]},{option_id:"b830191fdi-item3",option_value:"\ubcf4\ud1b5",selected_ids:[]},{option_id:"b830191fdi-item4",option_value:"\ubd88\ub9cc\uc871",selected_ids:[]},{option_id:"b830191fdi-item5",option_value:"\ub9e4\uc6b0 \ubd88\ub9cc\uc871",selected_ids:[]}]}]};!function(e){e.USER_DATA="user_data",e.VOTE_DATA="vote_data"}(o||(o={}));var x,O=function(){var e=sessionStorage.getItem(o.VOTE_DATA);return e?JSON.parse(e):null},h=function(){sessionStorage.setItem(o.USER_DATA,JSON.stringify(f.user)),sessionStorage.setItem(o.VOTE_DATA,JSON.stringify(f.vote))},g=function(){var e=sessionStorage.getItem(o.USER_DATA);return e?JSON.parse(e):null},m=O,_=function(e){var n=e.vote_id,t=sessionStorage.getItem(o.VOTE_DATA);if(t){var i=JSON.parse(t).map((function(t){return t.vote_id===n?e:t}));return sessionStorage.setItem(o.VOTE_DATA,JSON.stringify(i)),O()}return null},D=function(e){var n=sessionStorage.getItem(o.VOTE_DATA);return n?JSON.parse(n).find((function(n){return n.vote_id===e})):null},y=function(e){var n=sessionStorage.getItem(o.VOTE_DATA);if(n){var t=JSON.parse(n),i=[].concat(Object(p.a)(t),[e]);return sessionStorage.setItem(o.VOTE_DATA,JSON.stringify(i)),O()}return null},k=function(e){var n=sessionStorage.getItem(o.VOTE_DATA);if(n){var t=JSON.parse(n).filter((function(n){return n.vote_id!==e}));return sessionStorage.setItem(o.VOTE_DATA,JSON.stringify(t)),O()}return null},w=function(e){if(e){var n=e.userId,t=e.voteId,i=e.optionId,a=O().map((function(e){var o=e.vote_id,a=e.vote_options;if(o===t){var r=a.map((function(e){var t=e.option_id,o=e.selected_ids;return t===i?Object(l.a)(Object(l.a)({},e),{},{selected_ids:[].concat(Object(p.a)(o),[n])}):e}));return Object(l.a)(Object(l.a)({},e),{},{vote_options:r})}return e}));return sessionStorage.setItem(o.VOTE_DATA,JSON.stringify(a)),O()}return null},I=t(5),S=t(10),E=t(18),V=t(1);function A(){return Object(V.jsx)(C,{children:Object(V.jsx)("h1",{children:Object(V.jsx)(E.a,{to:"/",children:"VOTE WEB APP"})})})}var T,C=s.a.header(x||(x=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  padding: 0 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #cacaca;\n  background: #fff;\n  > h1 {\n    font-weight: bold;\n  }\n"])));function N(e){var n=e.children;return Object(V.jsx)(z,{children:n})}var Y,z=s.a.main(T||(T=Object(d.a)(["\n  overflow-y: auto;\n  max-width: 1200px;\n  height: calc(100vh - 102px);\n  margin: 0 auto;\n  padding: 20px 50px;\n  box-sizing: border-box;\n"])));function R(){return Object(V.jsx)(U,{children:Object(V.jsx)("a",{href:"https://github.com/constjinny/2021-vote-web-app",target:"_blank",rel:"noreferrer",children:"view github"})})}var J,L,M,F,U=s.a.footer(Y||(Y=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  padding: 0 20px;\n  border-top: 1px solid #cacaca;\n  background: #fff;\n"]))),P=t(6),W=t(32),B=t(14),q=t.n(B),G=t(19),H=function(e,n,t){var o,i=t?"asc":"desc";return null===(o=q()(e))||void 0===o?void 0:o.orderBy(n,i).value()},K=function(){return(Math.random().toString(16)+"0000000").substr(2,10)},Q=function(e){var n=e.userId,t=e.votesData,o=b()().valueOf();return t&&t.length>0?H(t,"close_date",!1).map((function(e){var t,i,a=e.author,r=e.open_date,c=e.close_date,d=e.vote_id,s=e.vote_name,l=e.vote_options,p=a.id,u=a.nick_name,v=void 0===u?"":u,j=a.profile_url,f={id:p,nickName:v,profileUrl:void 0===j?"":j},x=r-o<0,O=a.id===n&&!x,h=c-o<0,g=l.map((function(e){var n=e.option_id,t=void 0===n?"":n,o=e.option_value,i=void 0===o?"":o,a=e.selected_ids,r=void 0===a?[]:a;return{optionId:t,optionValue:i,selectedIds:r,count:r.length}})),m=h?null===(t=H(l,"count",!1)[0])||void 0===t?void 0:t.option_id:"";return{author:f,isEdit:O||!1,isOpen:x||!1,isClose:h||!1,isSelectId:(null===l||void 0===l||null===(i=l.find((function(e){return e.selected_ids.find((function(e){return e===n}))})))||void 0===i?void 0:i.option_id)||"",isResultId:m,openDate:b()(r).format("YYYY\ub144 M\uc6d4 D\uc77c")||"",closeDate:b()(c).format("YYYY\ub144 M\uc6d4 D\uc77c")||"",voteId:d||"",voteName:s||"",voteOptions:g||[]}})):[]},X=Object(G.b)({name:"voteList",initialState:{userId:"",voteList:[]},reducers:{getLoadData:function(e){var n=g(),t=m(),o=Q({userId:null===n||void 0===n?void 0:n.id,votesData:t});o&&(e.userId=null===n||void 0===n?void 0:n.id,e.voteList=o)},updateVoteOptionCount:function(e,n){var t=g(),o=w(n.payload),i=Q({userId:null===t||void 0===t?void 0:t.id,votesData:o});i&&(e.voteList=i)},deleteVote:function(e,n){var t=g(),o=k(n.payload),i=Q({userId:null===t||void 0===t?void 0:t.id,votesData:o});i&&(e.voteList=i)}}}),Z=X.actions,$=X.reducer,ee=function(e){return e.voteListReducer.userId},ne=function(e){return e.voteListReducer.voteList},te=t(24),oe=t(23);!function(e){e.Default="DEFAULT",e.Full="FULL"}(F||(F={}));var ie,ae=(M={},Object(te.a)(M,F.Default,Object(oe.a)(J||(J=Object(d.a)(["\n    width: 100px;\n    height: 30px;\n  "])))),Object(te.a)(M,F.Full,Object(oe.a)(L||(L=Object(d.a)(["\n    width: 100%;\n    height: 40px;\n  "])))),M);function re(e){var n=e.theme,t=e.children,o=e.isDisabled,i=e.onClick,a=ae[n];return Object(V.jsx)(pe,{type:"button",disabled:o,onClick:i,themeStyle:a,children:t&&t})}re.defaultProps={theme:F.Default,isDisabled:!1};var ce,de,se,le,pe=s.a.button(ie||(ie=Object(d.a)(["\n  ",";\n  padding: 0;\n  border: 0 none;\n  cursor: pointer;\n  border-radius: 5px;\n  background-color: #5ea9e7;\n  color: #fff;\n  &:hover {\n    box-shadow: rgba(149, 157, 165, 0.9) 0px 5px 10px;\n  }\n  &:disabled {\n    cursor: default;\n    background-color: #8e9daa;\n  }\n"])),(function(e){return e.themeStyle}));function ue(e){var n=e.data,t=Object(P.b)(),o=Object(P.c)(ee),a=Object(i.useState)(""),r=Object(W.a)(a,2),c=r[0],d=r[1],s=n.isOpen,l=n.isClose,p=n.openDate,u=n.voteOptions,b=n.isSelectId,v=n.voteId,j=b?Object(V.jsx)("p",{children:"\ud83d\uddf3 \uc774\ubbf8 \ud22c\ud45c\ub97c \ud558\uc168\uc2b5\ub2c8\ub2e4."}):s?null:Object(V.jsxs)("p",{children:["\ud83d\uddf3 ",p," \ubd80\ud130 \ud22c\ud45c \uac00\ub2a5\ud569\ub2c8\ub2e4."]});return Object(V.jsxs)(xe,{children:[Object(V.jsxs)(Oe,{children:[j&&j,u.map((function(e,n){var t=e.optionId,o=e.optionValue,i=e.count,a=t===c||t===b,r=!s||l||!Object(B.isEmpty)(b);return Object(V.jsxs)(he,{isSelect:a,isDisabled:r,onClick:function(){return!r&&d(t)},children:[Object(V.jsx)("span",{children:n+1}),Object(V.jsxs)("div",{children:[o,Object(V.jsx)("span",{children:"".concat(i," \uba85")})]})]},t)}))]}),s&&!l&&Object(B.isEmpty)(b)&&Object(V.jsx)(ge,{children:Object(V.jsx)(re,{theme:F.Full,onClick:function(){return t(Z.updateVoteOptionCount({userId:o,voteId:v,optionId:c}))},isDisabled:Object(B.isEmpty)(c),children:"\ud22c\ud45c\ud558\uae30"})})]})}var be,ve,je,fe,xe=s.a.div(ce||(ce=Object(d.a)(["\n  margin-top: 20px;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #cacaca;\n  background: #fff;\n  box-sizing: border-box;\n"]))),Oe=s.a.ul(de||(de=Object(d.a)(["\n  > p {\n    margin-bottom: 10px;\n  }\n"]))),he=s.a.li(se||(se=Object(d.a)(["\n  overflow: hidden;\n  position: relative;\n  margin-top: 10px;\n  padding: 10px 20px 10px 50px;\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid #cacaca;\n  ",";\n  ",";\n  &:hover {\n    ",";\n  }\n  > span {\n    position: absolute;\n    top: 10px;\n    left: 20px;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n    font-weight: bold;\n    line-height: 20px;\n    border-radius: 50%;\n    background-color: ",";\n    color: #fff;\n  }\n  > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    > span {\n      display: inline-block;\n    }\n  }\n"])),(function(e){return e.isSelect&&"border-color: #5ea9e7"}),(function(e){return e.isDisabled&&"background-color: #eeeeee;"}),(function(e){return!e.isDisabled&&"cursor: pointer; border-color: #457aa7; box-shadow: rgba(149, 157, 165, 0.9) 0px 10px 24px;"}),(function(e){return e.isSelect?"#5ea9e7":"#cacaca"})),ge=s.a.div(le||(le=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #cacaca;\n"])));function me(e){var n=e.data,t=n.voteOptions,o=n.isResultId;return Object(V.jsx)(De,{children:Object(V.jsx)(ye,{children:t.map((function(e,n){var t=e.optionId,i=e.optionValue,a=e.selectedIds,r=e.count,c=o===t,d=a.map((function(e){return Object(V.jsx)("span",{children:e},e)}));return Object(V.jsxs)(ke,{isResult:c,children:[Object(V.jsx)("span",{children:n+1}),Object(V.jsxs)("div",{children:[i,Object(V.jsx)("span",{children:"".concat(r," \uba85")})]}),d&&Object(V.jsx)(we,{children:d})]},t)}))})})}var _e,De=s.a.div(be||(be=Object(d.a)(["\n  margin-top: 20px;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #cacaca;\n  box-sizing: border-box;\n"]))),ye=s.a.ul(ve||(ve=Object(d.a)(["\n  > p {\n    margin-bottom: 10px;\n  }\n"]))),ke=s.a.li(je||(je=Object(d.a)(["\n  overflow: hidden;\n  position: relative;\n  margin-top: 10px;\n  padding: 10px 20px 10px 50px;\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid #cacaca;\n  ",";\n  > span {\n    position: absolute;\n    top: 10px;\n    left: 20px;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n    font-weight: bold;\n    line-height: 20px;\n    border-radius: 50%;\n    background-color: ",";\n    color: #fff;\n  }\n  > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"])),(function(e){return e.isResult&&"border-color: #5ea9e7;"}),(function(e){return e.isResult?"#5ea9e7":"#cacaca"})),we=s.a.div(fe||(fe=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 14px;\n  > span {\n    margin: 5px 2px;\n    padding: 1px 5px;\n    border-radius: 5px;\n    background-color: #cacaca;\n    color: #fff;\n  }\n"])));function Ie(e){var n=e.text,t=e.isOn;return Object(V.jsx)(Ee,{isOn:t,children:n})}Ie.defaultProps={isOn:!1};var Se,Ee=s.a.span(_e||(_e=Object(d.a)(["\n  display: inline-block;\n  margin: 3px 5px 0 0;\n  padding: 2px 5px 0px;\n  font-size: 12px;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  vertical-align: top;\n"])),(function(e){return e.isOn?"#5ea9e7":"#eeeeee"}),(function(e){return e.isOn?"#fff":"#333"}));function Ve(e){var n=e.url,t=e.name;return Object(V.jsxs)(ze,{children:[Object(V.jsx)("span",{children:Object(V.jsx)("img",{src:n,alt:"".concat(t,"\uc758 \ud504\ub85c\ud544 \uc0ac\uc9c4")})}),Object(V.jsx)("em",{children:t})]})}Ve.defaultProps={isOn:!1};var Ae,Te,Ce,Ne,Ye,ze=s.a.span(Se||(Se=Object(d.a)(["\n  width: 40px;\n  margin-right: 20px;\n  > span {\n    overflow: hidden;\n    display: block;\n    width: 100%;\n    height: 40px;\n    border-radius: 50%;\n    border: 1px solid #cacaca;\n    background-color: #fff;\n    > img {\n      display: block;\n      width: 100%;\n    }\n  }\n  > em {\n    display: block;\n    margin-top: 5px;\n    text-align: center;\n    font-size: 12px;\n  }\n"])));function Re(){var e=Object(P.b)(),n=Object(I.g)().push,t=Object(i.useState)(""),o=Object(W.a)(t,2),a=o[0],r=o[1],c=Object(P.c)(ne);return Object(V.jsx)(Le,{children:c.map((function(t){var o=t.author,c=t.isEdit,d=t.isOpen,s=t.isClose,l=t.openDate,p=t.closeDate,u=t.voteId,b=t.voteName,v=a===u,j=d&&!s,f=s?"\ud22c\ud45c \uc885\ub8cc":d?"\ud22c\ud45c \uc911":"\uc624\ud508 \uc804";return Object(V.jsxs)(Me,{onClick:function(){return r(u)},children:[Object(V.jsxs)(Fe,{children:[Object(V.jsx)(Ve,{url:o.profileUrl,name:o.nickName}),Object(V.jsxs)(Ue,{children:[Object(V.jsxs)("div",{children:[Object(V.jsx)(Ie,{isOn:j,text:f}),Object(V.jsxs)("strong",{children:[b,Object(V.jsx)("span",{children:"".concat(l," ~ ").concat(p)})]})]}),c&&Object(V.jsxs)(Pe,{children:[Object(V.jsx)(re,{onClick:function(){return n("/modify/".concat(u))},children:"\ud22c\ud45c \uc218\uc815"}),Object(V.jsx)(re,{onClick:function(){return e(Z.deleteVote(u))},children:"\ud22c\ud45c \uc0ad\uc81c"})]})]})]}),v&&Object(V.jsx)(i.Fragment,{children:s?Object(V.jsx)(me,{data:t}):Object(V.jsx)(ue,{data:t})})]},u)}))})}var Je,Le=s.a.div(Ae||(Ae=Object(d.a)(["\n  > div {\n    margin-top: 20px;\n  }\n"]))),Me=s.a.div(Te||(Te=Object(d.a)(["\n  display: block;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #cacaca;\n  background: #fff;\n  box-sizing: border-box;\n  &:hover {\n    box-shadow: rgba(149, 157, 165, 0.9) 0px 10px 24px;\n  }\n  & + & {\n    margin-top: 20px;\n  }\n"]))),Fe=s.a.div(Ce||(Ce=Object(d.a)(["\n  display: flex;\n"]))),Ue=s.a.div(Ne||(Ne=Object(d.a)(['\n  flex: 1;\n  position: relative;\n  padding-right: 110px;\n  &:after {\n    display: block;\n    clear: both;\n    content: "";\n  }\n  > div {\n    overflow: hidden;\n    position: relative;\n    padding-left: 60px;\n    > span {\n      position: absolute;\n      top: 0;\n      left: 0;\n    }\n    > strong {\n      font-weight: bold;\n      > span {\n        display: block;\n        font-weight: normal;\n        font-size: 12px;\n      }\n    }\n  }\n']))),Pe=s.a.span(Ye||(Ye=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  > button {\n    display: block;\n  }\n  > button + button {\n    margin-top: 5px;\n  }\n"])));function We(){var e=Object(I.g)().push,n=Object(P.b)(),t=Object(P.c)(ne).length>0;return Object(i.useEffect)((function(){n(Z.getLoadData())}),[n]),Object(V.jsxs)(i.Fragment,{children:[Object(V.jsx)(qe,{children:Object(V.jsx)(re,{onClick:function(){return e("/create")},children:"\uc2e0\uaddc \ud22c\ud45c \uc0dd\uc131"})}),t?Object(V.jsx)(Re,{}):Object(V.jsx)("p",{children:"\ud22c\ud45c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})]})}var Be,qe=s.a.div(Je||(Je=Object(d.a)(["\n  text-align: right;\n"]))),Ge={voteData:{openDate:"",closeDate:"",voteId:K(),voteName:"",voteOptions:["","",""]},isError:!1,isSaved:!1},He=Object(G.b)({name:"voteWrite",initialState:Ge,reducers:{getVoteData:function(e,n){var t=n.payload.voteId,o=function(e){if(e){var n=e.open_date,t=e.close_date,o=e.vote_id,i=e.vote_name,a=e.vote_options.map((function(e){return e.option_value}));return{openDate:b()(n).format("YYYY-MM-DD"),closeDate:b()(t).format("YYYY-MM-DD"),voteId:o,voteName:i,voteOptions:a}}return null}(D(t));o&&(e.voteData.openDate=o.openDate,e.voteData.closeDate=o.closeDate,e.voteData.voteId=o.voteId,e.voteData.voteName=o.voteName,e.voteData.voteOptions=o.voteOptions)},setVoteData:function(e){e.voteData=Ge.voteData,e.isError=Ge.isError,e.isSaved=Ge.isSaved},saveVoteData:function(e,n){var t,o,i=n.payload.isModify,a=(null===(t=Object.values(e.voteData).filter((function(e){return Object(B.isEmpty)(e)})))||void 0===t?void 0:t.length)<=0,r=(null===(o=e.voteData.voteOptions.filter((function(e){return Object(B.isEmpty)(e)})))||void 0===o?void 0:o.length)<=0;if(a&&r){var c=function(e,n){if(n){var t=n.openDate,o=n.closeDate,i=n.voteId,a=n.voteName,r=n.voteOptions.map((function(e,n){return{option_id:"".concat(i,"-option").concat(n),option_value:e,selected_ids:[]}}));return{author:e,open_date:b()(t).valueOf(),close_date:b()(o).valueOf(),vote_id:i,vote_name:a,vote_options:r}}return null}(g(),e.voteData);c?(i?_(c):y(c),e.isSaved=!0):e.isError=!0}else e.isError=!0},updateVoteName:function(e,n){e.voteData.voteName=n.payload||""},updateVoteOpenDate:function(e,n){var t=n.payload,o=t.openDate,i=t.closeDate;e.voteData.openDate=o||"",i&&(e.voteData.closeDate=i||"")},updateVoteCloseDate:function(e,n){e.voteData.closeDate=n.payload||""},addOptionsDate:function(e){var n=[].concat(Object(p.a)(e.voteData.voteOptions),[""]);e.voteData.voteOptions=n},updateOptionsDate:function(e,n){var t=n.payload,o=t.value,i=t.index,a=e.voteData.voteOptions.map((function(e,n){return n===i?o:e}));e.voteData.voteOptions=a},deleteOptionsDate:function(e,n){var t=n.payload.index,o=e.voteData.voteOptions.filter((function(e,n){return n!==t}));e.voteData.voteOptions=o}}}),Ke=He.actions,Qe=He.reducer,Xe=function(e){return e.voteWriteReducer.voteData},Ze=function(e){return e.voteWriteReducer.isError},$e=function(e){return e.voteWriteReducer.isSaved};function en(e){var n=e.type,t=e.value,o=e.placeholder,i=e.onChange,a=e.min;return Object(V.jsx)(on,{type:n,value:t,placeholder:o,min:a,onChange:function(e){return i(e.target.value)}})}en.defaultProps={type:"text",value:"",placeholder:""};var nn,tn,on=s.a.input(Be||(Be=Object(d.a)(["\n  width: 100%;\n  height: 30px;\n  padding: 0 16px;\n  border: 1px solid #cacaca;\n  cursor: pointer;\n  border-radius: 5px;\n  outline: 0 none;\n  box-sizing: border-box;\n  &:hover {\n    box-shadow: rgba(149, 157, 165, 0.9) 0px 5px 10px;\n  }\n"])));function an(){var e=Object(P.b)(),n=Object(P.c)(Xe),t=n.closeDate,o=n.openDate,i=n.voteName,a=n.voteOptions,r=b()().format("YYYY-MM-DD");return Object(V.jsxs)(cn,{children:[Object(V.jsxs)("dl",{children:[Object(V.jsx)("dt",{children:"\ud22c\ud45c \uc81c\ubaa9"}),Object(V.jsx)("dd",{children:Object(V.jsx)(en,{value:i,placeholder:"\ud22c\ud45c \uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(n){e(Ke.updateVoteName(n))}})})]}),Object(V.jsxs)("dl",{children:[Object(V.jsx)("dt",{children:"\uc2dc\uc791 \uc77c\uc790"}),Object(V.jsx)("dd",{children:Object(V.jsx)(en,{type:"date",value:o||"",placeholder:"\ud22c\ud45c \uc2dc\uc791 \uc77c\uc790\ub97c \uc785\ub825\ud558\uc138\uc694.",min:r,onChange:function(n){if(t&&b()(t).valueOf()-b()(n).valueOf()<=0){var o=b()(n).add(24,"hour").format("YYYY-MM-DD");e(Ke.updateVoteOpenDate({openDate:n,closeDate:o}))}else e(Ke.updateVoteOpenDate({openDate:n}))}})})]}),Object(V.jsxs)("dl",{children:[Object(V.jsx)("dt",{children:"\uc885\ub8cc \uc77c\uc790"}),Object(V.jsx)("dd",{children:Object(V.jsx)(en,{type:"date",value:t||"",placeholder:"\ud22c\ud45c \uc885\ub8cc \uc77c\uc790\ub97c \uc785\ub825\ud558\uc138\uc694.",min:o||r,onChange:function(n){e(Ke.updateVoteCloseDate(n))}})})]}),Object(V.jsxs)("dl",{children:[Object(V.jsx)("dt",{children:"\ud22c\ud45c \ud56d\ubaa9"}),Object(V.jsxs)("dd",{children:[Object(V.jsx)("div",{children:a.map((function(n,t){var o=a.length<=3;return Object(V.jsxs)(dn,{children:[Object(V.jsx)("span",{children:t+1}),Object(V.jsx)(en,{value:n,placeholder:"\ud22c\ud45c \ud56d\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(n){return function(n,t){e(Ke.updateOptionsDate({value:n,index:t}))}(n,t)}},t),Object(V.jsx)(re,{isDisabled:o,onClick:function(){return function(n){e(Ke.deleteOptionsDate({index:n}))}(t)},children:"\uc0ad\uc81c"})]},t)}))}),Object(V.jsx)("div",{children:Object(V.jsx)(re,{theme:F.Full,onClick:function(n){e(Ke.addOptionsDate())},children:"\uc0c8 \ud56d\ubaa9 \ucd94\uac00"})})]})]})]})}var rn,cn=s.a.div(nn||(nn=Object(d.a)(["\n  display: block;\n  margin-top: 20px;\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px solid #cacaca;\n  background: #fff;\n  box-sizing: border-box;\n  > dl {\n    display: flex;\n    > dt {\n      margin-right: 20px;\n      padding-top: 6px;\n      font-size: 14px;\n    }\n    > dd {\n      flex: 1;\n      > div + div {\n        margin-top: 20px;\n      }\n    }\n  }\n  > dl + dl {\n    margin-top: 20px;\n  }\n"]))),dn=s.a.div(tn||(tn=Object(d.a)(["\n  display: flex;\n  & + & {\n    margin-top: 10px;\n  }\n  > span {\n    width: 20px;\n    padding-top: 6px;\n    font-size: 14px;\n  }\n  > input {\n    margin-right: 20px;\n  }\n"])));function sn(){var e=Object(I.g)().push,n=Object(P.b)(),t=Object(I.h)().vote_id,o=!Object(B.isUndefined)(t),a=Object(P.c)(Ze),r=Object(P.c)($e);Object(i.useEffect)((function(){r&&e("/list")}),[e,a,r]);var c=Object(i.useCallback)((function(e){n(Ke.getVoteData({voteId:e}))}),[n]),d=Object(i.useCallback)((function(){n(Ke.setVoteData())}),[n]);return Object(i.useEffect)((function(){return o?c(t):d(),function(){d()}}),[n,o,t,c,d]),Object(V.jsxs)(i.Fragment,{children:[Object(V.jsxs)(pn,{children:[Object(V.jsx)("em",{children:a&&"\ud83d\ude05 \ubaa8\ub4e0 \ud56d\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(V.jsx)(re,{onClick:function(){n(Ke.saveVoteData({isModify:o}))},children:"\ud22c\ud45c \uc800\uc7a5"})]}),Object(V.jsx)(an,{})]})}var ln,pn=s.a.div(rn||(rn=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  > em {\n    color: #e64848;\n  }\n"]))),un=Object(S.a)({basename:"/2021-vote-web-app"});function bn(){return Object(V.jsxs)(I.c,{history:un,children:[Object(V.jsx)(A,{}),Object(V.jsx)(N,{children:Object(V.jsxs)(I.d,{children:[Object(V.jsx)(I.b,{path:"/",exact:!0,children:Object(V.jsx)(I.a,{to:"/list"})}),Object(V.jsx)(I.b,{path:"/list",exact:!0,component:We}),Object(V.jsx)(I.b,{path:"/create",exact:!0,component:sn}),Object(V.jsx)(I.b,{path:"/modify/:vote_id",exact:!0,component:sn})]})}),Object(V.jsx)(R,{})]})}var vn=function(){return Object(i.useEffect)((function(){h()}),[]),Object(V.jsx)(jn,{children:Object(V.jsx)(bn,{})})},jn=s.a.div(ln||(ln=Object(d.a)(["\n  height: 100%;\n"]))),fn=t(16),xn=Object(fn.b)({voteListReducer:$,voteWriteReducer:Qe}),On=Object(G.a)({reducer:xn});c.a.render(Object(V.jsx)(a.a.StrictMode,{children:Object(V.jsx)(P.a,{store:On,children:Object(V.jsx)(vn,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.24886f83.chunk.js.map