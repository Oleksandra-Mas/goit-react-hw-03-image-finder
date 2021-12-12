(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__31G8C",SearchForm:"Searchbar_SearchForm__OdM8t","SearchForm-button":"Searchbar_SearchForm-button__QGIvw","SearchForm-button-label":"Searchbar_SearchForm-button-label__2NNDJ","SearchForm-input":"Searchbar_SearchForm-input__2iUeC"}},16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__35HIJ","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__18fl-"}},17:function(e,t,a){e.exports={Overlay:"Modal_Overlay__10GDr",Modal:"Modal_Modal__2tpad"}},28:function(e,t,a){e.exports={Loader:"Loader_Loader__1EHfq"}},29:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__31Dnf"}},31:function(e,t,a){e.exports={Button:"Button_Button__1AC3N"}},36:function(e,t,a){},38:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),s=(a(36),a(3)),i=a(4),l=a(7),u=a(6),h=a(8),p=(a(37),a(38),a(10)),m=a.n(p),b=a(18),g=a(14),d=a(27),f=a.n(d),j=a(28),v=a.n(j),y=a(1),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(y.jsx)(f.a,{className:v.a.Loader,type:"BallTriangle",color:"#3f51b5",height:100,width:100,timeout:1e4})}}]),a}(n.Component),S=a(16),x=a.n(S),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleImageClick=function(t){var a=t.target,n=a.dataset,r=a.alt;e.props.toggleModal({url:n.value,alt:r})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.webImage,a=e.largeImage,n=e.tags;return Object(y.jsx)("li",{className:x.a.ImageGalleryItem,onClick:this.handleImageClick,children:Object(y.jsx)("img",{className:x.a["ImageGalleryItem-image"],src:t,alt:n,"data-value":a})})}}]),a}(n.Component),w=a(29),_=a.n(w),I=a(30),C=a.n(I),M=function(){function e(){Object(s.a)(this,e),this.searchQuery="",this.page=1}return Object(i.a)(e,[{key:"searchPhoto",value:function(){var e=Object(g.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://pixabay.com/api","/?q=").concat(this.searchQuery,"&page=").concat(this.page,"&key=").concat("23883543-c0e8a740f16e18e27aeb57e6b","&image_type=photo&orientation=horizontal&per_page=12"),e.next=3,C.a.get(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"setPage",value:function(e){this.page=e}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),e}(),N=a(31),F=a.n(N);var G=function(e){var t=e.onClick;return Object(y.jsx)("button",{type:"button",className:F.a.Button,onClick:t,children:"Load more"})},L=new M,B="idle",P="pending",D="resolved",A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={status:B,page:1},e.onClick=function(){L.incrementPage(),e.setState({page:L.page})},e.smoothScroll=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight,behavior:"smooth"})}),1e3)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(g.a)(m.a.mark((function e(t,a){var n,r,o,c,s,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.filter,r=t.filter,o=this.state.page,c=a.page,r===n){e.next=15;break}return this.setState({status:P}),L.searchQuery=n,L.resetPage(),e.next=10,L.searchPhoto();case 10:if(0!==(s=e.sent).total){e.next=14;break}return this.setState({status:B}),e.abrupt("return",h.b.warning("Nothing found"));case 14:this.setState({photos:s.hits,status:D});case 15:if(o===c||r!==n){e.next=25;break}return this.setState({status:P}),this.smoothScroll(),e.next=20,L.searchPhoto();case 20:if(0!==(i=e.sent).total){e.next=24;break}return this.setState({status:B}),e.abrupt("return",h.b.warning("Nothing else found"));case 24:this.setState({photos:[].concat(Object(b.a)(a.photos),Object(b.a)(i.hits)),status:D});case 25:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.photos,a=e.status,n=e.page,r=this.props.toggleModal;return a===B?null:a===P&&1!==n||a===D?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e,t){e.id;var a=e.largeImageURL,n=e.webformatURL,o=e.tags;return Object(y.jsx)(k,{webImage:n,largeImage:a,tags:o,toggleModal:r},t)}))}),a===D?Object(y.jsx)(G,{onClick:this.onClick}):Object(y.jsx)(O,{})]}):a===P?Object(y.jsx)(O,{}):void 0}}]),a}(n.Component),E=a(17),Q=a.n(E),U=document.querySelector("#modal-root"),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose(null)},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose(null)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.searchImage,t=e.url,a=e.alt;return Object(o.createPortal)(Object(y.jsx)("div",{className:Q.a.Overlay,onClick:this.handleBackdropClick,children:Object(y.jsx)("div",{className:Q.a.Modal,children:Object(y.jsx)("img",{src:t,alt:a})})}),U)}}]),a}(n.Component),H=a(11),J=a.n(H),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={filter:""},e.handleInputChange=function(t){var a=t.target.value.toLowerCase();e.setState({filter:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.filter;if(""===a.trim())return h.b.error("Empty input");e.props.onSubmit(a),e.setState({filter:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.filter;return Object(y.jsx)("header",{className:J.a.Searchbar,children:Object(y.jsxs)("form",{onSubmit:this.handleSubmit,className:J.a.SearchForm,children:[Object(y.jsx)("button",{type:"submit",className:J.a["SearchForm-button"],children:Object(y.jsx)("span",{className:J.a["SearchForm-button-label"],children:"Search"})}),Object(y.jsx)("input",{className:J.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleInputChange})]})})}}]),a}(n.Component),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={filter:"",showModal:!1,searchImage:null},e.handleSubmit=function(t){e.setState({filter:t})},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,searchImage:t}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.filter,a=e.showModal,n=e.searchImage;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(T,{onSubmit:this.handleSubmit}),Object(y.jsx)(A,{toggleModal:this.toggleModal,filter:t}),Object(y.jsx)(h.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),a&&Object(y.jsx)(q,{searchImage:n,onClose:this.toggleModal})]})}}]),a}(n.Component);c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(K,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.6b189abf.chunk.js.map