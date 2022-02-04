(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{112:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),o=n.n(i),s=n(10),r=n.n(s),d=(n(85),function(t){t&&t&&n.e(3).then(n.bind(null,161)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))}),l=(n(86),n(151)),u=n(152),j=n(146),b=n(149),O=n(154),f=n(155),T=n(153),h=n(17),k=n(9),g=n(48),p=n(66),v=n.n(p).a.create(Object(k.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"6bab46ac-4e96-4e71-a9f9-0ebc29812cdd"}})),S=function(){return v.get("todo-lists")},m=function(t){return v.post("todo-lists",{title:t})},x=function(t){return v.delete("todo-lists/".concat(t))},C=function(t,e){return v.put("todo-lists/".concat(t),{title:e})},I=function(t){return v.get("todo-lists/".concat(t,"/tasks"))},y=function(t,e){return v.delete("todo-lists/".concat(t,"/tasks/").concat(e))},E=function(t,e){return v.post("todo-lists/".concat(t,"/tasks"),{title:e})},D=function(t,e,n){return v.put("todo-lists/".concat(t,"/tasks/").concat(e),n)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var A=n(47),L=Object(A.b)({name:"app",initialState:{status:"idle",error:null},reducers:{setStatus:function(t,e){t.status=e.payload},setError:function(t,e){t.error=e.payload}}}),w=function(t){return{type:"APP/SET-STATUS",status:t}},F=function(t){return{type:"APP/SET-ERROR",error:t}},N=L.reducer,P=function(t,e){t.messages.length?e(F(t.messages[0])):e(F("Some error")),e(w("failed"))},R=function(t,e){e(F(t.message)),e(w("failed"))},H=[],K=n(28),M={},U=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(!i)return a(F("task not found in the state")),void a(w("failed"));var o=Object(k.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);D(n,t,o).then((function(c){if(0===c.data.resultCode){a(w("loading"));var i=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(i),a(w("succeeded"))}else P(c.data,a)})).catch((function(t){R(t,a)}))}},G=n(150),V=n(113),B=n(27),Y=n(156),J=n(147),q=n(4),z=o.a.memo((function(t){var e=t.addItem,n=t.disabled;console.log("AddItemForm called");var a=Object(i.useState)(""),c=Object(B.a)(a,2),o=c[0],s=c[1],r=Object(i.useState)(null),d=Object(B.a)(r,2),l=d[0],u=d[1],b=function(){""!==o.trim()?(e(o),s("")):u("Title is required")};return Object(q.jsxs)("div",{children:[Object(q.jsx)(Y.a,{variant:"outlined",error:!!l,value:o,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==l&&u(null),13===t.charCode&&b()},label:"Title",helperText:l,disabled:n}),Object(q.jsx)(j.a,{color:"primary",disabled:n,onClick:b,children:Object(q.jsx)(J.a,{})})]})})),Q=o.a.memo((function(t){var e=t.value,n=t.onChange,a=t.disabled;console.log("EditableSpan called");var c=Object(i.useState)(!1),o=Object(B.a)(c,2),s=o[0],r=o[1],d=Object(i.useState)(e),l=Object(B.a)(d,2),u=l[0],j=l[1];return s?Object(q.jsx)(Y.a,{value:u,onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),n(u)}}):Object(q.jsx)("span",{onClick:function(){a||r(!0),j(e)},children:e})})),W=n(148),X=n(158),Z=o.a.memo((function(t){var e=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(q.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(q.jsx)(X.a,{checked:t.task.status===a.Completed,style:{color:"green"},onChange:n}),Object(q.jsx)(Q,{disabled:t.disabled,value:t.task.title,onChange:c}),Object(q.jsx)(j.a,{onClick:e,children:Object(q.jsx)(W.a,{})})]},t.task.id)})),$=o.a.memo((function(t){console.log("Todolist called");var e=Object(h.b)();Object(i.useEffect)((function(){var n,a=(n=t.todolist.id,function(t){w("loading"),I(n).then((function(e){var a=function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(e.data.items,n);t(a),w("succeeded")})).catch((function(e){R(e,t)}))});e(a)}),[]);var n=Object(i.useCallback)((function(e){t.addTask(e,t.todolist.id)}),[t.addTask,t.todolist.id]),c=Object(i.useCallback)((function(e){t.changeTodolistTitle(t.todolist.id,e)}),[t.todolist.id,t.changeTodolistTitle]),o=Object(i.useCallback)((function(){return t.changeFilter("all",t.todolist.id)}),[t.todolist.id,t.changeFilter]),s=Object(i.useCallback)((function(){return t.changeFilter("active",t.todolist.id)}),[t.todolist.id,t.changeFilter]),r=Object(i.useCallback)((function(){return t.changeFilter("completed",t.todolist.id)}),[t.todolist.id,t.changeFilter]),d=t.tasks;return"active"===t.todolist.filter&&(d=t.tasks.filter((function(t){return t.status===a.New}))),"completed"===t.todolist.filter&&(d=t.tasks.filter((function(t){return t.status===a.Completed}))),Object(q.jsxs)("div",{children:[Object(q.jsxs)("h3",{children:[Object(q.jsx)(Q,{disabled:"loading"===t.todolist.entityStatus,value:t.todolist.title,onChange:c}),Object(q.jsx)(j.a,{onClick:function(){t.removeTodolist(t.todolist.id)},disabled:"loading"===t.todolist.entityStatus,style:{opacity:"loading"===t.todolist.entityStatus?"50%":""},children:Object(q.jsx)(W.a,{style:{color:"red"}})})]}),Object(q.jsx)(z,{addItem:n,disabled:"loading"===t.todolist.entityStatus}),Object(q.jsx)("div",{children:d.map((function(e){return Object(q.jsx)(Z,{disabled:"loading"===t.todolist.entityStatus,task:e,todolistId:t.todolist.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus},e.id)}))}),Object(q.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(q.jsx)(b.a,{variant:"all"===t.todolist.filter?"outlined":"text",onClick:o,color:"default",children:"All"}),Object(q.jsx)(b.a,{variant:"active"===t.todolist.filter?"outlined":"text",onClick:s,color:"primary",children:"Active"}),Object(q.jsx)(b.a,{variant:"completed"===t.todolist.filter?"outlined":"text",onClick:r,color:"secondary",children:"Completed"})]})]})})),_=function(){var t=Object(h.c)((function(t){return t.todolists})),e=Object(h.c)((function(t){return t.tasks})),n=Object(h.b)();Object(i.useEffect)((function(){var t=function(t){t(w("loading")),S().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(w("idle"))})).catch((function(e){R(e,t)}))};n(t)}),[]);var a=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(n){n(w("loading")),y(e,t).then((function(){var a=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(a),n(w("succeeded"))})).catch((function(t){R(t,n)}))}}(t,e);n(a)}),[]),c=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(n){n(w("loading")),E(e,t).then((function(t){if(0===t.data.resultCode){n(w("loading"));var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(w("succeeded"))}else P(t.data,n)})).catch((function(t){R(t,n)}))}}(t,e);n(a)}),[]),o=Object(i.useCallback)((function(t,e,a){var c=U(t,{status:e},a);n(c)}),[]),s=Object(i.useCallback)((function(t,e,a){var c=U(t,{title:e},a);n(c)}),[]),r=Object(i.useCallback)((function(t,e){var a={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};n(a)}),[]),d=Object(i.useCallback)((function(t){var e,a=(e=t,function(t){t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,entityStatus:"loading"}),x(e).then((function(){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(w("succeeded"))})).catch((function(e){R(e,t)}))});n(a)}),[]),l=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(n){n(w("loading")),C(t,e).then((function(a){0===a.data.resultCode?(n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e)),n(w("succeeded"))):P(a.data,n)})).catch((function(t){return R(t,n)}))}}(t,e);n(a)}),[]),u=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(w("loading")),m(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(w("succeeded"))):P(t.data,e)})).catch((function(t){R(t,e)}))}}(t);n(e)}),[n]);return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(G.a,{container:!0,style:{padding:"20px"},children:Object(q.jsx)(z,{addItem:u})}),Object(q.jsx)(G.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(q.jsx)(G.a,{item:!0,children:Object(q.jsx)(V.a,{style:{padding:"10px"},children:Object(q.jsx)($,{todolist:t,tasks:n,removeTask:a,changeFilter:r,addTask:c,changeTaskStatus:o,removeTodolist:d,changeTaskTitle:s,changeTodolistTitle:l})})},t.id)}))})]})},tt=n(160),et=n(157),nt=function(){var t=Object(h.c)((function(t){return t.app.error})),e=Object(h.c)((function(t){return t.app.status})),n=o.a.useState(!1),a=Object(B.a)(n,2),c=(a[0],a[1]),i=Object(h.b)(),s=function(t,e){"clickaway"!==e&&(i(F(null)),i(w("idle")),c(!1))};return Object(q.jsxs)("div",{children:[Object(q.jsx)(tt.a,{open:null!==t,autoHideDuration:6e3,onClose:s,children:Object(q.jsx)(et.a,{onClose:s,severity:"error",children:t})}),Object(q.jsx)(tt.a,{open:"succeeded"===e,autoHideDuration:6e3,onClose:s,children:Object(q.jsx)(et.a,{onClose:s,severity:"success",children:"Change was successful!"})})]})};var at=function(){var t=Object(h.c)((function(t){return t.app.status}));return Object(q.jsxs)("div",{className:"App",children:[Object(q.jsxs)(l.a,{style:{background:"green"},position:"static",children:[Object(q.jsxs)(u.a,{children:[Object(q.jsx)(j.a,{edge:"start",style:{color:"yellow"},"aria-label":"menu",children:Object(q.jsx)(T.a,{})}),Object(q.jsx)(b.a,{style:{textAlign:"center"},color:"inherit",children:"Login"})]}),"loading"===t&&Object(q.jsx)(O.a,{color:"secondary"})]}),Object(q.jsxs)(f.a,{fixed:!0,children:[Object(q.jsx)(_,{}),Object(q.jsx)(nt,{})]})]})},ct=n(20),it=n(71),ot=Object(ct.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(K.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(K.a)({},e.task.todoListId,[e.task].concat(Object(g.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(K.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(k.a)(Object(k.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(k.a)(Object(k.a)({},t),{},Object(K.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(k.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(k.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(k.a)(Object(k.a)({},t),{},Object(K.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(k.a)(Object(k.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(g.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{filter:e.filter}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(k.a)(Object(k.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{entityStatus:e.entityStatus}):t}));default:return t}},app:N}),st=Object(A.a)({reducer:ot,middleware:function(t){return t().concat(it.a)}});window.store=st,r.a.render(Object(q.jsx)(o.a.StrictMode,{children:Object(q.jsx)(h.a,{store:st,children:Object(q.jsx)(at,{})})}),document.getElementById("root")),d()},85:function(t,e,n){},86:function(t,e,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.b41b2d1c.chunk.js.map