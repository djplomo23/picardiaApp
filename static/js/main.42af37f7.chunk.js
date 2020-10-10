(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{138:function(e,t){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1),l=a(18),o=a.n(l),u=(a(93),a(3)),i=(a(94),a(32)),s=a.n(i);var m=a(6),d=a(2),p=a(5),E=a.n(p),f=a(7),v=a(74),g=a.n(v).a.create({baseURL:"https://backpicardias.herokuapp.com",headers:{"Content-Type":"application/json"},timeout:3e3}),b=function(){return function(){var e=Object(f.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"PRODUCT_LIST_REQUEST"}),e.next=4,g.get("/api/products");case 4:a=e.sent,n=a.data,t({type:"PRODUCT_LIST_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"PRODUCT_LIST_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()};var S=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),l=(a[0],a[1],Object(c.c)((function(e){return e.productList}))),o=l.products,i=l.loading,s=l.error,m=Object(c.b)();return Object(n.useEffect)((function(){return m(b()),function(){}}),[]),i?r.a.createElement("div",null,"Loading..."):s?r.a.createElement("div",null,s):r.a.createElement("ul",{className:"products"},o.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("div",{className:"product"},r.a.createElement(u.b,{to:"/product/"+e._id},r.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),r.a.createElement("div",{className:"product-name"},r.a.createElement(u.b,{to:"/product/"+e._id},e.name)),r.a.createElement("div",{className:"product-category"},r.a.createElement(u.b,{to:"/products/"+e.category},e.category)),r.a.createElement("div",{className:"product-brand"},e.brand),r.a.createElement("div",{className:"product-price"},"$",e.price),r.a.createElement("div",{className:"product-rating"})))})))},y=a(26),h=a(75),O=a.n(h);var _=function(e){var t=Object(n.useState)(1),a=Object(d.a)(t,2),l=a[0],o=a[1],i=Object(c.c)((function(e){return e.productDetails})),s=i.product,m=i.loading,p=i.error,v=Object(c.b)();return console.log(s),Object(n.useEffect)((function(){return v(function(e){return function(){var t=Object(f.a)(E.a.mark((function t(a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"PRODUCT_DETAILS_REQUEST",payload:e}),t.next=4,g.get("/api/products/"+e);case 4:n=t.sent,r=n.data,a({type:"PRODUCT_DETAILS_SUCCESS",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"PRODUCT_DETAILS_FAIL",payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(e.match.params.id)),function(){}}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"back-to-result"},r.a.createElement(u.b,{to:"/"},"Back to result")),m?r.a.createElement("div",null,"Loading..."):p?r.a.createElement("div",null,p," "):r.a.createElement("div",{className:"details "},r.a.createElement("div",null,r.a.createElement("div",{className:"details-image"},r.a.createElement("img",{className:"imgDetails",src:s.image,alt:"product"}))),r.a.createElement("div",{className:"details-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,s.name)),r.a.createElement("li",null,s.rating," Start (",s.numReviews," Reviews)"),r.a.createElement("li",null,"Price:",r.a.createElement("b",null,"$",s.price)))),r.a.createElement("div",{className:"details-action"},r.a.createElement("ul",null,r.a.createElement("li",null,"Price: ",s.price),r.a.createElement("li",null,"Status: ",s.countInStock>0?"In Stock":""),r.a.createElement("li",null,"Qty: ",r.a.createElement("select",{value:l,onChange:function(e){o(e.target.value)}},Object(y.a)(Array(s.countInStock).keys()).map((function(e){return r.a.createElement("option",{key:e+1,value:e+1},e+1)})))),r.a.createElement("li",null,s.countInStock>0&&r.a.createElement("button",{onClick:function(){e.history.push("/cart/"+e.match.params.id+"?qty="+l)},className:"button"},"Add To Cart")))),r.a.createElement("div",{className:"details-description"},r.a.createElement("li",null,"Description:",r.a.createElement("div",null,O()(s.description))))))},C=a(13),R=a.n(C),N=function(e,t){return function(){var a=Object(f.a)(E.a.mark((function a(n,r){var c,l,o,u;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g.get("/api/products/"+e);case 3:c=a.sent,l=c.data,n({type:"CART_ADD_ITEM",payload:{product:l._id,name:l.name,image:l.image,price:l.price,countInStock:l.countInStock,qty:t}}),o=r(),u=o.cart.cartItems,R.a.set("cartItems",JSON.stringify(u)),a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e,t){return a.apply(this,arguments)}}()};var I=function(e){var t=Object(c.c)((function(e){return e.cart})).cartItems,a=e.match.params.id,l=e.location.search?Number(e.location.search.split("=")[1]):1,o=Object(c.b)(),i=function(e){o(function(e){return function(t,a){t({type:"CART_REMOVE_ITEM",payload:e});var n=a().cart.cartItems;R.a.set("cartItems",JSON.stringify(n))}}(e))};return Object(n.useEffect)((function(){a&&o(N(a,l))}),[]),r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"cart-list"},r.a.createElement("ul",{className:"cart-list-container"},r.a.createElement("li",null,r.a.createElement("h3",null,"Shopping Cart"),r.a.createElement("div",null,"Price")),0===t.length?r.a.createElement("div",null,"Cart is emty"):t.map((function(e){return r.a.createElement("li",null,r.a.createElement("div",{className:"cart-image"},r.a.createElement("img",{src:e.image,alt:"product"})),r.a.createElement("div",{className:"cart-name"},r.a.createElement("div",null,r.a.createElement(u.b,{to:"/product/"+e.product},e.name)),r.a.createElement("div",null,"Qty:",r.a.createElement("select",{value:e.qty,onChange:function(t){return o(N(e.product,t.target.value))}},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3")),r.a.createElement("button",{type:"button",className:"button",onClick:function(){return i(e.product)}},"Delete"))),r.a.createElement("div",{className:"cart-price"},"$",e.price))})))),r.a.createElement("div",{className:"cart-action"},r.a.createElement("h3",null,"Subtotal ( ",t.reduce((function(e,t){return e+t.qty}),0)," items) : $ ",t.reduce((function(e,t){return e+t.price*t.qty}),0)),r.a.createElement("button",{onClick:function(){e.history.push("/signin?redirect=Shipping")},className:"button primary full-width",disabled:0===t.length},"Proceed to Checkout")))};var T=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),m=s[0],p=s[1],v=Object(c.c)((function(e){return e.userSignin})),b=v.loading,S=v.userInfo,y=v.error,h=Object(c.b)(),O=e.location.search?e.location.search.split("=")[1]:"/";return Object(n.useEffect)((function(){return S&&e.history.push(O),function(){}}),[S]),r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h(function(e,t){return function(){var a=Object(f.a)(E.a.mark((function a(n){var r,c;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"USER_SIGNIN_REQUEST",payload:{email:e,password:t}}),a.prev=1,a.next=4,g.post("/api/users/signin",{email:e,password:t});case 4:r=a.sent,c=r.data,n({type:"USER_SIGNIN_SUCCESS",payload:c}),R.a.set("userInfo",JSON.stringify(c)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n({type:"USER_SIGNIN_FAIL",payload:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()}(l,m))}},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Sign-In")),r.a.createElement("li",null,b&&r.a.createElement("div",null,"Loading..."),y&&r.a.createElement("div",null,y)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:function(e){return o(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:function(e){return p(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Signin")),r.a.createElement("li",null,"New To Picardia"),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"===O?"register":"register?redirect="+O,className:"button secondary text-center"},"Create your Picardia Account")))))},j=(a(156),a(76),function(){return function(){var e=Object(f.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"OFFER_LIST_REQUEST"}),e.next=4,g.get("/api/offers");case 4:a=e.sent,n=a.data,t({type:"OFFER_LIST_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"OFFER_LIST_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()});a(77),a(78);var U=function(e){return r.a.createElement("div",{className:"callToAction"},r.a.createElement("div",{className:"imgSuperP"}),r.a.createElement("div",{className:"descrtionSuper"}))};var A=function(e){return r.a.createElement("div",{className:"callToActionEmail"},r.a.createElement("label",null,"Suscribete Para Mas Ofertas"),r.a.createElement("form",null,r.a.createElement("input",{type:"email",placeholder:"Enter Email Address"}),r.a.createElement("button",{className:" secondary"},"Suscribete")))};var D=function(e){return r.a.createElement("div",{className:"envioSeccion"},r.a.createElement("div",null,r.a.createElement("h2",null,"Icono"),r.a.createElement("h3",null,"Free Delivery"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor")),r.a.createElement("div",null,r.a.createElement("h2",null,"Icono"),r.a.createElement("h3",null,"30 Day Return"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor")),r.a.createElement("div",null,r.a.createElement("h2",null,"Icono"),r.a.createElement("h3",null,"24/7 Support"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor")))};var L=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),m=s[0],p=s[1],v=Object(n.useState)(""),b=Object(d.a)(v,2),S=b[0],y=b[1],h=Object(n.useState)(""),O=Object(d.a)(h,2),_=(O[0],O[1]),C=Object(c.c)((function(e){return e.userRegister})),N=C.loading,I=C.userInfo,T=C.error,j=Object(c.b)(),U=e.location.search?e.location.search.split("=")[1]:"/";return Object(n.useEffect)((function(){return I&&e.history.push(U),function(){}}),[I]),r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j(function(e,t,a){return function(){var n=Object(f.a)(E.a.mark((function n(r){var c,l;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"USER_REGISTER_REQUEST",payload:{name:e,email:t,password:a}}),n.prev=1,n.next=4,g.post("/api/users/register",{name:e,email:t,password:a});case 4:c=n.sent,l=c.data,r({type:"USER_REGISTER_SUCCESS",payload:l}),R.a.set("userInfo",JSON.stringify(l)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),r({type:"USER_REGISTER_FAIL",payload:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}(l,m,S))}},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Create Acconunt")),r.a.createElement("li",null,N&&r.a.createElement("div",null,"Loading..."),T&&r.a.createElement("div",null,T)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",onChange:function(e){return o(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:function(e){return p(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:function(e){return y(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"rePassword"},"Re-Enter Password"),r.a.createElement("input",{type:"Password",id:"rePassword",name:"rePassword",onChange:function(e){return _(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Register")),r.a.createElement("li",null,"Already have an Account? ",r.a.createElement(u.b,{to:"/"===U?"signin":"signin?redirect="+U,className:"button secondary text-center"},"Create your Picardia Account")))))},P=a(79),x=a.n(P);var F=function(e){return r.a.createElement("div",{className:"reviewScreen"},r.a.createElement("div",null,r.a.createElement("h2",null,"Titulo"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor")),r.a.createElement("div",{className:"reviewPerfil"},r.a.createElement("img",{src:x.a}),r.a.createElement("h2",null,"Nombre")))};var k=function(e){return r.a.createElement("div",{className:"productosDestacados"},r.a.createElement("h2",null,"Productos Destacados"),r.a.createElement(S,null))},w=a(80),G=a.n(w),Q=a(81),V=a.n(Q);var M=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),l=a[0],o=a[1],u=Object(n.useState)(""),i=Object(d.a)(u,2),s=i[0],m=i[1],p=Object(n.useState)(""),v=Object(d.a)(p,2),S=v[0],y=v[1],h=Object(n.useState)(""),O=Object(d.a)(h,2),_=O[0],C=O[1],R=Object(n.useState)(""),N=Object(d.a)(R,2),I=N[0],T=N[1],j=Object(n.useState)(""),U=Object(d.a)(j,2),A=U[0],D=U[1],L=Object(n.useState)(""),P=Object(d.a)(L,2),x=P[0],F=P[1],k=Object(n.useState)(""),w=Object(d.a)(k,2),Q=w[0],M=w[1],q=Object(n.useState)(""),B=Object(d.a)(q,2),J=B[0],Y=B[1],$=Object(n.useState)(!1),z=Object(d.a)($,2),H=(z[0],z[1],Object(c.c)((function(e){return e.productList}))),W=(H.loading,H.products),X=(H.error,Object(c.c)((function(e){return e.productSave}))),K=X.loading,Z=X.success,ee=X.error,te=Object(c.c)((function(e){return e.productDelete})),ae=(te.loading,te.success),ne=(te.error,Object(c.b)());Object(n.useEffect)((function(){return Z&&o(!1),ne(b()),function(){}}),[Z,ae]);var re=function(e){o(!0),m(e._id),y(e.name),C(e.price),Y(e.description),T(e.image),D(e.brand),F(e.category),M(e.countInStock)},ce=function(e){var t;ne((t=e._id,function(){var e=Object(f.a)(E.a.mark((function e(a,n){var r,c,l,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n(),c=r.userSignin.userInfo,a({type:"PRODUCT_DELETE_REQUEST",payload:t}),e.next=5,g.delete("/api/products/"+t,{headers:{Authorization:c.token}});case 5:l=e.sent,o=l.data,a({type:"PRODUCT_DELETE_SUCCESS",payload:o,success:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:"PRODUCT_DELETE_FAIL",payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}()))};return r.a.createElement("div",{className:"content content-margined"},r.a.createElement("div",{className:"product-header"},r.a.createElement("h3",null,"Products"),r.a.createElement("button",{className:"button primary",onClick:function(){return re({})}},"Create Product")),l&&r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),ne((t={_id:s,name:S,price:_,image:I,brand:A,category:x,countInStock:Q,description:J},function(){var e=Object(f.a)(E.a.mark((function e(a,n){var r,c,l,o,u,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a({type:"PRODUCT_SAVE_REQUEST",payload:t}),r=n(),c=r.userSignin.userInfo,t._id){e.next=11;break}return e.next=6,g.post("/api/products",t,{headers:{Authorizatio:c.token}});case 6:l=e.sent,o=l.data,a({type:"PRODUCT_SAVE_SUCCESS",payload:o}),e.next=16;break;case 11:return e.next=13,g.put("/api/products/"+t._id,t,{headers:{Authorization:c.token}});case 13:u=e.sent,i=u.data,a({type:"PRODUCT_SAVE_SUCCESS",payload:i});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),a({type:"PRODUCT_SAVE_FAIL",payload:e.t0.message});case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,a){return e.apply(this,arguments)}}()))}},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Create Product")),r.a.createElement("li",null,K&&r.a.createElement("div",null,"Loading..."),ee&&r.a.createElement("div",null,ee)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:S||"",onChange:function(e){return y(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{type:"number",id:"price",name:"price",value:_||"",onChange:function(e){return C(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{type:"text",name:"image",value:I||"",id:"image",onChange:function(e){return T(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"brand"},"Brand"),r.a.createElement("input",{type:"text",name:"brand",id:"brand",value:A||"",onChange:function(e){return D(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",id:"category",value:x||"",onChange:function(e){return F(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"countInStock"},"stock"),r.a.createElement("input",{type:"text",name:"countInStock",id:"countInStock",value:Q||"",onChange:function(e){return M(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement(V.a,{name:"description",id:"description",editor:G.a,data:J||"",onInit:function(e){console.log("Editor is ready to use!",e)},onChange:function(e,t){var a=t.getData();Y(a),console.log({editor:t,data:a})}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},s?"Update":"Create")),r.a.createElement("li",null,r.a.createElement("button",{type:"button",onClick:function(){return o(!1)},className:"button secondary"},"Back"))))),r.a.createElement("div",{className:"product-list"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Brand"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,W.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("img",{src:e.image}),r.a.createElement("td",null,e._id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price," RD$"),r.a.createElement("td",null,e.category),r.a.createElement("td",null,e.brand),r.a.createElement("td",null,r.a.createElement("button",{className:"button",onClick:function(){return re(e)}},"Edit")," ",r.a.createElement("button",{className:"button",onClick:function(){return ce(e)}},"Delete")))}))))))};var q=function(e){return r.a.createElement("div",{className:"checkout-steps"},r.a.createElement("div",{className:e.step1?"active":""},"Signin"),r.a.createElement("div",{className:e.step2?"active":""},"Shipping"),r.a.createElement("div",{className:e.step3?"active":""},"Payment"),r.a.createElement("div",{className:e.step4?"active":""},"Place Order"))};var B=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],o=a[1],u=Object(n.useState)(""),i=Object(d.a)(u,2),s=(i[0],i[1]),m=Object(n.useState)(""),p=Object(d.a)(m,2),E=(p[0],p[1]),f=Object(n.useState)(""),v=Object(d.a)(f,2),g=(v[0],v[1]),b=Object(c.b)();return r.a.createElement("div",null,r.a.createElement(q,{step1:!0,step2:!0}),r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(t){var a;t.preventDefault(),b((a=l,function(e){e({type:"CART_SAVE_SHIPPING",payload:a})})),e.history.push("payment")}},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Shipping")),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",name:"address",id:"address",onChange:function(e){return o(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"city"},"City"),r.a.createElement("input",{type:"text",name:"city",id:"city",onChange:function(e){return s(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"postalCode"},"Postal Code"),r.a.createElement("input",{type:"text",name:"postalCode",id:"postalCode",onChange:function(e){return E(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"country"},"Country"),r.a.createElement("input",{type:"text",name:"country",id:"country",onChange:function(e){return g(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Continue"))))))};var J=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],o=a[1],u=Object(c.b)();return r.a.createElement("div",null,r.a.createElement(q,{step1:!0,step2:!0,step3:!0}),r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(t){var a;t.preventDefault(),u((a={paymentMethod:l},function(e){e({type:"CART_SAVE_PAYMENT",payload:a})})),e.history.push("placeorder")}},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Payment")),r.a.createElement("li",null,r.a.createElement("input",{type:"radio",name:"paymentMethod",id:"paymentMethod",value:"paypal",onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"paymentMethod"},"Paypal")),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Continue"))))))},Y=function(e){var t=e.children;return r.a.createElement("section",{className:"grid-container"},t)},$=function(){document.querySelector(".sidebar").classList.remove("open"),document.querySelector(".header").classList.remove("button-ocurto"),document.querySelector("body").classList.remove("stop")},z=function(e){return r.a.createElement("nav",{className:"sidebar"},r.a.createElement("h3",null,"Category"),r.a.createElement("button",{className:"sidebar-close-buttom",onClick:$},"x"),r.a.createElement("ul",null))},H=a(82),W=a.n(H),X=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{src:W.a,alt:"logo"})),r.a.createElement("h3",null,"All right reserved."))},K=function(e){var t=e.children;return r.a.createElement("main",{className:"main"},t)};var Z=function(){document.querySelector(".sidebar").classList.add("open"),document.querySelector(".header").classList.add("button-ocurto"),document.querySelector("body").classList.add("stop")},ee=function(){var e=Object(c.c)((function(e){return e.userSignin})).userInfo;return r.a.createElement("header",{className:"header",id:"header"},r.a.createElement("div",{className:"brand"},r.a.createElement("button",{id:"btnMenu",onClick:Z},"\u2630"),r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{src:s.a,alt:"logo"}))),r.a.createElement("div",{className:"header-links"},r.a.createElement("a",{href:"cart.html"},"Cart"),e?r.a.createElement(u.b,{to:"/profile"},e.name):r.a.createElement(u.b,{to:"/signin"},"Sign-In")))},te=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],o=a[1],u=Object(n.useState)(""),i=Object(d.a)(u,2),s=i[0],m=i[1],p=Object(n.useState)(""),v=Object(d.a)(p,2),b=v[0],S=v[1],y=Object(n.useState)(""),h=Object(d.a)(y,2),O=h[0],_=h[1],C=Object(c.c)((function(e){return e.offerList})),R=(C.loading,C.offers,C.error,Object(c.c)((function(e){return e.offerSave}))),N=(R.loading,R.success),I=(R.error,Object(c.c)((function(e){return e.offerDelete}))),T=(I.loading,I.success),U=(I.error,Object(c.b)());Object(n.useEffect)((function(){return U(j()),function(){}}),[N,T]);return r.a.createElement("div",null,r.a.createElement("div",{className:"product-header"},r.a.createElement("h3",null,"Products"),r.a.createElement("button",{className:"button primary",onClick:function(){return o((e={})._id),m(e.name),S(e.tittle),void _(e.image);var e}},"Create Product")),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),U((t={_id:l,name:s,tittle:b,image:O},function(){var e=Object(f.a)(E.a.mark((function e(a,n){var r,c,l,o,u,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a({type:"OFFER_SAVE_REQUEST",payload:t}),r=n(),c=r.userSignin.userInfo,t._id){e.next=11;break}return e.next=6,g.post("/api/offers",t,{headers:{Authorizatio:c.token}});case 6:l=e.sent,o=l.data,a({type:"OFFER_SAVE_SUCCESS",payload:o}),e.next=17;break;case 11:return e.next=13,g.put("/api/offers/"+t._id,t,{headers:{Authorization:c.token}});case 13:u=e.sent,i=u.data,console.log(c),a({type:"OFFER_SAVE_SUCCESS",payload:i});case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),a({type:"OFFER_SAVE_FAIL",payload:e.t0.message});case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,a){return e.apply(this,arguments)}}()))},className:"formOffers"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("input",{type:"text",name:"tittle",id:"tittle",value:s||"",onChange:function(e){return S(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("input",{type:"text",name:"image",id:"image",required:!0,value:O||"",onChange:function(e){return _(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},l?"Update":"Create")),r.a.createElement("li",null,r.a.createElement("button",{type:"button",className:"button secondary"},"Back"))))))};var ae=function(e){var t=Object(c.c)((function(e){return e.productCategory})),a=t.productsCategory,l=t.loading,o=t.error,i=Object(c.b)();return Object(n.useEffect)((function(){return i(function(e){return function(){var t=Object(f.a)(E.a.mark((function t(a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"PRODUCT_CATEGORY_REQUEST"}),t.next=4,g.get("/api/products/"+e);case 4:n=t.sent,r=n.data,a({type:"PRODUCT_CATEGORY_SUCCESS",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"PRODUCT_CATEGORY_FAIL",payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(e.match.params.category)),function(){}}),[]),l?r.a.createElement("div",null,"Loading..."):o?r.a.createElement("div",null,o):r.a.createElement("ul",{className:"products"},a.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("div",{className:"product"},r.a.createElement(u.b,{to:"/product/"+e._id},r.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),r.a.createElement("div",{className:"product-name"},r.a.createElement(u.b,{to:"/product/"+e._id},e.name)),r.a.createElement("div",{className:"product-category"},r.a.createElement(u.b,{to:"/products/"+e.category},e.category)),r.a.createElement("div",{className:"product-brand"},e.brand),r.a.createElement("div",{className:"product-price"},"$",e.price),r.a.createElement("div",{className:"product-rating"})))})))};var ne=function(){return r.a.createElement(u.a,null,r.a.createElement(Y,{className:"grid-container"},r.a.createElement(ee,null),r.a.createElement(z,null),r.a.createElement(K,{className:"main"},r.a.createElement("div",{className:"content"},r.a.createElement(m.a,{path:"/products",exact:!0,component:M}),r.a.createElement(m.a,{path:"/shipping",exact:!0,component:B}),r.a.createElement(m.a,{path:"/payment",exact:!0,component:J}),r.a.createElement(m.a,{path:"/signin",exact:!0,component:T}),r.a.createElement(m.a,{path:"/register",exact:!0,component:L}),r.a.createElement(m.a,{path:"/product/:id",exact:!0,component:_}),r.a.createElement(m.a,{path:"/cart/:id?",exact:!0,component:I}),r.a.createElement(m.a,{path:"/",exact:!0,component:S}),r.a.createElement(m.a,{path:"/",exact:!0,component:U}),r.a.createElement(m.a,{path:"/",exact:!0,component:k}),r.a.createElement(m.a,{path:"/",exact:!0,component:F}),r.a.createElement(m.a,{path:"/",exact:!0,component:D}),r.a.createElement(m.a,{path:"/",exact:!0,component:A}),r.a.createElement(m.a,{path:"/offers",exact:!0,component:te}),r.a.createElement(m.a,{path:"/products/category",exact:!0,component:ae}))),r.a.createElement(X,null)))};var re=function(){return r.a.createElement(u.a,null,r.a.createElement(ne,null))},ce=a(14),le=a(83);var oe=a(21);var ue={cart:{cartItems:R.a.getJSON("cartItems")||[]},userSignin:{userInfo:R.a.getJSON("userInfo")||null}},ie=Object(ce.c)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_LIST_REQUEST":return{loading:!0,products:[]};case"PRODUCT_LIST_SUCCESS":return{loading:!1,products:t.payload};case"PRODUCT_LIST_FAIL":return{loading:!0,error:t.playload};default:return e}},productCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{productsCategory:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_CATEGORY_REQUEST":return{loading:!0,productsCategory:[]};case"PRODUCT_CATEGORY_SUCCESS":return{loading:!1,productsCategory:t.payload};case"PRODUCT_CATEGORY_FAIL":return{loading:!0,error:t.playload};default:return e}},offerList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{offers:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OFFER_LIST_REQUEST":return{loading:!0,offers:[]};case"OFFER_LIST_SUCCESS":return{loading:!1,offers:t.payload};case"OFFER_LIST_FAIL":return{loading:!0,error:t.playload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DETAILS_REQUEST":return{loading:!0};case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,product:t.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:t.playload};default:return e}},productSearchs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchs:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_SEARCH_REQUEST":return{loading:!0,searchs:[]};case"PRODUCT_SEARCH_SUCCESS":return{loading:!1,searchs:t.payload};case"PRODUCT_SEARCH_FAIL":return{loading:!0,error:t.playload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ADD_ITEM":var a=t.payload,n=e.cartItems.find((function(e){return e.product===a.product}));return n?{cartItems:e.cartItems.map((function(e){return e.product===n.product?a:e}))}:{cartItems:[].concat(Object(y.a)(e.cartItems),[a])};case"CART_REMOVE_ITEM":return{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))};case"CART_SAVE_SHIPPING":return Object(oe.a)(Object(oe.a)({},e),{},{shipping:t.payload});case"CART_SAVE_PAYMENT":return Object(oe.a)(Object(oe.a)({},e),{},{payment:t.payload});default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SIGNIN_REQUEST":return{loading:!0};case"USER_SIGNIN_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_SIGNIN_FAIL":return{loading:!1,error:t.payload};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:t.payload};default:return e}},productSave:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_SAVE_REQUEST":return{loading:!0};case"PRODUCT_SAVE_SUCCESS":return{loading:!1,success:!0,product:t.payload};case"PRODUCT_SAVE_FAIL":return{loading:!1,error:t.playload};default:return e}},productDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DELETE_REQUEST":return{loading:!0};case"PRODUCT_DELETE_SUCCESS":return{loading:!1,product:t.payload,success:!0};case"PRODUCT_DELETE_FAIL":return{loading:!1,error:t.playload};default:return e}},offerSave:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{offers:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OFFER_SAVE_REQUEST":return{loading:!0};case"OFFER_SAVE_SUCCESS":return{loading:!1,success:!0,offers:t.payload};case"OFFER_SAVE_FAIL":return{loading:!1,error:t.playload};default:return e}},offerDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{offers:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OFFER_DELETE_REQUEST":return{loading:!0};case"OFFER_DELETE_SUCCESS":return{loading:!1,offers:t.payload,success:!0};case"OFFER_DELETE_FAIL":return{loading:!1,error:t.playload};default:return e}}}),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,me=Object(ce.e)(ie,ue,se(Object(ce.a)(le.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,{store:me},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,a){e.exports=a.p+"static/media/LOGO-PICARDIA-NEGRO.d4fd60af.png"},77:function(e,t,a){e.exports=a.p+"static/media/Offer1.1735c3c6.png"},78:function(e,t,a){e.exports=a.p+"static/media/esposas.da0a133b.png"},79:function(e,t,a){e.exports=a.p+"static/media/rostro.61bd2cdf.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/LOGO-PICARDIA--BLANCO.c782774f.png"},84:function(e,t,a){e.exports=a(180)},93:function(e,t,a){},94:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.42af37f7.chunk.js.map