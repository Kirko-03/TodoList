(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{111:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),o=n.n(i),s=n(10),r=n.n(s),d=(n(84),function(t){t&&t&&n.e(3).then(n.bind(null,160)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))}),l=(n(85),n(150)),u=n(151),j=n(145),b=n(148),O=n(153),f=n(154),T=n(152),h=n(17),g=n(8),k=n(46),v=n(65),p=n.n(v).a.create(Object(g.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"670e02e0-a18b-4af1-b6d8-7bc8edc695ba"}})),S=function(){return p.get("todo-lists")},m=function(t){return p.post("todo-lists",{title:t})},x=function(t){return p.delete("todo-lists/".concat(t))},C=function(t,e){return p.put("todo-lists/".concat(t),{title:e})},I=function(t){return p.get("todo-lists/".concat(t,"/tasks"))},y=function(t,e){return p.delete("todo-lists/".concat(t,"/tasks/").concat(e))},E=function(t,e){return p.post("todo-lists/".concat(t,"/tasks"),{title:e})},A=function(t,e,n){return p.put("todo-lists/".concat(t,"/tasks/").concat(e),n)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var D={status:"idle",error:null},L=function(t){return{type:"APP/SET-STATUS",status:t}},w=function(t){return{type:"APP/SET-ERROR",error:t}},P=function(t,e){t.messages.length?e(w(t.messages[0])):e(w("Some error")),e(L("failed"))},F=function(t,e){e(w(t.message)),e(L("failed"))},N=[],R=n(27),H={},K=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(!i)return a(w("task not found in the state")),void a(L("failed"));var o=Object(g.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);A(n,t,o).then((function(c){if(0===c.data.resultCode){a(L("loading"));var i=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(i),a(L("succeeded"))}else P(c.data,a)})).catch((function(t){F(t,a)}))}},U=n(149),M=n(112),G=n(26),V=n(155),B=n(146),Y=n(4),J=o.a.memo((function(t){var e=t.addItem,n=t.disabled;console.log("AddItemForm called");var a=Object(i.useState)(""),c=Object(G.a)(a,2),o=c[0],s=c[1],r=Object(i.useState)(null),d=Object(G.a)(r,2),l=d[0],u=d[1],b=function(){""!==o.trim()?(e(o),s("")):u("Title is required")};return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(V.a,{variant:"outlined",error:!!l,value:o,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==l&&u(null),13===t.charCode&&b()},label:"Title",helperText:l,disabled:n}),Object(Y.jsx)(j.a,{color:"primary",disabled:n,onClick:b,children:Object(Y.jsx)(B.a,{})})]})})),q=o.a.memo((function(t){var e=t.value,n=t.onChange,a=t.disabled;console.log("EditableSpan called");var c=Object(i.useState)(!1),o=Object(G.a)(c,2),s=o[0],r=o[1],d=Object(i.useState)(e),l=Object(G.a)(d,2),u=l[0],j=l[1];return s?Object(Y.jsx)(V.a,{value:u,onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),n(u)}}):Object(Y.jsx)("span",{onClick:function(){a||r(!0),j(e)},children:e})})),z=n(147),Q=n(157),W=o.a.memo((function(t){var e=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(Y.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(Y.jsx)(Q.a,{checked:t.task.status===a.Completed,style:{color:"green"},onChange:n}),Object(Y.jsx)(q,{disabled:t.disabled,value:t.task.title,onChange:c}),Object(Y.jsx)(j.a,{onClick:e,children:Object(Y.jsx)(z.a,{})})]},t.task.id)})),X=o.a.memo((function(t){console.log("Todolist called");var e=Object(h.b)();Object(i.useEffect)((function(){var n,a=(n=t.todolist.id,function(t){L("loading"),I(n).then((function(e){var a=function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(e.data.items,n);t(a),L("succeeded")})).catch((function(e){F(e,t)}))});e(a)}),[]);var n=Object(i.useCallback)((function(e){t.addTask(e,t.todolist.id)}),[t.addTask,t.todolist.id]),c=Object(i.useCallback)((function(e){t.changeTodolistTitle(t.todolist.id,e)}),[t.todolist.id,t.changeTodolistTitle]),o=Object(i.useCallback)((function(){return t.changeFilter("all",t.todolist.id)}),[t.todolist.id,t.changeFilter]),s=Object(i.useCallback)((function(){return t.changeFilter("active",t.todolist.id)}),[t.todolist.id,t.changeFilter]),r=Object(i.useCallback)((function(){return t.changeFilter("completed",t.todolist.id)}),[t.todolist.id,t.changeFilter]),d=t.tasks;return"active"===t.todolist.filter&&(d=t.tasks.filter((function(t){return t.status===a.New}))),"completed"===t.todolist.filter&&(d=t.tasks.filter((function(t){return t.status===a.Completed}))),Object(Y.jsxs)("div",{children:[Object(Y.jsxs)("h3",{children:[Object(Y.jsx)(q,{disabled:"loading"===t.todolist.entityStatus,value:t.todolist.title,onChange:c}),Object(Y.jsx)(j.a,{onClick:function(){t.removeTodolist(t.todolist.id)},disabled:"loading"===t.todolist.entityStatus,style:{opacity:"loading"===t.todolist.entityStatus?"50%":""},children:Object(Y.jsx)(z.a,{style:{color:"red"}})})]}),Object(Y.jsx)(J,{addItem:n,disabled:"loading"===t.todolist.entityStatus}),Object(Y.jsx)("div",{children:d.map((function(e){return Object(Y.jsx)(W,{disabled:"loading"===t.todolist.entityStatus,task:e,todolistId:t.todolist.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus},e.id)}))}),Object(Y.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(Y.jsx)(b.a,{variant:"all"===t.todolist.filter?"outlined":"text",onClick:o,color:"default",children:"All"}),Object(Y.jsx)(b.a,{variant:"active"===t.todolist.filter?"outlined":"text",onClick:s,color:"primary",children:"Active"}),Object(Y.jsx)(b.a,{variant:"completed"===t.todolist.filter?"outlined":"text",onClick:r,color:"secondary",children:"Completed"})]})]})})),Z=function(){var t=Object(h.c)((function(t){return t.todolists})),e=Object(h.c)((function(t){return t.tasks})),n=Object(h.b)();Object(i.useEffect)((function(){var t=function(t){t(L("loading")),S().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(L("idle"))})).catch((function(e){F(e,t)}))};n(t)}),[]);var a=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(n){n(L("loading")),y(e,t).then((function(){var a=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(a),n(L("succeeded"))})).catch((function(t){F(t,n)}))}}(t,e);n(a)}),[]),c=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(n){n(L("loading")),E(e,t).then((function(t){if(0===t.data.resultCode){n(L("loading"));var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(L("succeeded"))}else P(t.data,n)})).catch((function(t){F(t,n)}))}}(t,e);n(a)}),[]),o=Object(i.useCallback)((function(t,e,a){var c=K(t,{status:e},a);n(c)}),[]),s=Object(i.useCallback)((function(t,e,a){var c=K(t,{title:e},a);n(c)}),[]),r=Object(i.useCallback)((function(t,e){var a={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};n(a)}),[]),d=Object(i.useCallback)((function(t){var e,a=(e=t,function(t){t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,entityStatus:"loading"}),x(e).then((function(){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(L("succeeded"))})).catch((function(e){F(e,t)}))});n(a)}),[]),l=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(n){n(L("loading")),C(t,e).then((function(a){0===a.data.resultCode?(n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e)),n(L("succeeded"))):P(a.data,n)})).catch((function(t){return F(t,n)}))}}(t,e);n(a)}),[]),u=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(L("loading")),m(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(L("succeeded"))):P(t.data,e)})).catch((function(t){F(t,e)}))}}(t);n(e)}),[n]);return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(U.a,{container:!0,style:{padding:"20px"},children:Object(Y.jsx)(J,{addItem:u})}),Object(Y.jsx)(U.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(Y.jsx)(U.a,{item:!0,children:Object(Y.jsx)(M.a,{style:{padding:"10px"},children:Object(Y.jsx)(X,{todolist:t,tasks:n,removeTask:a,changeFilter:r,addTask:c,changeTaskStatus:o,removeTodolist:d,changeTaskTitle:s,changeTodolistTitle:l})})},t.id)}))})]})},$=n(159),_=n(156),tt=function(){var t=Object(h.c)((function(t){return t.app.error})),e=Object(h.c)((function(t){return t.app.status})),n=o.a.useState(!1),a=Object(G.a)(n,2),c=(a[0],a[1]),i=Object(h.b)(),s=function(t,e){"clickaway"!==e&&(i(w(null)),i(L("idle")),c(!1))};return Object(Y.jsxs)("div",{children:[Object(Y.jsx)($.a,{open:null!==t,autoHideDuration:6e3,onClose:s,children:Object(Y.jsx)(_.a,{onClose:s,severity:"error",children:t})}),Object(Y.jsx)($.a,{open:"succeeded"===e,autoHideDuration:6e3,onClose:s,children:Object(Y.jsx)(_.a,{onClose:s,severity:"success",children:"Change was successful!"})})]})};var et=function(){var t=Object(h.c)((function(t){return t.app.status}));return Object(Y.jsxs)("div",{className:"App",children:[Object(Y.jsxs)(l.a,{style:{background:"green"},position:"static",children:[Object(Y.jsxs)(u.a,{children:[Object(Y.jsx)(j.a,{edge:"start",style:{color:"yellow"},"aria-label":"menu",children:Object(Y.jsx)(T.a,{})}),Object(Y.jsx)(b.a,{style:{textAlign:"center"},color:"inherit",children:"Login"})]}),"loading"===t&&Object(Y.jsx)(O.a,{color:"secondary"})]}),Object(Y.jsxs)(f.a,{fixed:!0,children:[Object(Y.jsx)(Z,{}),Object(Y.jsx)(tt,{})]})]})},nt=n(47),at=n(70),ct=Object(nt.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(g.a)(Object(g.a)({},t),{},Object(R.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(g.a)(Object(g.a)({},t),{},Object(R.a)({},e.task.todoListId,[e.task].concat(Object(k.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(g.a)(Object(g.a)({},t),{},Object(R.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(g.a)(Object(g.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(g.a)(Object(g.a)({},t),{},Object(R.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(g.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(g.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(g.a)(Object(g.a)({},t),{},Object(R.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(g.a)(Object(g.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(k.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(g.a)(Object(g.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(g.a)(Object(g.a)({},t),{},{filter:e.filter}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(g.a)(Object(g.a)({},t),{},{entityStatus:e.entityStatus}):t}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(g.a)(Object(g.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(g.a)(Object(g.a)({},t),{},{error:e.error});default:return t}}}),it=Object(nt.c)(ct,Object(nt.a)(at.a));window.store=it,r.a.render(Object(Y.jsx)(o.a.StrictMode,{children:Object(Y.jsx)(h.a,{store:it,children:Object(Y.jsx)(et,{})})}),document.getElementById("root")),d()},84:function(t,e,n){},85:function(t,e,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.a1321a55.chunk.js.map