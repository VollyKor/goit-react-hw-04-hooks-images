(this["webpackJsonpreact-basic-files"]=this["webpackJsonpreact-basic-files"]||[]).push([[0],{11:function(t,e,a){t.exports={title:"Idle_title___90HJ",img:"Idle_img__10w3f"}},12:function(t,e,a){t.exports={title:"Pending_title__wtAiX",icon:"Pending_icon__22fOC",spinner:"Pending_spinner__2ysCS"}},13:function(t,e,a){t.exports={list:"Resolved_list__PN7TR",loader:"Resolved_loader__f2JMk"}},14:function(t,e,a){t.exports={backdrop:"Modal_backdrop__1-gSB",content:"Modal_content__2Vj52"}},15:function(t,e,a){t.exports={img:"ListItem_img__2pB1n",item:"ListItem_item__2Vtby"}},24:function(t,e,a){t.exports={btn:"LoadMoreBtn_btn__5seDZ"}},25:function(t,e,a){t.exports={img:"ModalImg_img__T5gMC"}},26:function(t,e,a){t.exports={img:"EmptyList_img__3BVPA"}},33:function(t,e,a){},35:function(t,e,a){},54:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),r=a(8),i=a.n(r),c=(a(33),a(3)),o=a(4),l=a(6),u=a(5),d=(a(34),a(35),a(27)),h=a(7),p=a.n(h),m=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={searchQuery:"",submitQuery:""},t.handleSubmit=function(e){var a=t.state,n=a.searchQuery,s=a.submitQuery,r=t.props,i=r.setQuery,c=r.setStatus,o=r.status;e.preventDefault(),"pending"!==o()&&n!==s&&(t.setState({submitQuery:t.state.searchQuery}),i(n),c("pending"))},t}return Object(o.a)(a,[{key:"handleChange",value:function(t){this.setState({searchQuery:t.target.value})}},{key:"render",value:function(){var t=this;return Object(n.jsx)("header",{className:"container ".concat(p.a.header),children:Object(n.jsx)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:Object(n.jsxs)("label",{className:p.a.label,children:[Object(n.jsx)("button",{className:p.a.button,type:"submit",children:Object(n.jsx)(d.a,{"aria-label":"Search Icom",className:p.a.icon})}),Object(n.jsx)("input",{type:"text",className:p.a.input,onChange:function(e){return t.handleChange(e)},placeholder:"Search images and photos"})]})})})}}]),a}(s.Component),j=a(9),g=a(36),b={apiKey:"18765895-18a10ce9a19270e66dddd4391",page:1,getImgs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",a="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(t,"&page=").concat(e,"&per_page=12&key=").concat(this.apiKey);return g.get(a).then((function(t){return t})).catch((function(t){throw t}))},reset:function(){this.page=1},pageIncrement:function(){return this.page+=1},getNextPageImgs:function(t){return this.pageIncrement(),this.getImgs(t,this.page)}},f=a(11),v=a.n(f),O=a.p+"static/media/emptyList.c08a4850.png";function _(){return Object(n.jsxs)("div",{className:"wrapper relative",children:[Object(n.jsx)("h1",{className:v.a.title,children:"Input some Query for search Img"}),Object(n.jsx)("img",{className:v.a.img,src:O,alt:"empty list"})]})}var y=a.p+"static/media/logo.6ce24c58.svg",x=a(12),w=a.n(x);function S(){return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("h2",{className:w.a.title,children:"Loading..."}),Object(n.jsx)("img",{className:w.a.icon,src:y,alt:"react icon",width:"300px",height:"300px"})]})}var k=a(13),N=a.n(k),C=a(24),I=a.n(C),L=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,e=t.handleClick,a=t.isLoading;return this.props.isLoading,Object(n.jsxs)("button",{className:I.a.btn,type:"button",onClick:e,children:[a&&"...Loading",!a&&"Load More"]})}}]),a}(s.Component);function M(){window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})}var D=a(14),Q=a.n(D),q=document.querySelector("#modal-root"),A=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).handleEscape=function(e){console.log("this.props ",t.props),"Escape"===e.code&&t.props.onClose()},t.handleClick=function(e){e.target===e.currentTarget&&t.props.onClose()},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscape)}},{key:"render",value:function(){return Object(r.createPortal)(Object(n.jsx)("div",{className:Q.a.backdrop,onClick:this.handleClick,children:Object(n.jsx)("div",{className:Q.a.content,children:this.props.children})}),q)}}]),a}(s.Component),E=a(15),R=a.n(E);function P(t){var e=t.id,a=t.webformatURL,s=t.tags,r=t.onClick;return Object(n.jsx)("li",{className:R.a.item,onClick:function(){return r(e)},children:Object(n.jsx)("img",{className:R.a.img,"data-id":e,src:a,alt:s,width:"180px",height:"150px"})})}var F=a(25),U=a.n(F);function B(t){var e=t.imgObj,a=e.id,s=e.largeImageURL,r=e.tags;return Object(n.jsx)("img",{className:U.a.img,id:a,src:s,alt:r})}var T=a.p+"static/media/empty_result.2521e52d.webp",V=a(26),J=a.n(V);function Z(){return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)("img",{className:J.a.img,src:T,alt:"emptyResult",width:"600px"})})}var G=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={isLoading:!1,showModal:!1,modalImg:{}},t.handleClick=function(){var e=t.props,a=e.query,n=e.addData;t.setState({isLoading:!0}),b.getNextPageImgs(a).then((function(t){var e=t.data.hits;n(e),M()})).catch((function(t){return console.log(t)})).finally((function(){t.setState({isLoading:!1})}))},t.showModal=function(){t.setState({showModal:!0})},t.hideModal=function(){t.setState({showModal:!1})},t.handleImgCLick=function(e){t.setModalImg(e),t.showModal()},t.setModalImg=function(e){var a=t.props.getData().find((function(t){return t.id===e}));t.setState({modalImg:a})},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.props.getData(),a=this.state,s=a.isLoading,r=a.showModal;return 0===e.length?Object(n.jsx)(Z,{}):e.length>0?Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("ul",{className:N.a.list,children:e.map((function(e){var a=e.webformatURL,s=e.id,r=e.tags;return Object(n.jsx)(P,{webformatURL:a,id:s,tags:r,onClick:t.handleImgCLick},s)}))}),Object(n.jsx)(L,{isLoading:s,handleClick:this.handleClick}),r&&Object(n.jsxs)(A,{onClose:this.hideModal,children:[Object(n.jsx)("p",{className:N.a.loader,children:"Downloading..."}),Object(n.jsx)(B,{imgObj:this.state.modalImg,hideModal:this.hideModal})]})]}):void 0}}]),a}(s.Component);function H(){return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)("h2",{children:"Rejected"})})}var K=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={data:[],message:""},t.addData=function(e){t.setState((function(t){return{data:[].concat(Object(j.a)(t.data),Object(j.a)(e))}}))},t.getData=function(){return t.state.data},t}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){var t=this;if("pending"===this.props.status){var e=this.props,a=e.query,n=e.setStatus;b.reset(),b.getImgs(a).then((function(e){if(200===e.status)return n("resolved"),void t.setState({data:Object(j.a)(e.data.hits)});n("rejected")}))}}},{key:"render",value:function(){var t=this.state.message,e=this.props,a=e.status,s=e.query;return"idle"===a?Object(n.jsx)(_,{}):"pending"===a?Object(n.jsx)(S,{}):"resolved"===a?Object(n.jsx)(G,{getData:this.getData,addData:this.addData,query:s}):"rejected"===a?Object(n.jsx)(H,{message:t}):void 0}}]),a}(s.Component),z=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={query:"",status:"idle"},t.setQuery=function(e){t.setState({query:e})},t.currentStatus=function(){return t.state.status},t.setStatus=function(e){t.setState({status:e})},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state.query;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{setQuery:this.setQuery,status:this.currentStatus,setStatus:this.setStatus}),Object(n.jsx)("main",{className:"container",children:Object(n.jsx)(K,{status:this.currentStatus(),setStatus:this.setStatus,query:t})})]})}}]),a}(s.Component);i.a.render(Object(n.jsx)(z,{}),document.getElementById("root"))},7:function(t,e,a){t.exports={header:"SearchForm_header__3smVZ",form:"SearchForm_form__1Vx46",label:"SearchForm_label__1Gld1",icon:"SearchForm_icon__TdZNl",input:"SearchForm_input__1q4AA",button:"SearchForm_button__1-rG2"}}},[[54,1,2]]]);
//# sourceMappingURL=main.642c5389.chunk.js.map