(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{18:function(e,s,t){},21:function(e,s,t){},32:function(e,s,t){"use strict";t.r(s);var a=t(2),c=t(11),r=t.n(c),i=(t(18),t(9)),n=t(12),l=t.n(n),o=(t(21),t(13)),d=t(4),j=t.n(d),h=t(1);class m extends a.Component{render(){if(!this.props.data)return null;const e=this.props.data.linkedin,s=this.props.data.github,t=this.props.data.name,a=this.props.data.description;return Object(h.jsxs)("header",{id:"home",children:[Object(h.jsx)(o.a,{color:"#ffffff",type:"cobweb",bg:!0}),Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsx)(j.a,{bottom:!0,children:Object(h.jsx)("h1",{className:"responsive-headline",children:t})}),Object(h.jsx)(j.a,{bottom:!0,duration:1200,children:Object(h.jsxs)("h3",{children:[a,"."]})}),Object(h.jsx)("hr",{}),Object(h.jsx)(j.a,{bottom:!0,duration:2e3,children:Object(h.jsxs)("ul",{className:"social",children:[Object(h.jsxs)("a",{href:e,rel:"noreferrer",target:"_blank",className:"button btn project-btn",children:[Object(h.jsx)("i",{className:"fa fa-linkedin-square"}),"LinkedIn"]}),Object(h.jsxs)("a",{href:s,rel:"noreferrer",target:"_blank",className:"button btn github-btn",children:[Object(h.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})}}var b=m;class x extends a.Component{render(){if(!this.props.data)return null;const e=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(j.a,{bottom:!0,children:Object(h.jsx)("div",{className:"twelve columns",children:Object(h.jsx)("ul",{className:"social-links",children:e})})}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})}}var p=x;class O extends a.Component{render(){if(!this.props.data)return null;const e=this.props.data.name,s="images/"+this.props.data.image,t=Object(h.jsxs)("p",{children:["Hi! I am a fourth year undergraduate student at the University of Toronto, and I am completing a double major in ",Object(h.jsx)("em",{children:"computer science"})," and ",Object(h.jsx)("em",{children:"astronomy and astrophysics"})," as well as a minor in ",Object(h.jsx)("em",{children:"mathematics"}),". Currently I work for Super (previously Snapcommerce), a commerce company dedicated to cater towards those left behind by credit companies. Outside of my studies, I enjoy learning about the intricacies of our Universe and staying physically active by playing various sports with friends."]}),a=this.props.data.address.city,c=this.props.data.address.province,r=this.props.data.phone,i=this.props.data.email;return Object(h.jsx)("section",{id:"about",children:Object(h.jsx)(j.a,{duration:1e3,children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:s,alt:"Profile Pic"})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsx)("p",{children:t}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Contact Details"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[a,", ",c]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:r}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:i})]})]}),Object(h.jsx)("div",{className:"columns download",children:Object(h.jsx)("p",{children:Object(h.jsxs)("a",{href:"Resume.pdf",target:"_blank",className:"button",children:[Object(h.jsx)("i",{className:"fa fa-book"}),"Resume"]})})})]})]})]})})})}}var u=O;class f extends a.Component{getRandomColor(){let e="#";for(let s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}render(){if(!this.props.data)return null;const e=this.props.data.education.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.school}),Object(h.jsxs)("p",{className:"info",children:[e.degree," ",Object(h.jsx)("span",{children:"\u2022"}),Object(h.jsx)("em",{className:"date",children:e.graduated})]}),Object(h.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:Object(h.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",color:"#000000",children:Object(h.jsx)("u",{children:e.company})})}),Object(h.jsxs)("p",{className:"info",children:[e.title,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsx)("em",{className:"date",children:e.years})]}),Object(h.jsx)("p",{children:e.description}),Object(h.jsx)("p",{children:Object(h.jsxs)("a",{href:"Geopogo"===e.company?"Geopogo_reference_letter.pdf":"Super_Reference_Letter.pdf",target:"_blank",rel:"noreferrer",className:"button",children:[Object(h.jsx)("i",{className:"fa fa-book"}),"Letter of Recommendation"]})})]},e.company)})),t=this.props.data.skills.map((e=>{const s=this.getRandomColor(),t="bar-expand "+e.name.toLowerCase(),a=e.level;return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{style:{width:a,backgroundColor:s},className:t}),Object(h.jsx)("em",{children:e.name})]},e.name)}));return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsx)(j.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsx)("div",{className:"row item",children:Object(h.jsx)("div",{className:"twelve columns",children:e})})})]})}),Object(h.jsx)(j.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Work"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:s})]})}),Object(h.jsx)(j.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row skill",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Skills"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsx)("div",{className:"bars",children:Object(h.jsx)("ul",{className:"skills",children:t})})})]})})]})}}var v=f;class g extends a.Component{render(){if(!this.props.data)return null;this.props.data.name,this.props.data.address.city,this.props.data.phone;return Object(h.jsxs)("section",{id:"contact",children:[Object(h.jsx)(d.Fade,{bottom:!0,duration:1e3,children:Object(h.jsxs)("div",{className:"row section-head",children:[Object(h.jsx)("div",{className:"two columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Get In Touch."})})}),Object(h.jsx)("div",{className:"ten columns",children:Object(h.jsxs)("p",{className:"lead",children:["Please feel free to contact me through ",Object(h.jsx)("a",{href:"https://www.linkedin.com/in/williamjarviscross-1378361b6/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})," or email at ",Object(h.jsx)("a",{href:"mailto:wjarviscross@gmail.com",children:"wjarviscross@gmail.com"})]})})]})}),!1]})}}var N=g;let w=0;class k extends a.Component{constructor(e){super(e),this.state={isOpen:!1,currImg:0}}render(){if(!this.props.data)return null;const e=this.props.data.projects;return console.log(e[this.state.currImg].image),Object(h.jsxs)("section",{id:"portfolio",children:[this.state.isOpen&&Object(h.jsxs)("div",{className:"popup-modal",onClick:()=>{this.setState({isOpen:!1,currImg:0})},children:[Object(h.jsx)("i",{className:"fa fa-4x pull-right close fa-times"}),Object(h.jsxs)("div",{class:"box-layout",children:[Object(h.jsx)("div",{class:"dimension-label","aria-live":"polite","aria-label":"Current box width",children:Object(h.jsx)("span",{"data-element":"width-label"})}),Object(h.jsx)("div",{}),Object(h.jsxs)("figure",{class:"box-demo box","data-element":"parent-box",children:[0===this.state.currImg?Object(h.jsx)("iframe",{class:"youtubeLink",src:"https://www.youtube.com/embed/m7pxE1DswGo",title:"Pokemon Game Demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):Object(h.jsx)("img",{src:"./images/portfolio/"+e[this.state.currImg].image,alt:e[this.state.currImg].title}),Object(h.jsx)("figcaption",{contenteditable:!0,children:e[this.state.currImg].description}),Object(h.jsxs)("a",{href:e[this.state.currImg].github,rel:"noreferrer",target:"_blank",children:[Object(h.jsx)("i",{className:"fa fa-3x fa-github"})," Check it out!"]})]}),Object(h.jsx)("div",{class:"dimension-label","aria-live":"polite","aria-label":"Current box height","data-orientation":"vertical",children:Object(h.jsx)("span",{"data-element":"height-label"})})]})]}),Object(h.jsx)(j.a,{left:!0,duration:1e3,distance:"40px",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check Out Some of My Favourite Projects."}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-thirds cf",children:e.map(((e,s)=>Object(h.jsx)("div",{className:"columns portfolio-item",children:Object(h.jsxs)("div",{className:"item-wrap",children:[Object(h.jsx)("img",{src:"./images/portfolio/"+e.image,alt:e.title,onClick:()=>{window.screen.width>=1280&&this.setState({isOpen:!0,currImg:s})}}),Object(h.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},w++)))})]})})})]})}}var y=k;class C extends a.Component{constructor(e){super(e),this.state={foo:"bar",resumeData:{}},i.a.initialize("UA-110570651-1"),i.a.pageview(window.location.pathname)}getResumeData(){l.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}componentDidMount(){this.getResumeData()}render(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{data:this.state.resumeData.main}),Object(h.jsx)(u,{data:this.state.resumeData.main}),Object(h.jsx)(v,{data:this.state.resumeData.resume}),Object(h.jsx)(y,{data:this.state.resumeData.portfolio}),Object(h.jsx)(N,{data:this.state.resumeData.main}),Object(h.jsx)(p,{data:this.state.resumeData.main})]})}}var I=C;var D=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((s=>{let{getCLS:t,getFID:a,getFCP:c,getLCP:r,getTTFB:i}=s;t(e),a(e),c(e),r(e),i(e)}))};r.a.render(Object(h.jsx)(I,{}),document.getElementById("root")),D()}},[[32,1,2]]]);
//# sourceMappingURL=main.03f1ac5c.chunk.js.map