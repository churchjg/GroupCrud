(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{63:function(e,t,n){},65:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n(0),i=n(23),r=n.n(i),c=n(14),a=(n(63),n(38)),l=n.n(a),d=n(53),h=n(9),p=n(10),j=n(12),u=n(11),b=(n(65),n(66),n(93)),m=n(92),x=n(54),g=n(33),A=n(24),O=n(26),v=n(6),f=n(13),C=n(7),y=(n(67),n(39)),w=n(27),L=n.n(w),k=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(h.a)(this,n),(o=t.call(this,e)).inputChange=function(e){console.log(e.target.value),o.setState({input:e.target.value})},o.dropdownChange=function(e){o.setState({dropdown:e.target.value})},o.submitForm=function(e){e.preventDefault(),""!==o.state.dropdown&&""!==o.state.input?o.props.sendInput(o.state):alert("Please select an account option")},o.onOpenModal=function(){o.setState({sign:!0})},o.onOpenModalLogin=function(){o.setState({login:!0})},o.onCloseModal=function(){o.setState({sign:!1})},o.onCloseModalclose=function(){o.setState({login:!1})},o.state={input:"",dropdown:"",sign:!1,login:!1,email:"",password:"",isLoggedIn:!1},o.handleLogOut=o.handleLogOut.bind(Object(O.a)(o)),o.handleInput=o.handleInput.bind(Object(O.a)(o)),o.handleLogIn=o.handleLogIn.bind(Object(O.a)(o)),o.handleSignUp=o.handleSignUp.bind(Object(O.a)(o)),o}return Object(p.a)(n,[{key:"componentDidMount",value:function(){localStorage.token?this.setState({isLoggedIn:!0}):this.setState({isLoggedIn:!1})}},{key:"handleLogOut",value:function(){this.setState({email:"",password:"",isLoggedIn:!1}),localStorage.clear()}},{key:"handleInput",value:function(e){this.setState(Object(A.a)({},e.target.name,e.target.value))}},{key:"handleSignUp",value:function(e){var t=this;e.preventDefault(),L.a.post("http://localhost:4000/auth/signup",{headers:{"Content-Type":"application/json"},email:this.state.email,password:this.state.password}).then((function(e){localStorage.token=e.data.token,t.setState({isLoggedIn:!0})})).catch((function(e){return console.log(e)}))}},{key:"handleLogIn",value:function(e){var t=this;e.preventDefault(),L.a.post("http://localhost:52458/auth/login",{email:this.state.email,password:this.state.password}).then((function(e){localStorage.token=e.data.token,t.setState({isLoggedIn:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.login,n=e.sign;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(v.a,{inline:!0,onSubmit:this.submitForm,children:[Object(o.jsx)(f.a,{style:{margin:5,fontWeight:"bold",backgroundColor:"#F5F5F5",color:"red",border:"2px solid red"},size:"md",type:"submit",onClick:this.onOpenModal,children:"Sign Up"}),Object(o.jsx)(f.a,{style:{margin:5,fontWeight:"bold",backgroundColor:"#F5F5F5",color:"#333333",border:"2px solid red"},size:"md",type:"submit",onClick:this.onOpenModalLogin,children:"Login"}),Object(o.jsx)(f.a,{style:{margin:5,fontWeight:"bold",backgroundColor:"#F5F5F5",color:"#333333",border:"2px solid red",marginRight:"125px"},size:"md",type:"submit",onClick:this.handleLogOut,children:"Logout"})]}),Object(o.jsx)(y.a,{open:n,onClose:this.onCloseModal,children:Object(o.jsxs)("div",{className:"modal-body",children:[Object(o.jsxs)("h2",{children:["Get Started Absolutely",Object(o.jsx)("span",{children:" Free!"})]}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"form-group text-left",children:[Object(o.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(o.jsx)("input",{type:"email",onChange:this.handleInput,className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(o.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(o.jsxs)("div",{className:"form-group text-left",children:[Object(o.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(o.jsx)("input",{type:"password",onChange:this.handleInput,className:"form-control",id:"password",placeholder:"Password"})]}),Object(o.jsx)("button",{type:"submit",onClick:this.handleSignUp,className:"btn btn-primary",children:"Register"})]})]})}),Object(o.jsx)(y.a,{open:t,onClose:this.onCloseModalclose,children:Object(o.jsxs)("div",{className:"modal-body",children:[Object(o.jsxs)("h2",{children:["Login and Get ",Object(o.jsx)("span",{children:"Started"})]}),Object(o.jsx)("span",{className:"subtitle",children:"Just fill in the form below"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"form-group text-left",children:[Object(o.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(o.jsx)("input",{type:"email",onChange:this.handleInput,className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(o.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(o.jsxs)("div",{className:"form-group text-left",children:[Object(o.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(o.jsx)("input",{type:"password",onChange:this.handleInput,className:"form-control",id:"password",placeholder:"Password"})]}),Object(o.jsx)("button",{type:"submit",onClick:this.handleLogIn,className:"btn btn-primary",children:"Log in"})]})]})})]})}}]),n}(s.Component),S=Object(C.e)(k);var I=function(e){return Object(o.jsxs)(g.a,{style:{height:"100%",paddingLeft:40,borderBottom:"3px solid #333333",backgroundImage:"url(".concat("data:image/jpeg;base64,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",") "),backgroundPosition:"cover"},className:"justify-content-between",children:[Object(o.jsx)(g.a.Brand,{as:c.b,to:"/",style:{color:"red"}}),Object(o.jsx)(g.a.Text,{style:{color:"red",paddingTop:50,textAlign:"bottom",opacity:"0"},children:Object(o.jsx)("h2",{children:"MOVIE.INC"})}),Object(o.jsx)(S,{style:{alignItems:"center",marginRight:"50px"},sendInput:e.sendInput})]})},T=n(18);var E=function(e){return Object(o.jsx)(T.a,{style:{padding:"50px 40px",backgroundColor:"#D3D3D3"},children:Object(o.jsxs)(T.a.Item,{children:[Object(o.jsx)("h2",{style:{textDecoration:"underline",marginTop:"50px",marginBottom:"20px"},children:"Browse Collections"}),Object(o.jsxs)("h5",{style:{textDecoration:"none"},children:[Object(o.jsx)(T.a.Link,{as:c.b,to:"/",onClick:function(){return e},children:"Home"}),Object(o.jsx)(T.a.Link,{as:c.b,to:"/movies",onClick:function(){return e.loadList},children:"Title"})]}),Object(o.jsx)("h2",{style:{textDecoration:"underline"},children:"Advanced Options"}),Object(o.jsxs)("h5",{style:{textDecoration:"none"},children:[Object(o.jsx)(T.a.Link,{as:c.b,to:"/collections",children:"Add a New Collection "}),Object(o.jsx)(T.a.Link,{as:c.b,to:"/collections/slug",children:"Update a Collection "}),Object(o.jsx)(T.a.Link,{as:c.b,to:"/collections/slug",children:"Delete a Collection "}),Object(o.jsx)(T.a.Link,{as:c.b,to:"/reviews",children:"Add a New Review"}),Object(o.jsx)(T.a.Link,{as:c.b,to:"/reviews/:id",children:"Update a Review"}),Object(o.jsx)(T.a.Link,{as:c.b,to:"/reviews/:id",children:"Delete a Review"})]})]})})},F=n.p+"static/media/moviePoster.95dd2384.jpg",D=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(h.a)(this,n),(o=t.call(this,e)).fetchMovies=function(){fetch("".concat("https://mernmovies.herokuapp.com/api/collections","/")).then((function(e){return e.json()})).then((function(e){console.log(e),o.setState({ready:!0,movies:e})}))},o.componentDidMount=function(){o.fetchMovies()},o.state={movies:[]},o}return Object(p.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{style:{width:"120%",height:"100vh",color:"red",paddingTop:10,marginRight:"500px",backgroundColor:"#D3D3D3",textAlign:"center",border:".5px dotted black"},children:[Object(o.jsx)("h1",{children:"MOVIE.INC"}),Object(o.jsxs)(m.a,{style:{height:"60%",width:"85%",marginTop:15,color:"black",textAlign:"center"},noGutters:!0,children:[Object(o.jsx)(x.a,{xs:"3",style:{marginTop:5,border:"5px solid red",textAlign:"center"},children:Object(o.jsx)(E,{selectList:this.selectList})}),Object(o.jsx)(x.a,{style:{width:"20%",height:"auto",marginTop:"0"},children:Object(o.jsx)("img",{src:F,alt:" pic"})})]})]})}}]),n}(s.Component),N=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).setType=function(){return"POST"===s.props.method?Object(o.jsx)("h4",{children:"Please enter the details of what you wish to add!"}):"PATCH"===s.props.method?Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("h4",{children:"Please enter the details you wish to update!"}),Object(o.jsx)(v.a.Control,{type:"input",placeholder:"Name (required)",name:"add",onChange:s.pleaseWork})]}):"DELETE"===s.props.method?Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("h4",{children:"Please enter the name of the collection you wish to delete."}),Object(o.jsx)(v.a.Control,{type:"input",placeholder:"Name (required)",name:"delete",onChange:s.pleaseWork})]}):void 0},s.setForm=function(){if("DELETE"!==s.props.method)return Object(o.jsxs)("div",{children:[Object(o.jsx)(v.a.Control,{size:"md",type:"input",placeholder:"Title",name:"title",onChange:s.inputChange}),Object(o.jsx)("h5",{style:{margin:"10px"},children:"Is this a Professional Collection?"}),Object(o.jsx)(v.a.Check,{inline:!0,size:"md",type:"radio",name:"released",label:"Yes",onClick:function(){return s.setCheckbox("released",!0)}}),Object(o.jsx)(v.a.Check,{inline:!0,size:"md",type:"radio",name:"released",label:"No",onClick:function(){return s.setCheckbox("released",!0)}}),Object(o.jsx)(v.a.Control,{size:"md",type:"input",placeholder:"Titles",name:"title",onChange:s.inputChange}),Object(o.jsx)(v.a.Control,{size:"md",type:"input",placeholder:"Major Genre",name:"genre",onChange:s.inputChange}),Object(o.jsx)(v.a.Control,{size:"md",type:"input",placeholder:"Creative Type (Fantasy, Historial Fiction, etc.) ",name:"creative",onChange:s.inputChange}),Object(o.jsx)(v.a.Control,{size:"md",type:"input",placeholder:"Release Date",name:"date",onChange:s.inputChange}),Object(o.jsx)(v.a.Control,{size:"md",type:"input",placeholder:"Movie Poster",name:"image",onChange:s.inputChange})]})},s.inputChange=function(e){s.setState(Object(A.a)({},e.target.name,e.target.value))},s.pleaseWork=function(e){s.setState({name:e.target.value})},s.setCheckbox=function(e,t){s.setState(Object(A.a)({},e,t))},s.checkImage=function(e){if(e.preventDefault(),s.state.image){var t=s.state.image.split(",").map((function(e){return e.trim()}));s.setState({image:t},(function(){s.submitForm(e)}))}else s.submitForm(e)},s.submitForm=function(e){console.log(s.props);var t="";t="POST"===s.props.method?"https://mernmovies.herokuapp.com/api/collections".concat(s.props.type):(s.props.method,"https://mernmovies.herokuapp.com/api/collections/:slug".concat(s.props.type).concat(s.state.name)),console.log(t);var n={method:s.props.method,headers:{"Content-Type":"application/json"},body:JSON.stringify(s.state)};fetch(t,n).then((function(e){return e.json()})).then((function(e){console.log(e),s.props.onSuccess({newTitle:e.Title,success:!0})})).catch((function(e){console.log(e)}))},s.state={},s}return Object(p.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(m.a,{style:{height:"60%",width:"100%",marginTop:15,color:"black",textAlign:"center"},noGutters:!0,children:[Object(o.jsx)(x.a,{xs:"4",style:{marginTop:5,border:"5px solid red",textAlign:"center"},children:Object(o.jsx)(E,{selectList:this.selectList})}),Object(o.jsx)(x.a,{style:{width:"60%",height:"auto",marginTop:"0"},children:Object(o.jsx)("div",{style:{width:"100%",height:"60vh",marginLeft:"150px",border:"3px solid blue",padding:"25px"},children:Object(o.jsxs)(v.a,{size:"lg",onSubmit:this.checkImage,children:[this.setType(),this.setForm(),Object(o.jsx)(f.a,{style:{marginTop:50,backgroundColor:"#F5F5F5",color:"#333333",fontWeight:"bold",border:"2px solid green"},type:"submit",children:"Submit"})]})})})]})}}]),n}(s.Component),q=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).onSuccess=function(e){console.log("success fired"),s.setState({success:e.success,newTitle:e.newTitle})},s.successDisplay=function(){return"POST"===s.props.method?Object(o.jsxs)("div",{style:{margin:20,alignItems:"center",textAlign:"center",marginLeft:"250px"},children:[Object(o.jsxs)("h3",{children:["Success! Your collection has been added. ",s.state.newTitle]}),Object(o.jsx)(f.a,{style:{marginTop:20,backgroundColor:"#F5F5F5",color:"green",border:"2px solid black"},type:"button",onClick:s.resetPage,children:"Add More"})]}):"PATCH"===s.props.method?Object(o.jsxs)("div",{style:{margin:20,alignItems:"center",textAlign:"center",marginLeft:"250px"},children:[Object(o.jsx)("h3",{children:"Success! Your collection has been updated."}),Object(o.jsx)(f.a,{style:{marginTop:20,backgroundColor:"#F5F5F5",color:"green",border:"2px solid black"},type:"button",onClick:s.resetPage,children:"Make Another Update"})]}):"DELETE"===s.props.method?Object(o.jsxs)("div",{style:{margin:20,alignItems:"center",textAlign:"center",marginLeft:"250px"},children:[Object(o.jsx)("h3",{children:"Success! Your collection has been deleted."}),Object(o.jsx)(f.a,{style:{marginTop:20,backgroundColor:"#F5F5F5",color:"green",border:"2px solid black"},type:"button",onClick:s.resetPage,children:"Make Another Deletion"})]}):void 0},s.setFormType=function(e){e.preventDefault(),s.setState({type:e.target.value})},s.resetPage=function(){console.log("fired"),s.setState(s.baseState)},s.formType=function(){return"POST"===s.props.method?Object(o.jsx)("h3",{style:{margin:"20px"},children:'Choose "Add" in the Dropdown Menu to create a new Collection'}):"PATCH"===s.props.method?Object(o.jsx)("h3",{style:{margin:"20px"},children:'Click "Update" in the Dropdown Menu to update a Collection '}):"DELETE"===s.props.method?Object(o.jsx)("h3",{style:{margin:"20px"},children:'Select "Delete" in the Dropdown Menu to delete a Collection '}):void 0},s.displayForm=function(){return"movieInfo"===s.state.type?Object(o.jsx)(N,{type:s.state.type,method:s.state.method,onSuccess:s.onSuccess}):null},s.state={newTitle:"",success:"",type:"",method:s.props.method},s.baseState={newTitle:"",success:"",type:"",method:s.state.method},s}return Object(p.a)(n,[{key:"render",value:function(){return!0!==this.state.success?Object(o.jsxs)("div",{style:{width:"60%",marginLeft:20},children:[this.formType(),Object(o.jsx)(v.a,{style:{marginBottom:10},children:Object(o.jsxs)(v.a.Control,{size:"md",as:"select",id:"basic-nav-dropdown",name:"movieInfo",onChange:this.setFormType,children:[Object(o.jsx)("option",{children:"Select"}),Object(o.jsx)("option",{value:"movieInfo",children:"Add"}),Object(o.jsx)("option",{value:"movieInfo",children:"Update"}),Object(o.jsx)("option",{style:{color:"red"},value:"movieInfo",children:"Delete"})]})}),this.displayForm()]}):Object(o.jsxs)("div",{style:{width:"%%",height:"100vh",color:"red",paddingTop:10,textAlign:"center",border:".5px dotted black"},children:[Object(o.jsx)("h1",{children:"MOVIE.INC"}),Object(o.jsxs)(m.a,{style:{height:"60%",width:"100%",marginTop:15,color:"black",textAlign:"center"},noGutters:!0,children:[Object(o.jsx)(x.a,{xs:"3",style:{marginTop:5,marginLeft:"2px",border:"5px solid red",textAlign:"center"},children:Object(o.jsx)(E,{selectList:this.selectList})}),this.successDisplay()]})]})}}]),n}(s.Component),U=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).setType=function(){return"POST"===s.props.method?Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("h4",{children:"Please enter the details of the review you wish to add."}),Object(o.jsx)(v.a.Control,{type:"input",placeholder:"Title (required)",name:"reviewInfo0",onChange:s.pleaseWork})]}):"PATCH"===s.props.method?Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("h4",{children:"Please enter the details you wish to update!"}),Object(o.jsx)(v.a.Control,{type:"input",placeholder:"Title (required)",name:"reviewInfo1",onChange:s.pleaseWork})]}):"DELETE"===s.props.method?Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("h4",{children:"Please enter the title of the review you wish to delete."}),Object(o.jsx)(v.a.Control,{type:"input",placeholder:"Title (required)",name:"reviewInfo2",onChange:s.pleaseWork})]}):void 0},s.setReviewForm=function(){if("DELETE"!==s.props.method)return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{style:{margin:"10px"},children:"What is your rating?"}),Object(o.jsx)(v.a.Check,{inline:!0,size:"md",type:"radio",name:"audience",label:"1",onClick:function(){return s.setCheckbox("audience",!0)}}),Object(o.jsx)(v.a.Check,{inline:!0,size:"md",type:"radio",name:"audience",label:"2",onClick:function(){return s.setCheckbox("audience",!0)}}),Object(o.jsx)(v.a.Check,{inline:!0,size:"md",type:"radio",name:"audience",label:"3",onClick:function(){return s.setCheckbox("audience",!0)}}),Object(o.jsx)(v.a.Check,{inline:!0,size:"md",type:"radio",name:"audience",label:"4",onClick:function(){return s.setCheckbox("audience",!0)}}),Object(o.jsx)(v.a.Check,{inline:!0,size:"md",type:"radio",name:"audience",label:"5",onClick:function(){return s.setCheckbox("audience",!0)}}),Object(o.jsx)(v.a.Control,{size:"md",type:"input",placeholder:"Title",name:"title",onChange:s.inputChange}),Object(o.jsx)(v.a.Control,{size:"md",type:"input",placeholder:"Your Review (Up to 100 characters)",name:"review",onChange:s.inputChange})]})},s.inputChange=function(e){s.setState(Object(A.a)({},e.target.name,e.target.value))},s.pleaseWork=function(e){s.setState({name:e.target.value})},s.setCheckbox=function(e,t){s.setState(Object(A.a)({},e,t))},s.checkImage=function(e){if(e.preventDefault(),s.state.image){var t=s.state.image.split(",").map((function(e){return e.trim()}));s.setState({image:t},(function(){s.submitReviewForm(e)}))}else s.submitReviewForm(e)},s.submitReviewForm=function(e){console.log(s.props);var t="";t="POST"===s.props.method?"https://mernmovies.herokuapp.com/api/reviews".concat(s.props.type):(s.props.method,"https://mernmovies.herokuapp.com/api/reviews/:id".concat(s.props.type).concat(s.state.name)),console.log(t);var n={method:s.props.method,headers:{"Content-Type":"application/json"},body:JSON.stringify(s.state)};fetch(t,n).then((function(e){return e.json()})).then((function(e){console.log(e),s.props.onSuccess({newTitle:e.Title,success:!0})})).catch((function(e){console.log(e)}))},s.state={},s}return Object(p.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(m.a,{style:{height:"60%",width:"100%",marginTop:15,color:"black",textAlign:"center"},noGutters:!0,children:[Object(o.jsx)(x.a,{xs:"4",style:{marginTop:5,border:"5px solid red",textAlign:"center"},children:Object(o.jsx)(E,{selectList:this.selectList})}),Object(o.jsx)(x.a,{style:{width:"50%",height:"auto",marginTop:"0"},children:Object(o.jsx)("div",{style:{width:"100%",height:"auto",marginLeft:"150px",border:"2px solid blue",padding:"25px"},children:Object(o.jsxs)(v.a,{onSubmit:this.checkImage,children:[this.setType(),this.setReviewForm(),Object(o.jsx)(f.a,{style:{marginTop:40,backgroundColor:"#F5F5F5",color:"#333333",border:"2px solid green"},type:"submit",children:"Submit"})]})})})]})}}]),n}(s.Component),R=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).onSuccess=function(e){console.log("success fired"),s.setState({success:e.success,newTitle:e.newTitle})},s.successDisplay=function(){return"POST"===s.props.method?Object(o.jsxs)("div",{style:{margin:20,alignItems:"center",textAlign:"center",marginLeft:"250px"},children:[Object(o.jsx)("h3",{children:"Success! Your item has been added."}),Object(o.jsx)(f.a,{style:{marginTop:20,backgroundColor:"#F5F5F5",color:"green",border:"2px solid black"},type:"button",onClick:s.resetPage,children:"Add More"})]}):"PATCH"===s.props.method?Object(o.jsxs)("div",{style:{margin:20,alignItems:"center",textAlign:"center",marginLeft:"270px"},children:[Object(o.jsx)("h3",{children:"Success! Your update is complete!"}),Object(o.jsx)(f.a,{style:{marginTop:20,backgroundColor:"#F5F5F5",color:"green",border:"2px solid black"},type:"button",onClick:s.resetPage,children:"Make Another Update"})]}):"DELETE"===s.props.method?Object(o.jsxs)("div",{style:{margin:20,alignItems:"center",textAlign:"center",marginLeft:"270px"},children:[Object(o.jsx)("h3",{children:"Success! Your item has been deleted."}),Object(o.jsx)(f.a,{style:{marginTop:20,backgroundColor:"#F5F5F5",color:"green",border:"2px solid black"},type:"button",onClick:s.resetPage,children:"Make Another Deletion"})]}):void 0},s.setFormType=function(e){e.preventDefault(),s.setState({type:e.target.value})},s.resetPage=function(){console.log("fired"),s.setState(s.baseState)},s.formType=function(){return"POST"===s.props.method?Object(o.jsx)("h3",{style:{margin:"20px"},children:'Choose "Add" in the Dropdown Menu to create a new Review'}):"PATCH"===s.props.method?Object(o.jsx)("h3",{style:{margin:"20px"},children:'Click "Update" in the Dropdown Menu to update a Review '}):"DELETE"===s.props.method?Object(o.jsx)("h3",{style:{margin:"20px"},children:'Select "Delete" in the Dropdown Menu to delete a Review '}):void 0},s.displayForm=function(){return"reviewInfo"===s.state.type?Object(o.jsx)(U,{type:s.state.type,method:s.state.method,onSuccess:s.onSuccess}):null},s.state={newTitle:"",success:"",type:"",method:s.props.method},s.baseState={newTitle:"",success:"",type:"",method:s.state.method},s}return Object(p.a)(n,[{key:"render",value:function(){return!0!==this.state.success?Object(o.jsxs)("div",{style:{width:"60%",marginLeft:20},children:[this.formType(),Object(o.jsx)(v.a,{style:{marginBottom:10},children:Object(o.jsxs)(v.a.Control,{size:"md",as:"select",id:"basic-nav-dropdown",name:"reviewInfo",onChange:this.setFormType,children:[Object(o.jsx)("option",{children:"Select"}),Object(o.jsx)("option",{value:"reviewInfo",children:"Add"}),Object(o.jsx)("option",{value:"reviewInfo",children:"Update"}),Object(o.jsx)("option",{style:{color:"red"},value:"reviewInfo",children:"Delete"})]})}),this.displayForm()]}):Object(o.jsxs)("div",{style:{width:"%%",height:"100vh",color:"red",paddingTop:10,textAlign:"center",border:".5px dotted black"},children:[Object(o.jsx)("h1",{children:"MOVIE.INC"}),Object(o.jsxs)(m.a,{style:{height:"60%",width:"100%",marginTop:15,color:"black",textAlign:"center"},noGutters:!0,children:[Object(o.jsx)(x.a,{xs:"3",style:{marginTop:5,marginLeft:"2px",border:"5px solid red",textAlign:"center"},children:Object(o.jsx)(E,{selectList:this.selectList})}),this.successDisplay()]})]})}}]),n}(s.Component),M=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(h.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){return console.log("we are in title",this.props),Object(o.jsx)(b.a,{style:{width:"150%"},children:Object(o.jsxs)("div",{style:{width:"120%",height:"100vh",color:"red",paddingTop:10,backgroundColor:"#D3D3D3",textAlign:"center",border:".5px dotted black"},children:[Object(o.jsx)("h1",{children:"MOVIE.INC"}),Object(o.jsxs)(m.a,{style:{height:"80%",width:"100%",marginTop:5,color:"black",textAlign:"center"},noGutters:!0,children:[Object(o.jsx)(x.a,{xs:"3",style:{marginTop:5,border:"5px solid red",textAlign:"center"},children:Object(o.jsx)(E,{selectList:this.selectList})}),Object(o.jsx)(x.a,{children:Object(o.jsx)("div",{style:{textAlign:"center"},children:Object(o.jsxs)("ul",{style:{listStyle:"none",fontSize:"20px",paddingTop:20,textAlign:"center"},children:[Object(o.jsx)("h2",{style:{textDecoration:"underline"},children:"Some Great Movie Options"}),this.props.movies.map((function(e){return Object(o.jsx)("li",{children:e.Title})}))]})})})]})]})})}}]),n}(s.Component),V="https://mernmovies.herokuapp.com",Q=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).componentDidMount=function(){e.fetchMovies()},e.state={dropdownSelection:"",formInput:"",movies:[]},e}return Object(p.a)(n,[{key:"fetchMovies",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("search"),e.next=3,L.a.get("".concat(V,"/api/movies"));case 3:t=e.sent,console.log("fetching movies",t.data.data),this.setState({movies:t.data.data});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(o.jsxs)(b.a,{fluid:!0,style:{padding:0},children:[Object(o.jsx)(m.a,{style:{height:"25%"},children:Object(o.jsx)(x.a,{children:Object(o.jsx)(I,{dropdownSelection:this.setDropdown,sendInput:this.setFormSelection})})}),Object(o.jsx)(m.a,{children:Object(o.jsxs)(x.a,{style:{height:"95%",overflow:"scroll"},children:[Object(o.jsx)(C.a,{path:"/",render:function(){return Object(o.jsx)(D,{url:V})},exact:!0}),Object(o.jsx)(C.a,{path:"./controllers/auth",render:function(){return Object(o.jsx)(S,{method:"POST"})}}),Object(o.jsx)(C.a,{path:"/movies",render:function(){return Object(o.jsx)(M,{movies:e.state.movies})},exact:!0}),Object(o.jsx)(C.a,{path:"/collections",render:function(){return Object(o.jsx)(q,{method:"POST"})}}),Object(o.jsx)(C.a,{path:"/collections/:slug",render:function(){return Object(o.jsx)(q,{method:"PATCH"})}}),Object(o.jsx)(C.a,{path:"/collections/:slug",render:function(){return Object(o.jsx)(q,{method:"DELETE"})}}),Object(o.jsx)(C.a,{path:"/reviews/",render:function(){return Object(o.jsx)(R,{method:"POST"})}}),Object(o.jsx)(C.a,{path:"/reviews/:id",render:function(){return Object(o.jsx)(R,{method:"PATCH"})}}),Object(o.jsx)(C.a,{path:"/reviews/:id",render:function(){return Object(o.jsx)(R,{method:"DELETE"})}})]})})]})}}]),n}(s.Component),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),s(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(c.a,{children:Object(o.jsx)(Q,{})}),document.getElementById("root")),z()}},[[90,1,2]]]);
//# sourceMappingURL=main.0bc59aac.chunk.js.map